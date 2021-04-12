function calcular() {
  var form = window.document.getElementById("formulario")
  
  try{
     var numPao = parseInt(form.pao.value);
     if (Object.is(numPao,NaN)){
      throw("O campo Quant. Pão Frânces só aceita números"); 
    }
  } catch(e){
    alert(e);
  }
  if (!Object.is(numPao,NaN)){

      var numBroa = form.broa.value;

      var lucroPao = form.valorPao.value * numPao; 
      var lucroBroa = form.valorBroa.value * numBroa;
      var lucro = lucroPao + lucroBroa;
      var poupanca = (lucro * 10) / 100;

      form.lucro.value = lucro;
      form.teste.value = poupanca; 
  }
}