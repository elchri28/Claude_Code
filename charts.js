const purple = '#534AB7';
const teal   = '#1D9E75';
const gray   = '#888780';
const amber  = '#EF9F27';
const red    = '#E24B4A';

const baseOpts = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y',
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: ctx => ctx.parsed.x != null ? ' ' + ctx.parsed.x : ' Dato non disponibile'
      }
    }
  },
  scales: {
    x: {
      grid: { color: 'rgba(128,128,128,0.1)' },
      ticks: { font: { size: 12 }, color: '#888' }
    },
    y: {
      grid: { display: false },
      ticks: { font: { size: 12 }, color: '#444' }
    }
  }
};

/* SWE-bench */
new Chart(document.getElementById('swe'), {
  type: 'bar',
  data: {
    labels: ['Copilot', 'Cursor*', 'Gemini CLI', 'Codex CLI', 'Claude Code'],
    datasets: [{
      data: [null, 80.8, 80.6, 85, 88.6],
      backgroundColor: [gray, teal, amber, red, purple],
      borderRadius: 4
    }]
  },
  options: {
    ...baseOpts,
    scales: {
      ...baseOpts.scales,
      x: {
        ...baseOpts.scales.x,
        min: 70, max: 95,
        ticks: { ...baseOpts.scales.x.ticks, callback: v => v + '%' }
      }
    },
    plugins: {
      ...baseOpts.plugins,
      tooltip: {
        callbacks: {
          label: ctx => ctx.parsed.x != null
            ? ' ' + ctx.parsed.x + '%'
            : ' Copilot non pubblica punteggi ufficiali'
        }
      }
    }
  }
});

/* Terminal-Bench */
new Chart(document.getElementById('terminal'), {
  type: 'bar',
  data: {
    labels: ['Copilot', 'Cursor*', 'Gemini CLI', 'Claude Code', 'Codex CLI'],
    datasets: [{
      data: [null, null, 70.7, 78.9, 83.4],
      backgroundColor: [gray, teal, amber, purple, red],
      borderRadius: 4
    }]
  },
  options: {
    ...baseOpts,
    scales: {
      ...baseOpts.scales,
      x: {
        ...baseOpts.scales.x,
        min: 60, max: 90,
        ticks: { ...baseOpts.scales.x.ticks, callback: v => v + '%' }
      }
    },
    plugins: {
      ...baseOpts.plugins,
      tooltip: {
        callbacks: {
          label: ctx => ctx.parsed.x != null
            ? ' ' + ctx.parsed.x + '%'
            : ' Punteggio non disponibile'
        }
      }
    }
  }
});

/* Prezzo */
new Chart(document.getElementById('price'), {
  type: 'bar',
  data: {
    labels: ['Gemini CLI', 'Copilot Pro', 'Codex CLI', 'Cursor Pro', 'Claude Code'],
    datasets: [{
      data: [0, 10, 20, 20, 20],
      backgroundColor: [amber, gray, red, teal, purple],
      borderRadius: 4
    }]
  },
  options: {
    ...baseOpts,
    scales: {
      ...baseOpts.scales,
      x: {
        ...baseOpts.scales.x,
        min: 0, max: 25,
        ticks: { ...baseOpts.scales.x.ticks, callback: v => '$' + v }
      }
    },
    plugins: {
      ...baseOpts.plugins,
      tooltip: {
        callbacks: {
          label: ctx => ctx.parsed.x === 0
            ? ' Gratis (1000 req/giorno)'
            : ' $' + ctx.parsed.x + '/mese'
        }
      }
    }
  }
});

/* Context window */
new Chart(document.getElementById('context'), {
  type: 'bar',
  data: {
    labels: ['Copilot', 'Codex CLI', 'Cursor', 'Gemini CLI', 'Claude Code'],
    datasets: [{
      data: [128, 200, 200, 1000, 1000],
      backgroundColor: [gray, red, teal, amber, purple],
      borderRadius: 4
    }]
  },
  options: {
    ...baseOpts,
    scales: {
      ...baseOpts.scales,
      x: {
        ...baseOpts.scales.x,
        min: 0, max: 1100,
        ticks: { ...baseOpts.scales.x.ticks, callback: v => v + 'K' }
      }
    },
    plugins: {
      ...baseOpts.plugins,
      tooltip: {
        callbacks: {
          label: ctx => ' ' + ctx.parsed.x.toLocaleString() + 'K token'
        }
      }
    }
  }
});