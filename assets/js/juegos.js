const miModulo = (() => {
  "use strict";


  let deck = [];
  const tipos = ["C", "H", "S", "D"],
    especiales = ["A", "J", "Q", "K"]
  let ptsAcum = 0;
  const manosGanadas = [];

  let puntosJugadores = [];// marcan la # de juegos ganados por cada uno


  // referencias HTML

  const btnNuevo = document.querySelector("#btnNuevo"),
    btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener");

  const smalls = document.querySelectorAll("small");

  const divJugadorCartas = document.querySelector("#jugador-cartas"),
    divCompuCartas = document.querySelector("#computadora-cartas");

  const inicializarJuego = (cantidadJugadores = 1) => {
    deck = crearDeck();
    console.log(deck);
    puntosJugadores = [];
    ptsAcum = 0;
    for (let i = 0; i <= cantidadJugadores; i++)
      puntosJugadores.push[0];

    smalls[0].innerText = 0;
    smalls[1].innerText = 0;

    divCompuCartas.innerHTML = "";
    divJugadorCartas.innerText = "";

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  }
  
  // ----------------------------------------- crear y mezclar mazo de cartas
  const crearDeck = () => {
    // ---------------- criterio propio 3 for
    deck = [];
    for (let tipo of tipos) {
      for (let i = 2; i <= 10; i++) {
        deck.push(i + tipo)
      }
      for (let especial of especiales) {
        deck.push(especial + tipo)
      }
    }
    deck = _.shuffle(deck);
    return deck;
  };
  
  inicializarJuego();
  // ---------------------------------------- para tomar una carta
  const pedirCarta = () => {
    if (deck.length > 0) {
      return deck.pop();
    } else {
      throw "El mazo esta vacio";
    }
  }

  // ---------------------------- darle un valor a la carta
  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return ((isNaN(valor)) ?
      (valor === "A") ? 11 : 10
      : valor * 1);

  }

  const sumaPuntos = (puntaje = 0) => {
    ptsAcum = ptsAcum + puntaje;
    return ptsAcum
  }

  const verificacion = (ptsAcum) => {
    if (ptsAcum > 21) {
      ((btnPedir.disabled = true),
        btnDetener.disabled = true,
        turnoCompu(0)
      )
    }
  }

  const acumPuntos = (nroJugador, carta) => {
    puntosJugadores[nroJugador] = puntosJugadores[nroJugador] + valorCarta(carta);
    setTimeout(() => {
      smalls[nroJugador].innerText = puntosJugadores[nroJugador];
    }, 100)
  };

  // ----------- TURNO COMPU --------------------
  const turnoCompu = (pjeMinimo) => {
    btnDetener.disabled = true;
    btnPedir.disabled = true;
    ptsAcum = 0;
    do {
      const carta = pedirCarta();
      const puntajeCarta = valorCarta(carta);
      const ptsAcum = sumaPuntos(puntajeCarta);

      const imgCarta = document.createElement("img");

      imgCarta.classList.add("carta");
      imgCarta.src = `./assets/imagenes/cartas/${carta}.png`;
      divCompuCartas.append(imgCarta);

      setTimeout(() => {
        smalls[1].innerText = ptsAcum;
      }, 100);

    } while (ptsAcum < pjeMinimo && ptsAcum <= 21);

    setTimeout(() => {
      ptsAcum === pjeMinimo ? alert("Nadie gana!")
        : (ptsAcum <= 21 ? (alert("Gana COMPU"),
          manosGanadas[0]++)
          : alert("Felicitaciones! Ganaste"),
          manosGanadas[1]++);
    }, 200)
  }



  // ----------- eventos ---------------------------
  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();
    const puntajeCarta = valorCarta(carta);
    const ptsAcum = sumaPuntos(puntajeCarta);
    const imgCarta = document.createElement("img");
    imgCarta.src = `./assets/imagenes/cartas/${carta}.png`;
    divJugadorCartas.append(imgCarta);
    imgCarta.classList.add("carta");
    setTimeout(() => {
      smalls[0].innerText = ptsAcum;
    }, 200);
    verificacion(ptsAcum);
  })

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
  })

  btnDetener.addEventListener("click", () => {
    turnoCompu(ptsAcum);
  })


})()



