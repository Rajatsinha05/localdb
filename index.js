let products = JSON.parse(localStorage.getItem("products")) || [];

const display = (data) => {
  document.getElementById("ui").innerHTML = "";
  data.map((ele) => {
    let img = document.createElement("img");
    img.src = ele.img;
    let title = document.createElement("h2");
    title.innerHTML = ele.title;
    let price = document.createElement("h3");
    price.innerHTML = ele.price;
    let category = document.createElement("p");
    category.innerHTML = ele.category;
    let btn = document.createElement("button");
    btn.innerHTML = "Buy now";
    let div = document.createElement("div");
    btn.setAttribute("id", "btn");
    div.append(img, title, price, category, btn);
    document.getElementById("ui").append(div);
  });
};

const productdata = (e) => {
  e.preventDefault();
  let product = {
    img: document.getElementById("img").value,
    title: document.getElementById("title").value,
    price: document.getElementById("price").value,
    category: document.getElementById("category").value,
  };
  products.push(product);
  // console.log(products);
  localStorage.setItem("products", JSON.stringify(products));
  display(products);
};

display(products);

document.querySelector("#form").addEventListener("submit", productdata);

// sorting by price
const handellth = () => {
  let data = products.sort((a, b) => a.price - b.price);
  console.log(data);
  display(data);
};

const handelhtl = () => {
  let data = products.sort((a, b) => b.price - a.price);
  console.log(data);
  display(data);
};

document.getElementById("lth").addEventListener("click", handellth);
document.getElementById("htl").addEventListener("click", handelhtl);

//  filter by category
const handelcategory = (cat) => {
  // console.log(cat);
  let data = products.filter((item) => item.category == cat);
  // console.log(data);

  let temp = [];
  // for(let i=0;i<products.length;i++){

  //     if(products[i].category==cat){
  //         temp.push(products[i])
  //     }
  // }

  products.map((ele) => {
    if (ele.category == cat) {
      temp.push(ele);
    }
  });

  console.log(temp);

  display(temp);
};

let cat = ["men", "women", "kids", "girls"];

for (let i = 0; i < cat.length; i++) {
  let btn = document.createElement("button");
  btn.innerHTML = cat[i];
  btn.setAttribute("id", cat[i]);
  document.getElementById("btns").append(btn);
}

for (let i = 0; i < cat.length; i++) {
  document
    .getElementById(cat[i])
    .addEventListener("click", () => handelcategory(cat[i]));
}

// document.getElementById("men").addEventListener("click",()=>handelcategory("men"))
// document.getElementById("women").addEventListener("click",()=>handelcategory("women"))
// document.getElementById("kids").addEventListener("click",()=>handelcategory("kids"))

// searching by name

const search = () => {
  let value = document.getElementById("value").value;
  let temp = products.filter((item) => item.title.match(value.toLowerCase()));
  console.log(temp);
  display(temp);
};


document.getElementById("search").addEventListener("click", search);
document.getElementById("value").addEventListener("keypress", (e) => {
  console.log(e.key);
  if (e.key == "Enter") {
    search();
  }
});
