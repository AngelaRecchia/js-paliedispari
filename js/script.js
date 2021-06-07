/* Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

var min = 1;
var max = 5;
/* do var numUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
while (numUtente > max || numUtente < min); */

var numRand = numRandom(min, max + 1);

function numRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

