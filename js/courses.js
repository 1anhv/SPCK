let products = [];

const boxElm = document.getElementById('box')

const renderTodoList = () => {
    boxElm.innerHTML = "";
    products.forEach((todo) =>{
    const boxElm1 = document.createElement('div');
    boxElm1.classList.add('untree_co-hero overlay');
    boxElm1.style.add("background-image: url('https://www.verywellfamily.com/thmb/JJKt8lUPR1W_2GEdLZRX_r0kQr0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Getty_first_grade_class_students_raising_hands_smiling_LARGE_Christopher-Futcher-574b53845f9b5851654693f2.jpg');")

    const boxElm2 = document.createElement('div');
    boxElm2.classList.add('container')
    
    const boxElm3 = document.createElement('div');
    boxElm3.classList.add('row align-items-center justify-content-center')

    const boxElm4 = document.createElement('div');
    boxElm4.classList.add('col-12')

    const boxElm5 = document.createElement('div');
    boxElm5.classList.add('row justify-content-center ')

    const boxElm6 = documen.createElement('div');
    boxElm6.classList.add('col-lg-6 text-center ')

    const h1Elm = document.createElement('h1');
    h1Elm.classList.add('mb-4 heading text-white')
    h1Elm.data-aos.add('fade-up')
    h1Elm.data-aos-delay.add('100')
    h1Elm.textContent = todo.name;

    const h3Elm1 = document.createElement('h3');
    h3Elm1.classList.add('mb-4 text-white')
    h3Elm1.textContent = "Price: $" + todo.price;

    const h3Elm2 = document.createElement('h3');
    h3Elm2.classList.add('mb-4 text-white')
    h3Elm2.textContent = "Time: " + todo.time;

    const h3Elm3 = document.createElement('h3');
    h3Elm3.classList.add('mb-4 text-white')
    h3Elm3.textContent = "Number of lessons: " + todo.Numberoflessons

    const h3Elm4 = document.createElement('h3');
    h3Elm4.classList.add('mb-4 text-white')
    h3Elm3.textContent = "Time: " + todo.Timeforeachlesson + " every day"

    boxElm1.appendChild(boxElm2);
    boxElm2.appendChild(boxElm3);
    boxElm3.appendChild(boxElm4);
    boxElm4.appendChild(boxElm5);
    boxElm5.appendChild(boxElm6);
    boxElm6.appendChild(h1Elm);
    boxElm6.appendChild(h3Elm1);
    boxElm6.appendChild(h3Elm2);
    boxElm6.appendChild(h3Elm3);
    boxElm6.appendChild(h3Elm4);
    boxElm.appendChild(boxElm1);
})
}


const getproducts = () => {
    fetch("https://6520f6f1a4199548356cabf3.mockapi.io/courses").then((response) => {
      return response.json();
    }).then((data) => {
      console.log("able to connect!")
      console.log(data);
      products = data;
      renderTodoList();
    })
  }
getproducts();