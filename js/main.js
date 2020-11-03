$(document).ready(function(){

  // JSnack 3
  // Creiamo un array di oggetti (scelti da voi)
  // Creiamo una copia da questo array di partenza e aggiungiamo ai singoli elementi una nuova proprietà position che contiene una lettera casuale.
  // Non dobbiamo modificare l'array iniziale.
  const calciatori = [
    {
      nome: 'messi',
      squadra: 'barca',
      nazione: 'argentina'
    },
    {
      nome: 'lukaku',
      squadra: 'inter',
      nazione: 'belgio'
    },
    {
      nome: 'mbappe',
      squadra: 'psg',
      nazione: 'francia'
    }
  ]

  const newCalciatori = [...calciatori].map(person => {
    return {
      ...person,
      position: generaPosizione(),
    }
  });
  console.log(newCalciatori);

  function generaPosizione() {
    var lettere = "abcdefghijklmnopqrstuvwxyz";

    var lettera = lettere[randomNumber(0, lettere.length - 1)];

    return lettera;
  }
  // funzione per generare un numero casuale
  function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

















  // JSnack 1
    // Creare un array di oggetti
    // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    // Stampare a schermo la bici con peso minore con handlebars.

  //  let biciclette = [
  //    {
  //      nome: "bianchi",
  //      peso: 11
  //    },
  //    {
  //      nome: "coppi",
  //      peso: 9
  //    },
  //    {
  //      nome: "atlas",
  //      peso: 13
  //    }
  //  ];
  //
  // let biciLeggera = null;
  // biciclette.forEach(element => {
  //   if (biciLeggera == null || biciLeggera.peso > element.peso) {
  //       biciLeggera = element;
  //   }
  // });
  // console.log(biciLeggera);
  //
  // const {nome,peso} = biciLeggera;
  // $(".bike").html(
  //   `
  //   <div>
  //      <h3> nome della bici più leggera: ${nome}</h3>
  //      <h4> peso della bici più leggera: ${peso}</h4>
  //   </div>
  //   `
  // );













  // JSnack 2
  // Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
  // Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
  // Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array)  compresa tra i due numeri inseriti dall'utente.


//   const nomi = ["alberto", "filippo", "enzo", "luigi", "bruno"];
//   let totale = nomi.length - 1;
//   let min = parseInt( prompt("indica un numero tra 0 e " + totale) );
//   let max = parseInt( prompt("indica un numero tra 0 e " + totale) );
//   let nuovaLista = [];
//
//   nomi.forEach((element, index) => {
//     if (min <= index && max >= index) {
//         nuovaLista.push(element);
//     }
//   });
//   console.log(nuovaLista);
//
 });
