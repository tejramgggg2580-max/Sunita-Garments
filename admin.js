const PASSWORD = "teju9982";
let products = JSON.parse(localStorage.getItem("products")) || [];
let editIndex = -1;

function login(){
  if(document.getElementById("pass").value === PASSWORD){
    document.getElementById("login").style.display="none";
    document.getElementById("panel").style.display="block";
    render();
  } else alert("Wrong password");
}

function save(){
  const name = nameEl.value;
  const cat = catEl.value;
  const price = priceEl.value;
  const old = oldEl.value;
  const imgInput = imgEl.files[0];
  if(!name || !price || !imgInput){alert("All fields required");return;}

  const reader = new FileReader();
  reader.onload=()=>{
    const item={name,cat,price,old,img:reader.result};
    if(editIndex>-1) products[editIndex]=item;
    else products.push(item);
    localStorage.setItem("products",JSON.stringify(products));
    clear();render();
  };
  reader.readAsDataURL(imgInput);
}

function render(){
  list.innerHTML="";
  products.forEach((p,i)=>{
    list.innerHTML+=`
      <div class="list">
        ${p.name}
        <span>
          <button onclick="edit(${i})">Edit</button>
          <button onclick="del(${i})">Del</button>
        </span>
      </div>`;
  });
}

function edit(i){
  const p=products[i];
  nameEl.value=p.name;
  catEl.value=p.cat;
  priceEl.value=p.price;
  oldEl.value=p.old;
  editIndex=i;
}

function del(i){
  if(confirm("Delete?")){
    products.splice(i,1);
    localStorage.setItem("products",JSON.stringify(products));
    render();
  }
}

function clear(){
  nameEl.value=priceEl.value=oldEl.value="";
  editIndex=-1;
}

const nameEl=name,catEl=cat,priceEl=price,oldEl=old,imgEl=img,list=document.getElementById("list");
