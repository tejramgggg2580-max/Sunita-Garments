const grid = document.getElementById("grid");
const search = document.getElementById("search");

const products = [
  {
    name: "Designer Dress",
    category: "Dresses",
    oldPrice: 2999,
    price: 1499,
    img: "https://images.unsplash.com/photo-1520975698519-59c1fdb9a1f7"
  },
  {
  name: "Korean shirt",
  category: "Tops",
  price: 320,
  oldPrice: 3300,
  image: "https://raw.githubusercontent.com/tejramgggg2580-max/sunita-garments/main/korean-shirt2.jpg"
},
  {
    name: "Cotton Salwar Suit",
    category: "Salwar Suit",
    oldPrice: 2499,
    price: 1299,
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990"
  }
];

function showProducts(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    const wa = `https://wa.me/919982104506?text=I want to order ${p.name} at Rs ${p.price}`;
    const upi = `upi://pay?pa=tamilsunita51@okhdfcbank&pn=Sunita Garments&am=${p.price}&cu=INR`;

    grid.innerHTML += `
      <div class="card">
        <img src="${p.img}">
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
