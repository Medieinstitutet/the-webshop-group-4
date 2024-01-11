export const openCloseCart = () => {
  let cartIcon: Element | null = document.querySelector(".buyButton");
  let closeCart: Element | null = document.querySelector(".close");
  let body: Element | null = document.querySelector("body");

  cartIcon && cartIcon.addEventListener("click", () => {
    body && body.classList.toggle("viewCart");
  });

  closeCart && closeCart.addEventListener("click", () => {
    body && body.classList.toggle("viewCart");
  });
};

