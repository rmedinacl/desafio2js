document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#img_dona").addEventListener("click", modificarBorde);
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("boton-verificar")
    .addEventListener("click", verificar);
});

const modificarBorde = () => {
  const foto_dona = document.querySelector("#img_dona");
  if (foto_dona.style.border === "2px solid red") {
    foto_dona.style.border = "";
  } else {
    foto_dona.style.border = "2px solid red";
  }
};

// Desafio parte 2
const verificar = () => {
  const cant1 = parseInt(document.querySelector("#cantidad_1").value);
  const cant2 = parseInt(document.querySelector("#cantidad_2").value);
  const cant3 = parseInt(document.querySelector("#cantidad_3").value);

  if (!validarNumero(cant1) || !validarNumero(cant2) || !validarNumero(cant3)) {
    document.querySelector("#respuesta").innerHTML =
      "Ingrese solo números entre 1 y 10";
    return;
  }

  const total = cant1 + cant2 + cant3;

  if (total > 10) {
    document.querySelector("#respuesta").innerHTML =
      "Llevas demasiados stickers. El máximo es 10";
    return;
  }

  document.querySelector("#respuesta").innerHTML =
    "Llevas " + total + " stickers";
};

const validarNumero = (numero) => {
  return numero > 0 && numero <= 10;
};

document.querySelector("#boton_verificar").addEventListener("click", verificar);

document
  .querySelector("#cantidad_1")
  .insertAdjacentHTML(
    "afterend",
    "<p style='font-size: 0.8em; color: #777;'>(Ingresar valor entre 1 y 10)</p>"
  );
document
  .querySelector("#cantidad_2")
  .insertAdjacentHTML(
    "afterend",
    "<p style='font-size: 0.8em; color: #777;'>(Ingresar valor entre 1 y 10)</p>"
  );
document
  .querySelector("#cantidad_3")
  .insertAdjacentHTML(
    "afterend",
    "<p style='font-size: 0.8em; color: #777;'>(Ingresar valor entre 1 y 10)</p>"
  );

// Desafio parte 3

const ingresar = () => {
  const digito1 = document.querySelector("#pass_1").value;
  const digito2 = document.querySelector("#pass_2").value;
  const digito3 = document.querySelector("#pass_3").value;

  const password = digito1 + digito2 + digito3;

  if (password == "911") {
    document.querySelector("#mensaje").innerHTML = "Password 1 = correcto";
  } else if (password == "714") {
    document.querySelector("#mensaje").innerHTML = "Password 2 =  correcto";
  } else {
    document.querySelector("#mensaje").innerHTML = "Password incorrecto";
  }
};

const ingresarBtn = document.querySelector("#ingresar-btn");
ingresarBtn.addEventListener("click", ingresar);
