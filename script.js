document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const categoryButtons = document.querySelectorAll("[data-category]");

  function showProducts(list) {
    const grid = document.getElementById("productGrid");

    if (!grid) return;

    grid.innerHTML = "";

    list.forEach(function (product) {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <div class="product-image">
          ${
            product.image
              ? `<img src="${product.image}" alt="${product.name}">`
              : `<div class="no-image">Photo jaldi aayegi</div>`
          }
        </div>

        <h3>${product.name}</h3>
        <p class="category">${product.category}</p>
        <p class="price">₹${product.price}</p>

        <button onclick="buyProduct('${product.name}', ${product.price})">
          Buy Now
        </button>
      `;

      grid.appendChild(card);
    });
  }

  function filterProducts() {
    const search = searchInput
      ? searchInput.value.toLowerCase().trim()
      : "";

    const activeButton = document.querySelector(
      "[data-category].active"
    );

    const category = activeButton
      ? activeButton.dataset.category
      : "All";

    const filtered = products.filter(function (product) {
      const matchesSearch =
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search);

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });

    showProducts(filtered);
  }

  categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      categoryButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");
      filterProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", filterProducts);
  }

  showProducts(products);
});

function buyProduct(name, price) {
  const phone = "7033379080";

  const message =
    `Assalamualaikum, mujhe Subhan Vastralay se ${name} chahiye. Price ₹${price}.`;

  const whatsappURL =
    `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
}
