import { Product } from "../models/Product";



export const displayCheckout = (cart: Product[]) => {
  // Get references to HTML elements 
  const checkoutListHTML: Element | null = document.getElementById("checkoutList");
  const checkoutTotalHTML: Element | null = document.getElementById("checkoutTotal");

  // Check if both elements are found in the HTML
  if (checkoutListHTML && checkoutTotalHTML) {
    // Clear the content of the checkoutListHTML
    checkoutListHTML.innerHTML = "";

    // Initialize a variable to keep track of the total cost
    let total = 0;

    // Filter the cart array to include only products with a quantity greater than 0
    const filteredCart = cart.filter(function (cartProduct) {
      return cartProduct.quantity > 0;
    });

    // Iterate over each product in the filteredCart array
    filteredCart.forEach((cartProduct) => {
      // Create a new <div> element for each product in the checkout list
      let checkoutProductElement: HTMLDivElement = document.createElement("div");
      checkoutProductElement.classList.add("unit"); // Add the class "unit" to the new <div>
      
      // Set the inner HTML of the checkoutProductElement with product information
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

      // Append the checkoutProductElement to the checkoutListHTML
      checkoutListHTML.appendChild(checkoutProductElement);

      // Update the total cost by adding the cost of the current product
      total = total + cartProduct.price * cartProduct.quantity;
    });

    // Set the text content of checkoutTotalHTML to display the total cost
    checkoutTotalHTML.textContent = `Total: ${total}kr`;


  }
};



