const toggles = document.querySelectorAll(".faq-toggle");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    toggles[i].parentNode.classList.toggle("active");
  });
}
