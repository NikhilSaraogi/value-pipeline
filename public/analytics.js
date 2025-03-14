
// Analytics page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize charts
  initializeAnalyticsCharts();
  
  // Setup event listeners
  const dateRangeSelector = document.getElementById('date-range');
  const refreshButton = document.getElementById('refresh-data');
  const parameterSelect = document.getElementById('parameter-select');
  const startDateInput = document.getElementById('start-date');
  const endDateInput = document.getElementById('end-date');
  
  // Set default dates (current date and 7 days back)
  const today = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);
  
  if (startDateInput) {
    startDateInput.valueAsDate = sevenDaysAgo;
  }
  
  if (endDateInput) {
    endDateInput.valueAsDate = today;
  }
  
  // Event listeners
  if (dateRangeSelector) {
    dateRangeSelector.addEventListener('change', function() {
      updateChartsData(this.value);
    });
  }
  
  if (refreshButton) {
    refreshButton.addEventListener('click', function() {
      refreshData();
    });
  }
  
  if (parameterSelect) {
    parameterSelect.addEventListener('change', function() {
      updateParameterChart(this.value);
    });
  }
  
  if (startDateInput && endDateInput) {
    startDateInput.addEventListener('change', updateDateRange);
    endDateInput.addEventListener('change', updateDateRange);
  }
});

function refreshData() {
  // Simulating data refresh
  console.log("Refreshing data...");
  const refreshButton = document.getElementById('refresh-data');
  
  // Add a spinner to the button
  if (refreshButton) {
    const originalContent = refreshButton.innerHTML;
    refreshButton.innerHTML = `
      <svg class="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Refreshing...
    `;
    
    // Simulate refresh delay
    setTimeout(() => {
      // Update data (in real app would fetch from API)
      initializeAnalyticsCharts(true);
      
      // Restore button
      refreshButton.innerHTML = originalContent;
    }, 1500);
  }
}

function updateChartsData(range) {
  console.log(`Updating charts for range: ${range}`);
  // In a real app, would fetch new data based on range
  // For now, just simulate random changes to the charts
  initializeAnalyticsCharts(true);
}

function updateParameterChart(parameter) {
  console.log(`Updating parameter chart for: ${parameter}`);
  // Would fetch specific parameter data in a real app
  
  // Simulate new data
  const parameterComparisonCtx = document.getElementById('parameter-comparison-chart');
  if (parameterComparisonCtx && parameterComparisonCtx.chart) {
    parameterComparisonCtx.chart.destroy();
  }
  
  // Create new chart with updated title based on parameter
  createParameterComparisonChart(parameter);
}

function updateDateRange() {
  const startDate = document.getElementById('start-date').value;
  const endDate = document.getElementById('end-date').value;
  
  if (startDate && endDate) {
    console.log(`Date range updated: ${startDate} to ${endDate}`);
    // Would fetch data for this date range in a real app
    
    // Simulate data update
    initializeAnalyticsCharts(true);
  }
}

function initializeAnalyticsCharts(isRefresh = false) {
  // Sample data
  const timeLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  // Add some randomness for refresh simulation
  function getRandomVariation(base, variance = 0.05) {
    return base * (1 + (Math.random() * variance * 2 - variance));
  }
  
  // Heat Load Chart
  const heatLoadData = [
    [51.2, 51.5, 52.4, 53.1, 52.8, 52.2, 51.9], // HP1
    [48.5, 48.9, 49.2, 48.7, 48.5, 48.2, 48.5], // HP2
    [45.3, 45.8, 46.2, 45.7, 45.1, 44.8, 45.2]  // HP3
  ];
  
  if (isRefresh) {
    heatLoadData.forEach(dataset => {
      dataset.forEach((value, i) => {
        dataset[i] = getRandomVariation(value);
      });
    });
  }
  
  createChart('heat-load-chart', 'line', timeLabels, [
    { label: 'HP Heater 1', data: heatLoadData[0], borderColor: '#0046AD' },
    { label: 'HP Heater 2', data: heatLoadData[1], borderColor: '#FFC107' },
    { label: 'HP Heater 3', data: heatLoadData[2], borderColor: '#FF3A3A' }
  ], 'Heat Load (MW)', false);
  
  // Heater Level Chart
  const levelData = [
    [51.5, 51.8, 52.0, 52.5, 52.8, 52.3, 52.0], // HP1
    [64.5, 64.8, 65.0, 65.5, 65.8, 65.3, 65.0], // HP2
    [77.5, 77.8, 78.0, 78.5, 78.8, 78.3, 78.0]  // HP3
  ];
  
  if (isRefresh) {
    levelData.forEach(dataset => {
      dataset.forEach((value, i) => {
        dataset[i] = getRandomVariation(value, 0.02);
      });
    });
  }
  
  createChart('heater-level-chart', 'line', timeLabels, [
    { label: 'HP Heater 1', data: levelData[0], borderColor: '#0046AD' },
    { label: 'HP Heater 2', data: levelData[1], borderColor: '#FFC107' },
    { label: 'HP Heater 3', data: levelData[2], borderColor: '#FF3A3A' }
  ], 'Level (%)', false);
  
  // Temperature Chart
  const tempData = [
    [214.2, 214.8, 215.2, 215.6, 215.8, 215.5, 215.1], // HP1
    [198.1, 198.3, 198.6, 198.8, 198.5, 198.2, 198.3], // HP2
    [184.3, 184.6, 185.1, 185.3, 185.0, 184.7, 184.8]  // HP3
  ];
  
  if (isRefresh) {
    tempData.forEach(dataset => {
      dataset.forEach((value, i) => {
        dataset[i] = getRandomVariation(value, 0.01);
      });
    });
  }
  
  createChart('temperature-chart', 'line', timeLabels, [
    { label: 'HP1 Outlet', data: tempData[0], borderColor: '#0046AD' },
    { label: 'HP2 Outlet', data: tempData[1], borderColor: '#FFC107' },
    { label: 'HP3 Outlet', data: tempData[2], borderColor: '#FF3A3A' }
  ], 'Temperature (°C)', false);
  
  // Enthalpy Chart
  const enthalpyData = [
    [1064, 1065, 1066, 1067, 1066, 1065, 1066], // HP1
    [1008, 1009, 1010, 1011, 1010, 1009, 1010], // HP2
    [954, 955, 956, 957, 956, 955, 956]  // HP3
  ];
  
  if (isRefresh) {
    enthalpyData.forEach(dataset => {
      dataset.forEach((value, i) => {
        dataset[i] = getRandomVariation(value, 0.01);
      });
    });
  }
  
  createChart('enthalpy-chart', 'line', timeLabels, [
    { label: 'HP1 Outlet', data: enthalpyData[0], borderColor: '#0046AD' },
    { label: 'HP2 Outlet', data: enthalpyData[1], borderColor: '#FFC107' },
    { label: 'HP3 Outlet', data: enthalpyData[2], borderColor: '#FF3A3A' }
  ], 'Enthalpy (kJ/kg)', false);
  
  // Create parameter comparison chart with default parameter
  createParameterComparisonChart('heatLoad');
}

