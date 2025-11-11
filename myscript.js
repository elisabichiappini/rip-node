const testo = process.argv[2];
if(!testo) {
    console.log('inserisci un argomento');
    process.exit(1);
}

console.log(testo.toUpperCase());