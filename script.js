const grid = document.getElementById("grid");
const search = document.getElementById("search");

const products = [
  {
    name: "Korean-red Checkered Shirt",
    category: "Branded men shirt",
    oldPrice: 2999,
    price: 320,
    image: "https://raw.githubusercontent.com/tejramgggg2580-max/sunita-garments/main/Korean-red%20Checkered%20Shirt.jpg"
  },
  {
  name: "Korean shirt",
  category: "Branded men shirt",
  price: 320,
  oldPrice: 2999,
  image: "https://raw.githubusercontent.com/tejramgggg2580-max/sunita-garments/main/korean-shirt2.jpg"
},
  {
  name: "Baggy Denim Jeans",
  category: "Denim jeans",
  oldPrice: 3900,
  price: 399,
  image: "https://raw.githubusercontent.com/tejramgggg2580-max/sunita-garments/main/Light-Wash%20Baggy%20Denim%20Jeans.jpg"
  },
  {
    name: "Black t shirt",
    category: "Salwar Suit",
    oldPrice: 499,
    price: 99,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990"
  }
];

function showProducts(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    const wa = `https://wa.me/919982104506?text=I want to order ${p.name} at Rs ${p.price}`;
    const upi = `upi://pay?pa=tamilsunita51@okhdfcbank&pn=Sunita Garments&am=${p.price}&cu=INR`;

    grid.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h4>${p.name}</h4>
        <div class="price">
          <del>₹${p.oldPrice}</del> <span>₹${p.price}</span>
        </div>
        <div class="actions">
          <a class="whatsapp" href="${wa}">WhatsApp</a>
          <div class="upi" onclick="location.href='${upi}'">UPI</div>
        </div>
      </div>
    `;
  });
}

function filterCat(cat) {
  if (cat === "All") showProducts(products);
  else showProducts(products.filter(p => p.category === cat));
}

search.addEventListener("input", () => {
  const v = search.value.toLowerCase();
  showProducts(products.filter(p => p.name.toLowerCase().includes(v)));
});

showProducts(products);
