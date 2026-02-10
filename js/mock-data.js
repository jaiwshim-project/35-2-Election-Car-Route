/* ═══════════════════════════════════════════
   일렉션맵AI — mock-data.js (전국 목업 데이터)
   ═══════════════════════════════════════════ */

/* ── 선거 유형 ── */
const ELECTION_TYPES = [
  { id: 'president', name: '대통령 선거', icon: '🏛️', desc: '전국 단위 최고 권력자 선출', voterRange: '4,400만명', budgetLimit: null, budgetText: '별도 규정', recommendVehicles: '50~100대', period: '23일', color: 'blue' },
  { id: 'national_assembly', name: '국회의원 선거', icon: '🏢', desc: '지역구/비례대표 국회의원 선출', voterRange: '15~30만명', budgetLimit: 200000000, budgetText: '약 2억원', recommendVehicles: '3~5대', period: '14일', color: 'indigo' },
  { id: 'metro_governor', name: '광역단체장', icon: '🏙️', desc: '시·도지사 선출', voterRange: '50~800만명', budgetLimit: 400000000, budgetText: '약 4억원', recommendVehicles: '10~20대', period: '14일', color: 'purple' },
  { id: 'basic_head', name: '기초단체장', icon: '🏘️', desc: '시장·군수·구청장 선출', voterRange: '5~50만명', budgetLimit: 100000000, budgetText: '약 1억원', recommendVehicles: '2~4대', period: '14일', color: 'emerald' },
  { id: 'superintendent', name: '교육감', icon: '🎓', desc: '시·도 교육감 선출', voterRange: '50~800만명', budgetLimit: 300000000, budgetText: '약 3억원', recommendVehicles: '5~10대', period: '14일', color: 'amber' },
  { id: 'metro_council', name: '광역의원', icon: '📋', desc: '시·도의회 의원 선출', voterRange: '5~15만명', budgetLimit: 60000000, budgetText: '약 6천만원', recommendVehicles: '1~2대', period: '14일', color: 'cyan' },
  { id: 'basic_council', name: '기초의원', icon: '📝', desc: '시·군·구의회 의원 선출', voterRange: '1~5만명', budgetLimit: 30000000, budgetText: '약 3천만원', recommendVehicles: '1대', period: '14일', color: 'teal' },
  { id: 'proportional', name: '비례대표', icon: '📊', desc: '정당 득표율 기반 의석 배분', voterRange: '전국', budgetLimit: null, budgetText: '정당 부담', recommendVehicles: '정당별', period: '14일', color: 'rose' }
];

/* ══════════════════════════════════════════════
   전국 선거구 데이터 (17개 시·도)
   ══════════════════════════════════════════════ */
