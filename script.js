const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const quoteForm = document.getElementById("quoteForm");
const formMessage = document.getElementById("formMessage");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (quoteForm && formMessage) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formMessage.textContent =
      `Thanks${name ? ", " + name : ""}. This demo form is working on the page, but on GitHub Pages it will need a form service later if you want real submissions.`;

    quoteForm.reset();
  });
}
