document.addEventListener("DOMContentLoaded", function () {
  const verificar = () => {
    const cant1 = parseInt(document.getElementById("cantidad_1").value);
    const cant2 = parseInt(document.getElementById("cantidad_2").value);
    const cant3 = parseInt(document.getElementById("cantidad_3").value);

    if (
      !validarNumero(cant1) ||
      !validarNumero(cant2) ||
      !validarNumero(cant3)
    ) {
      document.getElementById("respuesta").innerHTML =
        "Los números no son válidos. Ingrese solo números entre 1 y 10. ";
      return;
    }

    const total = cant1 + cant2 + cant3;

    if (total > 10) {
      document.getElementById("respuesta").innerHTML =
        "Llevas demasiados stickers. El máximo es 10";
      return;
    }

    document.getElementById("respuesta").innerHTML =
      "Llevas " + total + " stickers";
  };

  const validarNumero = (numero) => {
    return !isNaN(numero) && numero > 0 && numero <= 10;
  };

  document
    .getElementById("boton-verificar")
    .addEventListener("click", verificar);
});
