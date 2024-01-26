document.getElementById("signup-form").addEventListener("submit", function(event) {
    var email = document.getElementById("signup-form").elements["email"].value;
    if (!isValidEmail(email)) {
        event.preventDefault();
        alert("Please enter a valid email address.");
    }
});

function isValidEmail(email) {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
