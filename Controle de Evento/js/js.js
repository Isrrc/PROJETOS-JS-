window.onload = function(){
    chamada();
}

function chamada(){

var lista = window.document.querySelectorAll("ol > li")

lista.forEach(li =>{

    li.addEventListener("mousedown",e =>{
        alert(li.innerHTML);
    });

});

}