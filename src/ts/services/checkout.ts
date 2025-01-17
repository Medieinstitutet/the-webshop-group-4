import { Product } from "../models/Product";
import { displayCheckout } from "../models/checkoutFunction";
import { checkoutClick } from "../models/checkoutClick";
import { cardInput } from "../models/cardInput";
import { emailInput } from "../models/emailInput";

let cart: Product[] = [];

const savedCart = localStorage.getItem("cart");
cart = savedCart ? JSON.parse(savedCart) : [];


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
displayCheckout(cart);
checkoutClick();