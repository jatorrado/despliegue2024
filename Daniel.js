
var arrayColores = ["red", "Aquamarine", "green", "Brown", "yellow", "blue", "pink", "DarkGoldenRod", "DarkGray", "Indigo", "Moccasin", "Orange", "Tomato", "LawnGreen"]

function cambiarFondo(){

    document.getElementById("div2").style.backgroundColor = arrayColores[Math.round(Math.random() * 14)];

    document.getElementById("botonDM").style.color = arrayColores[Math.round(Math.random() * 14)];;
}