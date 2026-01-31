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
// 🛒 ADD TO CART
function addToCart(product){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("🛒 Product cart me add ho gaya");
}
/************** AUTO SAFE SYSTEM **************/

// hide products without image
products = products.filter(p => p.image && p.image.trim() !== "");

// CART SYSTEM
function addToCart(product){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product cart me add ho gaya");
}

// CREATE CART BUTTON AUTO
document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelectorAll(".card").forEach((card, i)=>{
    let btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.style.marginTop = "8px";

    btn.onclick = ()=>{
      let img = card.querySelector("img")?.src;
      let name = card.querySelector("h4")?.innerText;
      let price = card.querySelector("p")?.innerText.replace("₹","");

      addToCart({name, price, image: img});
    };

    card.appendChild(btn);
  });
});
