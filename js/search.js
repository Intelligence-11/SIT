document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector('input[placeholder="Поиск продуктов..."]');
  const productCards = document.querySelectorAll(".product-card");

  if (searchInput && productCards.length > 0) {
    // Фильтрация по вводу
    searchInput.addEventListener("input", () => {
      filterProducts();
    });

    // Поиск при нажатии Enter
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        filterProducts();
      }
    });

    function filterProducts() {
      const searchTerm = searchInput.value.toLowerCase().trim();
      productCards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const description = card.querySelector("p").textContent.toLowerCase();
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    }
  }
});