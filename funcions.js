let puntsA = 0;
let puntsB = 0;
let faltesA = 0;
let faltesB = 0;
let periode = 1;
let historial = [];

function inicialitzar(){
    document.getElementById("points-a").innerHTML= 0;
    document.getElementById("points-b").innerHTML= 0;
    document.getElementById("fouls-a").innerHTML= 0;
    document.getElementById("fouls-b").innerHTML= 0;
    document.getElementById("period").innerHTML= 1;
    document.getElementById("historic").innerHTML = "<h2>Historial de la Partida</h2>";
    historial = [];
    const historialDiv = document.querySelector('.history');
    historialDiv.innerHTML = "<h2>Historial de la Partida<h2/>";


}
function sumaA(punts){
    puntsA+=punts;
    document.getElementById("points-a").innerHTML = puntsA
    historialactualitzat();
    //suma punts al equipA//
}
function sumaB(n2){
    puntsB+=n2;
    document.getElementById("points-b").innerHTML = puntsB
    historialactualitzat();
    //suma punts al equipB//
}
function sumaFA(n3){
    faltesA+=n3;
    document.getElementById("fouls-a").innerHTML = faltesA
    //suma faltes al equipA//
}
function sumaFB(n4) {
    faltesB+=n4;
    document.getElementById("fouls-b").innerHTML = faltesB
    //suma faltes al equipB//
}
function period1() {
    if (periode < 4) {
        periode += 1;
        // Suma 1 al periode
    }
    else if (puntsA < puntsB) {
        periode = "Fin";
        //Indicar fin de la partida
    }
    else if (periode == 4 && puntsA == puntsB) {
        periode = "PE";
        // Cambia a període extra
    } else {
        periode = 1;
        // Reinicia al primer període
    }



    document.getElementById("period").innerHTML = periode;
    document.getElementById("fouls-a").innerHTML = 0;
    document.getElementById("fouls-b").innerHTML = 0;
    // Reinicia els punts i les faltes

}
function historialactualitzat() {
    //Nou registre
    let nouregistre = puntsA + " - " + puntsB;
    //Per seleccionar l'historial
    let historialDiv = document.querySelector(".history");
    //Posar el nou registre i en ordre
    historialDiv.innerHTML = "<p>" + nouregistre + "</p>" + historialDiv.innerHTML;

}


// Variables del contador
let timerInterval;  // Para almacenar el setInterval
let remainingTime = 600;  // 10 minutos en segundos (600 segundos)
let isCountingDown = false;  // Estado del contador
let isPaused = false;  // Flag para saber si está pausado

// Función para iniciar el contador
function startCountdown() {
    if (!isCountingDown && !isPaused) {
        isCountingDown = true;
        timerInterval = setInterval(updateCountdown, 1000);  // Llama a updateCountdown cada segundo
    }
}

// Función para actualizar el contador
function updateCountdown() {
    // Si el tiempo llega a 0, detener el contador
    if (remainingTime <= 0) {
        clearInterval(timerInterval);
        alert("¡El tiempo se ha agotado!");
        isCountingDown = false;
    } else {
        // Restar 1 segundo del tiempo restante
        remainingTime--;

        // Mostrar el tiempo restante en formato mm:ss
        let minutes = Math.floor(remainingTime / 60);
        let seconds = remainingTime % 60;
        document.getElementById('timer').textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
    }
}

// Función para formatear el tiempo con 2 dígitos
function formatTime(time) {
    return time < 10 ? `0${time}` : time;  // Si el tiempo es menor que 10, agregar el cero
}

// Función para reiniciar el contador
function resetCountdown() {
    remainingTime = 600;  // Reiniciar a 10 minutos (600 segundos)
    clearInterval(timerInterval);  // Detener el contador si está en marcha
    isCountingDown = false;
    isPaused = false;
    document.getElementById('timer').textContent = '10:00';  // Restablecer el tiempo en pantalla
}

// Función para pausar el contador
function pauseCountdown() {
    if (isCountingDown) {
        clearInterval(timerInterval);  // Detener el contador
        isCountingDown = false;
        isPaused = true;
    }
}

// Función para reanudar el contador
function resumeCountdown() {
    if (!isCountingDown && isPaused) {
        isCountingDown = true;
        isPaused = false;
        timerInterval = setInterval(updateCountdown, 1000);  // Reanudar el contador
    }
}// Variables del contador
let timerInterval;  // Para almacenar el setInterval
let remainingTime = 600;  // 10 minutos en segundos (600 segundos)
let isCountingDown = false;  // Estado del contador
let isPaused = false;  // Flag para saber si está pausado

// Función para iniciar el contador
function startCountdown() {
    if (!isCountingDown && !isPaused) {
        isCountingDown = true;
        timerInterval = setInterval(updateCountdown, 1000);  // Llama a updateCountdown cada segundo
    }
}

// Función para actualizar el contador
function updateCountdown() {
    // Si el tiempo llega a 0, detener el contador
    if (remainingTime <= 0) {
        clearInterval(timerInterval);
        alert("¡El tiempo se ha agotado!");
        isCountingDown = false;
    } else {
        // Restar 1 segundo del tiempo restante
        remainingTime--;

        // Mostrar el tiempo restante en formato mm:ss
        let minutes = Math.floor(remainingTime / 60);
        let seconds = remainingTime % 60;
        document.getElementById('timer').textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
    }
}

// Función para formatear el tiempo con 2 dígitos
function formatTime(time) {
    return time < 10 ? `0${time}` : time;  // Si el tiempo es menor que 10, agregar el cero
}

// Función para reiniciar el contador
function resetCountdown() {
    remainingTime = 600;  // Reiniciar a 10 minutos (600 segundos)
    clearInterval(timerInterval);  // Detener el contador si está en marcha
    isCountingDown = false;
    isPaused = false;
    document.getElementById('timer').textContent = '10:00';  // Restablecer el tiempo en pantalla
}

// Función para pausar el contador
function pauseCountdown() {
    if (isCountingDown) {
        clearInterval(timerInterval);  // Detener el contador
        isCountingDown = false;
        isPaused = true;
    }
}

// Función para reanudar el contador
function resumeCountdown() {
    if (!isCountingDown && isPaused) {
        isCountingDown = true;
        isPaused = false;
        timerInterval = setInterval(updateCountdown, 1000);  // Reanudar el contador
    }
}