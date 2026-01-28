const products = [
  {
    category: "Lehenga",
    name: "Premium Bridal Lehenga",
    sellingPrice: 2499,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
  },
  {
    category: "Suit",
    name: "Elegant Cotton Suit Set",
    sellingPrice: 1299,
    image: "https://images.unsplash.com/photo-1624206112918-f140f087f9b5",
  },
  {
    category: "Kurti",
    name: "Stylish Daily Wear Kurti",
    sellingPrice: 799,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e5",
  },
];

const WHATSAPP_NUMBER = "919982104506";
const UPI_ID = "tamilsunita51@okhdfcbank";

const container = document.getElementById("product-list");

products.forEach(item => {
  const div = document.createElement("div");
  div.className = "product";

  const message = `Hello Sunita Garments,
Mujhe ye product order karna hai:
${item.name}
Price: ₹${item.sellingPrice}

UPI ID: ${UPI_ID}
Payment ke baad screenshot bhej dunga/dungi.`;

  div.innerHTML = `
    <img src="${item.image}">
    <h3>${item.name}</h3>
    <p><strong>Price:</strong> ₹${item.sellingPrice}</p>
    <p><strong>UPI ID:</strong> ${UPI_ID}</p>

    <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}"
       target="_blank"
       style="display:inline-block;
              margin-top:8px;
              background:#25D366;
              color:white;
              padding:8px 12px;
              text-decoration:none;
              border-radius:4px;">
      📲 Order on WhatsApp
    </a>
  `;

  container.appendChild(div);
});
