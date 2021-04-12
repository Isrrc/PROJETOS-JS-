function calcular(){

var form = window.document.getElementById("formulario");

var num1 = +form.numero1.value;
var num2 = +form.numero2.value;
var num3 = +form.numero3.value;
var num4 = +form.numero4.value;
var num5 = +form.numero5.value;
var num6 = +form.numero6.value;

var camposPreenchidos = 0;
if (num1 > 0){
    camposPreenchidos++;
}
if (num2 > 0){
    camposPreenchidos++;
}
if (num3 > 0){
    camposPreenchidos++;
}
var camposPreenchidos2 = 0;
if (num4 > 0){
    camposPreenchidos2++;
}
if (num5 > 0){
    camposPreenchidos2++;
}
if (num6 > 0){
    camposPreenchidos2++;
}

var mediapreenchida = 0; 

if (camposPreenchidos > 0){
    mediapreenchida++;
}
if (camposPreenchidos2 > 0){
    mediapreenchida++;
}



var valor1= (num1 + num2) + num3; 
var media1= 0;
if (valor1 > 0){
media1 = valor1 / camposPreenchidos;
}

var valor2= (num4 + num5) + num6;
var media2= 0;
if (valor2 > 0){
media2 = valor2 / camposPreenchidos2;
}

var resultado3= media1 + media2;
var resultado= resultado3 / mediapreenchida;
form.resultado.value = resultado;


}
