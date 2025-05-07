fetch('/navbar.html')
  .then(response => response.text())
  .then(data => {
    const navbarContainer = document.getElementById('navbar');
    if (navbarContainer) {
      navbarContainer.innerHTML = data;
    }
  })
  .catch(error => {
    console.error('Error loading navbar:', error);
  });
