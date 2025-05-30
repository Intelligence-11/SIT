// products.js
const products = [
  {
    id: "civil3d",
    name: "Autodesk Civil 3D 2025",
    image: "../images/autocad.jpg",
    price: "1 523 824 ₸",
    rating: 4.9,
    description: "Решение для проектирования объектов инфраструктуры, предназначенное для землеустроителей, проектировщиков генплана и проектировщиков линейных сооружений.",
    features: [
      "Интеллектуальное проектирование дорог и инфраструктуры",
      "Поддержка BIM-моделирования и автоматизация рабочих процессов",
      "Удобный интерфейс и интеграция с другими продуктами Autodesk",
    ],
    specs: {
      "Версия": "2025",
      "Тип лицензии": "Подписка",
      "Совместимость": "Windows 10/11",
      "Языки": "Русский, Английский",
    },
    requirements: [
      "Windows 10 (64-bit)",
      "Процессор Intel i5 или AMD Ryzen",
      "ОЗУ: от 8 ГБ",
      "Место на диске: от 10 ГБ",
    ],
  },

  {
    id: "navisworks",
    name: "Autodesk Navisworks Manage 2025",
    image: "../images/Navisworks.jpg",
    price: "1 502 482 ₸",
    rating: 4.8,
    description: "Программа для всесторонней проверки архитектурно-строительных проектов. Это решение для проверки архитектурно-строительных проектов, позволяющее полностью контролировать результаты.",
    features: [
      "Объединение моделей из разных источников",
      "Визуализация и координация в 3D",
      "Интеграция с Revit и другими продуктами Autodesk",
    ],
    specs: {
      "Версия": "2025",
      "Тип лицензии": "Подписка",
      "Совместимость": "Windows 10/11",
      "Языки": "Русский, Английский",
    },
    requirements: [
      "Windows 10 (64-bit)",
      "Процессор Intel i5 или AMD Ryzen",
      "ОЗУ: от 8 ГБ",
      "Место на диске: от 10 ГБ",
    ],
  },

  {
    id: "kaspersky",
    name: "Kaspersky Total Security",
    image: "../images/kaspersky.jpg",
    price: "от 520 000 ₸",
    rating: 4.7,
    description: "Машинное обучение, интегрированное в антивирусное решение, положительно влияет на степень защиты бизнеса. Продукт способен предотвратить даже проведение сложных атак для всех элементов корпоративной сети предприятия. Администрируйте безопасность бизнеса из удобной централизованной консоли.",
    features: [
      "Защита интернет-шлюзов",
      "Контроль программ, устройств и веб-контрол",
      "Контроль приложений для серверов",
    ],
    specs: {
      "Версия": "05.05.2025",
      "Тип лицензии": "1 год",
      "Совместимость": "Windows 10/11",
      "Языки": "Русский/Английский",
    },
    requirements: [
      "Windows 10 (64-bit)",
      "Процессор Intel i3 или AMD Ryzen",
      "ОЗУ: от 4 ГБ",
      "Место на диске: от 4 ГБ",
    ],
  },

  {
    id: "infraworks",
    name: "Autodesk InfraWorks 2025",
    image: "../images/infraworks.png",
    price: "1 143 935 ₸",
    rating: 4.6,
    description: "Программное обеспечение Autodesk InfraWorks (ранее Infrastructure Modeler) обеспечивает прорывную технологию 3D-моделирования и визуализации для настольных компьютеров, Интернета и мобильных устройств, которая поддерживает рабочие процессы Building Information Modeling (BIM).",
    features: [
      "Интерактивное моделирование в реальном времени",
      "Импорт данных GIS и CAD",
      "Интеграция с Autodesk Revit и Civil 3D",
    ],
    specs: {
      "Версия": "2025",
      "Тип лицензии": "Подписка",
      "Совместимость": "Windows 10/11",
      "Языки": "Русский, Английский",
    },
    requirements: [
      "Windows 10 (64-bit)",
      "Процессор Intel i5 или AMD Ryzen",
      "ОЗУ: от 8 ГБ",
      "Место на диске: от 15 ГБ",
    ],
  },

  {
    id: "3dsmax",
    name: "Autodesk 3ds Max 2025",
    image: "../images/3dsmax.png",
    price: "912 125 ₸",
    rating: 4.7,
    description: "Программное обеспечение Autodesk 3ds Max 2024 предлагает мощные интегрированные инструменты трехмерного моделирования, анимации, рендера и композитинга для работы с высокой скоростью и производительностью.",
    features: [
      "Инструменты моделирования и анимации",
      "Фотореалистичный рендеринг",
      "Поддержка V-Ray и Arnold",
    ],
    specs: {
      "Версия": "2025",
      "Тип лицензии": "Подписка",
      "Совместимость": "Windows 10/11",
      "Языки": "Русский, Английский",
    },
    requirements: [
      "Windows 10 (64-bit)",
      "Процессор Intel i5 или AMD Ryzen",
      "ОЗУ: от 8 ГБ",
      "Место на диске: от 15 ГБ",
    ],
  },

  {
    id: "revit",
    name: "Autodesk Revit 2025",
    image: "../images/revit.jpg",
    price: "1 592 119 ₸",
    rating: 4.8,
    description: "Продукт, основанный на технологии информационного моделирования зданий (BIM), предназначен для проектировщиков зданий и специалистов строительных организаций.",
    features: [
      "Создание комплексных архитектурных моделей",
      "Поддержка многопользовательской работы",
      "Интеграция с Navisworks и AutoCAD",
    ],
    specs: {
      "Версия": "2025",
      "Тип лицензии": "Подписка",
      "Совместимость": "Windows 10/11",
      "Языки": "Русский, Английский",
    },
    requirements: [
      "Windows 10 (64-bit)",
      "Процессор Intel i5 или AMD Ryzen",
      "ОЗУ: от 8 ГБ",
      "Место на диске: от 10 ГБ",
    ],
  },
];

