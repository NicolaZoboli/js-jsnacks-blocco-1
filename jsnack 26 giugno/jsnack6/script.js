// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

var numeroN = parseInt(prompt("Inserisci un numero"));

for (var i = 1; i < numeroN + 1; i++) {
  console.log(Math.pow(i, 3));
}
