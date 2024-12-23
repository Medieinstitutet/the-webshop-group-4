import { Product } from "../models/Product";

export const addToCart = (product:Product, cart: Product[]) => {
  const existingProductIndex: number = cart.findIndex(
    (cartProduct) => cartProduct.productId === product.productId
  );
  existingProductIndex !== -1 && (cart[existingProductIndex].quantity += 1);

  existingProductIndex === -1 && cart.push({ ...product, quantity: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const updateCart = (cart: Product []) => {
  const cartListHTML: Element | null = document.querySelector(".cartList");
  const totalPriceSidebar: Element | null = document.getElementById("cartTotalPrice");
  const cartQuantityHeader: Element | null = document.getElementById("cartQuantity");

  (cartListHTML && totalPriceSidebar && cartQuantityHeader) && (() => {
    cartListHTML.innerHTML = "";
    let total = 0;
    let quantity = 0;

    const filteredCart = cart.filter((cartProduct) => cartProduct.quantity > 0);

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
      total += cartProduct.price * cartProduct.quantity;
      quantity += cartProduct.quantity;
    });

    totalPriceSidebar.textContent = `${total}kr`;
    cartQuantityHeader.textContent = `${quantity}`;
  })();
};

export const saveCart = (cart: Product[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const increaseDecrease = (cart: Product[]) => {
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
      cart[selectedProductIndex].quantity += 1;
    } else if (
      classList.contains("minus") &&
      selectedProductIndex !== -1 &&
      cart[selectedProductIndex].quantity > 1
    ) {
      cart[selectedProductIndex].quantity -= 1;
    } else if (
      classList.contains("minus") &&
      selectedProductIndex !== -1 &&
      cart[selectedProductIndex].quantity === 1
    ) {
      cart.splice(selectedProductIndex, 1);
    } else {
      return;
    }

    updateCart(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  });
};