const DISTRICTS = [
  // ─── 서울특별시 (8) ───
  { code: '1101000', sido: '서울특별시', sigungu: '서울', dong: '종로구', voters: 118000, population: 148000, age_20s_pct: 22, age_30s_pct: 20, age_40s_pct: 18, age_50s_pct: 18, age_60plus_pct: 22, floating_pop: 280000, competitors: 4, past_turnout: 62.1, lat: 37.5735, lng: 126.9790, scores: { voter_density: 72, accessibility: 95, cost_efficiency: 58, coverage: 82, competition: 55, total: 74 }, grade: 'B' },
  { code: '1168000', sido: '서울특별시', sigungu: '서울', dong: '강남구', voters: 420000, population: 530000, age_20s_pct: 18, age_30s_pct: 24, age_40s_pct: 22, age_50s_pct: 20, age_60plus_pct: 16, floating_pop: 450000, competitors: 6, past_turnout: 64.5, lat: 37.5172, lng: 127.0473, scores: { voter_density: 95, accessibility: 92, cost_efficiency: 48, coverage: 78, competition: 42, total: 74 }, grade: 'B' },
  { code: '1171000', sido: '서울특별시', sigungu: '서울', dong: '송파구', voters: 510000, population: 660000, age_20s_pct: 19, age_30s_pct: 25, age_40s_pct: 23, age_50s_pct: 18, age_60plus_pct: 15, floating_pop: 320000, competitors: 5, past_turnout: 63.8, lat: 37.5145, lng: 127.1050, scores: { voter_density: 92, accessibility: 88, cost_efficiency: 52, coverage: 80, competition: 48, total: 75 }, grade: 'B' },
  { code: '1144000', sido: '서울특별시', sigungu: '서울', dong: '마포구', voters: 295000, population: 370000, age_20s_pct: 25, age_30s_pct: 24, age_40s_pct: 18, age_50s_pct: 16, age_60plus_pct: 17, floating_pop: 310000, competitors: 4, past_turnout: 65.2, lat: 37.5663, lng: 126.9014, scores: { voter_density: 85, accessibility: 90, cost_efficiency: 55, coverage: 84, competition: 58, total: 76 }, grade: 'B' },
  { code: '1156000', sido: '서울특별시', sigungu: '서울', dong: '영등포구', voters: 310000, population: 395000, age_20s_pct: 20, age_30s_pct: 22, age_40s_pct: 20, age_50s_pct: 19, age_60plus_pct: 19, floating_pop: 380000, competitors: 5, past_turnout: 60.8, lat: 37.5264, lng: 126.8963, scores: { voter_density: 88, accessibility: 92, cost_efficiency: 50, coverage: 80, competition: 50, total: 74 }, grade: 'B' },
  { code: '1135000', sido: '서울특별시', sigungu: '서울', dong: '노원구', voters: 430000, population: 520000, age_20s_pct: 17, age_30s_pct: 18, age_40s_pct: 22, age_50s_pct: 22, age_60plus_pct: 21, floating_pop: 180000, competitors: 4, past_turnout: 61.5, lat: 37.6542, lng: 127.0568, scores: { voter_density: 90, accessibility: 78, cost_efficiency: 72, coverage: 85, competition: 60, total: 78 }, grade: 'B' },
  { code: '1162000', sido: '서울특별시', sigungu: '서울', dong: '관악구', voters: 390000, population: 500000, age_20s_pct: 30, age_30s_pct: 22, age_40s_pct: 16, age_50s_pct: 16, age_60plus_pct: 16, floating_pop: 210000, competitors: 4, past_turnout: 58.9, lat: 37.4784, lng: 126.9516, scores: { voter_density: 88, accessibility: 82, cost_efficiency: 68, coverage: 82, competition: 62, total: 77 }, grade: 'B' },
  { code: '1150000', sido: '서울특별시', sigungu: '서울', dong: '강서구', voters: 470000, population: 580000, age_20s_pct: 18, age_30s_pct: 22, age_40s_pct: 22, age_50s_pct: 20, age_60plus_pct: 18, floating_pop: 250000, competitors: 5, past_turnout: 61.2, lat: 37.5510, lng: 126.8495, scores: { voter_density: 92, accessibility: 80, cost_efficiency: 65, coverage: 85, competition: 52, total: 76 }, grade: 'B' },

  // ─── 부산광역시 (5) ───
  { code: '2617000', sido: '부산광역시', sigungu: '부산', dong: '해운대구', voters: 320000, population: 410000, age_20s_pct: 18, age_30s_pct: 22, age_40s_pct: 22, age_50s_pct: 20, age_60plus_pct: 18, floating_pop: 280000, competitors: 5, past_turnout: 55.3, lat: 35.1631, lng: 129.1635, scores: { voter_density: 88, accessibility: 85, cost_efficiency: 62, coverage: 78, competition: 52, total: 75 }, grade: 'B' },
  { code: '2611000', sido: '부산광역시', sigungu: '부산', dong: '부산진구', voters: 280000, population: 360000, age_20s_pct: 20, age_30s_pct: 20, age_40s_pct: 20, age_50s_pct: 20, age_60plus_pct: 20, floating_pop: 320000, competitors: 4, past_turnout: 54.8, lat: 35.1629, lng: 129.0532, scores: { voter_density: 85, accessibility: 88, cost_efficiency: 65, coverage: 80, competition: 58, total: 76 }, grade: 'B' },
  { code: '2614000', sido: '부산광역시', sigungu: '부산', dong: '남구', voters: 210000, population: 270000, age_20s_pct: 16, age_30s_pct: 18, age_40s_pct: 20, age_50s_pct: 22, age_60plus_pct: 24, floating_pop: 150000, competitors: 3, past_turnout: 56.2, lat: 35.1368, lng: 129.0843, scores: { voter_density: 78, accessibility: 82, cost_efficiency: 72, coverage: 80, competition: 65, total: 76 }, grade: 'B' },
  { code: '2653000', sido: '부산광역시', sigungu: '부산', dong: '사하구', voters: 260000, population: 330000, age_20s_pct: 16, age_30s_pct: 18, age_40s_pct: 20, age_50s_pct: 22, age_60plus_pct: 24, floating_pop: 120000, competitors: 3, past_turnout: 52.1, lat: 35.1046, lng: 128.9747, scores: { voter_density: 80, accessibility: 72, cost_efficiency: 78, coverage: 82, competition: 68, total: 76 }, grade: 'B' },
  { code: '2632000', sido: '부산광역시', sigungu: '부산', dong: '북구', voters: 230000, population: 300000, age_20s_pct: 17, age_30s_pct: 20, age_40s_pct: 22, age_50s_pct: 20, age_60plus_pct: 21, floating_pop: 130000, competitors: 3, past_turnout: 53.5, lat: 35.1974, lng: 129.0130, scores: { voter_density: 82, accessibility: 75, cost_efficiency: 75, coverage: 82, competition: 65, total: 76 }, grade: 'B' },

  // ─── 대구광역시 (4) ───
  { code: '2720000', sido: '대구광역시', sigungu: '대구', dong: '수성구', voters: 350000, population: 430000, age_20s_pct: 16, age_30s_pct: 20, age_40s_pct: 24, age_50s_pct: 22, age_60plus_pct: 18, floating_pop: 180000, competitors: 5, past_turnout: 58.2, lat: 35.8588, lng: 128.6322, scores: { voter_density: 88, accessibility: 85, cost_efficiency: 60, coverage: 78, competition: 50, total: 74 }, grade: 'B' },
  { code: '2771000', sido: '대구광역시', sigungu: '대구', dong: '달서구', voters: 450000, population: 560000, age_20s_pct: 18, age_30s_pct: 22, age_40s_pct: 24, age_50s_pct: 20, age_60plus_pct: 16, floating_pop: 200000, competitors: 5, past_turnout: 56.8, lat: 35.8299, lng: 128.5328, scores: { voter_density: 90, accessibility: 80, cost_efficiency: 65, coverage: 82, competition: 52, total: 76 }, grade: 'B' },
  { code: '2714000', sido: '대구광역시', sigungu: '대구', dong: '북구', voters: 340000, population: 420000, age_20s_pct: 20, age_30s_pct: 20, age_40s_pct: 20, age_50s_pct: 20, age_60plus_pct: 20, floating_pop: 170000, competitors: 4, past_turnout: 55.5, lat: 35.8858, lng: 128.5828, scores: { voter_density: 85, accessibility: 78, cost_efficiency: 70, coverage: 80, competition: 58, total: 75 }, grade: 'B' },
  { code: '2711000', sido: '대구광역시', sigungu: '대구', dong: '중구', voters: 65000, population: 78000, age_20s_pct: 22, age_30s_pct: 18, age_40s_pct: 16, age_50s_pct: 20, age_60plus_pct: 24, floating_pop: 350000, competitors: 3, past_turnout: 57.8, lat: 35.8694, lng: 128.6062, scores: { voter_density: 55, accessibility: 95, cost_efficiency: 58, coverage: 78, competition: 68, total: 71 }, grade: 'B' },

  // ─── 인천광역시 (4) ───
  { code: '2859000', sido: '인천광역시', sigungu: '인천', dong: '남동구', voters: 400000, population: 530000, age_20s_pct: 18, age_30s_pct: 24, age_40s_pct: 24, age_50s_pct: 18, age_60plus_pct: 16, floating_pop: 220000, competitors: 5, past_turnout: 58.6, lat: 37.4488, lng: 126.7317, scores: { voter_density: 90, accessibility: 82, cost_efficiency: 68, coverage: 82, competition: 52, total: 76 }, grade: 'B' },
  { code: '2823700', sido: '인천광역시', sigungu: '인천', dong: '부평구', voters: 380000, population: 490000, age_20s_pct: 19, age_30s_pct: 22, age_40s_pct: 22, age_50s_pct: 20, age_60plus_pct: 17, floating_pop: 260000, competitors: 4, past_turnout: 59.2, lat: 37.5075, lng: 126.7218, scores: { voter_density: 88, accessibility: 85, cost_efficiency: 70, coverage: 84, competition: 58, total: 78 }, grade: 'B' },
  { code: '2847000', sido: '인천광역시', sigungu: '인천', dong: '연수구', voters: 290000, population: 380000, age_20s_pct: 20, age_30s_pct: 26, age_40s_pct: 24, age_50s_pct: 16, age_60plus_pct: 14, floating_pop: 180000, competitors: 4, past_turnout: 60.5, lat: 37.4101, lng: 126.6783, scores: { voter_density: 85, accessibility: 80, cost_efficiency: 65, coverage: 80, competition: 58, total: 75 }, grade: 'B' },
  { code: '2826000', sido: '인천광역시', sigungu: '인천', dong: '서구', voters: 420000, population: 560000, age_20s_pct: 20, age_30s_pct: 28, age_40s_pct: 24, age_50s_pct: 16, age_60plus_pct: 12, floating_pop: 190000, competitors: 5, past_turnout: 57.8, lat: 37.5457, lng: 126.6759, scores: { voter_density: 88, accessibility: 75, cost_efficiency: 72, coverage: 80, competition: 50, total: 75 }, grade: 'B' },

  // ─── 광주광역시 (3) ───
  { code: '2920000', sido: '광주광역시', sigungu: '광주', dong: '북구', voters: 350000, population: 430000, age_20s_pct: 22, age_30s_pct: 20, age_40s_pct: 20, age_50s_pct: 20, age_60plus_pct: 18, floating_pop: 200000, competitors: 4, past_turnout: 60.5, lat: 35.1744, lng: 126.9120, scores: { voter_density: 85, accessibility: 82, cost_efficiency: 72, coverage: 84, competition: 60, total: 77 }, grade: 'B' },
  { code: '2914000', sido: '광주광역시', sigungu: '광주', dong: '서구', voters: 250000, population: 310000, age_20s_pct: 20, age_30s_pct: 22, age_40s_pct: 20, age_50s_pct: 20, age_60plus_pct: 18, floating_pop: 260000, competitors: 4, past_turnout: 61.2, lat: 35.1480, lng: 126.8916, scores: { voter_density: 82, accessibility: 88, cost_efficiency: 68, coverage: 82, competition: 58, total: 77 }, grade: 'B' },
  { code: '2941000', sido: '광주광역시', sigungu: '광주', dong: '광산구', voters: 310000, population: 400000, age_20s_pct: 19, age_30s_pct: 24, age_40s_pct: 24, age_50s_pct: 18, age_60plus_pct: 15, floating_pop: 160000, competitors: 4, past_turnout: 58.8, lat: 35.1395, lng: 126.7937, scores: { voter_density: 85, accessibility: 75, cost_efficiency: 75, coverage: 82, competition: 58, total: 76 }, grade: 'B' },

  // ─── 대전광역시 (3) ───
  { code: '3020000', sido: '대전광역시', sigungu: '대전', dong: '유성구', voters: 280000, population: 360000, age_20s_pct: 28, age_30s_pct: 24, age_40s_pct: 20, age_50s_pct: 16, age_60plus_pct: 12, floating_pop: 200000, competitors: 4, past_turnout: 62.5, lat: 36.3623, lng: 127.3563, scores: { voter_density: 82, accessibility: 80, cost_efficiency: 70, coverage: 82, competition: 60, total: 76 }, grade: 'B' },
  { code: '3017000', sido: '대전광역시', sigungu: '대전', dong: '서구', voters: 370000, population: 460000, age_20s_pct: 20, age_30s_pct: 22, age_40s_pct: 22, age_50s_pct: 20, age_60plus_pct: 16, floating_pop: 280000, competitors: 5, past_turnout: 61.8, lat: 36.3553, lng: 127.3835, scores: { voter_density: 88, accessibility: 85, cost_efficiency: 65, coverage: 82, competition: 52, total: 76 }, grade: 'B' },
  { code: '3011000', sido: '대전광역시', sigungu: '대전', dong: '중구', voters: 190000, population: 240000, age_20s_pct: 18, age_30s_pct: 18, age_40s_pct: 20, age_50s_pct: 22, age_60plus_pct: 22, floating_pop: 320000, competitors: 3, past_turnout: 60.2, lat: 36.3255, lng: 127.4217, scores: { voter_density: 75, accessibility: 92, cost_efficiency: 62, coverage: 80, competition: 65, total: 76 }, grade: 'B' },

  // ─── 울산광역시 (3) ───
  { code: '3114000', sido: '울산광역시', sigungu: '울산', dong: '남구', voters: 250000, population: 320000, age_20s_pct: 18, age_30s_pct: 22, age_40s_pct: 24, age_50s_pct: 20, age_60plus_pct: 16, floating_pop: 180000, competitors: 4, past_turnout: 56.5, lat: 35.5437, lng: 129.3300, scores: { voter_density: 82, accessibility: 82, cost_efficiency: 70, coverage: 80, competition: 58, total: 75 }, grade: 'B' },
  { code: '3111000', sido: '울산광역시', sigungu: '울산', dong: '중구', voters: 180000, population: 220000, age_20s_pct: 18, age_30s_pct: 20, age_40s_pct: 20, age_50s_pct: 22, age_60plus_pct: 20, floating_pop: 250000, competitors: 3, past_turnout: 55.8, lat: 35.5690, lng: 129.3320, scores: { voter_density: 75, accessibility: 88, cost_efficiency: 68, coverage: 80, competition: 65, total: 76 }, grade: 'B' },
  { code: '3171000', sido: '울산광역시', sigungu: '울산', dong: '울주군', voters: 180000, population: 230000, age_20s_pct: 16, age_30s_pct: 20, age_40s_pct: 22, age_50s_pct: 22, age_60plus_pct: 20, floating_pop: 80000, competitors: 3, past_turnout: 54.2, lat: 35.5225, lng: 129.2430, scores: { voter_density: 65, accessibility: 60, cost_efficiency: 82, coverage: 70, competition: 70, total: 69 }, grade: 'C' },

  // ─── 세종특별자치시 (1) ───
  { code: '3611000', sido: '세종특별자치시', sigungu: '세종', dong: '세종시', voters: 280000, population: 380000, age_20s_pct: 18, age_30s_pct: 28, age_40s_pct: 26, age_50s_pct: 16, age_60plus_pct: 12, floating_pop: 120000, competitors: 4, past_turnout: 63.5, lat: 36.4800, lng: 127.2590, scores: { voter_density: 72, accessibility: 75, cost_efficiency: 78, coverage: 80, competition: 60, total: 73 }, grade: 'B' },

  // ─── 경기도 (12 - 기존) ───
  { code: '4111100', sido: '경기도', sigungu: '수원시', dong: '장안구', voters: 185000, population: 242000, age_20s_pct: 18, age_30s_pct: 22, age_40s_pct: 20, age_50s_pct: 18, age_60plus_pct: 22, floating_pop: 95000, competitors: 3, past_turnout: 52.3, lat: 37.3040, lng: 127.0100, scores: { voter_density: 78, accessibility: 85, cost_efficiency: 72, coverage: 80, competition: 65, total: 77 }, grade: 'B' },
  { code: '4111300', sido: '경기도', sigungu: '수원시', dong: '권선구', voters: 210000, population: 285000, age_20s_pct: 16, age_30s_pct: 20, age_40s_pct: 22, age_50s_pct: 20, age_60plus_pct: 22, floating_pop: 88000, competitors: 4, past_turnout: 48.7, lat: 37.2575, lng: 126.9716, scores: { voter_density: 82, accessibility: 75, cost_efficiency: 80, coverage: 78, competition: 58, total: 76 }, grade: 'B' },
  { code: '4111500', sido: '경기도', sigungu: '수원시', dong: '팔달구', voters: 145000, population: 178000, age_20s_pct: 20, age_30s_pct: 18, age_40s_pct: 19, age_50s_pct: 21, age_60plus_pct: 22, floating_pop: 120000, competitors: 3, past_turnout: 55.1, lat: 37.2820, lng: 127.0190, scores: { voter_density: 70, accessibility: 92, cost_efficiency: 65, coverage: 85, competition: 68, total: 76 }, grade: 'B' },
  { code: '4111700', sido: '경기도', sigungu: '수원시', dong: '영통구', voters: 230000, population: 310000, age_20s_pct: 22, age_30s_pct: 28, age_40s_pct: 22, age_50s_pct: 16, age_60plus_pct: 12, floating_pop: 105000, competitors: 5, past_turnout: 58.2, lat: 37.2596, lng: 127.0460, scores: { voter_density: 88, accessibility: 80, cost_efficiency: 70, coverage: 82, competition: 52, total: 76 }, grade: 'B' },
  { code: '4113100', sido: '경기도', sigungu: '성남시', dong: '분당구', voters: 320000, population: 420000, age_20s_pct: 15, age_30s_pct: 25, age_40s_pct: 25, age_50s_pct: 20, age_60plus_pct: 15, floating_pop: 150000, competitors: 6, past_turnout: 60.5, lat: 37.3825, lng: 127.1185, scores: { voter_density: 92, accessibility: 88, cost_efficiency: 55, coverage: 75, competition: 45, total: 74 }, grade: 'B' },
  { code: '4113500', sido: '경기도', sigungu: '용인시', dong: '수지구', voters: 245000, population: 340000, age_20s_pct: 14, age_30s_pct: 22, age_40s_pct: 28, age_50s_pct: 20, age_60plus_pct: 16, floating_pop: 78000, competitors: 4, past_turnout: 56.8, lat: 37.3219, lng: 127.0981, scores: { voter_density: 85, accessibility: 72, cost_efficiency: 68, coverage: 70, competition: 60, total: 73 }, grade: 'B' },
  { code: '4115100', sido: '경기도', sigungu: '화성시', dong: '동탄', voters: 280000, population: 380000, age_20s_pct: 20, age_30s_pct: 32, age_40s_pct: 24, age_50s_pct: 14, age_60plus_pct: 10, floating_pop: 92000, competitors: 5, past_turnout: 54.3, lat: 37.2061, lng: 127.0740, scores: { voter_density: 90, accessibility: 68, cost_efficiency: 78, coverage: 72, competition: 55, total: 75 }, grade: 'B' },
  { code: '4117100', sido: '경기도', sigungu: '안양시', dong: '만안구', voters: 165000, population: 218000, age_20s_pct: 17, age_30s_pct: 19, age_40s_pct: 21, age_50s_pct: 22, age_60plus_pct: 21, floating_pop: 82000, competitors: 3, past_turnout: 51.9, lat: 37.3865, lng: 126.9192, scores: { voter_density: 72, accessibility: 82, cost_efficiency: 75, coverage: 78, competition: 70, total: 75 }, grade: 'B' },
  { code: '4119100', sido: '경기도', sigungu: '평택시', dong: '평택', voters: 195000, population: 260000, age_20s_pct: 19, age_30s_pct: 21, age_40s_pct: 20, age_50s_pct: 19, age_60plus_pct: 21, floating_pop: 70000, competitors: 4, past_turnout: 49.5, lat: 36.9921, lng: 127.1128, scores: { voter_density: 75, accessibility: 65, cost_efficiency: 85, coverage: 70, competition: 62, total: 72 }, grade: 'B' },
  { code: '4121100', sido: '경기도', sigungu: '오산시', dong: '오산', voters: 120000, population: 155000, age_20s_pct: 18, age_30s_pct: 24, age_40s_pct: 22, age_50s_pct: 18, age_60plus_pct: 18, floating_pop: 55000, competitors: 2, past_turnout: 50.8, lat: 37.1497, lng: 127.0693, scores: { voter_density: 65, accessibility: 70, cost_efficiency: 82, coverage: 75, competition: 78, total: 73 }, grade: 'B' },
  { code: '4123100', sido: '경기도', sigungu: '군포시', dong: '군포', voters: 155000, population: 200000, age_20s_pct: 16, age_30s_pct: 20, age_40s_pct: 23, age_50s_pct: 21, age_60plus_pct: 20, floating_pop: 68000, competitors: 3, past_turnout: 53.2, lat: 37.3614, lng: 126.9352, scores: { voter_density: 70, accessibility: 78, cost_efficiency: 78, coverage: 80, competition: 68, total: 75 }, grade: 'B' },
  { code: '4125100', sido: '경기도', sigungu: '의왕시', dong: '의왕', voters: 98000, population: 130000, age_20s_pct: 15, age_30s_pct: 18, age_40s_pct: 24, age_50s_pct: 22, age_60plus_pct: 21, floating_pop: 42000, competitors: 2, past_turnout: 55.6, lat: 37.3446, lng: 126.9685, scores: { voter_density: 58, accessibility: 72, cost_efficiency: 80, coverage: 82, competition: 80, total: 73 }, grade: 'B' },

  // ─── 강원특별자치도 (4) ───
  { code: '5111000', sido: '강원특별자치도', sigungu: '춘천시', dong: '춘천', voters: 220000, population: 285000, age_20s_pct: 22, age_30s_pct: 20, age_40s_pct: 18, age_50s_pct: 20, age_60plus_pct: 20, floating_pop: 110000, competitors: 3, past_turnout: 58.5, lat: 37.8813, lng: 127.7298, scores: { voter_density: 68, accessibility: 72, cost_efficiency: 78, coverage: 75, competition: 68, total: 72 }, grade: 'B' },
  { code: '5113000', sido: '강원특별자치도', sigungu: '원주시', dong: '원주', voters: 260000, population: 350000, age_20s_pct: 20, age_30s_pct: 22, age_40s_pct: 20, age_50s_pct: 20, age_60plus_pct: 18, floating_pop: 120000, competitors: 4, past_turnout: 56.8, lat: 37.3422, lng: 127.9209, scores: { voter_density: 72, accessibility: 70, cost_efficiency: 75, coverage: 78, competition: 60, total: 72 }, grade: 'B' },
  { code: '5115000', sido: '강원특별자치도', sigungu: '강릉시', dong: '강릉', voters: 170000, population: 215000, age_20s_pct: 18, age_30s_pct: 18, age_40s_pct: 18, age_50s_pct: 22, age_60plus_pct: 24, floating_pop: 95000, competitors: 3, past_turnout: 57.2, lat: 37.7519, lng: 128.8761, scores: { voter_density: 62, accessibility: 65, cost_efficiency: 80, coverage: 72, competition: 68, total: 70 }, grade: 'B' },
  { code: '5121000', sido: '강원특별자치도', sigungu: '속초시', dong: '속초', voters: 65000, population: 82000, age_20s_pct: 16, age_30s_pct: 16, age_40s_pct: 18, age_50s_pct: 24, age_60plus_pct: 26, floating_pop: 80000, competitors: 2, past_turnout: 59.5, lat: 38.2070, lng: 128.5918, scores: { voter_density: 50, accessibility: 60, cost_efficiency: 85, coverage: 80, competition: 78, total: 69 }, grade: 'C' },

  // ─── 충청북도 (3) ───
  { code: '4311100', sido: '충청북도', sigungu: '청주시', dong: '청주', voters: 520000, population: 680000, age_20s_pct: 22, age_30s_pct: 22, age_40s_pct: 20, age_50s_pct: 18, age_60plus_pct: 18, floating_pop: 250000, competitors: 5, past_turnout: 57.8, lat: 36.6424, lng: 127.4890, scores: { voter_density: 85, accessibility: 78, cost_efficiency: 72, coverage: 82, competition: 52, total: 75 }, grade: 'B' },
  { code: '4313000', sido: '충청북도', sigungu: '충주시', dong: '충주', voters: 165000, population: 210000, age_20s_pct: 18, age_30s_pct: 18, age_40s_pct: 20, age_50s_pct: 22, age_60plus_pct: 22, floating_pop: 75000, competitors: 3, past_turnout: 56.2, lat: 36.9910, lng: 127.9260, scores: { voter_density: 65, accessibility: 65, cost_efficiency: 80, coverage: 75, competition: 70, total: 71 }, grade: 'B' },
  { code: '4315000', sido: '충청북도', sigungu: '제천시', dong: '제천', voters: 105000, population: 133000, age_20s_pct: 16, age_30s_pct: 16, age_40s_pct: 18, age_50s_pct: 24, age_60plus_pct: 26, floating_pop: 55000, competitors: 2, past_turnout: 58.5, lat: 37.1325, lng: 128.1910, scores: { voter_density: 55, accessibility: 60, cost_efficiency: 85, coverage: 78, competition: 78, total: 70 }, grade: 'B' },

  // ─── 충청남도 (4) ───
  { code: '4413100', sido: '충청남도', sigungu: '천안시', dong: '천안', voters: 480000, population: 650000, age_20s_pct: 22, age_30s_pct: 24, age_40s_pct: 22, age_50s_pct: 18, age_60plus_pct: 14, floating_pop: 280000, competitors: 5, past_turnout: 55.8, lat: 36.8151, lng: 127.1139, scores: { voter_density: 88, accessibility: 82, cost_efficiency: 68, coverage: 80, competition: 52, total: 75 }, grade: 'B' },
  { code: '4420000', sido: '충청남도', sigungu: '아산시', dong: '아산', voters: 260000, population: 350000, age_20s_pct: 20, age_30s_pct: 24, age_40s_pct: 24, age_50s_pct: 18, age_60plus_pct: 14, floating_pop: 140000, competitors: 4, past_turnout: 54.2, lat: 36.7898, lng: 127.0018, scores: { voter_density: 78, accessibility: 75, cost_efficiency: 75, coverage: 78, competition: 60, total: 74 }, grade: 'B' },
  { code: '4421000', sido: '충청남도', sigungu: '서산시', dong: '서산', voters: 130000, population: 175000, age_20s_pct: 16, age_30s_pct: 18, age_40s_pct: 20, age_50s_pct: 22, age_60plus_pct: 24, floating_pop: 65000, competitors: 3, past_turnout: 56.5, lat: 36.7847, lng: 126.4503, scores: { voter_density: 60, accessibility: 58, cost_efficiency: 82, coverage: 75, competition: 70, total: 69 }, grade: 'C' },
  { code: '4423000', sido: '충청남도', sigungu: '논산시', dong: '논산', voters: 100000, population: 125000, age_20s_pct: 14, age_30s_pct: 16, age_40s_pct: 18, age_50s_pct: 24, age_60plus_pct: 28, floating_pop: 50000, competitors: 2, past_turnout: 58.8, lat: 36.1872, lng: 127.0987, scores: { voter_density: 55, accessibility: 60, cost_efficiency: 85, coverage: 78, competition: 78, total: 70 }, grade: 'B' },

  // ─── 전북특별자치도 (4) ───
  { code: '4511100', sido: '전북특별자치도', sigungu: '전주시', dong: '전주', voters: 510000, population: 650000, age_20s_pct: 22, age_30s_pct: 20, age_40s_pct: 20, age_50s_pct: 20, age_60plus_pct: 18, floating_pop: 280000, competitors: 5, past_turnout: 60.5, lat: 35.8242, lng: 127.1480, scores: { voter_density: 85, accessibility: 80, cost_efficiency: 70, coverage: 82, competition: 55, total: 76 }, grade: 'B' },
  { code: '4513000', sido: '전북특별자치도', sigungu: '익산시', dong: '익산', voters: 230000, population: 290000, age_20s_pct: 18, age_30s_pct: 18, age_40s_pct: 20, age_50s_pct: 22, age_60plus_pct: 22, floating_pop: 120000, competitors: 4, past_turnout: 58.8, lat: 35.9483, lng: 126.9577, scores: { voter_density: 75, accessibility: 75, cost_efficiency: 78, coverage: 80, competition: 62, total: 74 }, grade: 'B' },
  { code: '4514000', sido: '전북특별자치도', sigungu: '군산시', dong: '군산', voters: 220000, population: 275000, age_20s_pct: 18, age_30s_pct: 18, age_40s_pct: 20, age_50s_pct: 22, age_60plus_pct: 22, floating_pop: 110000, competitors: 3, past_turnout: 57.5, lat: 35.9676, lng: 126.7369, scores: { voter_density: 72, accessibility: 72, cost_efficiency: 78, coverage: 78, competition: 65, total: 73 }, grade: 'B' },
  { code: '4518000', sido: '전북특별자치도', sigungu: '정읍시', dong: '정읍', voters: 88000, population: 110000, age_20s_pct: 14, age_30s_pct: 14, age_40s_pct: 18, age_50s_pct: 24, age_60plus_pct: 30, floating_pop: 40000, competitors: 2, past_turnout: 60.2, lat: 35.5699, lng: 126.8561, scores: { voter_density: 50, accessibility: 55, cost_efficiency: 88, coverage: 80, competition: 78, total: 69 }, grade: 'C' },

  // ─── 전라남도 (4) ───
  { code: '4611000', sido: '전라남도', sigungu: '목포시', dong: '목포', voters: 185000, population: 225000, age_20s_pct: 18, age_30s_pct: 18, age_40s_pct: 18, age_50s_pct: 22, age_60plus_pct: 24, floating_pop: 120000, competitors: 3, past_turnout: 61.5, lat: 34.8118, lng: 126.3922, scores: { voter_density: 72, accessibility: 75, cost_efficiency: 75, coverage: 80, competition: 68, total: 74 }, grade: 'B' },
  { code: '4613000', sido: '전라남도', sigungu: '여수시', dong: '여수', voters: 230000, population: 290000, age_20s_pct: 16, age_30s_pct: 18, age_40s_pct: 20, age_50s_pct: 24, age_60plus_pct: 22, floating_pop: 130000, competitors: 4, past_turnout: 59.8, lat: 34.7604, lng: 127.6622, scores: { voter_density: 70, accessibility: 68, cost_efficiency: 78, coverage: 78, competition: 62, total: 72 }, grade: 'B' },
  { code: '4615000', sido: '전라남도', sigungu: '순천시', dong: '순천', voters: 220000, population: 280000, age_20s_pct: 18, age_30s_pct: 20, age_40s_pct: 20, age_50s_pct: 22, age_60plus_pct: 20, floating_pop: 120000, competitors: 4, past_turnout: 60.5, lat: 34.9506, lng: 127.4874, scores: { voter_density: 72, accessibility: 70, cost_efficiency: 78, coverage: 80, competition: 62, total: 73 }, grade: 'B' },
  { code: '4617000', sido: '전라남도', sigungu: '나주시', dong: '나주', voters: 85000, population: 115000, age_20s_pct: 14, age_30s_pct: 16, age_40s_pct: 18, age_50s_pct: 24, age_60plus_pct: 28, floating_pop: 45000, competitors: 2, past_turnout: 62.8, lat: 35.0159, lng: 126.7109, scores: { voter_density: 48, accessibility: 58, cost_efficiency: 85, coverage: 78, competition: 80, total: 68 }, grade: 'C' },

  // ─── 경상북도 (4) ───
  { code: '4711100', sido: '경상북도', sigungu: '포항시', dong: '포항', voters: 400000, population: 510000, age_20s_pct: 18, age_30s_pct: 20, age_40s_pct: 20, age_50s_pct: 22, age_60plus_pct: 20, floating_pop: 200000, competitors: 5, past_turnout: 55.5, lat: 36.0190, lng: 129.3435, scores: { voter_density: 78, accessibility: 72, cost_efficiency: 72, coverage: 78, competition: 55, total: 72 }, grade: 'B' },
  { code: '4719000', sido: '경상북도', sigungu: '구미시', dong: '구미', voters: 330000, population: 420000, age_20s_pct: 20, age_30s_pct: 22, age_40s_pct: 22, age_50s_pct: 20, age_60plus_pct: 16, floating_pop: 160000, competitors: 4, past_turnout: 54.8, lat: 36.1196, lng: 128.3446, scores: { voter_density: 80, accessibility: 72, cost_efficiency: 75, coverage: 78, competition: 60, total: 74 }, grade: 'B' },
  { code: '4713000', sido: '경상북도', sigungu: '경주시', dong: '경주', voters: 210000, population: 260000, age_20s_pct: 16, age_30s_pct: 18, age_40s_pct: 18, age_50s_pct: 24, age_60plus_pct: 24, floating_pop: 130000, competitors: 3, past_turnout: 56.2, lat: 35.8562, lng: 129.2247, scores: { voter_density: 65, accessibility: 68, cost_efficiency: 78, coverage: 78, competition: 68, total: 71 }, grade: 'B' },
  { code: '4717000', sido: '경상북도', sigungu: '안동시', dong: '안동', voters: 130000, population: 160000, age_20s_pct: 16, age_30s_pct: 16, age_40s_pct: 18, age_50s_pct: 24, age_60plus_pct: 26, floating_pop: 65000, competitors: 3, past_turnout: 59.5, lat: 36.5684, lng: 128.7295, scores: { voter_density: 55, accessibility: 58, cost_efficiency: 82, coverage: 78, competition: 70, total: 68 }, grade: 'C' },

  // ─── 경상남도 (5) ───
  { code: '4812100', sido: '경상남도', sigungu: '창원시', dong: '창원', voters: 800000, population: 1040000, age_20s_pct: 18, age_30s_pct: 22, age_40s_pct: 22, age_50s_pct: 20, age_60plus_pct: 18, floating_pop: 380000, competitors: 6, past_turnout: 55.8, lat: 35.2285, lng: 128.6811, scores: { voter_density: 88, accessibility: 80, cost_efficiency: 65, coverage: 80, competition: 48, total: 74 }, grade: 'B' },
  { code: '4825000', sido: '경상남도', sigungu: '김해시', dong: '김해', voters: 430000, population: 550000, age_20s_pct: 18, age_30s_pct: 24, age_40s_pct: 24, age_50s_pct: 18, age_60plus_pct: 16, floating_pop: 180000, competitors: 5, past_turnout: 54.5, lat: 35.2341, lng: 128.8899, scores: { voter_density: 85, accessibility: 75, cost_efficiency: 72, coverage: 78, competition: 52, total: 74 }, grade: 'B' },
  { code: '4817000', sido: '경상남도', sigungu: '진주시', dong: '진주', voters: 270000, population: 340000, age_20s_pct: 20, age_30s_pct: 20, age_40s_pct: 20, age_50s_pct: 20, age_60plus_pct: 20, floating_pop: 140000, competitors: 4, past_turnout: 57.2, lat: 35.1798, lng: 128.1076, scores: { voter_density: 75, accessibility: 72, cost_efficiency: 78, coverage: 80, competition: 62, total: 74 }, grade: 'B' },
  { code: '4833000', sido: '경상남도', sigungu: '양산시', dong: '양산', voters: 280000, population: 370000, age_20s_pct: 18, age_30s_pct: 24, age_40s_pct: 24, age_50s_pct: 18, age_60plus_pct: 16, floating_pop: 120000, competitors: 4, past_turnout: 53.8, lat: 35.3350, lng: 129.0373, scores: { voter_density: 78, accessibility: 72, cost_efficiency: 75, coverage: 78, competition: 60, total: 73 }, grade: 'B' },
  { code: '4831000', sido: '경상남도', sigungu: '거제시', dong: '거제', voters: 190000, population: 240000, age_20s_pct: 16, age_30s_pct: 20, age_40s_pct: 22, age_50s_pct: 22, age_60plus_pct: 20, floating_pop: 70000, competitors: 3, past_turnout: 55.2, lat: 34.8806, lng: 128.6211, scores: { voter_density: 68, accessibility: 58, cost_efficiency: 78, coverage: 75, competition: 68, total: 70 }, grade: 'B' },

  // ─── 제주특별자치도 (2) ───
  { code: '5011000', sido: '제주특별자치도', sigungu: '제주시', dong: '제주', voters: 360000, population: 490000, age_20s_pct: 18, age_30s_pct: 22, age_40s_pct: 22, age_50s_pct: 20, age_60plus_pct: 18, floating_pop: 200000, competitors: 4, past_turnout: 58.5, lat: 33.5097, lng: 126.5219, scores: { voter_density: 75, accessibility: 72, cost_efficiency: 70, coverage: 78, competition: 60, total: 72 }, grade: 'B' },
  { code: '5013000', sido: '제주특별자치도', sigungu: '서귀포시', dong: '서귀포', voters: 140000, population: 185000, age_20s_pct: 16, age_30s_pct: 18, age_40s_pct: 20, age_50s_pct: 24, age_60plus_pct: 22, floating_pop: 100000, competitors: 3, past_turnout: 60.2, lat: 33.2541, lng: 126.5600, scores: { voter_density: 58, accessibility: 62, cost_efficiency: 80, coverage: 78, competition: 72, total: 70 }, grade: 'B' }
];

