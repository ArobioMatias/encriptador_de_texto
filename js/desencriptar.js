var BotonDesencriptar = document.querySelector(".btn-desencriptar");

BotonDesencriptar.addEventListener("click", function(){
    var textareaEntrada = document.querySelector("#entrada-texto");
    var textareaSalida = document.querySelector("#salida-texto");
    var texto = textareaEntrada.value;

    if(hayTexto(texto)){
        texto = decodificar(texto);
        cambiarAreaVisualizada(true);
        textareaSalida.value = texto;
    }else{
        cambiarAreaVisualizada(false);
    }
});

function decodificar(texto){
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    
    return texto;
}