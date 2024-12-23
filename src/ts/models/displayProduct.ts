import { Product } from "../models/Product";
import { addToCart,updateCart } from "./cartFunctions";

let cart: Product[] = [];

export const displayProducts = (products: Product[]) => {
  const productListHTML = document.querySelector(".productList");

  products.forEach((product) => {
    const newProduct = document.createElement("div");
    newProduct.classList.add("unit");
    newProduct.style.cursor = "pointer";
    newProduct.id = product.productId;
    newProduct.innerHTML = `
      <img src="${product.imageUrl}" alt="" />
      <h2>${product.productName}</h2>
      <div class="price">${product.price}kr</div>`;

    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add("addCart");
    addToCartButton.innerHTML = "Add";

    addToCartButton.addEventListener("click", () => {
      addToCart(product,cart);
      updateCart(cart);  
    });

    newProduct.appendChild(addToCartButton);
    productListHTML!.appendChild(newProduct);
  });
};
