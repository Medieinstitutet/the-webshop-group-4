import { Product } from "../models/Product";
import { products } from "./products";

let cartIcon: Element | null = document.querySelector(".buyButton");
let closeCart: Element | null = document.querySelector(".close");
let body: Element | null = document.querySelector("body");

if (cartIcon && closeCart && body) {
  cartIcon.addEventListener("click", () => {
    if (body) {
      body.classList.toggle("viewCart");
    }
  });

  closeCart.addEventListener("click", () => {
    if (body) {
      body.classList.toggle("viewCart");
    }
  });
}

let productLists: Product[] = products;
let cart: Product[] = [];

//Display products on the webpage
const displayProduct = (products: Product[]) => {
  const productListHTML: Element | null =
    document.querySelector(".productList");
  if (productListHTML) {
    products.forEach((product) => {
      let newProduct: HTMLDivElement = document.createElement("div");
      newProduct.classList.add("unit");
      newProduct.style.cursor = "pointer";
      newProduct.id = product.productId;
      newProduct.innerHTML = `
          <img src="${product.imageUrl}" alt="" />
          <h2>${product.productName}</h2>
          <div class="price">${product.price}kr</div>`;

      //Add to cart button
      let addToCartButton: HTMLButtonElement = document.createElement("button");
      addToCartButton.classList.add("addCart");
      addToCartButton.innerHTML = "Add";
      addToCartButton.onclick = () => {
        addToCart(product);
        updateCart();
      };

      newProduct.appendChild(addToCartButton);
      productListHTML.appendChild(newProduct);
    });
  }
};

// call to display products
displayProduct(productLists);

// Products detail in another window.
const productListContainer: Element | null =
  document.querySelector(".productList");
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

const addToCart = (product: Product) => {
  const existingProductIndex: number = cart.findIndex(
    (cartProduct) => cartProduct.productId === product.productId
  );

  if (existingProductIndex !== -1) {
  // Product already in the cart, increase quantity
    cart[existingProductIndex].quantity += 1;
  } else {
  // Add the product to the cart with quantity 1
    cart.push({ ...product, quantity: 1 });
  }
  // Save the updated cart in local storage
  localStorage.setItem("cart", JSON.stringify(cart));
};

const updateCart = () => {
  const cartListHTML: Element | null = document.querySelector(".cartList");
  const totalPriceSidebar: Element | null =
    document.getElementById("cartTotalPrice");
  const cartQuantityHeader: Element | null =
    document.getElementById("cartQuantity");

  if (cartListHTML && totalPriceSidebar && cartQuantityHeader) {
    cartListHTML.innerHTML = "";
    let total = 0;
    let quantity = 0;

    // Filter out products with zero quantity
    const filteredCart = cart.filter((cartProduct) => cartProduct.quantity > 0);

    // Loop through each product in the  cart panel
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

      cartListHTML.appendChild(cartProductElement);

      // Update the total price and quantity
      total += cartProduct.price * cartProduct.quantity;
      quantity += cartProduct.quantity;
    });

    // Display the total price in the cart sidebar
    totalPriceSidebar.textContent = `${total}kr`;

    // Display the quantity in the header
    cartQuantityHeader.textContent = `${quantity}`;
  }
};

// Event listener for the increase/decrease buttons in the cart
document.addEventListener("click", (event: Event) => {
  let target: Element = event.target as Element;

  if (target.classList.contains("plus") || target.classList.contains("minus")) {
    const productId: string | null = target.getAttribute("data-productId");
    const selectedProductIndex: number = cart.findIndex(
      (product) => product.productId === productId
    );

    if (selectedProductIndex !== -1) {
      if (target.classList.contains("plus")) {
        // Increase quantity
        cart[selectedProductIndex].quantity += 1;
      } else if (target.classList.contains("minus")) {
        // Decrease quantity, remove if it becomes 0
        if (cart[selectedProductIndex].quantity > 1) {
          cart[selectedProductIndex].quantity -= 1;
        } else {
          // Remove the product if quantity is 0
          cart.splice(selectedProductIndex, 1);
        }
      }

      // Update the cart display
      updateCart();

      // Save the updated cart in local storage
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
});

// Load the cart from local storage
const savedCart = localStorage.getItem("cart");
cart = savedCart ? JSON.parse(savedCart) : [];

// Display the cart
updateCart();
