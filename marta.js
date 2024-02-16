document.getElementById("marta").addEventListener("click", cambiarColor);

function cambiarColor() {
    var contenedor = document.getElementById("contenedor");
    if (contenedor.style.backgroundColor === "red") {
        contenedor.style.backgroundColor = "white";
    } else {
        contenedor.style.backgroundColor = "red";
    }
}
