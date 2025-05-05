// 1️⃣ Button Click Event
document.getElementById("eventButton").addEventListener("click", function() {
    this.textContent = "Clicked!";
});

// Hover Effect
document.getElementById("eventButton").addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
});

// Keypress Detection
document.addEventListener("keydown", function(event) {
    console.log(`Key pressed: ${event.key}`);
});

// Bonus: Secret Double Click Action
document.getElementById("eventButton").addEventListener("dblclick", function() {
    alert("You found the secret action!");
});

// 2️⃣ Image Slideshow
let images = document.querySelectorAll(".image-gallery img");
let index = 0;

document.getElementById("nextImage").addEventListener("click", function() {
    // Hide all images first
    images.forEach(img => img.style.opacity = "0");

    // Show the next image
    index = (index + 1) % images.length;
    images[index].style.opacity = "1";
});

// Double-click event listener for a secret action
document.getElementById("eventButton").addEventListener("dblclick", function() {
    alert("You unlocked the secret double-click action!");
});

// Long press event listener (detects press longer than 1 sec)
document.getElementById("eventButton").addEventListener("mousedown", function(event) {
    setTimeout(() => {
        if (event.buttons === 1) {  // Ensures it's a left-click hold
            alert("Long press detected! 🎉");
        }
    }, 1000); // 1-second press required
});


// 3️⃣ Form Validation
document.getElementById("email").addEventListener("input", function() {
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.style.borderColor = emailPattern.test(this.value) ? "green" : "red";
});

document.getElementById("password").addEventListener("input", function() {
    let strength = this.value.length >= 8 ? "Strong" : "Weak";
    document.getElementById("feedback").textContent = strength;
});
// Password field validation with real-time feedback
document.getElementById("password").addEventListener("input", function() {
    let password = this.value;
    let feedback = document.getElementById("feedback");

    // Updates feedback based on password strength
    if (password.length < 8) {
        feedback.textContent = "Weak ❌";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Strong ✅";
        feedback.style.color = "green";
    }
});
