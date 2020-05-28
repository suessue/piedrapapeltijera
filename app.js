let puntajeUsuaria = document.querySelector(".puntaje-usuaria p")
let puntajeComputadora = document.querySelector(".puntaje-computadora p")
let puntosUsuaria = 0;
let puntosComputadora = 0;

let eleccionComputadora = "";
let eleccionUsuaria = "";

let botonPiedra = document.querySelector(".piedra")
let botonTijera = document.querySelector(".tijera")
let botonPapel = document.querySelector(".papel")

let resultadoTexto = document.querySelector(".resultado")

let manoUsuaria = document.querySelector(".mano-usuaria")
let manoComputadora = document.querySelector(".mano-computadora")

let tablero = document.querySelector(".tablero")
let opciones = document.querySelector(".opciones")



botonPiedra.onclick = () => {
    resultadoTexto.textContent = "🤨"
    manoComputadora.src = "./assets/piedra_computadora.png"
    manoUsuaria.src = "./assets/piedra_ada.png"
    tablero.classList.add("jugando");
    setTimeout(() => {
        tablero.classList.remove("jugando")
        manoUsuaria.src = "./assets/piedra_ada.png"
        eleccionUsuaria = "piedra"
        obtenerEleccionComputadora();
        decidirPuntaje();
    }, 2000)
}

botonPapel.onclick = () => {
    resultadoTexto.textContent = "🤨"
    manoComputadora.src = "./assets/piedra_computadora.png"
    manoUsuaria.src = "./assets/piedra_ada.png"
    tablero.classList.add("jugando");
    setTimeout(() => {
        tablero.classList.remove("jugando")
        manoUsuaria.src = "./assets/papel_ada.png"
        eleccionUsuaria = "papel"
        obtenerEleccionComputadora();
        decidirPuntaje();
    }, 2000)
}

botonTijera.onclick = () => {
    resultadoTexto.textContent = "🤨"
    manoComputadora.src = "./assets/piedra_computadora.png"
    manoUsuaria.src = "./assets/piedra_ada.png"
    tablero.classList.add("jugando");
    setTimeout(() => {
        tablero.classList.remove("jugando")
        manoUsuaria.src = "./assets/tijera_ada.png"
        eleccionUsuaria = "tijera"
        obtenerEleccionComputadora();
        decidirPuntaje();
    }, 2000)
}


const obtenerEleccionComputadora = () => {

    let numeroAlAzar = Math.floor(Math.random() * 3);

    if (numeroAlAzar == 0) {
        eleccionComputadora = "piedra";
        manoComputadora.src = "./assets/piedra_computadora.png";
    } else if (numeroAlAzar == 1) {
        eleccionComputadora = "papel"
        manoComputadora.src = "./assets/papel_computadora.png";
    } else {
        eleccionComputadora = "tijera"
        manoComputadora.src = "./assets/tijera_computadora.png";
    }

}

const decidirPuntaje = () => {
    if (eleccionComputadora == "piedra") {
        if (eleccionUsuaria == "piedra") {
            resultadoTexto.textContent = "Empate!🥱"
        } else if (eleccionUsuaria == "papel") {
            resultadoTexto.textContent = "Ganaste 🥳"
            puntosUsuaria++
            puntajeUsuaria.textContent = puntosUsuaria;
        } else {
            puntosComputadora++
            puntajeComputadora.textContent = puntosComputadora;
            resultadoTexto.textContent = "Perdiste 😢"
        }
    } else if (eleccionComputadora == "papel") {
        if (eleccionUsuaria == "papel") {
            resultadoTexto.textContent = "Empate! 🥱"
        } else if (eleccionUsuaria == "tijera") {
            resultadoTexto.textContent = "Ganaste 🥳"
            puntosUsuaria++
            puntajeUsuaria.textContent = puntosUsuaria;
        } else {
            puntosComputadora++
            puntajeComputadora.textContent = puntosComputadora;
            resultadoTexto.textContent = "Perdiste 😢"
        }
    } else if (eleccionComputadora == "tijera") {
        if (eleccionUsuaria == "tijera") {
            resultadoTexto.textContent = "Empate!🥱"
        } else if (eleccionUsuaria == "piedra") {
            resultadoTexto.textContent = "Ganaste 🥳"
            puntosUsuaria++
            puntajeUsuaria.textContent = puntosUsuaria;
        } else {
            puntosComputadora++
            puntajeComputadora.textContent = puntosComputadora;
            resultadoTexto.textContent = "Perdiste 😢"
        }
    }
}