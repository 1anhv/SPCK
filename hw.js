let products = [];
const getProducts = async () => {
  const response = await fetch(
    "https://6520f6f1a4199548356cabf3.mockapi.io/courses"
  );
  products = await response.json();
};
const addProduct = async () => {
    const newProductRequest = {
      name: nameElm.value,
      price: Number(priceElm.value),
      quantity: Number(quantityElm.value),
    };
    const response = await fetch(
      "https://6520f6f1a4199548356cabf3.mockapi.io/courses",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newProductRequest),
      }
    );
    const newProduct = await response.json();
    products = [...products, newProduct];
    displayProducts();
  };