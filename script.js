document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (email && message) {
        alert(`Thank you for your message, ${email}!`);
    } else {
        alert("Please fill in all fields.");
    }
});
