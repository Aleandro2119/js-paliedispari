// ? ESERCIZIO 2

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri, stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione). Dichiariamo chi ha vinto.



// ! Scegli pari o dispari (PUNTO 1)

let Choice = prompt('Scegli "pari" o "dispari"').trim();

while (Choice != 'pari' && Choice != 'dispari') {

    Choice = prompt('Scegli "pari" o "dispari"').trim();
}

console.log(Choice);

// ! Inserisci un numero da 1 a 5 (PUNTO 2)

let Number = parseInt(prompt('Inserisci un numero da 1 a 5'));

while (isNaN(Number) || Number < 1 || Number > 5) {
    Number = parseInt(prompt('Inserisci un numero da 1 a 5'));
}

console.log(Number);

//! Generiamo numero random (PUNTO 3)

const randNumber = getRandomNumber(1, 5);

function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

