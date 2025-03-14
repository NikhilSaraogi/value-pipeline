
// Feedback form JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
  // Initialize form handling
  const feedbackForm = document.getElementById('feedback-form');
  const resetButton = document.getElementById('reset-button');
  const notification = document.getElementById('notification');
  
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', handleSubmit);
  }
  
  if (resetButton) {
    resetButton.addEventListener('click', resetForm);
  }
});

function handleSubmit(event) {
  event.preventDefault();
  
  // Get form data
  const formData = new FormData(event.target);
  const formObject = Object.fromEntries(formData.entries());
  
  // Get loading spinner and submit text elements
  const loadingSpinner = document.getElementById('loading-spinner');
  const submitText = document.getElementById('submit-text');
  
  // Show loading spinner
  if (loadingSpinner && submitText) {
    loadingSpinner.classList.remove('hidden');
    submitText.textContent = 'Submitting...';
  }
  
  // Simulate API call with setTimeout
  setTimeout(() => {
    // In a real application, you would send this data to your backend API
    console.log('Form data submitted:', formObject);
    
    // Hide loading spinner
    if (loadingSpinner && submitText) {
      loadingSpinner.classList.add('hidden');
      submitText.textContent = 'Submit Feedback';
    }
    
    // Show success notification
    showNotification('success', 'Thank you for your feedback! Your submission has been received.');
    
    // Reset form
    resetForm();
  }, 1500);
}

function resetForm() {
  const feedbackForm = document.getElementById('feedback-form');
  if (feedbackForm) {
    feedbackForm.reset();
  }
}

function showNotification(type, message) {
  const notification = document.getElementById('notification');
  if (!notification) return;
  
  // Clear any existing classes and add base classes
  notification.className = 'mt-4 p-4 rounded-lg';
  
  // Add type-specific classes and icon
  if (type === 'success') {
    notification.classList.add('bg-green-100', 'text-green-800');
    notification.innerHTML = `
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        ${message}
      </div>
    `;
  } else if (type === 'error') {
    notification.classList.add('bg-red-100', 'text-red-800');
    notification.innerHTML = `
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        ${message}
      </div>
    `;
  }
  
  // Show notification
  notification.classList.remove('hidden');
  
  // Hide notification after 5 seconds
  setTimeout(() => {
    notification.classList.add('hidden');
  }, 5000);
}
