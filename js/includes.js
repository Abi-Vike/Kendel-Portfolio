// js/includes.js
document.addEventListener("DOMContentLoaded", function () {
  // Function to update the active nav link
  function updateActiveNav() {
    // Get the current page's pathname (e.g. "/blog.html" or "/index.html")
    const currentPath = window.location.pathname;
    // Select all nav links in the header
    const navLinks = document.querySelectorAll("main-header .navbar-nav a");

    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      // Simple check: if the current pathname ends with the link's href,
      // mark that link as active.
      if (
        currentPath.endsWith(href) ||
        (currentPath === "/" && href.indexOf("index.html") !== -1)
      ) {
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
        // Now that the header is loaded, update the active nav link
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
