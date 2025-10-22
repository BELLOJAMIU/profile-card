


const timeElement = document.querySelector('[data-testid="test-user-time"]');
if (timeElement) {
  function updateTime() {
    const currentTime = Date.now();
    timeElement.textContent = currentTime;
  }

  updateTime();
  setInterval(updateTime, 1000);
}




const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const success = document.getElementById("success");

    let valid = true;

    const showError = (input, id, msg) => {
      const error = document.getElementById(id);
      error.textContent = msg;
      input.setAttribute("aria-describedby", id);
    };
    const clearError = (id) => (document.getElementById(id).textContent = "");

    
    if (name.value.trim() === "") {
      showError(name, "error-name", "Full name is required");
      valid = false;
    } else clearError("error-name");

    
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email.value.trim())) {
      showError(email, "error-email", "Enter a valid email (name@example.com)");
      valid = false;
    } else clearError("error-email");

   
    if (subject.value.trim() === "") {
      showError(subject, "error-subject", "Subject is required");
      valid = false;
    } else clearError("error-subject");


    if (message.value.trim().length < 10) {
      showError(message, "error-message", "Message must be at least 10 characters");
      valid = false;
    } else clearError("error-message");

    if (valid) {
      success.textContent = "✅ Thank you! Your message has been sent successfully.";
      form.reset();
    } else {
      success.textContent = "";
    }
  });
}