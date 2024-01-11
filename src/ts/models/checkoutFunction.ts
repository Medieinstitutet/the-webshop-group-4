import { Product } from "../models/Product";

export const displayCheckout = (cart: Product[]) => {
  
  const checkoutListHTML: Element | null = document.getElementById("checkoutList");
  const checkoutTotalHTML: Element | null = document.getElementById("checkoutTotal");

  if (checkoutListHTML && checkoutTotalHTML) {
    
    checkoutListHTML.innerHTML = "";

    let total = 0;

    const filteredCart = cart.filter(function (cartProduct) {
      return cartProduct.quantity > 0;
    });

    filteredCart.forEach((cartProduct) => {
      
      let checkoutProductElement: HTMLDivElement = document.createElement("div");
      checkoutProductElement.classList.add("unit"); 
      checkoutProductElement.innerHTML = `
        <div class="image">
          <img src="${cartProduct.imageUrl}" alt="" />
        </div>
        <div class="info">
          <div class="name">${cartProduct.productName}</div>
          <div class="totalPrice">${cartProduct.price * cartProduct.quantity}kr</div>
          <div class="quantity"><span>${cartProduct.quantity}st</span></div>
        </div>
      `;
      checkoutListHTML.appendChild(checkoutProductElement);
      total = total + cartProduct.price * cartProduct.quantity;
    });

    checkoutTotalHTML.textContent = `Total: ${total}kr`;
  }
};



