const productList = document.getElementById("product-list");

let products = JSON.parse(localStorage.getItem("products")) || [];

if(products.length === 0){
  productList.innerHTML = "<p>No products available</p>";
}

products.forEach((p, index) => {
  const div = document.createElement("div");
  div.style.border = "1px solid #ccc";
  div.style.margin = "10px";
  div.style.padding = "10px";

  div.innerHTML = `
    <img src="${p.img}" style="width:100%;max-height:200px;object-fit:cover">
    <h3>${p.name}</h3>
    <p>${p.cat}</p>
    <p>
      <b>₹${p.price}</b>
      <del>₹${p.old}</del>
    </p>
    <a href="https://wa.me/919982104506?text=I want ${p.name}">
      <button>Order on WhatsApp</button>
    </a>
  `;

  productList.appendChild(div);
});
