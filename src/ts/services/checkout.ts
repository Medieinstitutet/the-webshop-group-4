import { Product } from "../models/Product";

let cart: Product[] = [];

//declartion
const displayCheckout = () => {
  const checkoutListHTML: Element | null =
    document.getElementById("checkoutList");
  const checkoutTotalHTML: Element | null =
    document.getElementById("checkoutTotal");

  //clean out everything to 0
  if (checkoutListHTML && checkoutTotalHTML) {
    checkoutListHTML.innerHTML = "";
    let total = 0;

    // use filter to find every quantiy which is bigger than 0
    const filteredCart = cart.filter(function (cartProduct) {
      return cartProduct.quantity > 0;
    });

    // Use forEach to reach every cart items and create new div, unit to show in the page. use appendChild to make sure every childran come with.
    filteredCart.forEach((cartProduct) => {
      let checkoutProductElement: HTMLDivElement =
        document.createElement("div");
      checkoutProductElement.classList.add("unit");
      checkoutProductElement.innerHTML = `
        <div class="image">
          <img src="${cartProduct.imageUrl}" alt="" />
        </div>
        <div class="info">
          <div class="name">${cartProduct.productName}</div>
          <div class="totalPrice">${
            cartProduct.price * cartProduct.quantity
          }kr</div>
          <div class="quantity">
           
            <span>${cartProduct.quantity}</span>
            
          </div>
        </div>
      `;
      checkoutListHTML.appendChild(checkoutProductElement);

      // Update the total price
      total = total + cartProduct.price * cartProduct.quantity;
    });

    //total price in the checkout page
    checkoutTotalHTML.textContent = `Total: ${total}kr`;
  }
};

// Load the cart from local storage
const savedCart = localStorage.getItem("cart");
cart = savedCart ? JSON.parse(savedCart) : [];

function checkoutClick() {
  const checkoutButton = document.getElementById("checkoutForm");
  checkoutButton?.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Din beställning har skickats!");
  });
}

function cardInput() {
  let inputCard = (document.querySelector("#cardNumber") as HTMLInputElement)
    .value;
  if (inputCard.length === 16) return true;
  alert("Kortnummbret måste innehålla 16 siffror");
  return false;
}
(document.getElementById("checkoutForm") as HTMLFormElement).addEventListener(
  "submit",
  function (event) {
    if (!cardInput()) {
      event.preventDefault();
    }
    if (!emailInput()) {
      event.preventDefault();
    }
  }
);

function emailInput() {
  let email = (document.querySelector("#email") as HTMLInputElement).value;
  const validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  console.log(email);
  console.log(email.match(validRegex));
  if (email.match(validRegex)) return true;
  alert("Vänligen ange en giltig epostadress");
  return false;
}

// Display
displayCheckout();
checkoutClick();
