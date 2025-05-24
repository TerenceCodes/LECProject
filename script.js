document.addEventListener("DOMContentLoaded", function () {
  // Login form
  const loginForm = document.querySelector(".login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("✅ Login successful!");
      window.location.href = "dashboard.html";
    });
  }

  // Register form
  const registerForm = document.getElementById("registerform");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("🎉 Registration successful!");
      window.location.href = "dashboard.html";
    });
  }

  // Contact form
  const contactForm = document.querySelector(".contact-form");
  const messageBox = document.getElementById("submit-message");
  if (contactForm && messageBox) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      messageBox.style.display = "block";
      setTimeout(() => {
        messageBox.style.display = "none";
      }, 3000);
    });
  }
});

// Navigation
function goToCourses() {
  window.location.href = "courses.html";
}

function goToCommunity() {
  window.location.href = "community.html";
}

// Optional: Age validation function (you can uncomment if needed)
/*
function validateAge() {
  const ageInput = document.getElementById("age");
  const age = parseInt(ageInput.value);
  if (age < 10 || age > 100 || isNaN(age)) {
    alert("Age must be between 10 and 100.");
    return false;
  }
  return true;
}
*/
