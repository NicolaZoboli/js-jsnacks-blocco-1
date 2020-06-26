// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

var array = [];

 for (var i = 0; i < 6; i++) {
   var numero = parseInt(prompt("Dammi un numero"));
   if (numero % 2 == 1) {
     array.push(numero);
   }
 }
