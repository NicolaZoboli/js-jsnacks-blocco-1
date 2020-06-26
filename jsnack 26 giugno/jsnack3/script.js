// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.

var sum = 0;

for (var i = 0; i < 5; i++) {
  var numeri = parseInt(prompt("inserisci un numero"));
  sum += numeri;
}

console.log(sum);

console.log("------------------------");

var sum = 0;
var i = 0;

while (i < 5) {
  var numeri = parseInt(prompt("inserisci un numero"));
  sum += numeri;
  i++
}

console.log(sum);
