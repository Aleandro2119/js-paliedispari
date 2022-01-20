// ? ESERCIZIO 2

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri, stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione). Dichiariamo chi ha vinto.



// ! Scegli pari o dispari

let Choice = prompt('Scegli "pari" o "dispari"').trim();

while (Choice != 'pari' && Choice != 'dispari') {

    Choice = prompt('Scegli "pari" o "dispari"').trim();
}

