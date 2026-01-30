const list = document.getElementById("product-list");
const search = document.getElementById("search");
const STORAGE_KEY = "SUNITA_PRODUCTS";

let products = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function render(arr){
  list.innerHTML = "";

  if(arr.length === 0){
    list.innerHTML = "<p style='text-align:center'>No products</p>";
    return;
  }

  arr.forEach(p=>{
    list.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>
          ₹${p.price}
          ${p.old ? `<del>₹${p.old}</del>` : ""}
        </p>
        <button onclick="order('${p.name}','${p.price}')">
          Order on WhatsApp
        </button>
      </div>
    `;
  });
}

render(products);

function filterCat(cat){
  if(cat === "All") render(products);
  else render(products.filter(p => p.category === cat));
}

if(search){
  search.oninput = ()=>{
    let v = search.value.toLowerCase();
    render(products.filter(p => p.name.toLowerCase().includes(v)));
  }
}

function order(name, price){
  window.open(
    `https://wa.me/919982104506?text=${encodeURIComponent(
      "Hello, I want to order:\n" + name + "\nPrice: ₹" + price
    )}`,
    "_blank"
  );
}
