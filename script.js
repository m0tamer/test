// Display a welcome message when the Sign In button is clicked
document.querySelector('.header .btn').addEventListener('click', function() {
  alert('Welcome to LUGX Store!');
});

// Search functionality
document.querySelector('.landing-page-search button').addEventListener('click', function() {
  const searchTerm = document.querySelector('.landing-page-search input').value;
  alert('You searched for: ' + searchTerm);
});

