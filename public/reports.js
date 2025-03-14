
// Reports page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize time
  updateTime();
  
  // Initialize top bar stats
  initializeTopBarStats();
  
  // Initialize data tables
  initializeDataTables();
  
  // Setup tab switching
  const benefitsButton = document.querySelector('button:nth-of-type(1)');
  const rcaButton = document.querySelector('button:nth-of-type(2)');
  const benefitsTab = document.getElementById('benefits-tab');
  const rcaTab = document.getElementById('rca-tab');
  
  if (benefitsButton && rcaButton && benefitsTab && rcaTab) {
    benefitsButton.addEventListener('click', function() {
      benefitsButton.classList.add('border-adani-blue', 'text-adani-blue');
      rcaButton.classList.remove('border-adani-blue', 'text-adani-blue');
      benefitsTab.classList.remove('hidden');
      rcaTab.classList.add('hidden');
    });
    
    rcaButton.addEventListener('click', function() {
      rcaButton.classList.add('border-adani-blue', 'text-adani-blue');
      benefitsButton.classList.remove('border-adani-blue', 'text-adani-blue');
      rcaTab.classList.remove('hidden');
      benefitsTab.classList.add('hidden');
    });
  }
  
  // Initialize chart
  initializeEcoInletChart();
  
  // Setup date inputs with default dates
  const today = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);
  
  const startDateInput = document.getElementById('start-date');
  const endDateInput = document.getElementById('end-date');
  
  if (startDateInput) {
    startDateInput.valueAsDate = sevenDaysAgo;
  }
  
  if (endDateInput) {
    endDateInput.valueAsDate = today;
  }
  
  // Add event listeners to date inputs
  if (startDateInput && endDateInput) {
    startDateInput.addEventListener('change', updateReportData);
    endDateInput.addEventListener('change', updateReportData);
  }
});

function initializeTopBarStats() {
  const topBarContainer = document.getElementById('top-bar-container');
  if (!topBarContainer) return;
  
  // Sample data
  const stats = [
    {
      title: "Avg. Eco Inlet Temp",
      value: "220.5°C",
      change: "+1.2°C",
      isPositive: true,
      icon: "🌡️"
    },
    {
      title: "Efficiency Gain",
      value: "0.48%",
      change: "+0.05%",
      isPositive: true,
      icon: "📈"
    },
    {
      title: "Heater Performance",
      value: "96.3%",
      change: "+0.8%",
      isPositive: true,
      icon: "⚙️"
    },
    {
      title: "Coal Savings",
      value: "12.6t/day",
      change: "+2.3t",
      isPositive: true,
      icon: "💰"
    }
  ];
  
  // Clear container
  topBarContainer.innerHTML = '';
  
  // Create stat cards
  stats.forEach(stat => {
    const card = document.createElement('div');
    card.className = 'top-bar-item';
    card.innerHTML = `
      <div class="top-bar-icon text-adani-blue">
        <span style="font-size: 1.25rem;">${stat.icon}</span>
      </div>
      <div>
        <div class="text-sm text-gray-500">${stat.title}</div>
        <div class="text-xl font-semibold">${stat.value}</div>
        <div class="text-xs ${stat.isPositive ? 'text-adani-green' : 'text-adani-red'}">
          ${stat.change} ${stat.isPositive ? '↑' : '↓'}
        </div>
      </div>
    `;
    topBarContainer.appendChild(card);
  });
}

