
// Common JavaScript functionality for all pages

// Setup current time display
function updateTime() {
  const now = new Date();
  const options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };
  
  const timeString = now.toLocaleString('en-US', options);
  const timeElements = document.querySelectorAll('#current-time');
  timeElements.forEach(element => {
    if (element) element.textContent = timeString;
  });
}

// Update time every second
setInterval(updateTime, 1000);
updateTime(); // Initialize time display

// Sidebar toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');
  
  // Check for saved sidebar state
  const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
  
  if (sidebarCollapsed) {
    sidebar.style.width = '4rem';
    mainContent.style.marginLeft = '4rem';
    document.querySelectorAll('.sidebar-text').forEach(item => {
      item.style.display = 'none';
    });
  } else {
    sidebar.style.width = '16rem';
    mainContent.style.marginLeft = '16rem';
  }
  
  // Toggle sidebar
  sidebarToggle.addEventListener('click', function() {
    if (sidebar.style.width === '16rem' || sidebar.style.width === '') {
      // Collapse sidebar
      sidebar.style.width = '4rem';
      mainContent.style.marginLeft = '4rem';
      document.querySelectorAll('.sidebar-text').forEach(item => {
        item.style.display = 'none';
      });
      localStorage.setItem('sidebarCollapsed', 'true');
    } else {
      // Expand sidebar
      sidebar.style.width = '16rem';
      mainContent.style.marginLeft = '16rem';
      document.querySelectorAll('.sidebar-text').forEach(item => {
        item.style.display = 'inline-block';
      });
      localStorage.setItem('sidebarCollapsed', 'false');
    }
  });
});
