document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successOverlay = document.getElementById("success-overlay");

  if (!form || !successOverlay) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/denis.kosichkov@gmail.com", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        // Показываем сообщение
        successOverlay.classList.remove("hidden");
        form.reset();

        // Скрыть через 5 секунд
        setTimeout(() => {
          successOverlay.classList.add("hidden");
        }, 5000);
      } else {
        alert("Ошибка при отправке. Попробуйте позже.");
      }
    })
    .catch(error => {
      alert("Ошибка: " + error.message);
    });
  });
});
