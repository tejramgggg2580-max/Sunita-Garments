const WHATSAPP = "919982104506";

let currentCat = "All";
let products = JSON.parse(localStorage.getItem("products")) || [];

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
        <img src="${p.img}">
        <h4>${p.name}</h4>
        <p>₹${p.price} <del>₹${p.old}</del></p>
      </div>`;
    });
}

function filterCat(c){
  currentCat=c;
  show();
}

function orderWA(){
  window.open(`https://wa.me/${WHATSAPP}?text=Hello Sunita Garments, I want to order`);
}

search.oninput = show;
show();
