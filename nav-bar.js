fetch('/navbar.html')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(data => {
    const navbarContainer = document.getElementById('navbar');
    if (navbarContainer) {
      navbarContainer.innerHTML = data;
    } else {
      console.warn('Navbar container not found in the document.');
    }
  })
  .catch(error => {
    console.error('Error loading navbar:', error);
  });
