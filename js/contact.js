document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successOverlay = document.getElementById("success-overlay");

  if (!form || !successOverlay) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Показать блок
    successOverlay.classList.remove("hidden");

    // Очистить форму
    form.reset();

    // Скрыть через 5 секунд
    setTimeout(() => {
      successOverlay.classList.add("hidden");
    }, 5000);
  });
});