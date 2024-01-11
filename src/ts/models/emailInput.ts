export const emailInput = () => {
  let email = (document.querySelector("#email") as HTMLInputElement).value;
  const validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (email.match(validRegex)) return true;
  alert("Vänligen ange en giltig epostadress");
  return false;
};
