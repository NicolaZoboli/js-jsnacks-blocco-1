// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

// soluzione 1

var numero = prompt("Inserisci un numero di 4 cifred");
var sum = 0;
for (var i = 0; i < numero.length; i++) {
  sum += parseInt(numero[i]);
}

console.log(sum);

console.log("---------------------");

// soluzione 2

var value = parseInt(prompt("inserisci un numero di 4 cifre"));
var sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log(sum);
