const grid = document.getElementById("grid");
const search = document.getElementById("search");

const products = [
  {
    category: "Dresses",
    name: "Designer Dress",
    price: 1499,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
  },
  {
    category: "Salwar Suit",
    name: "Salwar Suit",
    price: 1799,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990"
  },
  {
    category: "Tops",
    name: "Stylish Top",
    price: 899,
    image: "https://images.unsplash.com/photo-1618354691295-3d0d2e8f03e7"
  }
];

function showProducts(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    grid.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>
      </div>
    `;
  });
}

showProducts(products);

function filterCat(cat) {
  if (cat === "All") {
    showProducts(products);
  } else {
    showProducts(products.filter(p => p.category === cat));
  }
}

search.addEventListener("input", () => {
  const val = search.value.toLowerCase();
  showProducts(products.filter(p =>
    p.name.toLowerCase().includes(val)
  ));
});

function orderWA() {
  window.location.href =
    "https://wa.me/919982104506?text=Hello%20Sunita%20Garments";
}
