var botonEncriptar = document.querySelector(".btn-encriptar");
var textareaSalida = document.querySelector("#salida-texto");

botonEncriptar.addEventListener("click", function(){
    var textareaEntrada = document.querySelector("#entrada-texto");
    var texto = textareaEntrada.value;

    if(hayTexto(texto)){
        texto = codificar(texto);
        cambiarAreaVisualizada(true);
        textareaSalida.value = texto;
    }else{
        cambiarAreaVisualizada(false);
    }
});

function codificar(texto){
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    
    return texto;
}