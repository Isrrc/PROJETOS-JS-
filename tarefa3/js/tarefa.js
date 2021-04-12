function calcular() {
  var formulario = document.getElementById("formulario");

  var multiplicacao = +formulario.numero1.value * +formulario.numero2.value;

  formulario.resultado.value = multiplicacao;
  
}