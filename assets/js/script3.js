//Ejercicio 3

const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const select3 = document.getElementById("select3");
const checkPassword = document.getElementById("ver-pass");
const passwordResult = document.getElementById("pass-result");

checkPassword.addEventListener("click", () => {
  const password = `${select1.value}${select2.value}${select3.value}`;
  if (password === "911") {
    passwordResult.textContent = "Password correcto";
  } else if (password === "714") {
    passwordResult.textContent = "Password correcto";
  } else {
    passwordResult.textContent = "Password incorrecto";
  }
});
