function calcular() {
  var formulario = document.getElementById("formulario");

  var subtracao = +formulario.numero1.value - +formulario.numero2.value;

  formulario.resultado.value = subtracao;
  
}