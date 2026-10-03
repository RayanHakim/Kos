const packingItems = [
    {
        id: "shirt",
        name: "Kaos",
        icon: "👕"
    },
    {
        id: "pants",
        name: "Celana",
        icon: "👖"
    },
    {
        id: "charger",
        name: "Charger",
        icon: "🔌"
    },
    {
        id: "toothbrush",
        name: "Sikat Gigi",
        icon: "🪥"
    },
    {
        id: "headphones",
        name: "Headphone",
        icon: "🎧"
    }
];

let packedItems = [];

function openPackingGame() {
    const panel = document.getElementById("interaction-panel");
    const title = document.getElementById("panel-title");

    panel.classList.remove("hidden");

    title.textContent = "Packing";

    packedItems = [];

    renderPackingGame();
}

function renderPackingGame() {
    const content = document.getElementById("panel-content");

    const remainingItems = packingItems.filter(
        item => !packedItems.includes(item.id)
    );

    content.innerHTML = `
        <div class="mini-game packing-game">

            <h3>Siapkan koper</h3>

            <p>
                Masukkan barang-barang yang kamu perlukan.
            </p>

            <div class="suitcase-box">

                <div class="suitcase-icon">
                    🧳
                </div>

                <div class="packed-items">

                    ${
                        packedItems.length === 0
                        ? `<span>Koper masih kosong...</span>`
                        : packedItems.map(id => {

                            const item = packingItems.find(
                                item => item.id === id
                            );

                            return `
                                <span class="packed-item">
                                    ${item.icon} ${item.name}
                                </span>
                            `;
                        }).join("")
                    }

                </div>

            </div>

            <h4>Barang</h4>

            <div class="packing-items">

                ${
                    remainingItems.length === 0
                    ? `
                        <p>
                            Semua barang sudah masuk koper.
                        </p>
                    `
                    :
                    remainingItems.map(item => `
                        <button
                            class="packing-item"
                            onclick="packItem('${item.id}')"
                        >
                            ${item.icon}
                            ${item.name}
                        </button>
                    `).join("")
                }

            </div>

            ${
                remainingItems.length === 0
                ? `
                    <button
                        onclick="finishPacking()"
                    >
                        Tutup Koper
                    </button>
                `
                : ""
            }

        </div>
    `;
}

function packItem(itemId) {

    if (packedItems.includes(itemId)) {
        return;
    }

    packedItems.push(itemId);

    renderPackingGame();
}

function finishPacking() {

    if (packedItems.length < packingItems.length) {
        return;
    }

    advanceTime(10);

    saveGame();

    closePanel();
}