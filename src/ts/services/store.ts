import { Product } from "../models/Product";
import { products } from "./products"
import { openCloseCart } from '../models/openCloseCart';
import { increaseDecrease, addToCart, updateCart } from '../models/cartFunctions';
import { displayProducts } from '../models/displayProduct';
import { showProductDetails } from '../models/showProductDetail';

let productLists: Product[] = products;
let cart: Product[] = [];

openCloseCart();
displayProducts(productLists);

const productListContainer: Element | null = document.querySelector(".productList");
if (productListContainer) {
  productListContainer.addEventListener("click", (event: Event) => {
    const target: Element = event.target as Element;

    if (target.classList.contains("unit")) {
      const productId: string | null = target.id;
      const selectedProduct: Product | undefined = productLists.find(
        (product) => product.productId === productId
      );

      if (selectedProduct) {
        showProductDetails(selectedProduct);
      }
    }
  });
}

document.addEventListener("click", (event: Event) => {
  const target: Element = event.target as Element;
  if (target.classList.contains("addCart")) {
    const productId: string | any = target.parentElement?.id;
    const selectedProduct: Product | undefined = productLists.find(
      (product) => product.productId === productId
    );

    if (selectedProduct) {
      addToCart(selectedProduct, cart);
      updateCart(cart);
    }
  }
});

const savedCart = localStorage.getItem("cart");
cart = savedCart ? JSON.parse(savedCart) : [];

increaseDecrease(cart);
updateCart(cart);
