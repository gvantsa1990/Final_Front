const isLoggedIn = localStorage.getItem("currentUser");

function goToCourseDetails(courseTitle) {
  window.location.href =
    "./course-details.html?title=" + encodeURIComponent(courseTitle);
}

function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleBtn = document.querySelector(".toggle-password i");

  if (passwordInput && toggleBtn) {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleBtn.classList.remove("fa-eye");
      toggleBtn.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      toggleBtn.classList.remove("fa-eye-slash");
      toggleBtn.classList.add("fa-eye");
    }
  }
}

function updateUserName() {
  const currentUser = localStorage.getItem("currentUser");
  const navUserLink = document.getElementById("navUserLink");

  if (currentUser && navUserLink) {
    navUserLink.textContent =
      currentUser.charAt(0).toUpperCase() + currentUser.slice(1);
  }
}

function logoutUser() {
  if (isLoggedIn) {
    localStorage.removeItem("currentUser");
  }

  window.location.href = "/login.html";
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  updateUserName();
});
