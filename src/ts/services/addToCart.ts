// import { Product } from "../ts/models/Product";

import { Product } from "../models/Product";
import { products } from "../products";

// ALTERNATIVE ONE

export function addToCart(product: Product) {
  const cartContainer = document.createElement("ul");

  const cartItemContainer = document.createElement("li");

  const productName = document.createElement("h4");
  productName.innerHTML = product.productName;

  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;

  const productPrice = document.createElement("p");
  productPrice.innerHTML = product.price.toString();

  const removeItemBtn = document.createElement("i");
  removeItemBtn.className = "fa-solid fa-trash-can";
  removeItemBtn.addEventListener("click", () => {
    cartItemContainer.remove();
  });

  cartItemContainer.appendChild(productName);
  cartItemContainer.appendChild(productImage);
  cartItemContainer.appendChild(productPrice);
  cartItemContainer.appendChild(removeItemBtn);

  cartContainer.appendChild(cartItemContainer);

  return cartContainer;
}

// ALTERNATIVE TWO

function addItemToCart(product: Product) {
  let product = products.find(function (product) {
    return product.id === productId;
  });

  if (cart.length === 0) {
    cart.push(product);
  }
}

// ALTERNATIVE THREE

function createProductElement(product) {
  const cartItemContainer = document.createElement("li");

  const productName = document.createElement("h4");
  productName.innerHTML = product.productName;

  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;

  const productPrice = document.createElement("p");
  productPrice.innerHTML = product.price + "kr";

  const addToCartButton = document.createElement("button");
  addToCartButton.innerHTML = "Add to Cart";

  addToCartButton.addEventListener("click", function () {
    const productInfo = {
      productName: product.productName,
      imageUrl: product.imageUrl,
      price: product.price,
    };

    // Replace this line with your actual implementation to navigate to the cart page and pass the productInfo object
    alert("Added " + product.productName + " to cart.");

    // Send productInfo to the cart page here
  });

  cartItemContainer.appendChild(productName);
  cartItemContainer.appendChild(productImage);
  cartItemContainer.appendChild(productPrice);
  cartItemContainer.appendChild(addToCartButton);

  return cartItemContainer;
}

// ALTERNATIVE FOUR
function getDataFromLocalStorage() {
  const localStorageData = localStorage.getItem("products");

  if (localStorageData) {
    const parsedData = JSON.parse(localStorageData);
    return parsedData;
  }

  return [];
}

// Function to display the data in HTML
function displayData(products: Product[]) {
  const htmlContent = products
    .map(
      (product) => `
      <div>
          <h3> ${product.productName}</h3>
          <p> ${product.productDescription}</p>
          <p> ${product.price}</p>
          <img src="${product.imageUrl}"/>
      </div>
  `
    )
    .join("");

  document.getElementById("product__container").innerHTML = htmlContent;
}

// Call the functions
const products = getDataFromLocalStorage();
displayData(products);
