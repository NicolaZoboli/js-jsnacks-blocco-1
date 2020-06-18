// Nella pagina ci sono due input(num1, num2) e una select con options(somma,sottrai,moltiplica,dividi). Al click su un bottone, il programma inserisce in un p#result il risultato dell'operazione scelta.

var esegui = document.getElementById("esegui");

esegui.addEventListener("click", function() {
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var options = document.getElementById('options').value;
  
  if (options == "somma") {
    document.getElementById('risultato').innerHTML = num1 + num2;
  } else if (options == "sottrai") {
    document.getElementById('risultato').innerHTML = num1 - num2;
  } else if (options == "moltiplica") {
    document.getElementById('risultato').innerHTML = num1 * num2;
  } else {
      if (num2 == 0) {
        document.getElementById('risultato').innerHTML = "non calcolabile";
      } else {
        document.getElementById('risultato').innerHTML = num1 / num2;
      }
  }
});
