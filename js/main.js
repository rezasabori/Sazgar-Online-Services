function applyTime() {
  let guessedZone = moment.tz.guess();
  let currentMoment = moment().tz(guessedZone);

  let dateElement = document.querySelector("#date");
  let timeElement = document.querySelector("#time");
  let cityElement = document.querySelector("#city");

  dateElement.innerHTML = currentMoment.format("dddd MMMM Do, YYYY");
  timeElement.innerHTML = currentMoment.format("h:mm:ss [<small>]A[</small>]");
  cityElement.innerHTML = guessedZone.replace("_", " ").split("/")[1];
}
applyTime();
setInterval(applyTime, 1000);
(function () {
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      mainNav.classList.toggle("open");
      if (mainNav.classList.contains("open")) mainNav.style.display = "flex";
      else mainNav.style.display = "none";
    });
  }

  for (var i = 1; i <= 8; i++) {
    var el = document.getElementById("year" + (i === 1 ? "" : i));
    if (el) el.textContent = new Date().getFullYear();
  }

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

      status.textContent = "Message sent. We will contact you shortly.";
      status.style.color = "green";
      contactForm.reset();
    });
  }
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
})();

document.getElementById("gForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let form = new FormData(this);

  fetch(this.action, {
    method: "POST",
    mode: "no-cors",
    body: form,
  })
    .then(() => {
      document.getElementById("gForm").style.display = "none";

      document.getElementById("thankYou").style.display = "block";
    })
    .catch((err) => {
      alert("Error submitting the form. Please try again.");
      console.log(err);
    });
});
