// ❌ no-image products hide
products = products.filter(p => p.image && p.image.trim() !== "");
const WHATSAPP = "919982104506";

let products = JSON.parse(localStorage.getItem("products")) || [];
let currentCat = "All";

const grid = document.getElementById("grid");
const search = document.getElementById("search");

function show(){
  grid.innerHTML = "";

  const filtered = products.filter(p =>
    (currentCat === "All" || p.cat === currentCat) &&
    p.name.toLowerCase().includes(search.value.toLowerCase())
  );

  if(filtered.length === 0){
    grid.innerHTML = "<p style='text-align:center'>No products found</p>";
    return;
  }

  filtered.forEach(p=>{
    grid.innerHTML += `
      <div class="card">
        <img src="${p.img}" alt="${p.name}">
        <h4>${p.name}</h4>
        <p>₹${p.price} <del>₹${p.old || ""}</del></p>
        <button onclick="singleWA('${p.name}','${p.price}')">
          Order on WhatsApp
        </button>
      </div>`;
  });
}

function filterCat(cat){
  currentCat = cat;
  show();
}

search.addEventListener("input", show);

function orderWA(){
  if(products.length === 0){
    alert("No products available");
    return;
  }

  let msg = "Hello Sunita Garments,\nI want to order:\n";
  products.forEach(p=>{
    msg += `- ${p.name} : ₹${p.price}\n`;
  });

  window.open(
    "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg),
    "_blank"
  );
}

function singleWA(name, price){
  const msg = `Hello Sunita Garments,\nI want to order:\n${name}\nPrice: ₹${price}`;
  window.open(
    "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg),
    "_blank"
  );
}

show();
