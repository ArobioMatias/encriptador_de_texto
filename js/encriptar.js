/*Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

var botonEncriptar = document.querySelector(".btn-encriptar");
var textareaSalida = document.querySelector("#salida-texto");
var areaTexto = document.querySelector(".con-texto");
var areaImg = document.querySelector(".sin-texto");

botonEncriptar.addEventListener("click", function(){
    var textareaEntrada = document.querySelector("#entrada-texto");
    var texto = textareaEntrada.value;

    if(hayTexto(texto)){
        texto = transformarTexto(texto);
        cambiarAreaVisualizada(true);
        textareaSalida.value = texto;
    }else{
        cambiarAreaVisualizada(false);
    }
    
    
});

function transformarTexto(texto){
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    
    return texto;
}

function hayTexto(texto){
    return texto.length > 0;
}

function cambiarAreaVisualizada(hayTexto){
    if(hayTexto){
        areaTexto.classList.remove("invisible");
        areaImg.classList.add("invisible");
    }else{
        areaImg.classList.remove("invisible");
        areaTexto.classList.add("invisible");
    }
}