
// Dashboard-specific functionality

// Initialize dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
  // Load dashboard content
  initializeDashboard();
  
  // Real-time data update simulation
  function updateRealTimeData() {
    // Update KPI values with slight variations
    function updateKPI(id, baseValue, unit, variance = 0.2) {
      const element = document.getElementById(id);
      if (element) {
        const randomVariation = (Math.random() * variance * 2 - variance).toFixed(1);
        const newValue = (parseFloat(baseValue) + parseFloat(randomVariation)).toFixed(1);
        element.innerHTML = `${newValue} <span class="text-sm font-normal">${unit}</span>`;
      }
    }
    
    // Update KPI values
    updateKPI('eco-inlet-temp', 220.5, '°C');
    updateKPI('load-value', 660, 'MW', 2);
    updateKPI('hdr-pressure', 170.2, 'bar', 0.5);
    updateKPI('feed-water-flow', 1890, 't/h', 5);
    
    // Update HP Heater levels
    const hp1Level = document.querySelector('.level-indicator:nth-of-type(1)');
    const hp2Level = document.querySelector('.level-indicator:nth-of-type(2)');
    const hp3Level = document.querySelector('.level-indicator:nth-of-type(3)');
    
    if (hp1Level) {
      const level1 = 52 + (Math.random() * 0.8 - 0.4);
      hp1Level.textContent = `Level: ${level1.toFixed(1)}%`;
    }
    
    if (hp2Level) {
      const level2 = 65 + (Math.random() * 0.8 - 0.4);
      hp2Level.textContent = `Level: ${level2.toFixed(1)}%`;
    }
    
    if (hp3Level) {
      const level3 = 78 + (Math.random() * 0.8 - 0.4);
      hp3Level.textContent = `Level: ${level3.toFixed(1)}%`;
    }
  }
  
  // Update data every 5 seconds
  setInterval(updateRealTimeData, 5000);
  
  // Initialize tabs
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-tab');
      
      // Remove active class from all tabs and contents
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to selected tab and content
      tab.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Initialize charts
  initializeCharts();
});

function initializeDashboard() {
  // This function would load/initialize dashboard data
  console.log('Dashboard initialized');
}

