/* ═══════════════════════════════════════════
   일렉션맵AI — mock-data.js (목업 데이터)
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

/* ── 수원시 중심 선거구 데이터 (12개) ── */
const DISTRICTS = [
  {
    code: '4111100', sido: '경기도', sigungu: '수원시', dong: '장안구',
    voters: 185000, population: 242000,
    age_20s_pct: 18, age_30s_pct: 22, age_40s_pct: 20, age_50s_pct: 18, age_60plus_pct: 22,
    floating_pop: 95000, competitors: 3, past_turnout: 52.3,
    lat: 37.3040, lng: 127.0100,
    scores: { voter_density: 78, accessibility: 85, cost_efficiency: 72, coverage: 80, competition: 65, total: 77 },
    grade: 'B'
  },
  {
    code: '4111300', sido: '경기도', sigungu: '수원시', dong: '권선구',
    voters: 210000, population: 285000,
    age_20s_pct: 16, age_30s_pct: 20, age_40s_pct: 22, age_50s_pct: 20, age_60plus_pct: 22,
    floating_pop: 88000, competitors: 4, past_turnout: 48.7,
    lat: 37.2575, lng: 126.9716,
    scores: { voter_density: 82, accessibility: 75, cost_efficiency: 80, coverage: 78, competition: 58, total: 76 },
    grade: 'B'
  },
  {
    code: '4111500', sido: '경기도', sigungu: '수원시', dong: '팔달구',
    voters: 145000, population: 178000,
    age_20s_pct: 20, age_30s_pct: 18, age_40s_pct: 19, age_50s_pct: 21, age_60plus_pct: 22,
    floating_pop: 120000, competitors: 3, past_turnout: 55.1,
    lat: 37.2820, lng: 127.0190,
    scores: { voter_density: 70, accessibility: 92, cost_efficiency: 65, coverage: 85, competition: 68, total: 76 },
    grade: 'B'
  },
  {
    code: '4111700', sido: '경기도', sigungu: '수원시', dong: '영통구',
    voters: 230000, population: 310000,
    age_20s_pct: 22, age_30s_pct: 28, age_40s_pct: 22, age_50s_pct: 16, age_60plus_pct: 12,
    floating_pop: 105000, competitors: 5, past_turnout: 58.2,
    lat: 37.2596, lng: 127.0460,
    scores: { voter_density: 88, accessibility: 80, cost_efficiency: 70, coverage: 82, competition: 52, total: 76 },
    grade: 'B'
  },
  {
    code: '4113100', sido: '경기도', sigungu: '성남시', dong: '분당구',
    voters: 320000, population: 420000,
    age_20s_pct: 15, age_30s_pct: 25, age_40s_pct: 25, age_50s_pct: 20, age_60plus_pct: 15,
    floating_pop: 150000, competitors: 6, past_turnout: 60.5,
    lat: 37.3825, lng: 127.1185,
    scores: { voter_density: 92, accessibility: 88, cost_efficiency: 55, coverage: 75, competition: 45, total: 74 },
    grade: 'B'
  },
  {
    code: '4113500', sido: '경기도', sigungu: '용인시', dong: '수지구',
    voters: 245000, population: 340000,
    age_20s_pct: 14, age_30s_pct: 22, age_40s_pct: 28, age_50s_pct: 20, age_60plus_pct: 16,
    floating_pop: 78000, competitors: 4, past_turnout: 56.8,
    lat: 37.3219, lng: 127.0981,
    scores: { voter_density: 85, accessibility: 72, cost_efficiency: 68, coverage: 70, competition: 60, total: 73 },
    grade: 'B'
  },
  {
    code: '4115100', sido: '경기도', sigungu: '화성시', dong: '동탄',
    voters: 280000, population: 380000,
    age_20s_pct: 20, age_30s_pct: 32, age_40s_pct: 24, age_50s_pct: 14, age_60plus_pct: 10,
    floating_pop: 92000, competitors: 5, past_turnout: 54.3,
    lat: 37.2061, lng: 127.0740,
    scores: { voter_density: 90, accessibility: 68, cost_efficiency: 78, coverage: 72, competition: 55, total: 75 },
    grade: 'B'
  },
  {
    code: '4117100', sido: '경기도', sigungu: '안양시', dong: '만안구',
    voters: 165000, population: 218000,
    age_20s_pct: 17, age_30s_pct: 19, age_40s_pct: 21, age_50s_pct: 22, age_60plus_pct: 21,
    floating_pop: 82000, competitors: 3, past_turnout: 51.9,
    lat: 37.3865, lng: 126.9192,
    scores: { voter_density: 72, accessibility: 82, cost_efficiency: 75, coverage: 78, competition: 70, total: 75 },
    grade: 'B'
  },
  {
    code: '4119100', sido: '경기도', sigungu: '평택시', dong: '평택',
    voters: 195000, population: 260000,
    age_20s_pct: 19, age_30s_pct: 21, age_40s_pct: 20, age_50s_pct: 19, age_60plus_pct: 21,
    floating_pop: 70000, competitors: 4, past_turnout: 49.5,
    lat: 36.9921, lng: 127.1128,
    scores: { voter_density: 75, accessibility: 65, cost_efficiency: 85, coverage: 70, competition: 62, total: 72 },
    grade: 'B'
  },
  {
    code: '4121100', sido: '경기도', sigungu: '오산시', dong: '오산',
    voters: 120000, population: 155000,
    age_20s_pct: 18, age_30s_pct: 24, age_40s_pct: 22, age_50s_pct: 18, age_60plus_pct: 18,
    floating_pop: 55000, competitors: 2, past_turnout: 50.8,
    lat: 37.1497, lng: 127.0693,
    scores: { voter_density: 65, accessibility: 70, cost_efficiency: 82, coverage: 75, competition: 78, total: 73 },
    grade: 'B'
  },
  {
    code: '4123100', sido: '경기도', sigungu: '군포시', dong: '군포',
    voters: 155000, population: 200000,
    age_20s_pct: 16, age_30s_pct: 20, age_40s_pct: 23, age_50s_pct: 21, age_60plus_pct: 20,
    floating_pop: 68000, competitors: 3, past_turnout: 53.2,
    lat: 37.3614, lng: 126.9352,
    scores: { voter_density: 70, accessibility: 78, cost_efficiency: 78, coverage: 80, competition: 68, total: 75 },
    grade: 'B'
  },
  {
    code: '4125100', sido: '경기도', sigungu: '의왕시', dong: '의왕',
    voters: 98000, population: 130000,
    age_20s_pct: 15, age_30s_pct: 18, age_40s_pct: 24, age_50s_pct: 22, age_60plus_pct: 21,
    floating_pop: 42000, competitors: 2, past_turnout: 55.6,
    lat: 37.3446, lng: 126.9685,
    scores: { voter_density: 58, accessibility: 72, cost_efficiency: 80, coverage: 82, competition: 80, total: 73 },
    grade: 'B'
  }
];