function initializeDataTables() {
  // Daily gains table data
  const dailyGainsTable = document.getElementById('daily-gains-table');
  if (dailyGainsTable) {
    const dailyData = [
      { date: 'Mar 14, 2023', gain: '+2.43°C', hp1: '52.3%', hp2: '65.7%', hp3: '78.2%' },
      { date: 'Mar 13, 2023', gain: '+2.38°C', hp1: '51.9%', hp2: '65.3%', hp3: '77.8%' },
      { date: 'Mar 12, 2023', gain: '+2.35°C', hp1: '51.5%', hp2: '64.9%', hp3: '77.5%' },
      { date: 'Mar 11, 2023', gain: '+2.29°C', hp1: '52.1%', hp2: '65.4%', hp3: '78.0%' },
      { date: 'Mar 10, 2023', gain: '+2.25°C', hp1: '51.8%', hp2: '65.1%', hp3: '77.7%' },
      { date: 'Mar 09, 2023', gain: '+2.21°C', hp1: '51.6%', hp2: '64.8%', hp3: '77.4%' },
      { date: 'Mar 08, 2023', gain: '+2.18°C', hp1: '51.3%', hp2: '64.5%', hp3: '77.1%' }
    ];
    
    dailyGainsTable.innerHTML = '';
    dailyData.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="px-3 py-2 whitespace-nowrap">${row.date}</td>
        <td class="px-3 py-2 text-adani-green">${row.gain}</td>
        <td class="px-3 py-2">${row.hp1}</td>
        <td class="px-3 py-2">${row.hp2}</td>
        <td class="px-3 py-2">${row.hp3}</td>
      `;
      dailyGainsTable.appendChild(tr);
    });
  }
  
  // Notifications table data
  const notificationsTable = document.getElementById('notifications-table');
  if (notificationsTable) {
    const notificationsData = [
      { 
        date: 'Mar 14, 2023 09:15 AM', 
        type: 'Alert', 
        priority: 'High', 
        title: 'HP3 Level High', 
        message: 'HP3 heater level reached 79.2%, above normal operating range. Check drain valve operation.'
      },
      { 
        date: 'Mar 13, 2023 14:32 PM', 
        type: 'Recommendation', 
        priority: 'Medium', 
        title: 'TTD Optimization', 
        message: 'HP1 TTD is trending higher than optimal. Consider cleaning inspection at next scheduled maintenance.'
      },
      { 
        date: 'Mar 11, 2023 08:17 AM', 
        type: 'Alert', 
        priority: 'Medium', 
        title: 'HP2 Flow Fluctuation', 
        message: 'HP2 extraction flow shows unusual fluctuation. Check extraction valve operation.'
      },
      { 
        date: 'Mar 09, 2023 16:05 PM', 
        type: 'Recommendation', 
        priority: 'Low', 
        title: 'Drain Cooler Performance', 
        message: 'HP3 drain cooler approach trending higher. Consider optimization of drain flow rate.'
      },
      { 
        date: 'Mar 07, 2023 11:23 AM', 
        type: 'RCA', 
        priority: 'Medium', 
        title: 'HP1 Temperature Drop', 
        message: 'Root cause analysis complete for HP1 temperature drop on Mar 5. Issue identified: fouling in extraction line.'
      }
    ];
    
    notificationsTable.innerHTML = '';
    notificationsData.forEach(row => {
      const tr = document.createElement('tr');
      const priorityClass = row.priority === 'High' ? 'text-adani-red' : 
                          row.priority === 'Medium' ? 'text-adani-yellow' : 'text-adani-blue';
      tr.innerHTML = `
        <td class="px-4 py-3 whitespace-nowrap text-sm">${row.date}</td>
        <td class="px-4 py-3 text-sm">${row.type}</td>
        <td class="px-4 py-3 text-sm ${priorityClass} font-medium">${row.priority}</td>
        <td class="px-4 py-3 text-sm font-medium">${row.title}</td>
        <td class="px-4 py-3 text-sm">${row.message}</td>
      `;
      notificationsTable.appendChild(tr);
    });
  }
}

function initializeEcoInletChart() {
  const ctx = document.getElementById('ecoInletChart');
  if (!ctx) return;
  
  // Sample data - 7 days
  const labels = ['Mar 08', 'Mar 09', 'Mar 10', 'Mar 11', 'Mar 12', 'Mar 13', 'Mar 14'];
  const baselineData = [218.1, 218.2, 218.0, 218.3, 218.1, 218.2, 218.0];
  const actualData = [220.3, 220.4, 220.3, 220.6, 220.4, 220.6, 220.5];
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Baseline',
          data: baselineData,
          borderColor: '#6B7280',
          backgroundColor: 'rgba(107, 114, 128, 0.1)',
          borderDashed: [5, 5],
          tension: 0.1,
          fill: false
        },
        {
          label: 'Actual',
          data: actualData,
          borderColor: '#00A650',
          backgroundColor: 'rgba(0, 166, 80, 0.1)',
          tension: 0.1,
          fill: true
        }
      ]
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
          intersect: false,
          callbacks: {
            footer: function(tooltipItems) {
              const index = tooltipItems[0].dataIndex;
              const baseline = baselineData[index];
              const actual = actualData[index];
              const gain = (actual - baseline).toFixed(2);
              return `Gain: +${gain}°C`;
            }
          }
        }
      },
      scales: {
        y: {
          title: {
            display: true,
            text: 'Temperature (°C)'
          },
          min: 217,
          max: 222
        }
      }
    }
  });
}

function updateReportData() {
  const startDate = document.getElementById('start-date').value;
  const endDate = document.getElementById('end-date').value;
  
  if (startDate && endDate) {
    console.log(`Generating report for: ${startDate} to ${endDate}`);
    // In a real application, would fetch new data for this date range
    
    // For now, just show a small notification
    const benefitsTab = document.getElementById('benefits-tab');
    if (benefitsTab) {
      // Create notification if it doesn't exist
      let notification = document.getElementById('date-range-notification');
      if (!notification) {
        notification = document.createElement('div');
        notification.id = 'date-range-notification';
        notification.className = 'bg-adani-blue text-white text-sm p-2 rounded mb-4';
        benefitsTab.prepend(notification);
      }
      
      notification.textContent = `Report updated for date range: ${startDate} to ${endDate}`;
      
      // Hide notification after 3 seconds
      setTimeout(() => {
        notification.remove();
      }, 3000);
    }
  }
}
