document.addEventListener('DOMContentLoaded', function() {
  // Initialize EmailJS with your Public Key
  emailjs.init("w5xjHBNuXWncdHDKl");

  // Select the contact form
  const contactForm = document.getElementById("contact-form");

  // Listen for form submission
  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Send the form data using EmailJS
      emailjs.sendForm('service_wy2fetw', 'template_99d0c4p', this)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          // Optionally display a success message to the user.
        }, function(error) {
          console.log('FAILED...', error);
          // Optionally display an error message to the user.
        });
    });
  }
});
