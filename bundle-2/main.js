/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// // ESERCIZIO 1
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// // i DEVE ESSERE MINORE DI 5 PER POTER FUNZIONARE ALTRIMENTI NON DA RISULTATO PARTENDO CON i = 0


// // ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 === 0) {
//         return num + 5;
//     }
//     return num;
// }
// console.log(addIfEven(10));

// // INSERIRE I 3 UGUALI PER FAR DIRE CHE NON è UN' ASSOCIAZIONE MA UN NUMERO


// //ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }
// loopToFive();

// // CAMBIO LE VIRGOLE IN PUNTO E VIRGOLA


// // ESERCIZIO 4 (suggerimento: ci sono 8 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evenNumbers.push(numbers[i]);
//         }
//     }
//     return evenNumbers;
// }
// console.log(displayEvenNumbers()); // [2,4,6,8]