/* ══════════════════════════════════════════════
   전국 유세 거점 (~250개)
   ══════════════════════════════════════════════ */
var _spotId = 0;
function _s(name, lat, lng, type, district, voterReach, peakHour, dailyCost) {
  return { id: ++_spotId, name: name, lat: lat, lng: lng, type: type, district: district, voterReach: voterReach, peakHour: peakHour, dailyCost: dailyCost };
}

const CAMPAIGN_SPOTS = [
  // ═══ 서울특별시 ═══
  // 종로구
  _s('광화문역', 37.5710, 126.9769, '교통', '종로구', 15000, '08:00', 200000),
  _s('종각역', 37.5700, 126.9830, '교통', '종로구', 12000, '12:00', 180000),
  _s('광장시장', 37.5702, 126.9993, '시장', '종로구', 8500, '10:00', 150000),
  _s('대학로', 37.5812, 127.0019, '상업', '종로구', 9000, '15:00', 160000),
  // 강남구
  _s('강남역', 37.4979, 127.0276, '교통', '강남구', 18000, '08:00', 250000),
  _s('삼성역(코엑스)', 37.5089, 127.0608, '교통', '강남구', 14000, '10:00', 220000),
  _s('압구정로데오역', 37.5272, 127.0401, '상업', '강남구', 10000, '14:00', 190000),
  _s('역삼역', 37.5006, 127.0367, '교통', '강남구', 13000, '08:00', 200000),
  // 송파구
  _s('잠실역', 37.5133, 127.1001, '교통', '송파구', 16000, '08:00', 230000),
  _s('석촌호수', 37.5085, 127.1015, '공원', '송파구', 8000, '16:00', 120000),
  _s('가락시장역', 37.4926, 127.1182, '시장', '송파구', 11000, '09:00', 170000),
  _s('송파구청', 37.5048, 127.1129, '관공서', '송파구', 6000, '10:00', 100000),
  // 마포구
  _s('홍대입구역', 37.5571, 126.9246, '교통', '마포구', 17000, '14:00', 240000),
  _s('합정역', 37.5497, 126.9142, '교통', '마포구', 11000, '08:00', 170000),
  _s('마포구청역', 37.5633, 126.9045, '관공서', '마포구', 6500, '10:00', 110000),
  _s('망원시장', 37.5560, 126.9075, '시장', '마포구', 7500, '09:00', 130000),
  // 영등포구
  _s('여의도역', 37.5216, 126.9243, '교통', '영등포구', 14000, '08:00', 210000),
  _s('영등포시장역', 37.5222, 126.9063, '시장', '영등포구', 10000, '10:00', 160000),
  _s('타임스퀘어', 37.5173, 126.9033, '상업', '영등포구', 12000, '15:00', 180000),
  // 노원구
  _s('노원역', 37.6554, 127.0614, '교통', '노원구', 13000, '08:00', 180000),
  _s('중계동 은행사거리', 37.6462, 127.0651, '상업', '노원구', 9000, '14:00', 140000),
  _s('노원구청', 37.6542, 127.0568, '관공서', '노원구', 5500, '10:00', 95000),
  // 관악구
  _s('서울대입구역', 37.4812, 126.9527, '교통', '관악구', 14000, '08:00', 190000),
  _s('신림역', 37.4848, 126.9296, '교통', '관악구', 12000, '08:00', 170000),
  _s('관악구청', 37.4784, 126.9516, '관공서', '관악구', 5500, '10:00', 95000),
  // 강서구
  _s('김포공항역', 37.5625, 126.8010, '교통', '강서구', 11000, '08:00', 170000),
  _s('발산역', 37.5583, 126.8388, '교통', '강서구', 10000, '08:00', 155000),
  _s('강서구청', 37.5510, 126.8495, '관공서', '강서구', 5500, '10:00', 95000),
  _s('마곡나루역', 37.5672, 126.8278, '교통', '강서구', 9500, '08:00', 150000),

  // ═══ 부산광역시 ═══
  // 해운대구
  _s('해운대역', 35.1627, 129.1600, '교통', '해운대구', 12000, '08:00', 180000),
  _s('해운대해수욕장', 35.1587, 129.1604, '관광', '해운대구', 15000, '14:00', 200000),
  _s('센텀시티역', 35.1698, 129.1318, '교통', '해운대구', 11000, '10:00', 170000),
  _s('해운대구청', 35.1631, 129.1635, '관공서', '해운대구', 6000, '10:00', 100000),
  // 부산진구
  _s('서면역', 35.1578, 129.0593, '교통', '부산진구', 16000, '08:00', 220000),
  _s('부전시장', 35.1600, 129.0604, '시장', '부산진구', 9000, '09:00', 140000),
  _s('부산진구청', 35.1629, 129.0532, '관공서', '부산진구', 5500, '10:00', 95000),
  // 남구
  _s('경성대부경대역', 35.1368, 129.0843, '교통', '남구', 10000, '12:00', 160000),
  _s('부산남구청', 35.1368, 129.0843, '관공서', '남구', 5000, '10:00', 90000),
  _s('용호동 이기대', 35.1187, 129.0918, '공원', '남구', 4500, '16:00', 80000),
  // 사하구
  _s('하단역', 35.1046, 128.9655, '교통', '사하구', 9000, '08:00', 145000),
  _s('괴정시장', 35.0988, 128.9873, '시장', '사하구', 7000, '09:00', 120000),
  _s('사하구청', 35.1046, 128.9747, '관공서', '사하구', 5000, '10:00', 90000),
  // 북구
  _s('구포역', 35.2009, 128.9893, '교통', '북구', 8000, '08:00', 140000),
  _s('구포시장', 35.1984, 128.9930, '시장', '북구', 7500, '09:00', 130000),
  _s('부산북구청', 35.1974, 129.0130, '관공서', '북구', 5000, '10:00', 90000),

  // ═══ 대구광역시 ═══
  // 수성구
  _s('수성못', 35.8270, 128.6230, '공원', '수성구', 8000, '16:00', 120000),
  _s('범어역', 35.8588, 128.6322, '교통', '수성구', 10000, '08:00', 160000),
  _s('수성구청', 35.8588, 128.6322, '관공서', '수성구', 5500, '10:00', 95000),
  // 달서구
  _s('성서산업단지역', 35.8453, 128.5247, '교통', '달서구', 9000, '08:00', 145000),
  _s('달서구청', 35.8299, 128.5328, '관공서', '달서구', 5500, '10:00', 95000),
  _s('이월드', 35.8536, 128.5601, '관광', '달서구', 7000, '15:00', 110000),
  // 북구
  _s('칠성시장', 35.8858, 128.5828, '시장', '북구', 8500, '09:00', 135000),
  _s('대구북구청', 35.8858, 128.5828, '관공서', '북구', 5000, '10:00', 90000),
  _s('엑스코(대구)', 35.9073, 128.6157, '관광', '북구', 7000, '10:00', 115000),
  // 중구
  _s('반월당역', 35.8661, 128.5935, '교통', '중구', 14000, '08:00', 200000),
  _s('서문시장', 35.8696, 128.5810, '시장', '중구', 12000, '09:00', 180000),
  _s('동성로', 35.8694, 128.5962, '상업', '중구', 13000, '14:00', 190000),

  // ═══ 인천광역시 ═══
  // 남동구
  _s('인천논현역', 37.3980, 126.7310, '교통', '남동구', 8000, '08:00', 140000),
  _s('소래포구', 37.3920, 126.7390, '관광', '남동구', 7000, '14:00', 120000),
  _s('남동구청', 37.4488, 126.7317, '관공서', '남동구', 5500, '10:00', 95000),
  _s('구월동 로데오', 37.4488, 126.7234, '상업', '남동구', 9500, '15:00', 155000),
  // 부평구
  _s('부평역', 37.4907, 126.7235, '교통', '부평구', 13000, '08:00', 190000),
  _s('부평시장', 37.4896, 126.7260, '시장', '부평구', 9000, '09:00', 145000),
  _s('부평구청', 37.5075, 126.7218, '관공서', '부평구', 5500, '10:00', 95000),
  // 연수구
  _s('송도역', 37.3818, 126.6568, '교통', '연수구', 9000, '08:00', 150000),
  _s('송도센트럴파크', 37.3809, 126.6612, '공원', '연수구', 7000, '16:00', 110000),
  _s('연수구청', 37.4101, 126.6783, '관공서', '연수구', 5000, '10:00', 90000),
  // 서구
  _s('검암역', 37.5570, 126.6810, '교통', '서구', 7000, '08:00', 125000),
  _s('청라호수공원', 37.5290, 126.6520, '공원', '서구', 6500, '16:00', 105000),
  _s('인천서구청', 37.5457, 126.6759, '관공서', '서구', 5000, '10:00', 90000),

  // ═══ 광주광역시 ═══
  // 북구
  _s('광주송정역(KTX)', 35.1378, 126.7928, '교통', '북구', 11000, '08:00', 170000),
  _s('양동시장', 35.1492, 126.9098, '시장', '북구', 8000, '09:00', 130000),
  _s('광주북구청', 35.1744, 126.9120, '관공서', '북구', 5500, '10:00', 95000),
  _s('전남대학교', 35.1763, 126.9127, '대학교', '북구', 5000, '12:00', 90000),
  // 서구
  _s('금남로', 35.1490, 126.9170, '상업', '서구', 10000, '14:00', 160000),
  _s('광주서구청', 35.1480, 126.8916, '관공서', '서구', 5000, '10:00', 90000),
  _s('상무지구', 35.1520, 126.8530, '상업', '서구', 9000, '15:00', 145000),
  // 광산구
  _s('수완지구', 35.1475, 126.8190, '주거', '광산구', 8000, '18:00', 130000),
  _s('하남산단', 35.1140, 126.8280, '상업', '광산구', 6000, '08:00', 110000),
  _s('광산구청', 35.1395, 126.7937, '관공서', '광산구', 5000, '10:00', 90000),

  // ═══ 대전광역시 ═══
  // 유성구
  _s('유성온천역', 36.3540, 127.3365, '교통', '유성구', 8000, '08:00', 140000),
  _s('카이스트', 36.3741, 127.3604, '대학교', '유성구', 5000, '12:00', 90000),
  _s('유성구청', 36.3623, 127.3563, '관공서', '유성구', 5000, '10:00', 90000),
  // 서구
  _s('대전역', 36.3328, 127.4346, '교통', '서구', 12000, '08:00', 180000),
  _s('둔산동 갤러리아', 36.3518, 127.3833, '상업', '서구', 10000, '14:00', 160000),
  _s('대전서구청', 36.3553, 127.3835, '관공서', '서구', 5500, '10:00', 95000),
  // 중구
  _s('중앙시장(대전)', 36.3255, 127.4217, '시장', '중구', 8000, '09:00', 130000),
  _s('대전중구청', 36.3255, 127.4217, '관공서', '중구', 5000, '10:00', 90000),
  _s('은행동 거리', 36.3277, 127.4249, '상업', '중구', 7500, '15:00', 125000),

  // ═══ 울산광역시 ═══
  // 남구
  _s('삼산동 먹거리타운', 35.5380, 129.3370, '상업', '남구', 9000, '12:00', 145000),
  _s('울산남구청', 35.5437, 129.3300, '관공서', '남구', 5500, '10:00', 95000),
  _s('신정시장', 35.5410, 129.3280, '시장', '남구', 7000, '09:00', 120000),
  // 중구
  _s('울산중구청', 35.5690, 129.3320, '관공서', '중구', 5500, '10:00', 95000),
  _s('성남동 문화거리', 35.5672, 129.3310, '상업', '중구', 8000, '14:00', 130000),
  _s('울산역(KTX)', 35.5549, 129.3570, '교통', '중구', 9000, '08:00', 150000),
  // 울주군
  _s('언양시장', 35.5640, 129.1270, '시장', '울주군', 5000, '09:00', 90000),
  _s('울주군청', 35.5225, 129.2430, '관공서', '울주군', 4500, '10:00', 85000),

  // ═══ 세종특별자치시 ═══
  _s('정부세종청사', 36.4998, 127.2549, '관공서', '세종시', 7000, '10:00', 120000),
  _s('세종호수공원', 36.4916, 127.2506, '공원', '세종시', 6000, '16:00', 100000),
  _s('조치원역', 36.6012, 127.2985, '교통', '세종시', 5500, '08:00', 95000),
  _s('고운동 상업지구', 36.5010, 127.2490, '상업', '세종시', 6500, '14:00', 110000),

  // ═══ 경기도 (기존 수원 중심 + 보완) ═══
  // 장안구
  _s('수원역', 37.2663, 127.0015, '교통', '장안구', 8500, '08:00', 150000),
  _s('장안문(북문)', 37.2879, 127.0125, '관광', '장안구', 5200, '14:00', 100000),
  _s('정자동 주민센터', 37.3012, 127.0058, '주거', '장안구', 4800, '10:00', 80000),
  _s('천천동 재래시장', 37.2985, 126.9892, '시장', '장안구', 6200, '09:00', 120000),
  _s('성균관대 정문', 37.2934, 126.9745, '대학교', '장안구', 3800, '12:00', 90000),
  // 권선구
  _s('세류역', 37.2590, 126.9920, '교통', '권선구', 5500, '08:00', 130000),
  _s('곡반정동 아파트단지', 37.2512, 126.9785, '주거', '권선구', 7200, '18:00', 110000),
  _s('권선구청', 37.2558, 126.9718, '관공서', '권선구', 4500, '10:00', 85000),
  _s('호매실 신도시', 37.2680, 126.9430, '주거', '권선구', 8000, '18:00', 140000),
  _s('권선시장', 37.2485, 126.9810, '시장', '권선구', 5800, '09:00', 110000),
  // 팔달구
  _s('팔달문(남문)', 37.2780, 127.0152, '관광', '팔달구', 9200, '15:00', 160000),
  _s('수원시청', 37.2636, 127.0286, '관공서', '팔달구', 5500, '10:00', 100000),
  _s('팔달구 지하상가', 37.2668, 127.0020, '상업', '팔달구', 7800, '14:00', 145000),
  _s('매산동 먹자골목', 37.2710, 127.0085, '상업', '팔달구', 6500, '12:00', 120000),
  _s('인계동 로데오거리', 37.2620, 127.0340, '상업', '팔달구', 7000, '19:00', 135000),
  // 영통구
  _s('광교중앙역', 37.2935, 127.0454, '교통', '영통구', 9800, '08:00', 170000),
  _s('영통역', 37.2527, 127.0558, '교통', '영통구', 7500, '08:00', 145000),
  _s('광교호수공원', 37.2880, 127.0530, '공원', '영통구', 6000, '16:00', 100000),
  _s('경희대 국제캠퍼스', 37.2434, 127.0797, '대학교', '영통구', 4200, '12:00', 95000),
  _s('영통 롯데마트', 37.2540, 127.0480, '상업', '영통구', 6800, '15:00', 125000),
  // 분당구
  _s('서현역', 37.3840, 127.1236, '교통', '분당구', 10500, '08:00', 180000),
  _s('판교역', 37.3948, 127.1112, '교통', '분당구', 12000, '08:00', 200000),
  _s('야탑역', 37.4112, 127.1268, '교통', '분당구', 8200, '08:00', 155000),
  _s('정자역 카페거리', 37.3670, 127.1080, '상업', '분당구', 7500, '14:00', 140000),
  _s('분당중앙공원', 37.3780, 127.1150, '공원', '분당구', 5500, '17:00', 95000),
  // 수지구
  _s('죽전역', 37.3245, 127.1077, '교통', '수지구', 7800, '08:00', 150000),
  _s('수지구청', 37.3220, 127.0960, '관공서', '수지구', 4000, '10:00', 85000),
  _s('풍덕천 상가', 37.3280, 127.0880, '상업', '수지구', 5500, '15:00', 110000),
  // 동탄
  _s('동탄역', 37.2009, 127.0966, '교통', '동탄', 11000, '08:00', 185000),
  _s('동탄호수공원', 37.2080, 127.0620, '공원', '동탄', 7200, '17:00', 110000),
  _s('동탄 센트럴파크', 37.2050, 127.0780, '공원', '동탄', 6800, '16:00', 100000),
  // 만안구, 평택, 오산, 군포, 의왕
  _s('안양역', 37.4011, 126.9225, '교통', '만안구', 8800, '08:00', 160000),
  _s('범계역', 37.3897, 126.9512, '교통', '만안구', 9500, '08:00', 170000),
  _s('평택역', 36.9912, 127.0856, '교통', '평택', 7000, '08:00', 135000),
  _s('평택시청', 36.9921, 127.1128, '관공서', '평택', 4500, '10:00', 85000),
  _s('오산역', 37.1485, 127.0690, '교통', '오산', 5800, '08:00', 115000),
  _s('군포역', 37.3610, 126.9348, '교통', '군포', 6200, '08:00', 120000),
  _s('의왕역', 37.3448, 126.9682, '교통', '의왕', 4500, '08:00', 95000),
  _s('화서역', 37.2848, 126.9897, '교통', '장안구', 6500, '08:00', 125000),
  _s('매탄권선역', 37.2628, 127.0295, '교통', '영통구', 5200, '08:00', 110000),
  _s('망포역', 37.2445, 127.0560, '교통', '영통구', 6800, '08:00', 130000),

  // ═══ 강원특별자치도 ═══
  // 춘천
  _s('춘천역', 37.8840, 127.7174, '교통', '춘천', 7000, '08:00', 125000),
  _s('중앙시장(춘천)', 37.8782, 127.7306, '시장', '춘천', 6000, '09:00', 110000),
  _s('춘천시청', 37.8813, 127.7298, '관공서', '춘천', 5000, '10:00', 90000),
  _s('강원대학교', 37.8681, 127.7428, '대학교', '춘천', 4000, '12:00', 80000),
  // 원주
  _s('원주역', 37.3222, 127.9533, '교통', '원주', 7500, '08:00', 130000),
  _s('원주시청', 37.3422, 127.9209, '관공서', '원주', 5000, '10:00', 90000),
  _s('중앙시장(원주)', 37.3438, 127.9460, '시장', '원주', 5500, '09:00', 100000),
  _s('혁신도시(원주)', 37.2850, 127.9510, '주거', '원주', 6000, '18:00', 105000),
  // 강릉
  _s('강릉역(KTX)', 37.7643, 128.8963, '교통', '강릉', 8000, '08:00', 140000),
  _s('중앙시장(강릉)', 37.7550, 128.8962, '시장', '강릉', 5500, '09:00', 100000),
  _s('강릉시청', 37.7519, 128.8761, '관공서', '강릉', 4500, '10:00', 85000),
  // 속초
  _s('속초시청', 38.2070, 128.5918, '관공서', '속초', 4000, '10:00', 80000),
  _s('속초관광수산시장', 38.2050, 128.5930, '시장', '속초', 5500, '10:00', 95000),
  _s('속초해수욕장', 38.1900, 128.6040, '관광', '속초', 6000, '14:00', 100000),

  // ═══ 충청북도 ═══
  // 청주
  _s('청주역(KTX)', 36.6332, 127.4898, '교통', '청주', 8000, '08:00', 140000),
  _s('성안길(청주)', 36.6370, 127.4910, '상업', '청주', 9000, '14:00', 150000),
  _s('청주시청', 36.6424, 127.4890, '관공서', '청주', 5500, '10:00', 95000),
  _s('충북대학교', 36.6284, 127.4570, '대학교', '청주', 4500, '12:00', 85000),
  // 충주
  _s('충주시청', 36.9910, 127.9260, '관공서', '충주', 5000, '10:00', 90000),
  _s('자유시장(충주)', 36.9780, 127.9370, '시장', '충주', 5500, '09:00', 100000),
  _s('건국대 글로컬캠퍼스', 36.9680, 127.9380, '대학교', '충주', 3500, '12:00', 75000),
  // 제천
  _s('제천역', 37.1340, 128.1948, '교통', '제천', 4500, '08:00', 85000),
  _s('제천시청', 37.1325, 128.1910, '관공서', '제천', 4000, '10:00', 80000),
  _s('중앙시장(제천)', 37.1310, 128.1920, '시장', '제천', 4500, '09:00', 85000),

  // ═══ 충청남도 ═══
  // 천안
  _s('천안역(KTX)', 36.8097, 127.1484, '교통', '천안', 10000, '08:00', 165000),
  _s('두정동 신도시', 36.8360, 127.1350, '주거', '천안', 7500, '18:00', 125000),
  _s('천안시청', 36.8151, 127.1139, '관공서', '천안', 5500, '10:00', 95000),
  _s('단국대학교', 36.7997, 127.1271, '대학교', '천안', 4500, '12:00', 85000),
  // 아산
  _s('아산역(KTX)', 36.7898, 127.0060, '교통', '아산', 8000, '08:00', 140000),
  _s('온양온천역', 36.7849, 126.9970, '교통', '아산', 6500, '08:00', 115000),
  _s('아산시청', 36.7898, 127.0018, '관공서', '아산', 5000, '10:00', 90000),
  // 서산
  _s('서산시청', 36.7847, 126.4503, '관공서', '서산', 4500, '10:00', 85000),
  _s('서산버스터미널', 36.7835, 126.4490, '교통', '서산', 5000, '08:00', 90000),
  _s('동부시장(서산)', 36.7820, 126.4520, '시장', '서산', 5000, '09:00', 90000),
  // 논산
  _s('논산역', 36.1880, 127.0945, '교통', '논산', 4000, '08:00', 80000),
  _s('논산시청', 36.1872, 127.0987, '관공서', '논산', 3500, '10:00', 75000),
  _s('논산시장', 36.1850, 127.1010, '시장', '논산', 4000, '09:00', 80000),

  // ═══ 전북특별자치도 ═══
  // 전주
  _s('전주역', 35.8150, 127.1485, '교통', '전주', 8500, '08:00', 145000),
  _s('한옥마을', 35.8158, 127.1533, '관광', '전주', 10000, '14:00', 165000),
  _s('전주시청', 35.8242, 127.1480, '관공서', '전주', 5500, '10:00', 95000),
  _s('전북대학교', 35.8468, 127.1295, '대학교', '전주', 5000, '12:00', 90000),
  _s('객사거리', 35.8210, 127.1460, '상업', '전주', 8000, '15:00', 135000),
  // 익산
  _s('익산역(KTX)', 35.9460, 126.9565, '교통', '익산', 7500, '08:00', 130000),
  _s('익산시청', 35.9483, 126.9577, '관공서', '익산', 5000, '10:00', 90000),
  _s('원광대학교', 35.9714, 126.9578, '대학교', '익산', 4000, '12:00', 80000),
  // 군산
  _s('군산역', 35.9830, 126.7135, '교통', '군산', 6000, '08:00', 110000),
  _s('군산시청', 35.9676, 126.7369, '관공서', '군산', 5000, '10:00', 90000),
  _s('군산근대문화거리', 35.9880, 126.7100, '관광', '군산', 6500, '14:00', 115000),
  // 정읍
  _s('정읍역', 35.5710, 126.8515, '교통', '정읍', 4000, '08:00', 80000),
  _s('정읍시청', 35.5699, 126.8561, '관공서', '정읍', 3500, '10:00', 75000),

  // ═══ 전라남도 ═══
  // 목포
  _s('목포역(KTX)', 34.7912, 126.3850, '교통', '목포', 7500, '08:00', 130000),
  _s('목포시청', 34.8118, 126.3922, '관공서', '목포', 5000, '10:00', 90000),
  _s('유달산', 34.7870, 126.3792, '관광', '목포', 5000, '16:00', 90000),
  // 여수
  _s('여수엑스포역(KTX)', 34.7482, 127.7397, '교통', '여수', 8000, '08:00', 140000),
  _s('여수시청', 34.7604, 127.6622, '관공서', '여수', 5000, '10:00', 90000),
  _s('여수밤바다', 34.7440, 127.7398, '관광', '여수', 7000, '19:00', 120000),
  // 순천
  _s('순천역(KTX)', 34.9520, 127.4940, '교통', '순천', 7500, '08:00', 130000),
  _s('순천시청', 34.9506, 127.4874, '관공서', '순천', 5000, '10:00', 90000),
  _s('순천만습지', 34.8868, 127.5092, '관광', '순천', 6000, '14:00', 100000),
  // 나주
  _s('나주역(KTX)', 35.0136, 126.7228, '교통', '나주', 5000, '08:00', 90000),
  _s('나주시청', 35.0159, 126.7109, '관공서', '나주', 3500, '10:00', 75000),
  _s('혁신도시(나주)', 35.0170, 126.7820, '주거', '나주', 4500, '18:00', 85000),

  // ═══ 경상북도 ═══
  // 포항
  _s('포항역(KTX)', 35.9895, 129.3562, '교통', '포항', 8000, '08:00', 140000),
  _s('포항시청', 36.0190, 129.3435, '관공서', '포항', 5500, '10:00', 95000),
  _s('죽도시장', 36.0195, 129.3660, '시장', '포항', 7000, '09:00', 120000),
  _s('포스텍', 36.0110, 129.3245, '대학교', '포항', 3500, '12:00', 75000),
  // 구미
  _s('구미역', 36.1170, 128.3290, '교통', '구미', 7000, '08:00', 125000),
  _s('구미시청', 36.1196, 128.3446, '관공서', '구미', 5000, '10:00', 90000),
  _s('금오산공원', 36.1045, 128.3450, '공원', '구미', 4500, '16:00', 85000),
  // 경주
  _s('신경주역(KTX)', 35.8640, 129.2215, '교통', '경주', 7500, '08:00', 130000),
  _s('경주시청', 35.8562, 129.2247, '관공서', '경주', 5000, '10:00', 90000),
  _s('대릉원', 35.8420, 129.2150, '관광', '경주', 6500, '14:00', 110000),
  // 안동
  _s('안동역', 36.5720, 128.7235, '교통', '안동', 5000, '08:00', 90000),
  _s('안동시청', 36.5684, 128.7295, '관공서', '안동', 4000, '10:00', 80000),
  _s('안동찜닭골목', 36.5670, 128.7280, '상업', '안동', 5000, '12:00', 90000),

  // ═══ 경상남도 ═══
  // 창원
  _s('창원역', 35.2370, 128.6810, '교통', '창원', 9000, '08:00', 150000),
  _s('창원시청', 35.2285, 128.6811, '관공서', '창원', 6000, '10:00', 100000),
  _s('마산어시장', 35.1820, 128.5720, '시장', '창원', 7500, '09:00', 125000),
  _s('창원대학교', 35.2460, 128.6920, '대학교', '창원', 4500, '12:00', 85000),
  // 김해
  _s('김해시청', 35.2341, 128.8899, '관공서', '김해', 5500, '10:00', 95000),
  _s('장유역', 35.1890, 128.8245, '교통', '김해', 7500, '08:00', 130000),
  _s('김해시장', 35.2355, 128.8810, '시장', '김해', 6000, '09:00', 110000),
  // 진주
  _s('진주역', 35.1530, 128.0930, '교통', '진주', 6500, '08:00', 115000),
  _s('진주시청', 35.1798, 128.1076, '관공서', '진주', 5000, '10:00', 90000),
  _s('진주중앙시장', 35.1930, 128.0830, '시장', '진주', 5500, '09:00', 100000),
  // 양산
  _s('양산역', 35.3420, 129.0310, '교통', '양산', 7000, '08:00', 125000),
  _s('양산시청', 35.3350, 129.0373, '관공서', '양산', 5000, '10:00', 90000),
  _s('양산물금역', 35.3110, 128.9900, '교통', '양산', 6000, '08:00', 110000),
  // 거제
  _s('거제시청', 34.8806, 128.6211, '관공서', '거제', 4500, '10:00', 85000),
  _s('고현시장', 34.8810, 128.6200, '시장', '거제', 5000, '09:00', 90000),
  _s('옥포시장', 34.8975, 128.6890, '시장', '거제', 4500, '09:00', 85000),

  // ═══ 제주특별자치도 ═══
  // 제주시
  _s('제주시청', 33.5097, 126.5219, '관공서', '제주', 6000, '10:00', 100000),
  _s('제주국제공항', 33.5066, 126.4930, '교통', '제주', 12000, '08:00', 180000),
  _s('동문시장', 33.5120, 126.5280, '시장', '제주', 8000, '09:00', 135000),
  _s('제주대학교', 33.4571, 126.5617, '대학교', '제주', 4000, '12:00', 80000),
  _s('연동 누웨마루거리', 33.4889, 126.4925, '상업', '제주', 7500, '15:00', 125000),
  // 서귀포시
  _s('서귀포시청', 33.2541, 126.5600, '관공서', '서귀포', 5000, '10:00', 90000),
  _s('서귀포매일올레시장', 33.2487, 126.5670, '시장', '서귀포', 6000, '10:00', 100000),
  _s('중문관광단지', 33.2560, 126.4120, '관광', '서귀포', 7000, '14:00', 120000)
];

