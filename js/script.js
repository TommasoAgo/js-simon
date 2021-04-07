// Descrizione: 
// Un alert() espone 5 numeri generati casualmente. 
// Da li parte un timer di 30 secondi.
//  Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
//   tramite il prompt(). 
//  Dopo che sono stati inseriti i 5 numeri, 
//  il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// VARIABILI GENERICHE
var numeroMax = 100;
var numeroNumeri = 5;
var secondiConverter = 3 * 1000;



// 1. GENERARE 5 NUMERI CASUALMENTE
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

// Stampo in un alert
alert(arrayNumeriComputer);

// 2. FAR PARTIRE UN TIMER DI 30 SECONDI
// Creo una funzione di timeout per far comparire i prompt alla fine dei 30 secondi
setTimeout (function() {
    // Creo un Array per i numeri inseriti dall'utente
    var numeriVincentiUtente = [];

    // Creo un loop per inserire far inserire all'utente 5 numeri
    for ( var i = 0; i < numeroNumeri; i++) {
        // Creo la variabile per il numero inserito dall'utente
        var numeroSingoloUtente = parseInt(prompt('Inserisci uno dei numeri appena visti'))

        // Se il numero non è già presente nell'Array, pushalo, altrimenti no
        if ( arrayNumeriComputer.includes(numeroSingoloUtente)) {
            numeriVincentiUtente.push(numeroSingoloUtente);
        }
    }
    var messaggio = ' e i numeri che hai indovinato sono : ' + numeriVincentiUtente;

    // 3.STAMPARE IL RISULTATO
    if ( numeriVincentiUtente.length == arrayNumeriComputer.length ) {
        alert('HAI VINTO! Il tuo SCORE è di' + ' ' + numeriVincentiUtente.length + ' punti' + messaggio);
    } else if ( numeriVincentiUtente.length > 0 ) {
        alert('HAI PERSO! Il tuo SCORE è di' + ' ' + numeriVincentiUtente.length + ' punti' + messaggio);
    } else {
        alert('HAI PERSO! Il tuo Score è di' + ' ' + numeriVincentiUtente.length + ' punti' + messaggio);
    }
    
}, secondiConverter );

// FUNZIONI
// Creo una funzione per generare numeri casualmente
function numeriCasuali (maxCasuale) {
   return Math.floor(Math.random() * maxCasuale) + 1;
}
