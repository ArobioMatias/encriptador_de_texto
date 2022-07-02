var botonCopiar = document.querySelector(".btn-copiar");

botonCopiar.addEventListener("click", function(){
    var textoACopiar = document.querySelector("#salida-texto");
    textoACopiar.select();
    document.execCommand("copy");
});