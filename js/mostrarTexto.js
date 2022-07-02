var areaTexto = document.querySelector(".con-texto");
var areaImg = document.querySelector(".sin-texto");

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