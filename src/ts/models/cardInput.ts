export const cardInput = () => {
  let inputCard = (document.querySelector("#cardNumber") as HTMLInputElement).value;
  if (inputCard.length === 16) return true;
  alert("Kortnummbret måste innehålla 16 siffror");
  return false;
};
