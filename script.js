// ===== LOAD PRODUCTS SAFELY =====
let products = [];
try {
  products = JSON.parse(localStorage.getItem("products")) || [];
} catch (e) {
  products = [];
}

const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");

// ===== NORMALIZE PRODUCT (CORE LOGIC) =====
function normalizeProduct(p) {
  return {
    name:
      p.name ||
      p.title ||
      p.productName ||
      p.product_title ||
      "No Name",

    price:
      p.sellingPrice ||
      p.price ||
      p.productPrice ||
      p.cost ||
      "",

    image:
      p.image ||
      p.img ||
      p.productImage ||
      p.photo ||
      "",

    category:
      p.category ||
      p.productCategory ||
      p.cat ||
      "Other",
  };
}

// ===== SHOW PRODUCTS =====
function showProducts(list) {
  productList.innerHTML = "";

  if (!list || list.length === 0) {
    productList.innerHTML = "<p>No products found</p>";
    return;
  }

  list.forEach((raw) => {
    const p = normalizeProduct(raw);

    productList.innerHTML += `
      <div class="card">
        ${
          p.image
            ? `<img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'">`
            : ""
        }
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>
      </div>
    `;
  });
}

// ===== INITIAL LOAD =====
showProducts(products);

// ===== CATEGORY FILTER =====
function filterCat(cat) {
  if (cat === "All") {
    showProducts(products);
  } else {
    showProducts(
      products.filter(
        (p) =>
          normalizeProduct(p).category.toLowerCase() ===
          cat.toLowerCase()
      )
    );
  }
}

// ===== SEARCH =====
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const val = searchInput.value.toLowerCase();
    showProducts(
      products.filter((p) =>
        normalizeProduct(p).name.toLowerCase().includes(val)
      )
    );
  });
}

// ===== WHATSAPP ORDER =====
function orderWA() {
  window.open(
    "https://wa.me/919982104506?text=Hello%20I%20want%20to%20order",
    "_blank"
  );
}
