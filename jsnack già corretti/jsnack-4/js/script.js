// Al click su un bottone, il programma genera un numero casuale tra 1 e 10. Se il numero è pari, toglie la classe pari da p#numero.pari.dispari altrimenti toglie la classe dispari.

var generaNumero = document.getElementById('generaNumero');

generaNumero.addEventListener("click", function() {

  var numeroCasuale = Math.floor(Math.random()*(10 - 1 + 1)) + 1;
  var numero = document.getElementById("numero");
  console.log(numeroCasuale);


  if (numeroCasuale % 2 == 0) {
    numero.classList.remove("pari");
  } else {
    numero.classList.remove("dispari");
  }
});
