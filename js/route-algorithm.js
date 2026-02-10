/* ═══════════════════════════════════════════
   일렉트맵AI — route-algorithm.js
   차량 경로 최적화 알고리즘 모듈
   ═══════════════════════════════════════════ */

/**
 * Haversine 공식으로 두 좌표 사이의 거리를 계산한다.
 * @param {number} lat1 - 지점1 위도
 * @param {number} lng1 - 지점1 경도
 * @param {number} lat2 - 지점2 위도
 * @param {number} lng2 - 지점2 경도
 * @returns {number} 거리 (km)
 */
function haversineDistance(lat1, lng1, lat2, lng2) {
  var R = 6371; // 지구 반지름 (km)
  var dLat = (lat2 - lat1) * Math.PI / 180;
  var dLng = (lng2 - lng1) * Math.PI / 180;
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
          Math.sin(dLng / 2) * Math.sin(dLng / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * 거점 배열로부터 거리 행렬을 구축한다.
 * @param {Array} spots - [{lat, lng, ...}, ...] 거점 배열
 * @returns {Array<Array<number>>} 2차원 거리 행렬 (km)
 */
function buildDistanceMatrix(spots) {
  var n = spots.length;
  var matrix = [];
  for (var i = 0; i < n; i++) {
    matrix[i] = [];
    for (var j = 0; j < n; j++) {
      if (i === j) {
        matrix[i][j] = 0;
      } else if (j < i && matrix[j]) {
        // 대칭 행렬 활용
        matrix[i][j] = matrix[j][i];
      } else {
        matrix[i][j] = haversineDistance(spots[i].lat, spots[i].lng, spots[j].lat, spots[j].lng);
      }
    }
  }
  return matrix;
}

/**
 * 최근접 이웃 휴리스틱으로 TSP를 푼다.
 * @param {Array<Array<number>>} distMatrix - 거리 행렬
 * @param {number} startIndex - 시작 노드 인덱스
 * @returns {Array<number>} 방문 순서 인덱스 배열
 */
function nearestNeighborTSP(distMatrix, startIndex) {
  var n = distMatrix.length;
  var visited = new Array(n).fill(false);
  var route = [startIndex];
  visited[startIndex] = true;
  var current = startIndex;

  for (var step = 1; step < n; step++) {
    var bestDist = Infinity;
    var bestNext = -1;

    for (var j = 0; j < n; j++) {
      if (!visited[j] && distMatrix[current][j] < bestDist) {
        bestDist = distMatrix[current][j];
        bestNext = j;
      }
    }

    if (bestNext === -1) break;
    route.push(bestNext);
    visited[bestNext] = true;
    current = bestNext;
  }

  return route;
}

/**
 * 2-opt 지역 탐색으로 경로를 개선한다.
 * @param {Array<number>} route - 현재 경로 (인덱스 배열)
 * @param {Array<Array<number>>} distMatrix - 거리 행렬
 * @param {number} [maxIterations=100] - 최대 반복 횟수
 * @returns {Array<number>} 개선된 경로
 */
function twoOptImprove(route, distMatrix, maxIterations) {
  maxIterations = maxIterations || 100;
  var bestRoute = route.slice();
  var improved = true;
  var iteration = 0;

  while (improved && iteration < maxIterations) {
    improved = false;
    iteration++;

    for (var i = 1; i < bestRoute.length - 1; i++) {
      for (var j = i + 1; j < bestRoute.length; j++) {
        // 현재 간선 비용
        var d1 = distMatrix[bestRoute[i - 1]][bestRoute[i]] +
                 distMatrix[bestRoute[j]][bestRoute[(j + 1) % bestRoute.length] || bestRoute[j]];
        // 2-opt 교환 후 간선 비용
        var d2 = distMatrix[bestRoute[i - 1]][bestRoute[j]] +
                 distMatrix[bestRoute[i]][bestRoute[(j + 1) % bestRoute.length] || bestRoute[j]];

        // j+1이 범위를 벗어나지 않도록 처리
        if (j + 1 < bestRoute.length) {
          d1 = distMatrix[bestRoute[i - 1]][bestRoute[i]] +
               distMatrix[bestRoute[j]][bestRoute[j + 1]];
          d2 = distMatrix[bestRoute[i - 1]][bestRoute[j]] +
               distMatrix[bestRoute[i]][bestRoute[j + 1]];
        } else {
          d1 = distMatrix[bestRoute[i - 1]][bestRoute[i]];
          d2 = distMatrix[bestRoute[i - 1]][bestRoute[j]];
        }

        if (d2 < d1) {
          // i부터 j까지 구간 뒤집기
          var reversed = bestRoute.slice(i, j + 1).reverse();
          for (var k = 0; k < reversed.length; k++) {
            bestRoute[i + k] = reversed[k];
          }
          improved = true;
        }
      }
    }
  }

  return bestRoute;
}

/**
 * 경로의 총 거리를 계산한다.
 * @param {Array<number>} route - 경로 인덱스 배열
 * @param {Array<Array<number>>} distMatrix - 거리 행렬
 * @returns {number} 총 거리 (km)
 */
function routeDistance(route, distMatrix) {
  var total = 0;
  for (var i = 0; i < route.length - 1; i++) {
    total += distMatrix[route[i]][route[i + 1]];
  }
  return total;
}

/**
 * 간단한 k-means 알고리즘으로 거점을 지리적으로 클러스터링한다.
 * @param {Array} spots - [{lat, lng, ...}, ...] 거점 배열
 * @param {number} k - 클러스터 수
 * @param {number} [maxIter=50] - 최대 반복 횟수
 * @returns {Array} [{centroid: {lat, lng}, spotIndices: [...]}, ...]
 */
function geoKMeans(spots, k, maxIter) {
  maxIter = maxIter || 50;

  if (spots.length <= k) {
    // 거점 수가 k 이하이면 각각 별도 클러스터
    return spots.map(function(spot, idx) {
      return {
        centroid: { lat: spot.lat, lng: spot.lng },
        spotIndices: [idx]
      };
    });
  }

  // 초기 중심점: 거점에서 균등 간격 선택
  var centroids = [];
  var step = Math.floor(spots.length / k);
  for (var c = 0; c < k; c++) {
    var idx = Math.min(c * step, spots.length - 1);
    centroids.push({ lat: spots[idx].lat, lng: spots[idx].lng });
  }

  var assignments = new Array(spots.length).fill(0);

  for (var iter = 0; iter < maxIter; iter++) {
    var changed = false;

    // 할당 단계: 각 거점을 가장 가까운 중심점에 배정
    for (var i = 0; i < spots.length; i++) {
      var bestCluster = 0;
      var bestDist = Infinity;
      for (var j = 0; j < k; j++) {
        var dist = haversineDistance(spots[i].lat, spots[i].lng, centroids[j].lat, centroids[j].lng);
        if (dist < bestDist) {
          bestDist = dist;
          bestCluster = j;
        }
      }
      if (assignments[i] !== bestCluster) {
        assignments[i] = bestCluster;
        changed = true;
      }
    }

    if (!changed) break;

    // 갱신 단계: 각 클러스터의 새 중심점 계산
    for (var j = 0; j < k; j++) {
      var sumLat = 0, sumLng = 0, count = 0;
      for (var i = 0; i < spots.length; i++) {
        if (assignments[i] === j) {
          sumLat += spots[i].lat;
          sumLng += spots[i].lng;
          count++;
        }
      }
      if (count > 0) {
        centroids[j] = { lat: sumLat / count, lng: sumLng / count };
      }
    }
  }

  // 결과 조립
  var clusters = [];
  for (var j = 0; j < k; j++) {
    var indices = [];
    for (var i = 0; i < spots.length; i++) {
      if (assignments[i] === j) {
        indices.push(i);
      }
    }
    clusters.push({
      centroid: centroids[j],
      spotIndices: indices
    });
  }

  // 빈 클러스터가 있으면 가장 큰 클러스터에서 하나 이동
  for (var j = 0; j < clusters.length; j++) {
    if (clusters[j].spotIndices.length === 0) {
      var largestIdx = 0;
      var largestSize = 0;
      for (var m = 0; m < clusters.length; m++) {
        if (clusters[m].spotIndices.length > largestSize) {
          largestSize = clusters[m].spotIndices.length;
          largestIdx = m;
        }
      }
      if (clusters[largestIdx].spotIndices.length > 1) {
        var moved = clusters[largestIdx].spotIndices.pop();
        clusters[j].spotIndices.push(moved);
        clusters[j].centroid = {
          lat: spots[moved].lat,
          lng: spots[moved].lng
        };
      }
    }
  }

  return clusters;
}

/**
 * 차량 경로 계획 (VRP): cluster-first, route-second 방식
 * @param {Array} spots - [{id, name, lat, lng, voterReach, dailyCost, ...}, ...]
 * @param {number} numVehicles - 차량 수 (1~5)
 * @param {Object} startPoint - {lat, lng, name} 출발점
 * @returns {Array} [{vehicleId, route, spots, totalDistance, estimatedTime, estimatedCost}, ...]
 */
function vehicleRoutePlan(spots, numVehicles, startPoint) {
  if (!spots || spots.length === 0) return [];
  if (numVehicles < 1) numVehicles = 1;
  if (numVehicles > spots.length) numVehicles = Math.min(numVehicles, spots.length);

  // 1. 클러스터링
  var clusters = geoKMeans(spots, numVehicles, 50);

  // 2. 각 클러스터별 TSP 풀기
  var vehicleColors = ['blue', 'red', 'green', 'orange', 'purple'];
  var results = [];

  for (var v = 0; v < clusters.length; v++) {
    var clusterIndices = clusters[v].spotIndices;
    if (clusterIndices.length === 0) continue;

    // 클러스터에 속한 거점 추출
    var clusterSpots = clusterIndices.map(function(idx) { return spots[idx]; });

    // 출발점을 포함하여 거리 행렬 생성
    // allPoints[0] = 출발점, allPoints[1..n] = 클러스터 거점들
    var allPoints = [startPoint].concat(clusterSpots);
    var distMatrix = buildDistanceMatrix(allPoints);

    // TSP: 시작 인덱스 = 0 (출발점)
    var tspRoute = nearestNeighborTSP(distMatrix, 0);

    // 2-opt 개선
    tspRoute = twoOptImprove(tspRoute, distMatrix, 100);

    // 출발점으로 돌아오기 (마지막에 0 추가, 이미 있으면 생략)
    if (tspRoute[tspRoute.length - 1] !== 0) {
      tspRoute.push(0);
    }

    // 총 거리 계산
    var totalDist = routeDistance(tspRoute, distMatrix);

    // 도로 보정 계수 적용 (직선 거리 x 1.4)
    var roadDistance = totalDist * 1.4;

    // 시간 추정: 시내 평균 30km/h
    var estimatedTimeHours = roadDistance / 30;

    // 비용 추정
    // 유류비: km당 533원 (연비 10km/L, 경유 1600원/L 기준에 도로보정)
    // 거점당 추가비용: 각 거점의 dailyCost 비율분 (운행시간비례 추정)
    var fuelCost = Math.round(roadDistance * 533);
    var spotCostSum = 0;
    for (var s = 0; s < clusterSpots.length; s++) {
      spotCostSum += (clusterSpots[s].dailyCost || 100000);
    }
    // 차량 기본 운영비 (대여+기사+장비 등) 일일 기준에서 시간 비례
    var baseDailyCost = 250000 + 150000 + 50000 + 30000; // 48만원/일
    var operatingHours = Math.min(estimatedTimeHours + clusterSpots.length * 0.25, 12); // 유세 시간 포함
    var operatingCost = Math.round(baseDailyCost * (operatingHours / 10));
    var estimatedCost = fuelCost + operatingCost;

    // 경로 내 거점 인덱스를 원본 spots 인덱스로 변환
    var routeSpotIndices = [];
    var routeSpots = [];
    for (var r = 0; r < tspRoute.length; r++) {
      if (tspRoute[r] === 0) {
        // 출발점
        routeSpotIndices.push(-1); // -1은 출발점
        routeSpots.push(startPoint);
      } else {
        var localIdx = tspRoute[r] - 1; // allPoints에서 1을 빼면 clusterSpots 인덱스
        routeSpotIndices.push(clusterIndices[localIdx]);
        routeSpots.push(clusterSpots[localIdx]);
      }
    }

    results.push({
      vehicleId: v + 1,
      color: vehicleColors[v % vehicleColors.length],
      route: routeSpotIndices,
      routeLocalOrder: tspRoute,
      spots: routeSpots,
      clusterSpots: clusterSpots,
      totalDistance: Math.round(roadDistance * 100) / 100,
      estimatedTime: Math.round(estimatedTimeHours * 60), // 분 단위
      estimatedCost: estimatedCost,
      distMatrix: distMatrix
    });
  }

  return results;
}

/**
 * 각 정거장별 도착/출발 시간을 추정한다.
 * @param {Array<number>} routeOrder - 경로 순서 (로컬 인덱스)
 * @param {Array} spots - 경로 내 전체 포인트 배열 (allPoints: 출발점 + 클러스터거점)
 * @param {string} startTime - 시작 시간 "HH:MM" 형식
 * @param {Array<Array<number>>} distMatrix - 거리 행렬
 * @returns {Array} [{spot, arrivalTime, departureTime, travelTimeToNext, distanceToNext}, ...]
 */
function estimateSchedule(routeOrder, spots, startTime, distMatrix) {
  var schedule = [];
  var parts = startTime.split(':');
  var currentMinutes = parseInt(parts[0]) * 60 + parseInt(parts[1]);

  for (var i = 0; i < routeOrder.length; i++) {
    var spotIdx = routeOrder[i];
    var spot = spots[spotIdx];
    var isStart = (spotIdx === 0); // 0은 출발점
    var isEnd = (i === routeOrder.length - 1 && spotIdx === 0);

    // 도착 시간
    var arrivalTime = minutesToTimeStr(currentMinutes);

    // 유세 시간: 거점당 15분, 출발점/도착점은 0분
    var stayMinutes = (isStart || isEnd) ? 0 : 15;
    var departureTime = minutesToTimeStr(currentMinutes + stayMinutes);

    // 다음 구간 이동 시간
    var travelTimeToNext = 0;
    var distanceToNext = 0;
    if (i < routeOrder.length - 1) {
      var nextIdx = routeOrder[i + 1];
      var rawDist = distMatrix[spotIdx][nextIdx];
      distanceToNext = Math.round(rawDist * 1.4 * 100) / 100; // 도로 보정
      travelTimeToNext = Math.round((distanceToNext / 30) * 60); // 분 단위 (30km/h)
      if (travelTimeToNext < 1) travelTimeToNext = 1; // 최소 1분
    }

    schedule.push({
      spot: spot,
      spotIndex: spotIdx,
      order: i + 1,
      arrivalTime: arrivalTime,
      departureTime: departureTime,
      stayMinutes: stayMinutes,
      travelTimeToNext: travelTimeToNext,
      distanceToNext: distanceToNext
    });

    // 시간 갱신: 체류 + 이동
    currentMinutes += stayMinutes + travelTimeToNext;
  }

  return schedule;
}

/**
 * 분(minutes)을 "HH:MM" 문자열로 변환한다.
 * @param {number} minutes - 0시 기준 분
 * @returns {string} "HH:MM" 형식
 */
function minutesToTimeStr(minutes) {
  var h = Math.floor(minutes / 60) % 24;
  var m = Math.floor(minutes % 60);
  return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
}

/**
 * 경로의 유권자 커버리지를 계산한다.
 * 경로 위 각 거점으로부터 반경 500m 이내의 유권자를 커버된 것으로 간주한다.
 * @param {Array} route - 경로 내 거점 배열 [{lat, lng, voterReach, ...}, ...]
 * @param {Array} spots - 전체 거점 배열 (대상 거점 포함)
 * @param {Array} allVoterPoints - [{lat, lng, voters}, ...] 유권자 분포 포인트
 * @returns {Object} {coveredVoters, totalVoters, coveragePercent}
 */
function calculateCoverage(route, spots, allVoterPoints) {
  var coverageRadius = 0.5; // 500m = 0.5km
  var totalVoters = 0;
  var coveredVoters = 0;

  // allVoterPoints가 제공되지 않으면 DISTRICTS 기반으로 추정
  if (!allVoterPoints || allVoterPoints.length === 0) {
    // 전체 유권자 수: 경로 거점의 voterReach 합산 x 가중치
    var routeVoterReach = 0;
    var allSpotsVoterReach = 0;

    for (var i = 0; i < route.length; i++) {
      if (route[i] && route[i].voterReach) {
        routeVoterReach += route[i].voterReach;
      }
    }

    for (var j = 0; j < spots.length; j++) {
      if (spots[j] && spots[j].voterReach) {
        allSpotsVoterReach += spots[j].voterReach;
      }
    }

    totalVoters = allSpotsVoterReach || 1;
    coveredVoters = routeVoterReach;

    return {
      coveredVoters: coveredVoters,
      totalVoters: totalVoters,
      coveragePercent: Math.round((coveredVoters / totalVoters) * 100)
    };
  }

  // allVoterPoints가 제공된 경우: 실제 거리 기반 커버리지 계산
  var coveredSet = new Set();

  for (var v = 0; v < allVoterPoints.length; v++) {
    totalVoters += (allVoterPoints[v].voters || 1);
  }

  for (var r = 0; r < route.length; r++) {
    if (!route[r] || !route[r].lat) continue;
    for (var v = 0; v < allVoterPoints.length; v++) {
      if (coveredSet.has(v)) continue;
      var dist = haversineDistance(route[r].lat, route[r].lng,
                                   allVoterPoints[v].lat, allVoterPoints[v].lng);
      if (dist <= coverageRadius) {
        coveredVoters += (allVoterPoints[v].voters || 1);
        coveredSet.add(v);
      }
    }
  }

  return {
    coveredVoters: coveredVoters,
    totalVoters: totalVoters,
    coveragePercent: totalVoters > 0 ? Math.round((coveredVoters / totalVoters) * 100) : 0
  };
}

/**
 * OSRM 라우팅 서버에서 실제 도로 경로를 조회한다.
 * @param {Array} waypoints - [{lat, lng}, ...] 경유지 배열
 * @returns {Promise<Object>} {distance (km), duration (분), geometry: [[lat,lng], ...]}
 */
async function getOSRMRoute(waypoints) {
  if (!waypoints || waypoints.length < 2) {
    return { distance: 0, duration: 0, geometry: [] };
  }

  // OSRM 좌표 형식: lng,lat;lng,lat;...
  var coords = waypoints.map(function(wp) {
    return wp.lng + ',' + wp.lat;
  }).join(';');

  var url = 'https://router.project-osrm.org/route/v1/driving/' +
            coords +
            '?overview=full&geometries=polyline&steps=false';

  try {
    var response = await fetch(url);
    if (!response.ok) throw new Error('OSRM HTTP ' + response.status);

    var data = await response.json();
    if (data.code !== 'Ok' || !data.routes || data.routes.length === 0) {
      throw new Error('OSRM no route: ' + (data.code || 'unknown'));
    }

    var route = data.routes[0];
    var geometry = decodePolyline(route.geometry);

    return {
      distance: Math.round(route.distance / 10) / 100, // m -> km (소수 2자리)
      duration: Math.round(route.duration / 60),        // 초 -> 분
      geometry: geometry
    };
  } catch (err) {
    console.warn('[OSRM] 라우팅 실패, 직선 거리 대체:', err.message);

    // 폴백: Haversine x 1.4 로 추정
    var fallbackDist = 0;
    var fallbackGeom = [];
    for (var i = 0; i < waypoints.length; i++) {
      fallbackGeom.push([waypoints[i].lat, waypoints[i].lng]);
      if (i < waypoints.length - 1) {
        fallbackDist += haversineDistance(
          waypoints[i].lat, waypoints[i].lng,
          waypoints[i + 1].lat, waypoints[i + 1].lng
        );
      }
    }

    var roadDist = Math.round(fallbackDist * 1.4 * 100) / 100;

    return {
      distance: roadDist,
      duration: Math.round((roadDist / 30) * 60), // 30km/h 가정
      geometry: fallbackGeom
    };
  }
}

/**
 * Google Polyline 인코딩 문자열을 디코딩한다.
 * @param {string} encoded - 인코딩된 폴리라인 문자열
 * @returns {Array} [[lat, lng], ...] 좌표 배열
 */
function decodePolyline(encoded) {
  if (!encoded || encoded.length === 0) return [];

  var points = [];
  var index = 0;
  var lat = 0;
  var lng = 0;
  var len = encoded.length;

  while (index < len) {
    // 위도 디코딩
    var shift = 0;
    var result = 0;
    var byte;
    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);
    var dlat = (result & 1) ? ~(result >> 1) : (result >> 1);
    lat += dlat;

    // 경도 디코딩
    shift = 0;
    result = 0;
    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);
    var dlng = (result & 1) ? ~(result >> 1) : (result >> 1);
    lng += dlng;

    points.push([lat / 1e5, lng / 1e5]);
  }

  return points;
}
