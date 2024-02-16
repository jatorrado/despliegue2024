window.onload = () => {
    const boton = document.getElementById("buttonAna");
    boton.addEventListener("click", cambiarColores);
}

var colores = ["red", "blue", "pink", "green", "yellow", "purple"];

function cambiarColores(){
    
    let numeroAleatorio1 = Math.floor(Math.random() * colores.length);
    let numeroAleatorio2 = Math.floor(Math.random() * colores.length);
    const div = document.getElementById("divAna");
    div.style.backgroundColor = colores[numeroAleatorio1];
    div.style.color = colores[numeroAleatorio2];

}