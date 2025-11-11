// const testo = process.argv[2];
// if(!testo) {
//     console.log('inserisci un argomento');
//     process.exit(1);
// }
//utilizzando il metodo .slice(2) tolgo i primi due argomenti ossia il percorso dell'eseguibile del node e secondo il percorso dello script
const argomenti = process.argv.slice(2);

argomenti.forEach(element => {
    console.log(element); //da terminale ad esempio do : node myscript.js elisa ciao sono felice, verranno stampati uno sotto l'altro gli argomenti
});

