import { productcart } from "../main";

// export function savetolocalstorage() {
//    localStorage.setItem("product", JSON.stringify(productcart));
// }


// export let productcart: Product[] = [];

// function createdHtml(productcart: Product[]) {
//   const cartContainer = document.getElementById("app") as HTMLSelectElement;
//   for (let i = 0; i < products.length; i++) {
//     const cartItemContainer = document.createElement("li");

//     const productName = document.createElement("h4");
//     productName.innerHTML = products[i].productName;

//     const productImage = document.createElement("img");
//     productImage.src = products[i].imageUrl;

//     const productPrice = document.createElement("p");
//     productPrice.innerHTML = products[i].price.toString() + " " + "kr";

//     const addToCartButton = document.createElement(
//       "button"
//     ) as HTMLButtonElement;
//     addToCartButton.innerHTML = "addToCart";
//     addToCartButton.addEventListener("click", () => {
//       productcart.push(products[i]);
//       savetolocalstorage();
//       return(productcart);
//     });

//     const removeItemBtn = document.createElement("i");
//     removeItemBtn.className = "fa-solid fa-trash-can";
//     removeItemBtn.addEventListener("click", () => {
//       cartItemContainer.remove();
//     });

//     cartItemContainer.appendChild(productName);
//     cartItemContainer.appendChild(productImage);
//     cartItemContainer.appendChild(productPrice);
//     cartItemContainer.appendChild(addToCartButton);
//     cartItemContainer.appendChild(removeItemBtn);

//     cartContainer.appendChild(cartItemContainer);

//     return cartContainer;
//   }
// }

// createdHtml(productcart);
