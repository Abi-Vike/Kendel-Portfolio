// js/includes.js
document.addEventListener("DOMContentLoaded", function () {
  // Load header
  fetch("partials/header.html")
    .then((response) => response.text())
    .then((html) => {
      const headerContainer = document.querySelector("main-header");
      if (headerContainer) {
        headerContainer.innerHTML = html;
      }
    })
    .catch((error) => console.error("Error loading header:", error));

  // Load footer
  fetch("partials/footer.html")
    .then((response) => response.text())
    .then((html) => {
      const footerContainer = document.querySelector("main-footer");
      if (footerContainer) {
        footerContainer.innerHTML = html;
      }
    })
    .catch((error) => console.error("Error loading footer:", error));
});
