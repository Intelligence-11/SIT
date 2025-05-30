document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".product-list");

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="h-60 w-full object-cover rounded-t-lg">
      <div class="p-6">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-xl font-semibold text-gray-900">${product.name}</h3>
          <div class="flex items-center space-x-1">
            <i class="fas fa-star text-yellow-400 text-sm"></i>
            <span class="text-sm font-medium text-gray-600">${product.rating}</span>
          </div>
        </div>
        <p class="text-sm text-gray-600 mb-4">${product.description}</p>
        <div class="mt-auto">
          <span class="text-xl font-bold text-gray-900">${product.price}</span>
          <a href="product.html?id=${product.id}" class="block mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-center">Подробнее</a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
});
