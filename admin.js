const PASSWORD = "teju9982";

function login(){
  const p = document.getElementById("pass").value;
  if(p === PASSWORD){
    document.getElementById("loginBox").style.display="none";
    document.getElementById("panel").style.display="block";
  }else{
    document.getElementById("msg").innerText="❌ Wrong password";
  }
}

function add(){
  let products = JSON.parse(localStorage.getItem("products")) || [];

  products.push({
    name: name.value,
    cat: cat.value,
    price: price.value,
    old: old.value,
    img: img.value
  });

  localStorage.setItem("products", JSON.stringify(products));
  document.getElementById("done").innerText="✅ Product Added";
}
