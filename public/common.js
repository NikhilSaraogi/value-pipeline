
// Common functionality shared across all pages

// Update current time in the header
function updateCurrentTime() {
  const now = new Date();
  const options = { 
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit'
  };
  const currentTimeElement = document.getElementById('current-time');
  if (currentTimeElement) {
    currentTimeElement.textContent = now.toLocaleDateString('en-IN', options);
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

// Initialize on DOM loaded
document.addEventListener('DOMContentLoaded', function() {
  updateCurrentTime();
  setInterval(updateCurrentTime, 1000);
  setupCommonEventListeners();
  initTabs();
});