/* ── 유세 거점 (수원시 중심 60개) ── */
const CAMPAIGN_SPOTS = [
  // 수원시 장안구
  { id: 1, name: '수원역', lat: 37.2663, lng: 127.0015, type: '교통', district: '장안구', voterReach: 8500, peakHour: '08:00', dailyCost: 150000 },
  { id: 2, name: '장안문(북문)', lat: 37.2879, lng: 127.0125, type: '관광', district: '장안구', voterReach: 5200, peakHour: '14:00', dailyCost: 100000 },
  { id: 3, name: '정자동 주민센터', lat: 37.3012, lng: 127.0058, type: '주거', district: '장안구', voterReach: 4800, peakHour: '10:00', dailyCost: 80000 },
  { id: 4, name: '천천동 재래시장', lat: 37.2985, lng: 126.9892, type: '시장', district: '장안구', voterReach: 6200, peakHour: '09:00', dailyCost: 120000 },
  { id: 5, name: '성균관대 정문', lat: 37.2934, lng: 126.9745, type: '대학교', district: '장안구', voterReach: 3800, peakHour: '12:00', dailyCost: 90000 },
  // 수원시 권선구
  { id: 6, name: '세류역', lat: 37.2590, lng: 126.9920, type: '교통', district: '권선구', voterReach: 5500, peakHour: '08:00', dailyCost: 130000 },
  { id: 7, name: '곡반정동 아파트단지', lat: 37.2512, lng: 126.9785, type: '주거', district: '권선구', voterReach: 7200, peakHour: '18:00', dailyCost: 110000 },
  { id: 8, name: '권선구청', lat: 37.2558, lng: 126.9718, type: '관공서', district: '권선구', voterReach: 4500, peakHour: '10:00', dailyCost: 85000 },
  { id: 9, name: '호매실 신도시', lat: 37.2680, lng: 126.9430, type: '주거', district: '권선구', voterReach: 8000, peakHour: '18:00', dailyCost: 140000 },
  { id: 10, name: '권선시장', lat: 37.2485, lng: 126.9810, type: '시장', district: '권선구', voterReach: 5800, peakHour: '09:00', dailyCost: 110000 },
  // 수원시 팔달구
  { id: 11, name: '팔달문(남문)', lat: 37.2780, lng: 127.0152, type: '관광', district: '팔달구', voterReach: 9200, peakHour: '15:00', dailyCost: 160000 },
  { id: 12, name: '수원시청', lat: 37.2636, lng: 127.0286, type: '관공서', district: '팔달구', voterReach: 5500, peakHour: '10:00', dailyCost: 100000 },
  { id: 13, name: '팔달구 지하상가', lat: 37.2668, lng: 127.0020, type: '상업', district: '팔달구', voterReach: 7800, peakHour: '14:00', dailyCost: 145000 },
  { id: 14, name: '매산동 먹자골목', lat: 37.2710, lng: 127.0085, type: '상업', district: '팔달구', voterReach: 6500, peakHour: '12:00', dailyCost: 120000 },
  { id: 15, name: '인계동 로데오거리', lat: 37.2620, lng: 127.0340, type: '상업', district: '팔달구', voterReach: 7000, peakHour: '19:00', dailyCost: 135000 },
  // 수원시 영통구
  { id: 16, name: '광교중앙역', lat: 37.2935, lng: 127.0454, type: '교통', district: '영통구', voterReach: 9800, peakHour: '08:00', dailyCost: 170000 },
  { id: 17, name: '영통역', lat: 37.2527, lng: 127.0558, type: '교통', district: '영통구', voterReach: 7500, peakHour: '08:00', dailyCost: 145000 },
  { id: 18, name: '광교호수공원', lat: 37.2880, lng: 127.0530, type: '공원', district: '영통구', voterReach: 6000, peakHour: '16:00', dailyCost: 100000 },
  { id: 19, name: '경희대 국제캠퍼스', lat: 37.2434, lng: 127.0797, type: '대학교', district: '영통구', voterReach: 4200, peakHour: '12:00', dailyCost: 95000 },
  { id: 20, name: '영통 롯데마트', lat: 37.2540, lng: 127.0480, type: '상업', district: '영통구', voterReach: 6800, peakHour: '15:00', dailyCost: 125000 },
  // 분당
  { id: 21, name: '서현역', lat: 37.3840, lng: 127.1236, type: '교통', district: '분당구', voterReach: 10500, peakHour: '08:00', dailyCost: 180000 },
  { id: 22, name: '판교역', lat: 37.3948, lng: 127.1112, type: '교통', district: '분당구', voterReach: 12000, peakHour: '08:00', dailyCost: 200000 },
  { id: 23, name: '야탑역', lat: 37.4112, lng: 127.1268, type: '교통', district: '분당구', voterReach: 8200, peakHour: '08:00', dailyCost: 155000 },
  { id: 24, name: '정자역 카페거리', lat: 37.3670, lng: 127.1080, type: '상업', district: '분당구', voterReach: 7500, peakHour: '14:00', dailyCost: 140000 },
  { id: 25, name: '분당중앙공원', lat: 37.3780, lng: 127.1150, type: '공원', district: '분당구', voterReach: 5500, peakHour: '17:00', dailyCost: 95000 },
  // 용인 수지
  { id: 26, name: '죽전역', lat: 37.3245, lng: 127.1077, type: '교통', district: '수지구', voterReach: 7800, peakHour: '08:00', dailyCost: 150000 },
  { id: 27, name: '수지구청', lat: 37.3220, lng: 127.0960, type: '관공서', district: '수지구', voterReach: 4000, peakHour: '10:00', dailyCost: 85000 },
  { id: 28, name: '풍덕천 상가', lat: 37.3280, lng: 127.0880, type: '상업', district: '수지구', voterReach: 5500, peakHour: '15:00', dailyCost: 110000 },
  // 화성 동탄
  { id: 29, name: '동탄역', lat: 37.2009, lng: 127.0966, type: '교통', district: '동탄', voterReach: 11000, peakHour: '08:00', dailyCost: 185000 },
  { id: 30, name: '동탄호수공원', lat: 37.2080, lng: 127.0620, type: '공원', district: '동탄', voterReach: 7200, peakHour: '17:00', dailyCost: 110000 },
  { id: 31, name: '동탄 센트럴파크', lat: 37.2050, lng: 127.0780, type: '공원', district: '동탄', voterReach: 6800, peakHour: '16:00', dailyCost: 100000 },
  // 추가 거점들
  { id: 32, name: '안양역', lat: 37.4011, lng: 126.9225, type: '교통', district: '만안구', voterReach: 8800, peakHour: '08:00', dailyCost: 160000 },
  { id: 33, name: '범계역', lat: 37.3897, lng: 126.9512, type: '교통', district: '만안구', voterReach: 9500, peakHour: '08:00', dailyCost: 170000 },
  { id: 34, name: '평택역', lat: 36.9912, lng: 127.0856, type: '교통', district: '평택', voterReach: 7000, peakHour: '08:00', dailyCost: 135000 },
  { id: 35, name: '오산역', lat: 37.1485, lng: 127.0690, type: '교통', district: '오산', voterReach: 5800, peakHour: '08:00', dailyCost: 115000 },
  { id: 36, name: '군포역', lat: 37.3610, lng: 126.9348, type: '교통', district: '군포', voterReach: 6200, peakHour: '08:00', dailyCost: 120000 },
  { id: 37, name: '의왕역', lat: 37.3448, lng: 126.9682, type: '교통', district: '의왕', voterReach: 4500, peakHour: '08:00', dailyCost: 95000 },
  { id: 38, name: '화서역', lat: 37.2848, lng: 126.9897, type: '교통', district: '장안구', voterReach: 6500, peakHour: '08:00', dailyCost: 125000 },
  { id: 39, name: '매탄권선역', lat: 37.2628, lng: 127.0295, type: '교통', district: '영통구', voterReach: 5200, peakHour: '08:00', dailyCost: 110000 },
  { id: 40, name: '망포역', lat: 37.2445, lng: 127.0560, type: '교통', district: '영통구', voterReach: 6800, peakHour: '08:00', dailyCost: 130000 }
];

