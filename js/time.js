let gameMinutes = 8 * 60;


function advanceTime(minutes) {

    gameMinutes += minutes;

    if (gameMinutes >= 24 * 60) {
        gameMinutes -= 24 * 60;
    }

    updateClock();
}


function updateClock() {

    const hours =
        Math.floor(gameMinutes / 60);

    const minutes =
        gameMinutes % 60;

    const formatted =
        String(hours).padStart(2, "0")
        + ":"
        + String(minutes).padStart(2, "0");

    document.getElementById("time")
        .textContent = formatted;
}


updateClock();