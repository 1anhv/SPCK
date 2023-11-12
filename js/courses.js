let products = [];
let cart =[];

const boxElm = document.getElementById("box");
const courseTemp = document.getElementById('course-temp');

const renderTodoList = () => {
  boxElm.innerHTML = "";
  products.forEach((todo) => {
    const courseItem = courseTemp.content.cloneNode(true);
    courseItem.getElementById('course-name').textContent = todo.name;
    courseItem.getElementById('course-price').textContent = todo.price;
    courseItem.getElementById('course-time').textContent = todo.time;
    courseItem.getElementById('course-NOL').textContent = todo.Numberoflessons
    courseItem.getElementById('COL').textContent = todo.Timeforeachlesson
    courseItem.getElementById('img').style.backgroundImage = `url(${todo.img})`; 
    courseItem.getElementById('btn').addEventListener("click", () => {
      alert("Course added to cart!")
      cart.push(todo)
      localStorage.setItem("cart", JSON.stringify(cart));


    })
    boxElm.appendChild(courseItem);

  });
};

const getproducts = () => {
  fetch("https://6520f6f1a4199548356cabf3.mockapi.io/courses")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("able to connect!");
      console.log(data);
      products = data;
      renderTodoList();
    });
};
getproducts();

