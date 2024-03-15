

/*

2c trebol
2h corazones
2s espadas pique
2d diamante
*/




let deck = [];
const tipos = ["C", "H", "S", "D"]
const especiales = ["A", "J", "Q", "K"]


// ----------------------------------------- crear y mezclar mazo de cartas
const crearDeck = () => {
  // ---------------------- criterio curso
  // for (let i = 2; i <= 10; i++) {
  //   for (let tipo of tipos) {
  //     deck.push(i + tipo)
  //   }
  // }

  // for (let especial of especiales) {
  //   for(let tipo of tipos){
  //     deck.push(especial + tipo)
  //   }

  // }


  // ---------------- criterio propio
  for (let tipo of tipos) {
    for (let i = 2; i <= 10; i++) {
      deck.push(i + tipo)
    }
    for (let especial of especiales) {
      deck.push(especial + tipo)
    }
  }

  console.log("mazo ordenado:", deck)
  deck = _.shuffle(deck)
  // console.log("mazo mezclado:",deck)
  return deck
}

console.log(`mazo mezclado: ${crearDeck(deck)}. Total ${deck.length} cartas`)

// ---------------------------------------- para tomar una carta

const pedirCarta = () => {
  if (deck.length > 0) {
    cartaPedida = deck.pop()
    // console.log("mazo:", deck, "carta pedida:", cartaPedida)
    return cartaPedida
  } else {
    console.log("El mazo esta vacio")
  }

}
// console.log((deck = [3, 4])) // de ejemplo para ver resultados de la funcion pedir Carta

// console.log(pedirCarta())
// console.log(pedirCarta())
// console.log(pedirCarta())

// pedirCarta()
// pedirCarta()
// pedirCarta()

// ---------------------------- darle un valor a la carta
const valorCarta = (carta => {
  let puntos=0;
  const valor = carta.substring(0, carta.length - 1) // carta viene con "10d" y lo convierte en un arreglo para guardar hasta el indice indicado
  console.log( ((isNaN(valor)) ?
    (valor === "A") ? puntos = puntos + 11 : puntos = puntos + 10
    : puntos = parseInt(valor, 10) + puntos));
  console.log("carta:",carta,"puntaje:", puntos)


})

valorCarta(pedirCarta())
valorCarta(pedirCarta())
valorCarta(pedirCarta())
valorCarta(pedirCarta())
