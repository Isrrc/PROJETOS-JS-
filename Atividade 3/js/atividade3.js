

function calcular() {

    let form = window.document.getElementById("formulario");
    
    let numIpi2 = form.ipi.value;
    let numProduto1 = +form.produto1.value;
    let numProduto2 = +form.produto2.value;

    form.resultado.value = calculoIpi(+numIpi2.replace("%","")) * preco1(+form.valor2.value,+form.quantidade2.value)  + preco2(+form.valor1.value,+form.quantidade1.value);
}


function calculoIpi (vlrPercentual){

     return vlrPercentual / 200 + 1;

}

function preco1 (valor,quantidade){

    return valor * quantidade;
}

function preco2 (valor,quantidade){

    return valor * quantidade;
}

