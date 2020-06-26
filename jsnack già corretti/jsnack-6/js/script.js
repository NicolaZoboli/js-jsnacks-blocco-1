// Nella pagina c'è un bottone#lanciaMoneta. Al click su un bottone, il programma genera un numero casuale (tra 0 e 9). Se il numero è pari mostra un img con la testa della moneta. Se è dispari mostra un'altra img con la croce della moneta.


var lanciaMoneta = document.getElementById('lanciaMoneta');
var reset = document.getElementById('reset');

lanciaMoneta.addEventListener("click", function() {
  var numMax = 9;
  var numMin = 0;
  var moneta = document.getElementById("moneta");

  moneta.classList.remove("testa");
  moneta.classList.remove("croce");

  var numeroCasuale = Math.floor(Math.random()*(numMax - numMin + 1)) + numMin;

  console.log(numeroCasuale);

  if (numeroCasuale % 2 == 0) {
    moneta.classList.add("testa");
  } else {
    moneta.classList.add("croce");
  };

});
