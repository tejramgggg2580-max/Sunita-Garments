const UPI_ID = "tamilsunita51@okhdfcbank";
const WHATSAPP = "919982104506";
const defaultProducts = [
  {
    cat: "Tops",
    name: "Korean Green Shirt",
    price: 499,
    old: 1299,
    img: "https://raw.githubusercontent.com/tejramgggg2580-max/sunita-garments/refs/heads/main/korean-shirt2.jpg"
  }
];

let products = JSON.parse(localStorage.getItem("products"));
if (!products || products.length === 0) {
  products = defaultProducts;
  localStorage.setItem("products", JSON.stringify(products));
}
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

    <p>
      ₹${p.price}
      <del style="color:#888; font-size:12px;">
        ₹${p.old || ""}
      </del>
    </p>

    <button onclick="singleWA('${p.name}','${p.price}')"
      style="background:#25D366;color:white;padding:10px;width:100%;border:none;border-radius:6px;">
      Order on WhatsApp
    </button>

    <button onclick="buyNow('${p.name}','${p.price}')"
      style="margin-top:8px;background:#ff3f6c;color:white;padding:10px;width:100%;border:none;border-radius:6px;">
      Buy Now
    </button>
  </div>`;
});

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
function generateQR(amount) {
  let upiURL = `upi://pay?pa=${UPI_ID}&pn=Sunita%20Garments&am=${amount}&cu=INR`;

  document.getElementById("qrBox").innerHTML = `
    <h3>Scan & Pay</h3>
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiURL)}">
    <p>UPI ID: ${UPI_ID}</p>
    <p>Amount: ₹${amount}</p>
  `;
}
  function buyNow(name, price) {
  const upiId = "tamilsunita51@okhdfcbank";

  const upiUrl =
    `upi://pay?pa=${upiId}&pn=Sunita Garments&am=${price}&cu=INR&tn=${encodeURIComponent(name)}`;

  window.location.href = upiUrl;
}
