let cleaningItems = [
    "Baju",
    "Botol",
    "Kertas",
    "Kardus",
    "Plastik"
];

function openCleaningGame() {
    const panel = document.getElementById("interaction-panel");
    const title = document.getElementById("panel-title");
    const content = document.getElementById("panel-content");

    panel.classList.remove("hidden");

    title.textContent = "Cleaning";

    renderCleaningGame();
}

function renderCleaningGame() {
    const content = document.getElementById("panel-content");

    if (cleaningItems.length === 0) {
        content.innerHTML = `
            <div class="mini-game success">
                <h3>✨ Kamar sudah bersih!</h3>

                <p>
                    Lumayan. Sekarang kamarmu tidak terlihat
                    seperti habis kena badai.
                </p>

                <button onclick="finishCleaning()">
                    Selesai
                </button>
            </div>
        `;

        return;
    }

    content.innerHTML = `
        <div class="mini-game cleaning-game">

            <h3>Bersihkan kamar</h3>

            <p>
                Klik barang yang ingin kamu rapikan.
            </p>

            <div class="cleaning-progress">
                ${cleaningItems.length} barang tersisa
            </div>

            <div class="mess-list">

                ${cleaningItems.map((item, index) => `
                    <button
                        class="mess-item"
                        onclick="cleanItem(${index})"
                    >
                        🗑️ ${item}
                    </button>
                `).join("")}

            </div>

        </div>
    `;
}

function cleanItem(index) {
    cleaningItems.splice(index, 1);

    renderCleaningGame();
}

function finishCleaning() {
    gameState.room.clean = true;

    advanceTime(15);
    saveGame();

    closePanel();
}