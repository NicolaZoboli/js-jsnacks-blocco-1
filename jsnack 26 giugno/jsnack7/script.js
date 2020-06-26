// Stampa le potenze di due fino a mille

// soluzione 1
for (var i = 2; i <= 1000; i=i*2) {
  console.log(i);
}

console.log("----------------------------");

// soluzione 2
var i=0
while (2**i < 1000) {
  console.log(2**i);
  i++;
}

console.log("----------------------------");

// soluzione 3
var numero = 1;
var exp = 1;
while(numero < 1000) {
  console.log(numero);
  numero = 2**exp;
  exp++;
}
