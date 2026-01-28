const PASSWORD = "teju9982";

let products = JSON.parse(localStorage.getItem("products")) || [];
let editIndex = -1;

function login(){
  const p = document.getElementById("pass").value;
  if(p === PASSWORD){
    document.getElementById("login").style.display="none";
    document.getElementById("panel").style.display="block";
    render();
  } else {
    alert("Wrong password");
  }
}

function save(){
  const name = document.getElementById("name").value;
  const cat = document.getElementById("cat").value;
  const price = document.getElementById("price").value;
  const old = document.getElementById("old").value;
  const imgInput = document.getElementById("img");

  if(!name || !price){
    alert("Name & Price required");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const item = {name, cat, price, old, img: reader.result};

    if(editIndex > -1){
      products[editIndex] = item;
      editIndex = -1;
    } else {
      products.push(item);
    }

    localStorage.setItem("products", JSON.stringify(products));
    clear();
    render();
  };

  if(imgInput.files[0]){
    reader.readAsDataURL(imgInput.files[0]);
  } else {
    alert("Image required");
  }
}

function render(){
  const list = document.getElementById("list");
  list.innerHTML="";
  products.forEach((p,i)=>{
    list.innerHTML += `
      <div class="list">
        ${p.name} - ₹${p.price}
        <button onclick="edit(${i})">Edit</button>
        <button onclick="del(${i})">Delete</button>
      </div>
    `;
  });
}

function edit(i){
  const p = products[i];
  document.getElementById("name").value = p.name;
  document.getElementById("cat").value = p.cat;
  document.getElementById("price").value = p.price;
  document.getElementById("old").value = p.old;
  editIndex = i;
}

function del(i){
  if(confirm("Delete product?")){
    products.splice(i,1);
    localStorage.setItem("products", JSON.stringify(products));
    render();
  }
}

function clear(){
  document.getElementById("name").value="";
  document.getElementById("price").value="";
  document.getElementById("old").value="";
}
