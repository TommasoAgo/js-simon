// Descrizione: 
// Un alert() espone 5 numeri generati casualmente. 
// Da li parte un timer di 30 secondi.
//  Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
//   tramite il prompt(). 
//  Dopo che sono stati inseriti i 5 numeri, 
//  il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// 1. GENERARE 5 NUMERI CASUALMENTE
var numeroMax = 100;
var numeroNumeri = 5;

// Creo un Array per contenere i numeri generati casualmente dal computer
var arrayNumeriComputer = [];

// Creo un loop per pushare i numeri casuali dentro l'array in modo che non si ripetano
while ( arrayNumeriComputer.length < numeroNumeri ) {
    var numeroCasuale = numeriCasuali(numeroMax);

    // Creo un if per pushare solo quelli non già presenti nell'Array
    if ( !arrayNumeriComputer.includes(numeroCasuale) ) {
        arrayNumeriComputer.push(numeroCasuale);
    }
}

// Adesso ho l'Array con i numeri generati casualmente dal computer

// 2. FAR PARTIRE UN TIMER DI 30 SECONDI


// FUNZIONI
// Creo una funzione per generare numeri casualmente
function numeriCasuali (maxCasuale) {
   return Math.floor(Math.random() * maxCasuale) + 1;
}

// Creo una funzione per far comparire i prompt
function generaPrompt (promptUtente) {
    return promptUtente = parseInt(prompt('Inserisci uno dei numeri appena comparsi a schermo'))
}