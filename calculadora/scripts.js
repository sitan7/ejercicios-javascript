var valorEntrada = "0.";
var valorCalculo = undefined;
var nums = [];

var txtEntrada = document.querySelector("#entrada");

var btns = document.querySelectorAll(".boton");

var fijarValorEntrada = function (valor) {
  txtEntrada.value = valor;
};

var clickEnBoton = function () {
  var dato = this.getAttribute("data-natalia");
  if (valorCalculo != undefined) {
    fijarValorEntrada(valorEntrada);
    valorCalculo = undefined;
    nums = [];
  }
  //Si el valor actual es un numero pasa.
  if (
    (!isNaN(txtEntrada.value) && txtEntrada.value != valorEntrada) ||
    dato == "."
  ) {
    if (dato != "=" && isNaN(dato) && dato != ".") {
      nums.push(txtEntrada.value);
      nums.push(dato);
    } else if (dato == "=") {
      nums.push(txtEntrada.value.replace("=", ""));
      valorCalculo = eval(nums.join(""));
      dato = valorCalculo;
    } else {
      dato = txtEntrada.value + dato;
    }
  }
  fijarValorEntrada(dato);
};

btns.forEach((btn) => {
  btn.addEventListener("click", clickEnBoton);
});
