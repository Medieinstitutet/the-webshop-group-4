export const checkoutClick = () => {
  const checkoutButton = document.getElementById("checkoutForm");
  checkoutButton?.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Din beställning har skickats!");
  });
};
