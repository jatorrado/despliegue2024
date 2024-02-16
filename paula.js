var colores = ['red', 'blue', 'black', 'orange'];

var div = document.getElementById('divPaula');

function cambiarColor() {
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    div.style.backgroundColor = colorAleatorio;
}