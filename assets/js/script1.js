//Ejercicio 1

document.addEventListener("DOMContentLoaded", function () {
  const modificarBorde = () => {
    const foto_dona = document.getElementById("img_dona");
    if (foto_dona.style.border === "2px solid red") {
      foto_dona.style.border = "";
    } else {
      foto_dona.style.border = "2px solid red";
    }
  };
  document.querySelector("#img_dona").addEventListener("click", modificarBorde);
});
