function calcular() {
  var formulario = document.getElementById("formulario");

  var soma = +formulario.numero1.value + +formulario.numero2.value;

  formulario.resultado.value = soma; 
  
}