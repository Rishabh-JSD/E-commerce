document.getElementById('addProductForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get form values
  var productName = document.getElementById('productName').value;
  var productPrice = document.getElementById('productPrice').value;
  var productPrice = document.getElementById('productdesc').value;
  var productImage = document.getElementById('productImage').files[0];
  var productCategory = document.getElementById('productCategory').value;

  // Create a FileReader object to read the image file
  var reader = new FileReader();

  reader.onload = function(event) {
    var productImageURL = event.target.result;

    // Create product object 
    var product = {
      name: productName,
      price: productPrice,
      desc: productdesc,
      image: productImageURL,
      category: productCategory
    };

    // Check if local storage is available
    if (typeof(Storage) !== 'undefined') {
      // Retrieve existing products or initialize empty array
      var allProducts = JSON.parse(localStorage.getItem('products')) || [];

      // Add new product to the array
      allProducts.push(product);

      // Store updated products in local storage
      localStorage.setItem('products', JSON.stringify(allProducts));

      // Clear form
      document.getElementById('addProductForm').reset();

      // Display success message
      alert('Product added successfully!');
      window.location = "item.html#productGrid"
    } else {
      alert('Local storage is not supported in this browser.');
    }
  };

  // Read the image file as a data URL
  reader.readAsDataURL(productImage);
});
