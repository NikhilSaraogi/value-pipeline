
// Dashboard-specific functionality

// Initialize dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
  // Load dashboard content from React component
  const dashboardContent = document.getElementById('dashboard-content');
  
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
  
  // Initialize other dashboard functionality
  function setupDashboardEventListeners() {
    // Any dashboard-specific event listeners can be set up here
  }
  
  setupDashboardEventListeners();
});
