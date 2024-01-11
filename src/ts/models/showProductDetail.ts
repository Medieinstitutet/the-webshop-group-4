import { Product } from "../models/Product";

export const showProductDetails = (selectedProduct: Product) => {
  const productDetailsWindow: Window | null = window.open("", "_blank");

  if (productDetailsWindow) {
    productDetailsWindow.document.write(`
      <link rel="stylesheet" type="text/css" href="/src/scss/productDetails.css">
      <h2>${selectedProduct.productName}</h2>
      <img src="${selectedProduct.imageUrl}" alt="" />
      <p>${selectedProduct.productDescription}</p>
      <p>Category: ${selectedProduct.category}</p>
      <p>Price: ${selectedProduct.price}kr</p>
    `);
  }
};