// Динамическая подгрузка на productdetails.html
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const product = products.find((p) => p.id === id);

  if (!product) {
    document.getElementById("product-container").innerHTML = '<p class="text-center text-gray-600">Продукт не найден.</p>';
    return;
  }

  document.getElementById("breadcrumbs").innerHTML = `
    <nav class="flex items-center space-x-2">
      <a href="../html/product.html" class="hover:underline">Продукты</a>
      <span>&gt;</span>
      <span class="font-semibold">${product.name}</span>
    </nav>
  `;

  document.getElementById("product-container").innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <img src="${product.image}" alt="${product.name}" class="w-full h-96 object-cover rounded-lg shadow-md mb-6">
        <div class="flex items-center justify-between mb-4">
          <span class="text-2xl font-bold">${product.price}</span>
          <div class="flex items-center space-x-1">
            ${'<i class="fas fa-star text-yellow-400 text-lg"></i>'.repeat(Math.floor(product.rating))}
            <span class="text-sm text-gray-600 ml-2">${product.rating} из 5</span>
          </div>
        </div>
        <a href="#" class="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-medium shadow transition">Купить</a>
      </div>
      <div>
        <h1 class="text-4xl font-bold mb-4">${product.name}</h1>
        <p class="text-lg text-gray-700 mb-6">${product.description}</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div class="flex items-center space-x-3"><i class="fas fa-shield-alt text-blue-600 text-xl"></i><span class="text-gray-700">Расширенная защита</span></div>
          <div class="flex items-center space-x-3"><i class="fas fa-box text-blue-600 text-xl"></i><span class="text-gray-700">Простая установка</span></div>
          <div class="flex items-center space-x-3"><i class="fas fa-users text-blue-600 text-xl"></i><span class="text-gray-700">Поддержка 24/7</span></div>
          <div class="flex items-center space-x-3"><i class="fas fa-award text-blue-600 text-xl"></i><span class="text-gray-700">Отмечено наградами</span></div>
        </div>
        <div class="border-b border-gray-200 mb-6">
          <nav class="flex space-x-8" id="tabs">
            <button data-tab="features" class="tab-btn py-2 text-sm text-blue-600 relative active">Особенности</button>
            <button data-tab="specs" class="tab-btn py-2 text-sm text-gray-600 relative">Характеристики</button>
            <button data-tab="requirements" class="tab-btn py-2 text-sm text-gray-600 relative">Системные требования</button>
            <button data-tab="reviews" class="tab-btn py-2 text-sm text-gray-600 relative">Обзоры</button>
          </nav>
        </div>
        <div id="tab-contents">
          <div id="features" class="tab-content">
            <ul class="space-y-3">
              ${product.features.map(f => `<li class="flex items-start"><i class="fas fa-check text-green-600 mt-1 mr-2"></i>${f}</li>`).join('')}
            </ul>
          </div>
          <div id="specs" class="tab-content hidden">
            <ul class="space-y-2">
              ${Object.entries(product.specs).map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`).join('')}
            </ul>
          </div>
          <div id="requirements" class="tab-content hidden">
            <ul class="space-y-2">
              ${product.requirements.map(r => `<li>${r}</li>`).join('')}
            </ul>
          </div>
          <div id="reviews" class="tab-content hidden">
            <p class="text-gray-700">Отзывы скоро будут доступны.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("text-blue-600", "active"));
      contents.forEach(c => c.classList.add("hidden"));
      tab.classList.add("text-blue-600", "active");
      document.getElementById(tab.dataset.tab).classList.remove("hidden");
    });
  });
});
