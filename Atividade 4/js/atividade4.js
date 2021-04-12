function calcular(){

    let form = window.document.getElementById("formulario");

    form.quantSalario.value = calculoSalario (+form.salarioUsuario.value,788);
    
}

function calculoSalario (num1,num2){

        return (num1 / num2).toFixed(2);

}