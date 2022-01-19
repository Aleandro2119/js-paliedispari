console.log('OK JS!');

// ? ESERCIZIO 1

//Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma


const userWord = prompt('Inserisci una parola!');

const result = isPalindroma(userWord);
console.log(result);


function isPalindroma(word) {
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {

        reverseWord += word[i]

        if (word === reverseWord) {
            return false;
        } else {
            return true;
        }
    }
}



