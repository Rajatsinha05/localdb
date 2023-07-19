
let products = JSON.parse(localStorage.getItem("products")) || []

const display = (data) => {

    data.map((ele) => {

        let img = document.createElement("img")
        img.src = ele.img
        let title = document.createElement("h2")
        title.innerHTML = ele.title
        let price = document.createElement("h3")
        price.innerHTML = ele.price
        let category = document.createElement("p")
        category.innerHTML = ele.category
        let btn = document.createElement("button")
        btn.innerHTML = "Buy now"
        let div = document.createElement("div")
        btn.setAttribute("id", "btn")
        div.append(img, title, price, category, btn)
        document.getElementById("ui").append(div)
    })

}



const productdata = (e) => {
    e.preventDefault()
    let product = {
        img: document.getElementById("img").value,
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        category: document.getElementById("category").value,
    }
    products.push(product)
    // console.log(products);
    localStorage.setItem("products", JSON.stringify(products))
    display(products)
}

display(products)

document.querySelector('form').addEventListener("submit", productdata)