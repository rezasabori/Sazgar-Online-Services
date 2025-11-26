(function () {
  // Mobile nav toggle
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      mainNav.classList.toggle("open");
      if (mainNav.classList.contains("open")) mainNav.style.display = "flex";
      else mainNav.style.display = "none";
    });
  }

  // Set current year placeholders
  for (var i = 1; i <= 8; i++) {
    var el = document.getElementById("year" + (i === 1 ? "" : i));
    if (el) el.textContent = new Date().getFullYear();
  }

  // Simple contact form handling (no backend) — demonstrates validation
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var message = document.getElementById("message").value.trim();
      var status = document.getElementById("formStatus");
      if (!name || !email || !message) {
        status.textContent = "Please fill all required fields.";
        status.style.color = "crimson";
        return;
      }
      // fake send
      status.textContent = "Message sent. We will contact you shortly.";
      status.style.color = "green";
      contactForm.reset();
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
})();
