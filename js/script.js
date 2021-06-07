do var es = prompt("Scegli esercizio: 1 -> Pari o Dispari  oppure 2 -> Parola palindroma")
while (es != 1 && es != 2)

if (es == 1) {
    /* Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random    (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due     numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

    var min = 1;
    var max = 5;

    do var parDisp = prompt("Pari o dispari?").toLowerCase();
    while (parDisp != "pari" && parDisp != "dispari");

    do var numUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
    while (numUtente > max || numUtente < min || Number.isNaN(numUtente));

    var numRand = numRandom(min, max + 1);
    var sum = numUtente + numRand;
    var esito = "hai perso!";

    if (pariDispari(sum) == parDisp ){
        esito = "hai vinto!"
    }

    document.getElementById("text").innerHTML = "Scelta: " + parDisp + "<br>Numero utente: " + numUtente + "<br> Numero     random: " + numRand + "<br>La somma è " + pariDispari(sum) + ": " + esito;

    function numRandom(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }

    function pariDispari(sum){
        if (sum % 2 == 0) return "pari";
        else return "dispari";
}
} else if (es == 2) {
/* Palidroma: Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma */

var parola = prompt("Inserisci una parola, ti dirò se è palindroma");
var esito = " non è palindroma";
if (isPal(parola)) esito = " è palindroma"
document.getElementById("text").innerHTML = "La parola \"" + parola + "\"" + esito;

function isPal(parola) {
    var i = 0;
    var j = parola.length - 1;

    while (i < parola.length / 2 && j > parola.length / 2) {
        if (parola.charAt(i) != parola.charAt(j)) {
            return false;
        }
        i++;
        j--;
    }

    return true;
}

}