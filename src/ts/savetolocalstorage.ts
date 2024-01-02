export function savetolocalstorage() {
    const product: [] = [];
    localStorage.setItem("product", JSON.stringify(product));
}
