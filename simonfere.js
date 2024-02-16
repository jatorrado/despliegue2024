const div = document.getElementById('simonfere')

var x = true

function cambiarColorBoton () {

    if (x) {
        div.style.backgroundColor = 'blue'
        x = false;
    }
    else {
        div.style.backgroundColor = 'green'
        x = true;
    }
    
    
}