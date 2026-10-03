document.addEventListener("DOMContentLoaded", () => {
    // Buat isi kamar
    createRoom();

    // Pasang interaksi objek
    setupInteractions();

    // Load data game
    loadGame();

    // Update jam
    updateClock();

    console.log("KOS started.");
});