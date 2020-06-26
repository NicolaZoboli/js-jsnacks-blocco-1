// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var invitati = ["marco", "giovanni", "paolo", "giuseppe", "francesco"];

var nome = prompt("come ti chiami?");

var nomeFound = false;

for (var i = 0; i < invitati.length; i++) {
  if (nome == invitati[i]) {
    nomeFound = true;
  }
}

if (nomeFound == true) {
  console.log("sei in lista");
} else {
  console.log("non sei in lista");
}
