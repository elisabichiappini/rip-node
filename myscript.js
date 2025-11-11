//metodo per creare array di stringhe .split(',');
const prodotti = process.env.LISTA.split(',');
prodotti.forEach((element, index) => {
    console.log(`${index+1}. ${element}`);
});
//da terminale LISTA="ciao,sono,elisa,senza,roba,in,lista" node myscript.js

