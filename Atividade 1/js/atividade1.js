function calcular() {
    var form = window.document.getElementById("formulario")

    var numAnos = +form.anos.value * 365;
    var numMeses = +form.meses.value * 30;
    var numDias = +form.dias.value * 1;
    var dias = numAnos + numMeses;
    var dias2 = dias + numDias;
 
    form.resultado.value = dias2;
    
}