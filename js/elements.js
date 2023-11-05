const a = document.getElementById('rc')
a.addEventListener('click', () => {
    localStorage.clear(); 
    alert("Cart resetted!")
})
const boxElm = document.getElementById("box");
const courseTemp = document.getElementById('course-temp');
const products = JSON.parse(localStorage.getItem("cart"))
const submit = document.getElementById("sub")
console.log(products)
const total = document.getElementById("totals")
let price = 0
products.forEach((thing) => {
    price = thing.price + price;
})

const renderTodoList = () => {
  boxElm.innerHTML = "";
  products.forEach((todo) => {

    const courseItem = courseTemp.content.cloneNode(true);

    courseItem.getElementById('course-price').textContent = todo.name + ", price: $" + todo.price;
        boxElm.appendChild(courseItem);

  });
};
total.textContent = "Your total is: $" + price

renderTodoList()
submit.addEventListener("click", () => {
    localStorage.clear();
})

