//     const products = [
//   { name: "Product 1", price: 10.99, category: "Category A" },
//   { name: "Product 2", price: 5.99, category: "Category B" },
//   { name: "Product 3", price: 15.99, category: "Category A" },
//   { name: "Product 3", price: 15.99, category: "Category A" },
//   { name: "Product 3", price: 15.99, category: "Category A" },
//   { name: "Product 3", price: 15.99, category: "Category A" },
//   { name: "Product 3", price: 15.99, category: "Category A" },
//   { name: "Product 3", price: 15.99, category: "Category A" },
//   { name: "Product 3", price: 15.99, category: "Category A" },
//   { name: "Product 3", price: 15.99, category: "Category A" },
//   { name: "Product 3", price: 15.99, category: "Category A" },
//   { name: "Product 3", price: 15.99, category: "Category A" },
//   { name: "Product 3", price: 15.99, category: "Category A" },
//   { name: "Product 3", price: 15.99, category: "Category A" },
//   { name: "Product 3", price: 15.99, category: "Category A" },
//   { name: "Product 3", price: 15.99, category: "Category A" },
//   { name: "Product 3", price: 15.99, category: "Category A" },
//   { name: "Product 3", price: 15.99, category: "Category A" },
//   // Add more products here...
// ];

const productGrid = document.getElementById("productGrid");
// var products = JSON.parse(localStorage.getItem('items')) || [];
var allProducts = JSON.parse(localStorage.getItem('products')) || [];


allProducts.forEach((product) => {
  const productCard = `
    <div class="col-md-4 mb-4">
      <div class="card">
        <div class="card-body">
          <img src="${product.image}">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">Price: $${product.price}</p>
          <p class="card-text">Price: $${product.desc}</p>
          <p class="card-text">Category: ${product.category}</p>
        </div>
      </div>
    </div>
  `;
  productGrid.insertAdjacentHTML("beforeend", productCard);
});

const sortBtn = document.getElementById("sortBtn");

sortBtn.addEventListener("click", () => {
  products.sort((a, b) => a.price - b.price);
  const newProductGrid = document.createElement("div");
  newProductGrid.classList.add("row");
  products.forEach((product) => {
    const productCard = `
      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="card-body">
            <img src="./product1.jpg">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">Price: $${product.price.toFixed(2)}</p>
            <h5 class="card-title">${product.desc}</h5>
            <p class="card-text">Category: ${product.category}</p>
          </div>
        </div>
      </div>
    `;
    newProductGrid.insertAdjacentHTML("beforeend", productCard);
  });
  productGrid.replaceWith(newProductGrid);
  productGrid = newProductGrid;
});


const filterBtn = document.getElementById("filterBtn");

filterBtn.addEventListener("click", () => {
  const category = prompt("Enter a category to filter by:");
  const filteredProducts = products.filter((product) => product.category === category);
  if (filteredProducts.length > 0) {
    const newProductGrid = document.createElement("div");
    newProductGrid.classList.add("row");
    filteredProducts.forEach((product) => {
      const productCard = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
            <img src="./product1.jpg">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">Price: $${product.price.toFixed(2)}</p>
              <h5 class="card-title">${product.desc}</h5>
              <p class="card-text">Category: ${product.category}</p>
            </div>
          </div>
        </div>
      `;
      newProductGrid.insertAdjacentHTML("beforeend", productCard);
    });
    productGrid.replaceWith(newProductGrid);
    productGrid = newProductGrid;
    
  } else {
    alert(`No products found in category "${category}".`);
  }
});

