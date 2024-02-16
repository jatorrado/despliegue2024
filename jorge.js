function colorAleatorio() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function cambiarColorFondo() {
  document.getElementById("div").style.backgroundColor = colorAleatorio();
  document.getElementById("btn").style.color = colorAleatorio();
}
