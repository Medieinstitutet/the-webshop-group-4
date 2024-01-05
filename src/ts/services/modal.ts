import { Product } from "../models/Product";

export function createdModalHtml(product: Product) {
  const modalBody = document.getElementById("modal-body") as HTMLSelectElement;
  modalBody.innerHTML = "";

  const productName = document.createElement("h3");
  productName.innerHTML = product.productName;

  const productDescription = document.createElement("p");
  productDescription.innerHTML = product.productDescription;

  const category = document.createElement("h6");
  category.innerHTML = product.category;

  const sizes = document.createElement("datalist");
  sizes.innerHTML = product.sizes.toString();

  const price = document.createElement("p");
  price.innerHTML = product.price.toString();

  const productId = document.createElement("P");
  productId.innerHTML = product.productId;

  document.getElementById("modal-body")?.appendChild(productName);
  document.getElementById("modal-body")?.appendChild(category);
  document.getElementById("modal-body")?.appendChild(productDescription);
  document.getElementById("modal-body")?.appendChild(sizes);
  document.getElementById("modal-body")?.appendChild(price);
  document.getElementById("modal-body")?.appendChild(productId);

  console.log(product);
}