function createChart(elementId, type, labels, datasets, yTitle, beginAtZero = true) {
  const ctx = document.getElementById(elementId);
  if (!ctx) return;
  
  // If chart already exists, destroy it first
  if (ctx.chart) {
    ctx.chart.destroy();
  }
  
  // Format datasets
  const formattedDatasets = datasets.map(dataset => ({
    label: dataset.label,
    data: dataset.data,
    borderColor: dataset.borderColor,
    backgroundColor: dataset.backgroundColor || dataset.borderColor,
    tension: 0.3,
    fill: false
  }));
  
  // Create new chart
  ctx.chart = new Chart(ctx, {
    type: type,
    data: {
      labels: labels,
      datasets: formattedDatasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          mode: 'index',
          intersect: false
        }
      },
      scales: {
        y: {
          beginAtZero: beginAtZero,
          title: {
            display: true,
            text: yTitle
          }
        }
      }
    }
  });
}

function createParameterComparisonChart(parameter) {
  // Set up data based on parameter
  let yTitle = '';
  let data = [];
  
  switch(parameter) {
    case 'heatLoad':
      yTitle = 'Heat Load (MW)';
      data = [
        [51.2, 51.8, 52.3, 53.0, 52.8, 52.4, 51.9], // HP1
        [48.5, 49.1, 49.6, 48.9, 48.5, 48.2, 48.4], // HP2
        [45.3, 45.8, 46.2, 45.9, 45.1, 44.9, 45.0]  // HP3
      ];
      break;
    case 'ttd':
      yTitle = 'TTD (°C)';
      data = [
        [2.7, 2.8, 2.9, 3.0, 2.9, 2.8, 2.8], // HP1
        [3.4, 3.5, 3.6, 3.7, 3.6, 3.5, 3.5], // HP2
        [4.0, 4.1, 4.2, 4.3, 4.2, 4.1, 4.1]  // HP3
      ];
      break;
    case 'dca':
      yTitle = 'DCA (°C)';
      data = [
        [4.3, 4.4, 4.5, 4.6, 4.5, 4.4, 4.4], // HP1
        [5.0, 5.1, 5.2, 5.3, 5.2, 5.1, 5.1], // HP2
        [6.5, 6.7, 6.8, 6.9, 6.8, 6.7, 6.7]  // HP3
      ];
      break;
    case 'tr':
      yTitle = 'Temperature Ratio';
      data = [
        [0.91, 0.91, 0.92, 0.92, 0.92, 0.91, 0.91], // HP1
        [0.88, 0.88, 0.89, 0.89, 0.89, 0.88, 0.88], // HP2
        [0.82, 0.82, 0.83, 0.83, 0.83, 0.82, 0.82]  // HP3
      ];
      break;
    case 'enthalpy':
      yTitle = 'Enthalpy (kJ/kg)';
      data = [
        [1064, 1065, 1066, 1067, 1066, 1065, 1065], // HP1
        [1008, 1009, 1010, 1011, 1010, 1009, 1009], // HP2
        [954, 955, 956, 957, 956, 955, 955]  // HP3
      ];
      break;
  }
  
  // Get the canvas
  const ctx = document.getElementById('parameter-comparison-chart');
  if (!ctx) return;
  
  // Create chart for parameter comparison
  createChart('parameter-comparison-chart', 'line', 
    ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], 
    [
      { label: 'HP Heater 1', data: data[0], borderColor: '#0046AD' },
      { label: 'HP Heater 2', data: data[1], borderColor: '#FFC107' },
      { label: 'HP Heater 3', data: data[2], borderColor: '#FF3A3A' }
    ], 
    yTitle, 
    false
  );
}
