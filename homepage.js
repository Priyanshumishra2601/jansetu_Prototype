// Handle navigation for buttons
function redirectToLogin() {
  window.location.href = "login.html";
}

function redirectToComplaints() {
  window.location.href = "complaints.html";
}

// Sample dynamic counter update (simulate fetching from server)
document.addEventListener("DOMContentLoaded", () => {
  const resolved = document.getElementById("resolved-count");
  const users = document.getElementById("user-count");
  
  // Optional: animate the counter
  let resolvedCount = 0;
  let userCount = 0;

  const animateCount = (el, target, interval) => {
    const update = setInterval(() => {
      const current = parseInt(el.innerText);
      if (current < target) {
        el.innerText = current + 1;
      } else {
        clearInterval(update);
      }
    }, interval);
  };

  animateCount(resolved, 512, 10);
  animateCount(users, 1024, 5);
});
