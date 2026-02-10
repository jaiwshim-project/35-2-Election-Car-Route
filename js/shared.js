/* ═══════════════════════════════════════════
   일렉션맵AI — shared.js (공통 유틸·헤더·푸터)
   ═══════════════════════════════════════════ */

/* ── 유틸리티 ── */
function fmt(n) { return new Intl.NumberFormat('ko-KR').format(n); }
function fmtWon(n) { return n >= 100000000 ? (n / 100000000).toFixed(1) + '억원' : n >= 10000 ? (n / 10000).toFixed(0) + '만원' : fmt(n) + '원'; }
function getScoreColor(s) { return s >= 80 ? 'text-blue-600' : s >= 70 ? 'text-green-600' : s >= 60 ? 'text-yellow-600' : 'text-red-500'; }
function getScoreBg(s) { return s >= 80 ? 'bg-blue-50' : s >= 70 ? 'bg-green-50' : s >= 60 ? 'bg-yellow-50' : 'bg-red-50'; }
function getScoreBarColor(s) { return s >= 80 ? 'bg-blue-500' : s >= 70 ? 'bg-green-500' : s >= 60 ? 'bg-yellow-500' : 'bg-red-500'; }
function getGrade(s) { return s >= 80 ? 'A' : s >= 70 ? 'B' : s >= 60 ? 'C' : 'D'; }
function getGradeColor(g) {
  const m = { A: 'text-blue-600 bg-blue-50', B: 'text-green-600 bg-green-50', C: 'text-yellow-600 bg-yellow-50', D: 'text-red-600 bg-red-50' };
  return m[g] || 'text-gray-600 bg-gray-50';
}

/* ── 헤더 렌더링 ── */
function renderHeader(active) {
  const nav = [
    { href: 'dashboard.html', label: '대시보드', key: 'dashboard' },
    { href: 'voter-map.html', label: '유권자 분석', key: 'voter-map' },
    { href: 'route-optimizer.html', label: '경로 최적화', key: 'route' },
    { href: 'cost-analysis.html', label: '비용 분석', key: 'cost' },
    { href: 'competitor.html', label: '경쟁 분석', key: 'competitor' },
    { href: 'schedule.html', label: '일정 관리', key: 'schedule' },
    { href: 'election-types.html', label: '선거 유형', key: 'election-types' },
    { href: 'reports.html', label: 'AI 리포트', key: 'reports' },
    { href: 'simulation.html', label: '시뮬레이션', key: 'simulation' },
    { href: 'pricing.html', label: '요금제', key: 'pricing' }
  ];
  return `<header class="sticky top-0 z-50 bg-sky-100/90 backdrop-blur border-b border-sky-200">
<div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
<a href="index.html" class="flex items-center gap-2 shrink-0">
<div class="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center"><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg></div>
<span class="font-bold text-lg text-gray-900">일렉션맵<span class="text-blue-600">AI</span></span>
</a>
<nav class="hidden xl:flex items-center gap-1">${nav.map(n =>
    `<a href="${n.href}" class="px-3 py-2 rounded-lg text-sm font-medium transition ${active === n.key ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}">${n.label}</a>`
  ).join('')}</nav>
<div class="hidden xl:flex items-center gap-3">
<a href="dashboard.html" class="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm">무료 체험하기</a>
</div>
<button id="mobile-toggle" class="xl:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg" onclick="toggleMobileMenu()">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
</button>
</div>
<div id="mobile-menu" class="hidden xl:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1 shadow-lg">
${nav.map(n => `<a href="${n.href}" class="block px-3 py-2.5 rounded-lg text-sm ${active === n.key ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-gray-700 hover:bg-gray-50'}">${n.label}</a>`).join('')}
<a href="dashboard.html" class="block mt-2 text-center bg-blue-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg">무료 체험하기</a>
</div>
</header>`;
}

function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
}

/* ── 푸터 렌더링 ── */
function renderFooter() {
  return `<footer class="bg-gray-900 text-gray-400 py-16">
<div class="max-w-7xl mx-auto px-6">
<div class="grid md:grid-cols-4 gap-10">
<div>
<div class="flex items-center gap-2 mb-4"><div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"><svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg></div><span class="text-white font-bold">일렉션맵AI</span></div>
<p class="text-sm leading-relaxed">데이터 기반 AI 선거 전략 플랫폼.<br>선거 차량 최적화부터 유세 전략까지.</p>
</div>
<div>
<h4 class="text-white font-semibold mb-4">솔루션</h4>
<ul class="space-y-2 text-sm"><li><a href="voter-map.html" class="hover:text-white transition">유권자 분석</a></li><li><a href="route-optimizer.html" class="hover:text-white transition">경로 최적화</a></li><li><a href="cost-analysis.html" class="hover:text-white transition">비용 분석</a></li><li><a href="simulation.html" class="hover:text-white transition">시뮬레이션</a></li></ul>
</div>
<div>
<h4 class="text-white font-semibold mb-4">정보</h4>
<ul class="space-y-2 text-sm"><li><a href="election-types.html" class="hover:text-white transition">선거 유형별 전략</a></li><li><a href="pricing.html" class="hover:text-white transition">요금제</a></li><li><a href="reports.html" class="hover:text-white transition">AI 리포트</a></li></ul>
</div>
<div>
<h4 class="text-white font-semibold mb-4">고객지원</h4>
<ul class="space-y-2 text-sm"><li>전화: 010-2397-5734</li><li>이메일: JAIWSHIM@gmail.com</li><li>운영: 평일 09:00~18:00</li></ul>
</div>
</div>
<div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
<p>&copy; 2026 일렉션맵AI. Jaiwoo Shim &nbsp; All rights reserved.</p>
<p>2026 지방선거 D-${Math.max(0, Math.ceil((new Date('2026-06-03') - new Date()) / 86400000))}일</p>
</div>
</div>
</footer>`;
}

/* ── 테스트 배너 ── */
function renderTestBanner() {
  return `<div class="bg-blue-600 text-white text-center py-2.5 text-sm font-medium">
<span class="inline-flex items-center gap-2"><span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> 테스트 모드 — 로그인 없이 모든 분석 기능을 체험하세요</span>
&nbsp;|&nbsp; <a href="dashboard.html" class="underline font-bold hover:text-blue-100">바로 분석 시작 &rarr;</a>
</div>`;
}

/* ── 페이지 초기화 ── */
function initPage(activeKey) {
  const banner = document.getElementById('test-banner');
  const header = document.getElementById('app-header');
  const footer = document.getElementById('app-footer');
  if (banner) banner.innerHTML = renderTestBanner();
  if (header) header.innerHTML = renderHeader(activeKey);
  if (footer) footer.innerHTML = renderFooter();
}

/* ── 점수 바 HTML ── */
function scoreBarHTML(label, score, maxScore) {
  maxScore = maxScore || 100;
  const pct = Math.round((score / maxScore) * 100);
  return `<div class="flex items-center gap-3">
<span class="text-sm text-gray-600 w-20 shrink-0">${label}</span>
<div class="flex-1 score-bar"><div class="score-bar-fill ${getScoreBarColor(score)}" style="width:${pct}%"></div></div>
<span class="text-sm font-bold ${getScoreColor(score)} w-10 text-right">${score}</span>
</div>`;
}

/* ── 등급 뱃지 HTML ── */
function gradeBadgeHTML(grade) {
  return `<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${getGradeColor(grade)}">${grade}등급</span>`;
}