/* ── 과거 선거 결과 (전국) ── */
const PAST_ELECTIONS = [
  // 수원
  { year: 2022, type: '지방선거', district: '수원시장', turnout: 50.9, winner: 'A후보', winnerParty: '국민의힘', winnerVotes: 312450, totalVotes: 580000 },
  { year: 2022, type: '지방선거', district: '경기도지사', turnout: 50.9, winner: 'B후보', winnerParty: '국민의힘', winnerVotes: 3850000, totalVotes: 7200000 },
  { year: 2024, type: '국회의원', district: '수원갑', turnout: 67.0, winner: 'C후보', winnerParty: '더불어민주당', winnerVotes: 98500, totalVotes: 145000 },
  { year: 2024, type: '국회의원', district: '수원을', turnout: 66.2, winner: 'D후보', winnerParty: '더불어민주당', winnerVotes: 102000, totalVotes: 150000 },
  // 서울
  { year: 2022, type: '지방선거', district: '서울시장', turnout: 59.0, winner: 'E후보', winnerParty: '국민의힘', winnerVotes: 3120000, totalVotes: 5200000 },
  { year: 2024, type: '국회의원', district: '종로구', turnout: 68.5, winner: 'F후보', winnerParty: '더불어민주당', winnerVotes: 62000, totalVotes: 95000 },
  { year: 2024, type: '국회의원', district: '강남갑', turnout: 66.8, winner: 'G후보', winnerParty: '국민의힘', winnerVotes: 89000, totalVotes: 140000 },
  // 부산
  { year: 2022, type: '지방선거', district: '부산시장', turnout: 48.2, winner: 'H후보', winnerParty: '국민의힘', winnerVotes: 1150000, totalVotes: 1900000 },
  { year: 2024, type: '국회의원', district: '해운대갑', turnout: 62.5, winner: 'I후보', winnerParty: '국민의힘', winnerVotes: 75000, totalVotes: 125000 },
  // 대구
  { year: 2022, type: '지방선거', district: '대구시장', turnout: 47.5, winner: 'J후보', winnerParty: '국민의힘', winnerVotes: 820000, totalVotes: 1350000 },
  // 인천
  { year: 2022, type: '지방선거', district: '인천시장', turnout: 49.8, winner: 'K후보', winnerParty: '더불어민주당', winnerVotes: 980000, totalVotes: 1600000 },
  // 광주
  { year: 2022, type: '지방선거', district: '광주시장', turnout: 45.2, winner: 'L후보', winnerParty: '더불어민주당', winnerVotes: 420000, totalVotes: 650000 },
  // 대전
  { year: 2022, type: '지방선거', district: '대전시장', turnout: 48.5, winner: 'M후보', winnerParty: '더불어민주당', winnerVotes: 380000, totalVotes: 620000 },
  // 제주
  { year: 2022, type: '지방선거', district: '제주도지사', turnout: 52.8, winner: 'N후보', winnerParty: '무소속', winnerVotes: 155000, totalVotes: 280000 }
];

