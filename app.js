document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("productGrid");

  if (!productGrid || typeof products === "undefined") return;

  productGrid.innerHTML = "";

  products.forEach((product) => {
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

    productGrid.appendChild(card);
  });
});

function buyProduct(name, price) {
  const phone = "7033379080";

  const message =
    `Assalamualaikum, mujhe Subhan Vastralay se ${name} chahiye. Price ₹${price}.`;

  const whatsappURL =
    `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
}
