let cartCount = 0;

function addToCart(product) {
  cartCount++;
  document.getElementById("count").innerText = cartCount;
}

function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

const productsContainer = document.getElementById("products");

// PRODUCTS DATA
const productData = [
  { img: "classic.avif", name: "Classic T-Shirt", price: "₹1199.00" },
  { img: "Denim jacket.webp", name: "Denim Jacket", price: "₹2199.00" },
  { img: "Hoodie.jpg", name: "Comfort Hoodie", price: "₹2599.00" },
  { img: "Baggy.jpg", name: "Cargo Pants", price: "₹2359.00" },
  { img: "sweatshirt.webp", name: "Oversized Sweatshirt", price: "₹1899.00" },
  { img: "jogger.jpg", name: "Street Joggers", price: "₹1999.00" },
  { img: "shirt.png", name: "Casual Shirt", price: "₹1699.00" },
  { img: "shorts.jpg", name: "Summer Shorts", price: "₹1299.00" }
];

let productIndex = 0;
let rowsLoaded = 0;
const MAX_ROWS = 20;

// Detect columns dynamically
function getColumnCount() {
  return Math.floor(productsContainer.offsetWidth / 220);
}

// Create product card
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <button onclick="addToCart('${product.name}')">Add to Cart</button>
  `;

  return card;
}

// Load ONE ROW at a time
function loadRow() {
  if (rowsLoaded >= MAX_ROWS) return;

  const columns = Math.max(getColumnCount(), 1);

  for (let i = 0; i < columns; i++) {
    productsContainer.appendChild(
      createProductCard(productData[productIndex % productData.length])
    );
    productIndex++;
  }

  rowsLoaded++;
}

// Initial rows
loadRow();
loadRow();
loadRow();

// Scroll listener (LIMITED)
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 80
  ) {
    loadRow();
  }
});

