document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("subscription-form");
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const email = emailInput.value;
  
      if (isValidEmail(email)) {
        localStorage.setItem("emailstorage", email) ; 
        window.location.href = "success.html";
      } else {
        errorMessage.style.display = "block";
        emailInput.style.backgroundColor = "rgba(255,232,230,255)";
        emailInput.style.borderColor = "hsl(4, 100%, 67%)"
      }
    });
  
    function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  });

