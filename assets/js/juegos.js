

/*

2c trebol
2h corazones
2s espadas pique
2d diamante
*/




let deck = [];
const tipos = ["C", "H", "S", "D"]
const especiales = ["A", "J", "Q", "K"]
let ptsAcum=0,
    ptsComputadora=0;


// referencias HTML

const btnNuevo=document.querySelector("#btnNuevo"),
      btnPedir = document.querySelector("#btnPedir"),
      btnDetener = document.querySelector("#btnDetener");

const smalls = document.querySelectorAll("small");



// ----------------------------------------- crear y mezclar mazo de cartas
const crearDeck = () => {
  // ---------------- criterio propio 3 for
  for (let tipo of tipos) {
    for (let i = 2; i <= 10; i++) {
      deck.push(i + tipo)
    }
    for (let especial of especiales) {
      deck.push(especial + tipo)
    }
  }

  deck = _.shuffle(deck) // mezcla las cartas  
  return deck
}

// console.log(`mazo mezclado: ${crearDeck(deck)}. Total ${deck.length} cartas`)

// ---------------------------------------- para tomar una carta

const pedirCarta = () => {
  if (deck.length > 0) {
    cartaPedida = deck.pop()
    return cartaPedida
  } else {
    console.log("El mazo esta vacio")
  }

}

// ---------------------------- darle un valor a la carta
const valorCarta = (carta) => {
  let puntos = 0;
  const valor = carta.substring(0, carta.length - 1) // carta viene con "10d" y lo convierte en un arreglo para guardar hasta el indice indicado
  puntos = (((isNaN(valor)) ?
    (valor === "A") ? puntos = puntos + 11 : puntos = puntos + 10
    : puntos = parseInt(valor, 10) + puntos));
  return puntos
}

const sumaPuntos = (puntaje = 0) => {
  ptsAcum = ptsAcum + puntaje;
  console.log(`Carta: ${cartaPedida}, puntaje: ${puntaje}, Punt Acum: ${ptsAcum}`) // devuelve string
  return ptsAcum
}

const verificacion = (ptsAcum) => {
  ptsAcum <= 21 ? console.log("pedis Otra?") : smalls[0].innerText ="PERDISTE!"

}


// verificacion(sumaPuntos(valorCarta(pedirCarta())))
// verificacion(sumaPuntos(valorCarta(pedirCarta())))
// verificacion(sumaPuntos(valorCarta(pedirCarta())))
// verificacion(sumaPuntos(valorCarta(pedirCarta())))
// verificacion(sumaPuntos(valorCarta(pedirCarta())))

// ----------- eventos ---------------------------
btnPedir.addEventListener("click", () => {
  const carta=pedirCarta();
  // console.log(carta);
  const puntajeCarta=valorCarta(carta);
  // console.log(puntajeCarta);
  const ptsAcum=sumaPuntos(puntajeCarta);
  smalls[0].innerText=ptsAcum;
  verificacion(ptsAcum);
} )

btnNuevo.addEventListener("click", () => {
  deck=[];
  smalls[0].innerText =0;
  ptsAcum=0;
  console.log(crearDeck())
})

