function createdModalHtml (){
    const modalBody = document.getElementById("modal-body");
    const productName = document.createElement("h3");
    const productDescription = document.createElement("p");
    const category = document.createElement("h6");
    const size = document.createElement("datalist");
    const price = document.createElement("p")
    const productId = document.createElement("P");

    modalBody?.appendChild(productName);
    modalBody?.appendChild(category);
    modalBody?.appendChild(productDescription);
    modalBody?.appendChild(size);
    modalBody?.appendChild(price);
    modalBody?.appendChild(productId);
}