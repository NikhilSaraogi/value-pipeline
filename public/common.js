
// Common JavaScript functionality for all pages

// Setup current time display with formatted date
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
  
  // Toggle sidebar with smooth transition
  if (sidebarToggle) {
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
  }

  // Make header sticky across all pages
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
        header.classList.add('header-sticky');
      } else {
        header.classList.remove('header-sticky');
      }
    });
  }

  // Add active class to current page in sidebar
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const sidebarItems = document.querySelectorAll('.sidebar-menu-item');
  
  sidebarItems.forEach(item => {
    const itemLink = item.getAttribute('href') || '';
    if (itemLink.includes(currentPage) || 
        (currentPage === 'index.html' && !itemLink)) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Setup notification dropdown functionality
  const notificationIcon = document.querySelector('.notifications');
  if (notificationIcon) {
    notificationIcon.addEventListener('click', function(e) {
      e.stopPropagation();
      const dropdown = document.querySelector('.notification-dropdown');
      if (dropdown) {
        dropdown.classList.toggle('hidden');
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function closeDropdown(e) {
          if (!dropdown.contains(e.target) && !notificationIcon.contains(e.target)) {
            dropdown.classList.add('hidden');
            document.removeEventListener('click', closeDropdown);
          }
        });
      }
    });
  }

  // Initialize tabs functionality across all pages
  initTabs();
});

// Tab switching functionality for all pages
function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  if (tabs.length > 0) {
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
          content.classList.add('hidden');
          content.classList.remove('active');
        });
        
        // Show selected tab content
        const selectedContent = document.getElementById(tabId);
        if (selectedContent) {
          selectedContent.classList.remove('hidden');
          selectedContent.classList.add('active');
        }
        
        // Update active tab styling
        document.querySelectorAll('.tab').forEach(t => {
          t.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  }
}

// Responsive menu toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('mobile-open');
    });
  }
});

// Helper function to format numbers with commas
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Helper function to format dates
function formatDate(date) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
}
