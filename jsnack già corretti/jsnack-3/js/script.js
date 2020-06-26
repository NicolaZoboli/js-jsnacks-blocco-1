// Al click su un bottone, il programma acquisisce tramite prompt un numero. Se il numero è positivo, il background di un p#colore diventa verde, se negativo rosso e se zero blu.

var cambiaColore = document.getElementById('cambiaColore');

cambiaColore.addEventListener("click", function() {
  var numero = parseInt(prompt("Scrivi un numero"));
  var colors = document.getElementById("colors");

  if (!isNaN(numero)) {
    if (numero > 0) {
      colors.classList.add("green");
    } else if (numero < 0) {
      colors.classList.add("red");
    } else {
      colors.classList.add("blue");
    }
  }
});
