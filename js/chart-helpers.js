/* ═══════════════════════════════════════════
   일렉션맵AI — chart-helpers.js (Chart.js 헬퍼)
   ═══════════════════════════════════════════ */

const CHART_COLORS = {
  blue: { bg: 'rgba(37,99,235,0.15)', border: '#2563eb' },
  red: { bg: 'rgba(220,38,38,0.15)', border: '#dc2626' },
  green: { bg: 'rgba(5,150,105,0.15)', border: '#059669' },
  amber: { bg: 'rgba(217,119,6,0.15)', border: '#d97706' },
  purple: { bg: 'rgba(124,58,237,0.15)', border: '#7c3aed' },
  cyan: { bg: 'rgba(6,182,212,0.15)', border: '#06b6d4' },
  rose: { bg: 'rgba(225,29,72,0.15)', border: '#e11d48' }
};

const CHART_DEFAULTS = {
  font: { family: "'Pretendard Variable', 'Pretendard', sans-serif" },
  responsive: true,
  maintainAspectRatio: false
};

/* ── 레이더 차트 ── */
function createRadarChart(ctx, labels, data, options) {
  options = options || {};
  return new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [{
        label: options.label || '점수',
        data: data,
        backgroundColor: options.bgColor || CHART_COLORS.blue.bg,
        borderColor: options.borderColor || CHART_COLORS.blue.border,
        borderWidth: 2,
        pointBackgroundColor: options.borderColor || CHART_COLORS.blue.border,
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5
      }]
    },
    options: {
      ...CHART_DEFAULTS,
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: { stepSize: 20, font: { size: 11 } },
          pointLabels: { font: { size: 13, family: CHART_DEFAULTS.font.family } },
          grid: { color: '#e2e8f0' }
        }
      },
      plugins: { legend: { display: false } }
    }
  });
}

/* ── 바 차트 ── */
function createBarChart(ctx, labels, datasets, options) {
  options = options || {};
  const colors = [CHART_COLORS.blue, CHART_COLORS.red, CHART_COLORS.green, CHART_COLORS.amber, CHART_COLORS.purple];
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: datasets.map((ds, i) => ({
        label: ds.label,
        data: ds.data,
        backgroundColor: ds.color || colors[i % colors.length].bg,
        borderColor: ds.borderColor || colors[i % colors.length].border,
        borderWidth: 1,
        borderRadius: 6,
        barPercentage: 0.7
      }))
    },
    options: {
      ...CHART_DEFAULTS,
      scales: {
        x: { grid: { display: false }, ticks: { font: { size: 12 } } },
        y: { beginAtZero: true, grid: { color: '#f1f5f9' }, ticks: { font: { size: 11 } } }
      },
      plugins: {
        legend: { display: datasets.length > 1, position: 'top', labels: { font: { size: 12 } } }
      }
    }
  });
}

/* ── 라인 차트 ── */
function createLineChart(ctx, labels, datasets, options) {
  options = options || {};
  const colors = [CHART_COLORS.blue, CHART_COLORS.red, CHART_COLORS.green, CHART_COLORS.amber];
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: datasets.map((ds, i) => ({
        label: ds.label,
        data: ds.data,
        borderColor: ds.borderColor || colors[i % colors.length].border,
        backgroundColor: ds.bgColor || colors[i % colors.length].bg,
        borderWidth: 2,
        fill: ds.fill !== undefined ? ds.fill : false,
        tension: 0.4,
        pointRadius: ds.pointRadius !== undefined ? ds.pointRadius : 4,
        pointBackgroundColor: ds.borderColor || colors[i % colors.length].border
      }))
    },
    options: {
      ...CHART_DEFAULTS,
      scales: {
        x: { grid: { display: false }, ticks: { font: { size: 12 } } },
        y: { beginAtZero: options.beginAtZero !== false, grid: { color: '#f1f5f9' }, ticks: { font: { size: 11 } } }
      },
      plugins: {
        legend: { position: 'top', labels: { font: { size: 12 } } }
      }
    }
  });
}

/* ── 도넛 차트 ── */
function createDoughnutChart(ctx, labels, data, options) {
  options = options || {};
  const bgColors = ['#2563eb', '#dc2626', '#059669', '#d97706', '#7c3aed', '#06b6d4', '#e11d48', '#6366f1'];
  return new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: options.colors || bgColors.slice(0, data.length),
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      ...CHART_DEFAULTS,
      cutout: options.cutout || '65%',
      plugins: {
        legend: { position: options.legendPos || 'bottom', labels: { font: { size: 12 }, padding: 16 } }
      }
    }
  });
}

/* ── 수평 바 차트 ── */
function createHorizontalBarChart(ctx, labels, data, options) {
  options = options || {};
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: options.label || '',
        data: data,
        backgroundColor: data.map(v => {
          if (v >= 80) return CHART_COLORS.blue.bg;
          if (v >= 70) return CHART_COLORS.green.bg;
          if (v >= 60) return CHART_COLORS.amber.bg;
          return CHART_COLORS.red.bg;
        }),
        borderColor: data.map(v => {
          if (v >= 80) return CHART_COLORS.blue.border;
          if (v >= 70) return CHART_COLORS.green.border;
          if (v >= 60) return CHART_COLORS.amber.border;
          return CHART_COLORS.red.border;
        }),
        borderWidth: 1,
        borderRadius: 6,
        barPercentage: 0.6
      }]
    },
    options: {
      ...CHART_DEFAULTS,
      indexAxis: 'y',
      scales: {
        x: { beginAtZero: true, max: 100, grid: { color: '#f1f5f9' } },
        y: { grid: { display: false }, ticks: { font: { size: 13 } } }
      },
      plugins: { legend: { display: false } }
    }
  });
}
