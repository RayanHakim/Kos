const gameState = {

    minutes: 8 * 60,

    achievements: [],

    room: {
        clean: true
    }

};


function saveGame() {

    localStorage.setItem(
        "KOS_SAVE",
        JSON.stringify(gameState)
    );

}


function loadGame() {

    const saved =
        localStorage.getItem("KOS_SAVE");

    if (!saved) return;

    Object.assign(
        gameState,
        JSON.parse(saved)
    );

}