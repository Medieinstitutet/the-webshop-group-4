import { Product } from "../models/Product";
import { products } from "./products";

// Open and close the Cart.
// Get references to HTML elements
let cartIcon: Element | null = document.querySelector(".buyButton");
let closeCart: Element | null = document.querySelector(".close");
let body: Element | null = document.querySelector("body");
// Add a click event listener to the cartIcon element, toggling the "viewCart" class on the body element
cartIcon && cartIcon.addEventListener("click", () => {
  body && body.classList.toggle("viewCart");
});
// Add a click event listener to the closeCart element, toggling the "viewCart" class on the body element
closeCart && closeCart.addEventListener("click", () => {
  body && body.classList.toggle("viewCart");
});

let productLists: Product[] = products;
let cart: Product[] = [];

// Display products on the webpage.
const displayProduct = (products: Product[]) => {
  // Get the reference to the HTML element with the class "productList"
  const productListHTML = document.querySelector(".productList");

  // Iterate over each product in the array
  products.forEach((product) => {
    // Create a new <div> element for each product
    const newProduct = document.createElement("div");
    newProduct.classList.add("unit"); // Add the class "unit" to the new <div>
    newProduct.style.cursor = "pointer"; // Set the cursor style to "pointer"
    newProduct.id = product.productId; // Set the ID of the new <div> to the product's ID
    newProduct.innerHTML = `
      <img src="${product.imageUrl}" alt="" />
      <h2>${product.productName}</h2>
      <div class="price">${product.price}kr</div>`;

    // Create an "Add to Cart" button for each product
    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add("addCart"); // Add the class "addCart" to the button
    addToCartButton.innerHTML = "Add"; // Set the button text to "Add"

    // Add a click event listener to the "Add to Cart" button
    addToCartButton.addEventListener("click", () => {
      // Call the addToCart function with the current product
      addToCart(product);
      // Call the updateCart function
      updateCart();
    });

    // Append the "Add to Cart" button to the new product <div>
    newProduct.appendChild(addToCartButton);

    // Append the new product <div> to the product list HTML element. Using the ! operator to telling TypeScript that you are sure the variable is not null or undefined
    productListHTML!.appendChild(newProduct);
  });
};

// Call to display products
displayProduct(productLists);

// Show products detail in another window.
// Get references to HTML elements
const productListContainer: Element | null = document.querySelector(".productList");
if (productListContainer) {
  // Add a click event listener to the parent container of the product list.
  productListContainer.addEventListener("click", (event: Event) => {
    const target: Element = event.target as Element;

    // Ensure that the clicked element is a product item.
    if (target.classList.contains("unit")) {
      // Get the ID of the clicked product.
      const productId: string | null = target.id;

      // Retrieve detailed information about the product based on its ID.
      const selectedProduct: Product | undefined = productLists.find(
        (product) => product.productId === productId
      );

      // Display the window with detailed product information.
      if (selectedProduct) {
        // Create a window for displaying detailed product information.
        const productDetailsWindow: Window | null = window.open("", "_blank");

        if (productDetailsWindow) {
          // Display product details in the new window.
          productDetailsWindow.document.write(`
            <link rel="stylesheet" type="text/css" href="/src/scss/productDetails.css">
            <h2>${selectedProduct.productName}</h2>
            <img src="${selectedProduct.imageUrl}" alt="" />
            <p>${selectedProduct.productDescription}</p>
            <p>Category: ${selectedProduct.category}</p>
            <p>Price: ${selectedProduct.price}kr</p>
      
          `);
        }
      }
    }
  });
}

// Add to the cart
const addToCart = (product: Product) => {
  // Find the index of the existing product in the cart array
  const existingProductIndex: number = cart.findIndex(
    (cartProduct) => cartProduct.productId === product.productId
  );

// Check if the existing product is found in the cart (index is not -1)
existingProductIndex !== -1 &&
// If the product is found, increment its quantity in the cart
(cart[existingProductIndex].quantity += 1);

// Check if the existing product is not found in the cart (index is -1)
existingProductIndex === -1 &&
// If the product is not found, add a new product to the cart with a quantity of 1
cart.push({ ...product, quantity: 1 });


  // Save the updated cart in local storage
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Update the ccart.
const updateCart = () => {
  // Get references to HTML elements
  const cartListHTML: Element | null = document.querySelector(".cartList");
  const totalPriceSidebar: Element | null = document.getElementById("cartTotalPrice");
  const cartQuantityHeader: Element | null = document.getElementById("cartQuantity");

  // Execute subsequent operations only if all elements are truthy
  (cartListHTML && totalPriceSidebar && cartQuantityHeader) && (() => {
    cartListHTML.innerHTML = "";
    let total = 0;
    let quantity = 0;

    // Filter out products with zero quantity
    const filteredCart = cart.filter((cartProduct) => cartProduct.quantity > 0);

    // Loop through each product in the cart panel
    filteredCart.forEach((cartProduct) => {
      let cartProductElement: HTMLDivElement = document.createElement("div");
      cartProductElement.classList.add("unit");
      cartProductElement.innerHTML = `
        <div class="image">
          <img src="${cartProduct.imageUrl}" alt="" />
        </div>
        <div class="name">${cartProduct.productName}</div>
        <div class="totalPrice">${cartProduct.price * cartProduct.quantity}kr</div>
        <div class="amount">
          <span class="minus" data-productId="${cartProduct.productId}">-</span>
          <span>${cartProduct.quantity}</span>
          <span class="plus" data-productId="${cartProduct.productId}">+</span>
        </div>`;

      // Use nullish coalescing to handle potential null or undefined values
      cartListHTML.appendChild(cartProductElement);

      // Update the total price and quantity
      total += cartProduct.price * cartProduct.quantity;
      quantity += cartProduct.quantity;
    });

    // Display the total price in the cart sidebar
    totalPriceSidebar.textContent = `${total}kr`;

    // Display the quantity in the header
    cartQuantityHeader.textContent = `${quantity}`;
  })();
};


// Increase/decrease in the cart.
document.addEventListener("click", (event: Event) => {
  const target: Element = event.target as Element;
  const classList = target.classList;
  const productId: string | null = target.getAttribute("data-productId");
  const selectedProductIndex: number = cart.findIndex(
    (product) => product.productId === productId
  );

  if (
    classList.contains("plus") &&
    selectedProductIndex !== -1
  ) {
    // Increase quantity
    cart[selectedProductIndex].quantity += 1;
  } else if (
    classList.contains("minus") &&
    selectedProductIndex !== -1 &&
    cart[selectedProductIndex].quantity > 1
  ) {
    // Decrease quantity, remove if it becomes 0
    cart[selectedProductIndex].quantity -= 1;
  } else if (
    classList.contains("minus") &&
    selectedProductIndex !== -1 &&
    cart[selectedProductIndex].quantity === 1
  ) {
    // Remove the product if quantity is 1
    cart.splice(selectedProductIndex, 1);
  } else {
    // Do nothing for other classes or conditions
    return;
  }

  // Update the cart display
  updateCart();

  // Save the updated cart in local storage
  localStorage.setItem("cart", JSON.stringify(cart));
});


// Load the cart from local storage
const savedCart = localStorage.getItem("cart");
cart = savedCart ? JSON.parse(savedCart) : [];

// Display the cart
updateCart();
