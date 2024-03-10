document.addEventListener("DOMContentLoaded", function () {
  const ingresarBtn = document.getElementById("ingresar-btn");
  ingresarBtn.addEventListener("click", ingresar);
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("boton-verificar")
    .addEventListener("click", verificar);
});

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

document
  .getElementById("#boton_verificar")
  .addEventListener("click", verificar);