/* ── 비용 단가 ── */
const COST_TABLE = {
  vehicleRental: { label: '차량 대여비', daily: 250000, desc: '1톤 유세차량 + 음향장비' },
  fuel: { label: '유류비', daily: 80000, desc: '하루 평균 150km 운행 기준' },
  driver: { label: '운전기사 일당', daily: 150000, desc: '경력 운전기사 기준' },
  sound: { label: '음향장비 운영', daily: 50000, desc: '앰프, 스피커 유지보수' },
  assistant: { label: '수행원 일당', daily: 100000, desc: '차량당 1명' },
  banner: { label: '현수막/래핑', once: 500000, desc: '차량 1대 기준' },
  parking: { label: '주차/톨비', daily: 30000, desc: '일 평균' },
  insurance: { label: '보험료', daily: 20000, desc: '일일 환산' }
};

/* ── 시간대별 유동인구 패턴 (비율) ── */
const TIME_PATTERNS = {
  '역세권': [0.3, 0.2, 0.15, 0.1, 0.08, 0.15, 0.6, 0.9, 1.0, 0.7, 0.5, 0.5, 0.6, 0.5, 0.5, 0.5, 0.5, 0.7, 1.0, 0.8, 0.5, 0.4, 0.35, 0.3],
  '시장': [0.1, 0.05, 0.05, 0.05, 0.1, 0.2, 0.4, 0.6, 0.9, 1.0, 0.95, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.15, 0.1, 0.1, 0.1, 0.1, 0.1],
  '아파트단지': [0.2, 0.15, 0.1, 0.1, 0.1, 0.15, 0.3, 0.4, 0.3, 0.25, 0.3, 0.35, 0.3, 0.3, 0.35, 0.4, 0.5, 0.7, 0.9, 1.0, 0.8, 0.5, 0.35, 0.25],
  '대학교': [0.05, 0.05, 0.05, 0.05, 0.05, 0.1, 0.2, 0.4, 0.7, 0.9, 1.0, 0.95, 0.8, 0.85, 0.9, 0.8, 0.6, 0.4, 0.3, 0.2, 0.15, 0.1, 0.1, 0.05],
  '공원': [0.05, 0.05, 0.05, 0.05, 0.1, 0.2, 0.4, 0.5, 0.5, 0.5, 0.55, 0.6, 0.5, 0.5, 0.55, 0.65, 0.8, 1.0, 0.9, 0.6, 0.3, 0.15, 0.1, 0.05]
};

