// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

var parola1 = prompt("Inserisci una parola");
var parola2 = prompt("Inserisci una parola");

if (isNaN(parola1) && isNaN(parola2)) {
  if (parola1.length > parola2.length) {
    console.log(parola2, parola1);
  } else if (parola1.length < parola2.length) {
    console.log(parola1, parola2);
  } else {
    console.log("Le parole sono lunghe uguali");
  }
} else {
  console.log("Inserisci due parole");
}
