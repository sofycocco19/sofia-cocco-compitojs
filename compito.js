let num1 = 1
let num2 = 2
let num3 = 3
let num4 = 4
let num5 = 5

console.log(num1+num2+num3+num4+num5);
let somma = num1+num2+num3+num4+num5;
let media = somma / 5
console.log(' la somma tra i numeri equivale a ' + somma + ' e la media risulta ' + media);

   


let annoCorrente = 2024
let annoNascita = 2003
let anni = annoCorrente - annoNascita
let anniMancanti = 100 - anni
console.log(`Hai ${ anni } anni e ti mancano ${ anniMancanti }anni per compierne 100`);

 
let nTotGatti = 44
let nGattiPresentFila = 6
let divisionegatti = nTotGatti / nGattiPresentFila
console.log(divisionegatti);
console.log(divisionegatti .toFixed());
let divisione = divisionegatti .toFixed();
console.log(nTotGatti % nGattiPresentFila);
let resto = nTotGatti % nGattiPresentFila;
console.log(nGattiPresentFila - resto);
let gattimancanti = nGattiPresentFila - resto;
console.log(`ci sono ${divisione} file di gatti e ne mancano ${gattimancanti} per una nuova fila, con un avanzo di ${resto}`);