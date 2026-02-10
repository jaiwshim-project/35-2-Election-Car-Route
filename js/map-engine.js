/* ═══════════════════════════════════════════
   일렉트맵AI — map-engine.js
   Leaflet 지도 유틸리티 모듈
   ═══════════════════════════════════════════ */

/**
 * Leaflet 지도를 초기화한다.
 * @param {string} containerId - 지도를 렌더링할 DOM 요소 ID
 * @param {Array} center - [lat, lng] 중심 좌표 (기본: 수원시청)
 * @param {number} zoom - 줌 레벨 (기본: 12)
 * @returns {L.Map} 지도 인스턴스
 */
function initMap(containerId, center, zoom) {
  center = center || [37.2636, 127.0286];
  zoom = zoom || 12;

  var map = L.map(containerId, {
    center: center,
    zoom: zoom,
    zoomControl: true,
    scrollWheelZoom: true
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  return map;
}

/**
 * 히트맵 레이어를 추가한다.
 * @param {L.Map} map - Leaflet 지도 인스턴스
 * @param {Array} points - [[lat, lng, intensity], ...]
 * @param {Object} options - leaflet.heat 옵션
 * @returns {L.HeatLayer} 히트맵 레이어
 */
function addHeatLayer(map, points, options) {
  options = options || {};
  var defaults = {
    radius: options.radius || 25,
    blur: options.blur || 15,
    maxZoom: options.maxZoom || 17,
    max: options.max || 1.0,
    gradient: options.gradient || {
      0.2: '#ffffb2',
      0.4: '#fed976',
      0.6: '#feb24c',
      0.8: '#f03b20',
      1.0: '#bd0026'
    }
  };

  var heatLayer = L.heatLayer(points, defaults).addTo(map);
  return heatLayer;
}

/**
 * 경로 폴리라인을 그린다.
 * @param {L.Map} map - Leaflet 지도 인스턴스
 * @param {Array} latlngs - [[lat, lng], ...] 경로 좌표 배열
 * @param {Object} options - color, weight, opacity, dashArray
 * @returns {L.Polyline} 폴리라인 레이어
 */
function addRoutePolyline(map, latlngs, options) {
  options = options || {};
  var polyline = L.polyline(latlngs, {
    color: options.color || '#2563eb',
    weight: options.weight || 4,
    opacity: options.opacity || 0.8,
    dashArray: options.dashArray || null,
    lineJoin: 'round',
    lineCap: 'round'
  }).addTo(map);

  return polyline;
}

/**
 * 숫자가 표시되는 마커를 생성한다.
 * @param {L.Map} map - Leaflet 지도 인스턴스
 * @param {number} lat - 위도
 * @param {number} lng - 경도
 * @param {number|string} number - 마커에 표시할 숫자/문자
 * @param {string} color - 'blue', 'red', 'green', 'orange', 'purple'
 * @param {string} popupContent - 팝업에 표시할 HTML 콘텐츠
 * @returns {L.Marker} 마커 인스턴스
 */
function addNumberedMarker(map, lat, lng, number, color, popupContent) {
  color = color || 'blue';

  var colorMap = {
    blue: '#2563eb',
    red: '#dc2626',
    green: '#059669',
    orange: '#ea580c',
    purple: '#7c3aed'
  };
  var bgColor = colorMap[color] || colorMap.blue;

  var icon = L.divIcon({
    className: 'custom-div-icon',
    html: '<div style="' +
      'background:' + bgColor + ';' +
      'color:white;' +
      'border-radius:50%;' +
      'width:32px;' +
      'height:32px;' +
      'display:flex;' +
      'align-items:center;' +
      'justify-content:center;' +
      'font-weight:700;' +
      'font-size:14px;' +
      'border:3px solid white;' +
      'box-shadow:0 2px 8px rgba(0,0,0,0.3);' +
      'font-family:Pretendard Variable,sans-serif;' +
      '">' + number + '</div>',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18]
  });

  var marker = L.marker([lat, lng], { icon: icon }).addTo(map);

  if (popupContent) {
    marker.bindPopup(popupContent, {
      maxWidth: 280,
      className: 'custom-popup'
    });
  }

  return marker;
}

/**
 * 반투명 원형 오버레이를 추가한다.
 * @param {L.Map} map - Leaflet 지도 인스턴스
 * @param {number} lat - 위도
 * @param {number} lng - 경도
 * @param {number} radius - 반경 (미터)
 * @param {string} color - CSS 색상
 * @returns {L.Circle} 원형 레이어
 */
function addCircleOverlay(map, lat, lng, radius, color) {
  color = color || '#2563eb';
  radius = radius || 500;

  var circle = L.circle([lat, lng], {
    radius: radius,
    color: color,
    fillColor: color,
    fillOpacity: 0.15,
    weight: 2,
    opacity: 0.6
  }).addTo(map);

  return circle;
}

/**
 * 지도를 주어진 좌표들이 모두 보이도록 맞춘다.
 * @param {L.Map} map - Leaflet 지도 인스턴스
 * @param {Array} points - [[lat, lng], ...] 좌표 배열
 */
function fitMapBounds(map, points) {
  if (!points || points.length === 0) return;

  var latlngs = points.map(function(p) {
    if (Array.isArray(p)) return L.latLng(p[0], p[1]);
    if (p.lat !== undefined && p.lng !== undefined) return L.latLng(p.lat, p.lng);
    return null;
  }).filter(function(l) { return l !== null; });

  if (latlngs.length === 0) return;

  var bounds = L.latLngBounds(latlngs);
  map.fitBounds(bounds, { padding: [40, 40], maxZoom: 15 });
}

/**
 * 레이어 그룹의 모든 레이어를 제거한다.
 * @param {L.Map} map - Leaflet 지도 인스턴스
 * @param {L.LayerGroup} layerGroup - 제거할 레이어 그룹
 */
function clearLayers(map, layerGroup) {
  if (layerGroup) {
    layerGroup.clearLayers();
  }
}

/**
 * 기본 마커(숫자 없음)를 생성한다.
 * @param {L.Map} map - Leaflet 지도 인스턴스
 * @param {number} lat - 위도
 * @param {number} lng - 경도
 * @param {string} popupContent - 팝업 HTML
 * @returns {L.Marker} 마커 인스턴스
 */
function addSimpleMarker(map, lat, lng, popupContent) {
  var marker = L.marker([lat, lng]).addTo(map);
  if (popupContent) {
    marker.bindPopup(popupContent, { maxWidth: 280 });
  }
  return marker;
}

/**
 * 레이어 그룹을 생성하여 지도에 추가한다.
 * @param {L.Map} map - Leaflet 지도 인스턴스
 * @returns {L.LayerGroup} 새 레이어 그룹
 */
function createLayerGroup(map) {
  var group = L.layerGroup().addTo(map);
  return group;
}
