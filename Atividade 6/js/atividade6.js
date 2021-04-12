function retornar(){

    resultado();
}

function resultado(){

    let form = window.document.getElementById("formulario");

    let numeros = [+form.valor1.value,+form.valor2.value,+form.valor3.value,+form.valor4.value];
    let numMenor = parseInt(numeros[0]);

        for(let i = 1; i < numeros.length; i++) {

        if(numMenor > parseInt(numeros[i])){
            numMenor = parseInt(numeros[i]);
         }
     }
        form.resultado.value = numMenor;
}
