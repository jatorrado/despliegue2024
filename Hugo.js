function colorAleatorio() {
    return (Math.floor(Math.random() * (255 - 0) + 0));
}

function cambiarColor(evento) {
    document.getElementById("divHugo").style.color = "rgb("+colorAleatorio()+","+colorAleatorio()+","+colorAleatorio()+")";
}

document.getElementById("botonHugo").onclick = cambiarColor;

