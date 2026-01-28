const WHATSAPP = "919982104506";
let currentCat = "All";

// products ab admin panel se aayenge
let products = JSON.parse(localStorage.getItem("products") || "[]");

const grid = document.getElementById("grid");
const search = document.getElementById("search");

function show(){
  grid.innerHTML="";
  products
    .filter(p =>
      (currentCat==="All" || p.cat===currentCat) &&
      p.name.toLowerCase().includes(search.value.toLowerCase())
    )
    .forEach(p=>{
      grid.innerHTML += `
        <div class="card">
          <div class="tag">On Offer</div>
          <div class="heart">♡</div>
          <img src="${p.img}">
          <div class="info">
            <h4>${p.name}</h4>
            <div class="price">
              ₹${p.price}
              <del>₹${p.old}</del>
              <span>${p.off} OFF</span>
            </div>
          </div>
        </div>
      `;
    });
}

function filterCat(c){
  currentCat = c;
  show();
}

search.oninput = show;

function orderWA(){
  window.open(
    `https://wa.me/${WHATSAPP}?text=Hello Sunita Garments, I want to place an order`
  );
}

show();