/* ── 경쟁 후보 샘플 (전국 주요 선거구) ── */
const COMPETITORS = [
  // 수원시장
  { id: 1, name: '김영수', party: '더불어민주당', color: '#1a73e8', district: '수원시장', strength: ['조직력', '인지도'], weakness: ['젊은층 약세'], mainAreas: ['팔달구', '권선구'] },
  { id: 2, name: '박지원', party: '국민의힘', color: '#e8361a', district: '수원시장', strength: ['정책력', '미디어'], weakness: ['지역 기반 약세'], mainAreas: ['영통구', '장안구'] },
  { id: 3, name: '이수진', party: '무소속', color: '#6b7280', district: '수원시장', strength: ['참신함', 'SNS'], weakness: ['조직 부족'], mainAreas: ['영통구'] },
  // 서울시장
  { id: 4, name: '정민호', party: '더불어민주당', color: '#1a73e8', district: '서울시장', strength: ['정책력', '조직력'], weakness: ['고령층 약세'], mainAreas: ['마포구', '영등포구', '관악구'] },
  { id: 5, name: '한승기', party: '국민의힘', color: '#e8361a', district: '서울시장', strength: ['인지도', '미디어'], weakness: ['청년층 약세'], mainAreas: ['강남구', '송파구', '강서구'] },
  { id: 6, name: '최은정', party: '무소속', color: '#6b7280', district: '서울시장', strength: ['참신함', 'SNS'], weakness: ['조직 부족'], mainAreas: ['마포구', '종로구'] },
  // 부산시장
  { id: 7, name: '오태영', party: '국민의힘', color: '#e8361a', district: '부산시장', strength: ['지역 기반', '조직력'], weakness: ['청년층 약세'], mainAreas: ['해운대구', '부산진구'] },
  { id: 8, name: '강서윤', party: '더불어민주당', color: '#1a73e8', district: '부산시장', strength: ['정책력', 'SNS'], weakness: ['조직 약세'], mainAreas: ['남구', '북구'] },
  // 대구시장
  { id: 9, name: '배준혁', party: '국민의힘', color: '#e8361a', district: '대구시장', strength: ['지역 기반', '인지도'], weakness: ['젊은층 약세'], mainAreas: ['수성구', '달서구'] },
  { id: 10, name: '윤하나', party: '더불어민주당', color: '#1a73e8', district: '대구시장', strength: ['참신함', '정책력'], weakness: ['조직 약세'], mainAreas: ['북구', '중구'] },
  // 인천시장
  { id: 11, name: '임재훈', party: '더불어민주당', color: '#1a73e8', district: '인천시장', strength: ['조직력', '인지도'], weakness: ['신도시 약세'], mainAreas: ['부평구', '남동구'] },
  { id: 12, name: '서영진', party: '국민의힘', color: '#e8361a', district: '인천시장', strength: ['정책력', '미디어'], weakness: ['구도심 약세'], mainAreas: ['연수구', '서구'] }
];

