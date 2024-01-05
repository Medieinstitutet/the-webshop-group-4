import { Product } from "../ts/models/Product";

export function addToCart(product: Product) {
 const cartContainer = document.createElement("div");

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