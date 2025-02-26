// js/includes.js
document.addEventListener("DOMContentLoaded", function () {
  // Function to update the active nav link based on current pathname
  function updateActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll("main-header .navbar-nav a");

    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      // Check if current URL ends with the link's href or, for home, if at root.
      if (currentPath.endsWith(href) || (currentPath === "/" && href.includes("index.html"))) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // Load header partial
  fetch("partials/header.html")
    .then(response => response.text())
    .then(html => {
      const headerContainer = document.querySelector("main-header");
      if (headerContainer) {
        headerContainer.innerHTML = html;
        // Now update the active nav link
        updateActiveNav();
      }
    })
    .catch(error => console.error("Error loading header:", error));

  // Load footer partial
  fetch("partials/footer.html")
    .then(response => response.text())
    .then(html => {
      const footerContainer = document.querySelector("main-footer");
      if (footerContainer) {
        footerContainer.innerHTML = html;
      }
    })
    .catch(error => console.error("Error loading footer:", error));
});
