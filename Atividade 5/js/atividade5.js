function calcular(){

    let form = window.document.getElementById("formulario")

    let valor1 = +form.valor1.value;
    let valor2 = +form.valor2.value;
    let valor3 = +form.valor3.value;

    form.resultado.value ="";
    if(verificaSeTriangulo(valor1,valor2,valor3) == false){
        form.resultado.value ="Não é um Triângulo";
    }else if(verificaSeEquilatero(valor1,valor2,valor3)){
        form.resultado.value ="É Equilátero";
    }else if(verificaSeIsoceles(valor1,valor2,valor3)){
        form.resultado.value ="É Isoceles";
    }else if(verificaSeEscaleno(valor1,valor2,valor3)){
        form.resultado.value ="É Escaleno";
    }
}

function verificaSeEquilatero(num1,num2,num3){
    if(num1 === num2 && num2 === num3){

           return true;
    }else{
        return false;
    }

}

function verificaSeIsoceles(num1,num2,num3){

    if(num1 === num2 && num1 != num3){

        return true;
    }else if(num1 === num3 && num1 != num2){

        return true;
    }else if(num2 === num3 && num2 != num1){

        return true;
    }else{
        return false;
    }

}

function verificaSeEscaleno(num1,num2,num3){

    if(num1 != num2 && num1 != num3 && num2 != num3){

        return true;
    }else{
        return false;
    }

}

function verificaSeTriangulo(num1,num2,num3){
    if(num1 === 0 || num2 === 0 || num3 === 0){
        return false;
    }else{
        if((num1 + num2) < num3){
                 return false;

            }else if((num1 + num3) < num2){
                 return false;

            }else if((num3 + num2) < num1){
                 return false;
            }else{
                 return true;
            }
        }
}