/* ── 과거 선거 결과 (수원시) ── */
const PAST_ELECTIONS = [
  { year: 2022, type: '지방선거', district: '수원시장', turnout: 50.9, winner: 'A후보', winnerParty: '국민의힘', winnerVotes: 312450, totalVotes: 580000 },
  { year: 2022, type: '지방선거', district: '경기도지사', turnout: 50.9, winner: 'B후보', winnerParty: '국민의힘', winnerVotes: 3850000, totalVotes: 7200000 },
  { year: 2024, type: '국회의원', district: '수원갑', turnout: 67.0, winner: 'C후보', winnerParty: '더불어민주당', winnerVotes: 98500, totalVotes: 145000 },
  { year: 2024, type: '국회의원', district: '수원을', turnout: 66.2, winner: 'D후보', winnerParty: '더불어민주당', winnerVotes: 102000, totalVotes: 150000 },
  { year: 2024, type: '국회의원', district: '수원병', turnout: 65.8, winner: 'E후보', winnerParty: '더불어민주당', winnerVotes: 95000, totalVotes: 142000 },
  { year: 2024, type: '국회의원', district: '수원정', turnout: 66.5, winner: 'F후보', winnerParty: '국민의힘', winnerVotes: 88000, totalVotes: 135000 }
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

/* ── 경쟁 후보 샘플 ── */
const COMPETITORS = [
  { id: 1, name: '김영수', party: '더불어민주당', color: '#1a73e8', district: '수원시장', strength: ['조직력', '인지도'], weakness: ['젊은층 약세'], mainAreas: ['팔달구', '권선구'] },
  { id: 2, name: '박지원', party: '국민의힘', color: '#e8361a', district: '수원시장', strength: ['정책력', '미디어'], weakness: ['지역 기반 약세'], mainAreas: ['영통구', '장안구'] },
  { id: 3, name: '이수진', party: '무소속', color: '#6b7280', district: '수원시장', strength: ['참신함', 'SNS'], weakness: ['조직 부족'], mainAreas: ['영통구'] }
];

/* ── 유틸: 선거구 찾기 ── */
function findDistrict(code) {
  return DISTRICTS.find(d => d.code === code);
}

function findDistrictByName(name) {
  return DISTRICTS.find(d => d.dong.includes(name) || d.sigungu.includes(name));
}

function getSpotsForDistrict(districtName) {
  return CAMPAIGN_SPOTS.filter(s => s.district === districtName);
}

function getElectionType(id) {
  return ELECTION_TYPES.find(e => e.id === id);
}
