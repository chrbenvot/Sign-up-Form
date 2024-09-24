document.getElementById("form").addEventListener("submit", function(event) {
  // shadows,focus bleu
    let pwd1 = document.getElementById("pwd");
    let pwd2 = document.getElementById("pwdConfirm");

    // Clear any previous error message
    let errorMessage = document.querySelector(".error-message");
    if (errorMessage) {
        errorMessage.remove();
    }

    if (pwd1.value !== pwd2.value) {
        pwd1.setCustomValidity("Passwords do not match");
        pwd2.setCustomValidity("Passwords do not match");

        let err = document.createElement("span");
        err.classList.add("error-message");
        err.style.color = "red";
        err.textContent = "* Passwords do not match";

        pwd1.parentElement.appendChild(err);

        event.preventDefault();  // Prevent form submission
        pwd1.reportValidity();
        pwd2.reportValidity();
    } else {
        pwd1.setCustomValidity("");
        pwd2.setCustomValidity("");
    }
});