function initializeCharts() {
  // Sample data for charts
  const timeLabels = ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '00:00'];
  
  // Heat Load Chart
  const heatLoadCtx = document.getElementById('heat-load-chart');
  if (heatLoadCtx) {
    new Chart(heatLoadCtx, {
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [
          {
            label: 'HP Heater 1',
            data: [51.2, 51.5, 52.4, 53.1, 52.8, 52.2, 51.9],
            borderColor: '#0046AD',
            tension: 0.3,
            fill: false
          },
          {
            label: 'HP Heater 2',
            data: [48.5, 48.9, 49.2, 48.7, 48.5, 48.2, 48.5],
            borderColor: '#FFC107',
            tension: 0.3,
            fill: false
          },
          {
            label: 'HP Heater 3',
            data: [45.3, 45.8, 46.2, 45.7, 45.1, 44.8, 45.2],
            borderColor: '#FF3A3A',
            tension: 0.3,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: 'Heat Load (MW)'
            }
          }
        }
      }
    });
  }
  
  // Temperature Chart
  const temperatureCtx = document.getElementById('temperature-chart');
  if (temperatureCtx) {
    new Chart(temperatureCtx, {
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [
          {
            label: 'HP1 FW Outlet',
            data: [214.2, 214.8, 215.2, 215.6, 215.8, 215.5, 215.1],
            borderColor: '#0046AD',
            tension: 0.3,
            fill: false
          },
          {
            label: 'HP2 FW Outlet',
            data: [198.1, 198.3, 198.6, 198.8, 198.5, 198.2, 198.3],
            borderColor: '#FFC107',
            tension: 0.3,
            fill: false
          },
          {
            label: 'HP3 FW Outlet',
            data: [184.3, 184.6, 185.1, 185.3, 185.0, 184.7, 184.8],
            borderColor: '#FF3A3A',
            tension: 0.3,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: 'Temperature (°C)'
            }
          }
        }
      }
    });
  }
  
  // TTD Chart
  const ttdCtx = document.getElementById('ttd-chart');
  if (ttdCtx) {
    new Chart(ttdCtx, {
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [
          {
            label: 'HP Heater 1',
            data: [2.7, 2.8, 2.8, 2.9, 2.8, 2.7, 2.8],
            borderColor: '#0046AD',
            tension: 0.3,
            fill: false
          },
          {
            label: 'HP Heater 2',
            data: [3.4, 3.5, 3.6, 3.7, 3.6, 3.5, 3.6],
            borderColor: '#FFC107',
            tension: 0.3,
            fill: false
          },
          {
            label: 'HP Heater 3',
            data: [4.0, 4.1, 4.2, 4.3, 4.2, 4.1, 4.2],
            borderColor: '#FF3A3A',
            tension: 0.3,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: 'TTD (°C)'
            }
          }
        }
      }
    });
  }
  
  // DCA Chart
  const dcaCtx = document.getElementById('dca-chart');
  if (dcaCtx) {
    new Chart(dcaCtx, {
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [
          {
            label: 'HP Heater 1',
            data: [4.3, 4.4, 4.5, 4.6, 4.5, 4.4, 4.5],
            borderColor: '#0046AD',
            tension: 0.3,
            fill: false
          },
          {
            label: 'HP Heater 2',
            data: [5.0, 5.1, 5.2, 5.3, 5.2, 5.1, 5.2],
            borderColor: '#FFC107',
            tension: 0.3,
            fill: false
          },
          {
            label: 'HP Heater 3',
            data: [6.5, 6.7, 6.8, 6.9, 6.8, 6.7, 6.8],
            borderColor: '#FF3A3A',
            tension: 0.3,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: 'DCA (°C)'
            }
          }
        }
      }
    });
  }
  
  // TR Chart
  const trCtx = document.getElementById('tr-chart');
  if (trCtx) {
    new Chart(trCtx, {
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [
          {
            label: 'HP Heater 1',
            data: [0.91, 0.91, 0.92, 0.92, 0.92, 0.91, 0.92],
            borderColor: '#0046AD',
            tension: 0.3,
            fill: false
          },
          {
            label: 'HP Heater 2',
            data: [0.88, 0.88, 0.89, 0.89, 0.89, 0.88, 0.89],
            borderColor: '#FFC107',
            tension: 0.3,
            fill: false
          },
          {
            label: 'HP Heater 3',
            data: [0.82, 0.82, 0.83, 0.83, 0.83, 0.82, 0.83],
            borderColor: '#FF3A3A',
            tension: 0.3,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: 'Temperature Ratio'
            }
          }
        }
      }
    });
  }
  
  // Heater Level Chart
  const heaterLevelCtx = document.getElementById('heater-level-chart');
  if (heaterLevelCtx) {
    new Chart(heaterLevelCtx, {
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [
          {
            label: 'HP Heater 1',
            data: [51.5, 51.8, 52.0, 52.5, 52.8, 52.3, 52.0],
            borderColor: '#0046AD',
            tension: 0.3,
            fill: false
          },
          {
            label: 'HP Heater 2',
            data: [64.5, 64.8, 65.0, 65.5, 65.8, 65.3, 65.0],
            borderColor: '#FFC107',
            tension: 0.3,
            fill: false
          },
          {
            label: 'HP Heater 3',
            data: [77.5, 77.8, 78.0, 78.5, 78.8, 78.3, 78.0],
            borderColor: '#FF3A3A',
            tension: 0.3,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: 'Level (%)'
            }
          }
        }
      }
    });
  }
  
  // Enthalpy Chart
  const enthalpyCtx = document.getElementById('enthalpy-chart');
  if (enthalpyCtx) {
    new Chart(enthalpyCtx, {
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [
          {
            label: 'HP1 FW Outlet',
            data: [1064, 1065, 1066, 1067, 1066, 1065, 1066],
            borderColor: '#0046AD',
            tension: 0.3,
            fill: false
          },
          {
            label: 'HP2 FW Outlet',
            data: [1008, 1009, 1010, 1011, 1010, 1009, 1010],
            borderColor: '#FFC107',
            tension: 0.3,
            fill: false
          },
          {
            label: 'HP3 FW Outlet',
            data: [954, 955, 956, 957, 956, 955, 956],
            borderColor: '#FF3A3A',
            tension: 0.3,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: 'Enthalpy (kJ/kg)'
            }
          }
        }
      }
    });
  }
}
