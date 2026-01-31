const grid = document.getElementById("grid");
const search = document.getElementById("search");

function showProducts(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    const msg = `Hello Sunita Garments,%0AProduct: ${p.name}%0APrice: ₹${p.price}`;
    grid.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h4>${p.name}</h4>

        <p>
          <span style="text-decoration:line-through;color:gray;">
            ₹${p.oldPrice}
          </span>
          <span style="color:green;font-weight:bold;margin-left:6px;">
            ₹${p.price}
          </span>
        </p>

        <a class="btn wa"
           href="https://wa.me/919982104506?text=${msg}"
           target="_blank">
           Order on WhatsApp
        </a>

        <a class="btn upi"
           href="upi://pay?pa=tamilsunita51@okhdfcbank&pn=Sunita%20Garments&am=${p.price}&cu=INR">
           Pay via UPI
        </a>
      </div>
    `;
  });
}

showProducts(products);
