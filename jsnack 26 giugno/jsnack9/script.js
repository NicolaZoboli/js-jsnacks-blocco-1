// chiedi 10 numeri all'utente e calcola la somma e la media

var number;
var sum = 0;
var average = 0;
var times = 10;

for (var i = 0; i < times; i++) {
  number = parseInt(prompt("Dammi un numero"));
  sum += number;
  average = sum / times;
}

console.log(sum);
console.log(average);
