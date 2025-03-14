
// Common functionality shared across all pages

// Update current time in the header
function updateCurrentTime() {
  const now = new Date();
  const options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit'
  };
  const currentTimeElement = document.getElementById('current-time');
  if (currentTimeElement) {
    currentTimeElement.textContent = now.toLocaleDateString('en-US', options);
  }
}

// Toggle sidebar expanded/collapsed state
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');
  
  if (sidebar.style.width === '4rem' || getComputedStyle(sidebar).width === '64px') {
    // Expand sidebar
    sidebar.style.width = '16rem';
    mainContent.style.marginLeft = '16rem';
    document.querySelectorAll('.sidebar-text').forEach(el => {
      el.style.display = 'inline-block';
    });
  } else {
    // Collapse sidebar
    sidebar.style.width = '4rem';
    mainContent.style.marginLeft = '4rem';
    document.querySelectorAll('.sidebar-text').forEach(el => {
      el.style.display = 'none';
    });
  }
}

// Initialize tab functionality
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab');
  if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all tabs
        document.querySelectorAll('.tab').forEach(tab => {
          tab.classList.remove('active');
        });
        
        // Hide all tab content
        document.querySelectorAll('.tab-content').forEach(content => {
          content.classList.remove('active');
          content.classList.add('hidden');
        });
        
        // Add active class to clicked tab
        button.classList.add('active');
        
        // Show the corresponding tab content
        const tabId = button.getAttribute('data-tab');
        const tabContent = document.getElementById(tabId);
        if (tabContent) {
          tabContent.classList.add('active');
          tabContent.classList.remove('hidden');
        }
      });
    });
  }
}

// Set up event listeners common to all pages
function setupCommonEventListeners() {
  const sidebarToggle = document.getElementById('sidebar-toggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', toggleSidebar);
  }
}

// Format data for charts
function formatChartData(data, label, color) {
  return {
    label: label,
    data: data,
    borderColor: color,
    backgroundColor: color + '20', // Add transparency
    borderWidth: 2,
    pointBackgroundColor: color,
    tension: 0.3,
    fill: true
  };
}

// Common chart options
function getChartOptions(title = '', showLegend = true) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: showLegend,
        position: 'top',
        labels: {
          usePointStyle: true,
          boxWidth: 6
        }
      },
      title: {
        display: !!title,
        text: title
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: false,
        grid: {
          color: '#f3f4f6'
        }
      }
    }
  };
}

// Create a new dashboard.js file for the dashboard specific functionality
function createDashboardCharts() {
  // Time labels for charts
  const timeLabels = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00'];

  // Heat Load Chart
  const heatLoadChart = document.getElementById('heat-load-chart');
  if (heatLoadChart) {
    new Chart(heatLoadChart, {
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [
          formatChartData([53.2, 52.8, 52.1, 52.5, 52.0, 52.4], 'HP Heater 1', '#0046AD'),
          formatChartData([49.5, 49.2, 48.4, 48.9, 48.6, 48.7], 'HP Heater 2', '#00A650'),
          formatChartData([45.8, 45.5, 45.3, 44.9, 44.7, 45.1], 'HP Heater 3', '#FF3A3A')
        ]
      },
      options: getChartOptions()
    });
  }

  // Temperature Chart
  const temperatureChart = document.getElementById('temperature-chart');
  if (temperatureChart) {
    new Chart(temperatureChart, {
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [
          formatChartData([190.2, 191.5, 191.8, 192.0, 192.3, 192.5], 'FW Inlet Temp', '#0046AD'),
          formatChartData([220.5, 221.3, 221.8, 222.0, 221.5, 221.0], 'FW Outlet Temp', '#00A650'),
          formatChartData([340.2, 340.5, 341.0, 341.5, 340.8, 340.2], 'Extraction Temp', '#FFC107')
        ]
      },
      options: getChartOptions()
    });
  }

  // TTD Chart
  const ttdChart = document.getElementById('ttd-chart');
  if (ttdChart) {
    new Chart(ttdChart, {
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [
          formatChartData([2.6, 2.7, 2.8, 2.8, 2.7, 2.8], 'HP Heater 1', '#0046AD'),
          formatChartData([3.3, 3.4, 3.5, 3.6, 3.5, 3.6], 'HP Heater 2', '#00A650'),
          formatChartData([4.0, 4.1, 4.2, 4.1, 4.2, 4.2], 'HP Heater 3', '#FF3A3A')
        ]
      },
      options: getChartOptions()
    });
  }

  // DCA Chart
  const dcaChart = document.getElementById('dca-chart');
  if (dcaChart) {
    new Chart(dcaChart, {
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [
          formatChartData([4.3, 4.4, 4.5, 4.5, 4.4, 4.5], 'HP Heater 1', '#0046AD'),
          formatChartData([5.0, 5.1, 5.2, 5.2, 5.1, 5.2], 'HP Heater 2', '#00A650'),
          formatChartData([6.5, 6.6, 6.7, 6.8, 6.7, 6.8], 'HP Heater 3', '#FF3A3A')
        ]
      },
      options: getChartOptions()
    });
  }

  // TR Chart
  const trChart = document.getElementById('tr-chart');
  if (trChart) {
    new Chart(trChart, {
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [
          formatChartData([0.91, 0.92, 0.92, 0.92, 0.91, 0.92], 'HP Heater 1', '#0046AD'),
          formatChartData([0.90, 0.89, 0.89, 0.88, 0.89, 0.89], 'HP Heater 2', '#00A650'),
          formatChartData([0.85, 0.84, 0.83, 0.83, 0.84, 0.83], 'HP Heater 3', '#FF3A3A')
        ]
      },
      options: getChartOptions()
    });
  }

  // Heater Level Chart
  const heaterLevelChart = document.getElementById('heater-level-chart');
  if (heaterLevelChart) {
    new Chart(heaterLevelChart, {
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [
          formatChartData([51.5, 52.0, 52.5, 52.0, 51.5, 52.0], 'HP Heater 1', '#0046AD'),
          formatChartData([64.0, 64.5, 65.0, 65.5, 65.0, 65.0], 'HP Heater 2', '#00A650'),
          formatChartData([76.5, 77.0, 77.5, 78.0, 77.5, 78.0], 'HP Heater 3', '#FF3A3A')
        ]
      },
      options: getChartOptions()
    });
  }

  // Enthalpy Chart
  const enthalpyChart = document.getElementById('enthalpy-chart');
  if (enthalpyChart) {
    new Chart(enthalpyChart, {
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [
          formatChartData([980, 985, 983, 982, 983, 983], 'FW Inlet HP1', '#0046AD'),
          formatChartData([930, 932, 932, 931, 932, 932], 'FW Inlet HP2', '#00A650'),
          formatChartData([873, 874, 875, 875, 874, 875], 'FW Inlet HP3', '#FF3A3A'),
          formatChartData([1060, 1063, 1066, 1066, 1065, 1066], 'FW Outlet HP1', '#1E88E5'),
          formatChartData([1000, 1005, 1010, 1008, 1010, 1010], 'FW Outlet HP2', '#43A047'),
          formatChartData([950, 953, 956, 955, 956, 956], 'FW Outlet HP3', '#E53935')
        ]
      },
      options: getChartOptions()
    });
  }
}

// Initialize on DOM loaded
document.addEventListener('DOMContentLoaded', function() {
  updateCurrentTime();
  setInterval(updateCurrentTime, 1000);
  setupCommonEventListeners();
  initTabs();
  
  // Check if we're on the dashboard page and create charts if needed
  if (document.getElementById('heat-load-chart')) {
    createDashboardCharts();
  }
});
