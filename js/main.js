// ===== Mobile Menu Toggle =====
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  });
}

// ===== Highlight Active Nav Link =====
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage || (currentPage === "" && link.getAttribute("href") === "index.html")) {
    link.classList.add("active");
  }
});

// ===== Scroll to Top Button =====
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "⬆ Top";
scrollBtn.classList.add("scroll-top");
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Contact Form Validation =====
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMsg = document.createElement("p");
    errorMsg.style.color = "red";

    // Remove previous error messages
    const oldError = document.querySelector(".form-error");
    if (oldError) oldError.remove();

    if (!name || !email || !message) {
      errorMsg.textContent = "⚠️ Please fill in all fields.";
      errorMsg.classList.add("form-error");
      contactForm.appendChild(errorMsg);
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      errorMsg.textContent = "⚠️ Please enter a valid email.";
      errorMsg.classList.add("form-error");
      contactForm.appendChild(errorMsg);
      return;
    }

    alert("✅ Thank you for contacting us!");
    contactForm.reset();
  });
}

// ===== Dynamic Footer Year =====
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
