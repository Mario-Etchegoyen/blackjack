

/*

2c trebol
2h corazones
2s espadas pique
2d diamante
*/




let deck = [];
const tipos = ["C", "H", "S", "D"]
const especiales = ["A", "J", "Q", "K"]

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

