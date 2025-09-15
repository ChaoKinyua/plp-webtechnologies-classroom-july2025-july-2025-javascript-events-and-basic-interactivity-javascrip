// 🌙 Dark/Light Mode Toggle
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// 📊 Property Counter
let propertyCount = 0;
const countBtn = document.getElementById("countBtn");
const counterDisplay = document.getElementById("counter");
countBtn.addEventListener("click", () => {
  propertyCount++;
  counterDisplay.textContent = "Total Properties: " + propertyCount;
});

// ❓ FAQ Toggle
const questions = document.querySelectorAll(".question");
questions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// 📋 Form Validation
const form = document.getElementById("propertyForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  // Property name validation
  const name = document.getElementById("propertyName").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Property name is required";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Location validation
  const location = document.getElementById("location").value.trim();
  if (location === "") {
    document.getElementById("locationError").textContent = "Location is required";
    valid = false;
  } else {
    document.getElementById("locationError").textContent = "";
  }

  // Rent validation
  const rent = document.getElementById("rent").value.trim();
  if (rent === "" || rent <= 0) {
    document.getElementById("rentError").textContent = "Enter a valid rent amount";
    valid = false;
  } else {
    document.getElementById("rentError").textContent = "";
  }

  // Success
  if (valid) {
    document.getElementById("successMessage").textContent =
      "✅ Property added successfully!";
    form.reset();
  }
});