/* ══════════════════════════════════════════════
   유틸리티 / 헬퍼 함수
   ══════════════════════════════════════════════ */

/* 시·도 목록 (순서 유지) */
function getSidoList() {
  var seen = {};
  var list = [];
  DISTRICTS.forEach(function(d) {
    if (!seen[d.sido]) { seen[d.sido] = true; list.push(d.sido); }
  });
  return list;
}

/* 시·도 기반 선거구 필터 */
function getDistrictsBySido(sido) {
  return DISTRICTS.filter(function(d) { return d.sido === sido; });
}

/* 시·도 기반 유세 거점 필터 */
function getSpotsBySido(sido) {
  var dongs = getDistrictsBySido(sido).map(function(d) { return d.dong; });
  return CAMPAIGN_SPOTS.filter(function(s) { return dongs.indexOf(s.district) >= 0; });
}

/* 선거구 코드로 찾기 */
function findDistrict(code) {
  return DISTRICTS.find(function(d) { return d.code === code; });
}

/* 이름으로 찾기 */
function findDistrictByName(name) {
  return DISTRICTS.find(function(d) { return d.dong.indexOf(name) >= 0 || d.sigungu.indexOf(name) >= 0; });
}

/* 선거구(dong)에 해당하는 유세 거점 */
function getSpotsForDistrict(districtName) {
  return CAMPAIGN_SPOTS.filter(function(s) { return s.district === districtName; });
}

/* 선거 유형 찾기 */
function getElectionType(id) {
  return ELECTION_TYPES.find(function(e) { return e.id === id; });
}
