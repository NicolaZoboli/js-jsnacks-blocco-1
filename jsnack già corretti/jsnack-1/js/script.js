// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var numero1 = parseInt(prompt("Scrivi un numero"));
var numero2 = parseInt(prompt("Scrivi un numero"));


if (!isNaN(numero1) && !isNaN(numero2)) {
  if (numero1 > numero2) {
    console.log(numero1);
  } else if (numero2 > numero1) {
    console.log(numero2);
  } else {
    console.log("I numeri sono uguali");
  }
}
