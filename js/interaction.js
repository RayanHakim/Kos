const panel = document.getElementById("interaction-panel");
const panelTitle = document.getElementById("panel-title");
const panelContent = document.getElementById("panel-content");
const closeButton = document.getElementById("close-panel");


// =====================================================
// SETUP
// =====================================================

function setupInteractions() {

    // Event delegation
    // Apa pun object yang diklik di dalam SVG akan terbaca
    room.addEventListener("click", function (event) {

        const object = event.target.closest(".interactive");

        if (!object) return;

        const objectName = object.dataset.object;

        console.log("Clicked:", objectName);

        openObject(objectName);
    });


    // Close panel
    if (closeButton) {
        closeButton.addEventListener("click", closePanel);
    }
}


// =====================================================
// OPEN OBJECT
// =====================================================

function openObject(objectName) {

    switch (objectName) {

        case "bed":
            openBed();
            break;

        case "laptop":
            openLaptop();
            break;

        case "phone":
            openPhone();
            break;

        case "suitcase":
            openPackingGame();
            break;

        case "trash":
            openCleaningGame();
            break;

        case "wardrobe":
            openWardrobe();
            break;

        case "window":
            openWindow();
            break;

        case "desk":
            openDesk();
            break;

        case "chair":
            openChair();
            break;

        case "plant":
            openPlant();
            break;

        case "backpack":
            openBackpack();
            break;

        case "shoes":
            openShoes();
            break;

        case "bedside":
            openBedside();
            break;

        case "shelf":
            openShelf();
            break;

        default:
            console.log("Object belum dibuat:", objectName);
    }
}


// =====================================================
// PANEL
// =====================================================

function openPanel(title, html) {

    if (!panel) {
        console.error("Interaction panel tidak ditemukan.");
        return;
    }

    panel.classList.remove("hidden");

    panelTitle.textContent = title;

    panelContent.innerHTML = html;
}


function closePanel() {

    if (!panel) return;

    panel.classList.add("hidden");
}


// =====================================================
// BED
// =====================================================

function openBed() {

    openPanel(
        "Bed",
        `
        <div class="object-page">

            <div class="object-icon">
                🛏️
            </div>

            <h3>Tempat Tidur</h3>

            <p>
                Kasurmu terlihat cukup nyaman.
            </p>

            <div class="action-group">

                <button onclick="sleepAction(30)">
                    Tidur 30 menit
                </button>

                <button onclick="sleepAction(120)">
                    Tidur 2 jam
                </button>

                <button onclick="sleepAction(480)">
                    Tidur 8 jam
                </button>

            </div>

        </div>
        `
    );
}


function sleepAction(minutes) {

    advanceTime(minutes);

    saveGame();

    openPanel(
        "Bed",
        `
        <div class="result-message">

            <div class="result-icon">
                😴
            </div>

            <h3>Kamu tidur.</h3>

            <p>
                Waktu berlalu ${formatMinutes(minutes)}.
            </p>

            <button onclick="closePanel()">
                Bangun
            </button>

        </div>
        `
    );
}


// =====================================================
// LAPTOP
// =====================================================

function openLaptop() {

    openPanel(
        "Laptop",
        `
        <div class="object-page">

            <div class="object-icon">
                💻
            </div>

            <h3>Laptop</h3>

            <p>
                Laptop masih menyala.
            </p>

            <div class="fake-terminal">

                <div>user@kos:~$</div>
                <div>> continue_project</div>
                <div>> power_apps_project</div>
                <div>> github_project</div>

            </div>

            <button onclick="codingAction()">
                💻 Mulai Coding
            </button>

        </div>
        `
    );
}


function codingAction() {

    advanceTime(60);

    saveGame();

    openPanel(
        "Laptop",
        `
        <div class="result-message">

            <div class="result-icon">
                ✅
            </div>

            <h3>Project selesai untuk hari ini.</h3>

            <p>
                Kamu coding selama 1 jam.
            </p>

            <button onclick="closePanel()">
                Selesai
            </button>

        </div>
        `
    );
}


// =====================================================
// WARDROBE
// =====================================================

function openWardrobe() {

    openPanel(
        "Wardrobe",
        `
        <div class="object-page">

            <div class="object-icon">
                👕
            </div>

            <h3>Lemari</h3>

            <p>
                Pilih pakaian yang ingin dipakai.
            </p>

            <div class="choice-grid">

                <button onclick="chooseOutfit('Casual')">
                    👕
                    <span>Casual</span>
                </button>

                <button onclick="chooseOutfit('Office')">
                    👔
                    <span>Office</span>
                </button>

                <button onclick="chooseOutfit('Sleep')">
                    💤
                    <span>Sleep</span>
                </button>

                <button onclick="chooseOutfit('Black')">
                    🖤
                    <span>Black</span>
                </button>

            </div>

        </div>
        `
    );
}


function chooseOutfit(outfit) {

    localStorage.setItem(
        "KOS_OUTFIT",
        outfit
    );

    saveGame();

    openPanel(
        "Wardrobe",
        `
        <div class="result-message">

            <div class="result-icon">
                👕
            </div>

            <h3>${outfit}</h3>

            <p>
                Outfit sudah dipilih.
            </p>

            <button onclick="closePanel()">
                Selesai
            </button>

        </div>
        `
    );
}


// =====================================================
// WINDOW
// =====================================================

function openWindow() {

    const hours = Math.floor(gameState.minutes / 60);

    let weather = "☀️ Cerah";
    
    if (hours >= 18 || hours < 6) {
        weather = "🌙 Malam";
    }

    openPanel(
        "Window",
        `
        <div class="object-page">

            <div class="object-icon">
                🪟
            </div>

            <h3>Lihat keluar</h3>

            <div class="weather-card">

                <div class="weather-icon">
                    ${weather}
                </div>

                <div>
                    Di luar kamar terlihat tenang.
                </div>

            </div>

            <button onclick="advanceTime(10); saveGame(); closePanel();">
                Berdiri melihat keluar
            </button>

        </div>
        `
    );
}


// =====================================================
// DESK
// =====================================================

function openDesk() {

    openPanel(
        "Desk",
        `
        <div class="object-page">

            <div class="object-icon">
                🗃️
            </div>

            <h3>Meja Kerja</h3>

            <p>
                Tempat kamu menghabiskan sebagian besar waktu.
            </p>

            <button onclick="deskAction()">
                Duduk
            </button>

        </div>
        `
    );
}


function deskAction() {

    advanceTime(15);

    saveGame();

    openPanel(
        "Desk",
        `
        <div class="result-message">

            <div class="result-icon">
                ☕
            </div>

            <h3>Kamu duduk sebentar.</h3>

            <p>
                15 menit berlalu.
            </p>

            <button onclick="closePanel()">
                Lanjut
            </button>

        </div>
        `
    );
}


// =====================================================
// CHAIR
// =====================================================

function openChair() {

    openPanel(
        "Chair",
        `
        <div class="object-page">

            <div class="object-icon">
                🪑
            </div>

            <h3>Kursi</h3>

            <p>
                Kursinya agak keras.
            </p>

            <button onclick="advanceTime(5); saveGame(); closePanel();">
                Duduk 5 menit
            </button>

        </div>
        `
    );
}


// =====================================================
// PLANT
// =====================================================

function openPlant() {

    openPanel(
        "Plant",
        `
        <div class="object-page">

            <div class="object-icon">
                🪴
            </div>

            <h3>Tanaman</h3>

            <p>
                Tanaman ini sepertinya masih hidup.
            </p>

            <button onclick="waterPlant()">
                💧 Siram
            </button>

        </div>
        `
    );
}


function waterPlant() {

    localStorage.setItem(
        "KOS_PLANT_WATERED",
        "true"
    );

    saveGame();

    openPanel(
        "Plant",
        `
        <div class="result-message">

            <div class="result-icon">
                🌱
            </div>

            <h3>Sudah disiram.</h3>

            <p>
                Semoga tidak mati.
            </p>

            <button onclick="closePanel()">
                Selesai
            </button>

        </div>
        `
    );
}


// =====================================================
// BACKPACK
// =====================================================

function openBackpack() {

    openPanel(
        "Backpack",
        `
        <div class="object-page">

            <div class="object-icon">
                🎒
            </div>

            <h3>Backpack</h3>

            <p>
                Isi tasmu masih berantakan.
            </p>

            <div class="inventory">

                <div>💻 Laptop</div>
                <div>🔌 Charger</div>
                <div>📓 Notebook</div>
                <div>🖊️ Pen</div>

            </div>

        </div>
        `
    );
}


// =====================================================
// SHOES
// =====================================================

function openShoes() {

    openPanel(
        "Shoes",
        `
        <div class="object-page">

            <div class="object-icon">
                👟
            </div>

            <h3>Sepatu</h3>

            <p>
                Sepatumu berada di lantai.
            </p>

            <button onclick="advanceTime(2); saveGame(); closePanel();">
                Pakai Sepatu
            </button>

        </div>
        `
    );
}


// =====================================================
// BEDSIDE TABLE
// =====================================================

function openBedside() {

    openPanel(
        "Bedside Table",
        `
        <div class="object-page">

            <div class="object-icon">
                🗄️
            </div>

            <h3>Meja Samping</h3>

            <p>
                Ada beberapa barang kecil di sini.
            </p>

            <div class="inventory">

                <div>💵 Dompet</div>
                <div>🔑 Kunci</div>
                <div>💊 Vitamin</div>

            </div>

        </div>
        `
    );
}


// =====================================================
// SHELF
// =====================================================

function openShelf() {

    openPanel(
        "Shelf",
        `
        <div class="object-page">

            <div class="object-icon">
                📚
            </div>

            <h3>Rak Buku</h3>

            <p>
                Beberapa buku yang belum selesai dibaca.
            </p>

            <button onclick="readBook()">
                📖 Baca Buku
            </button>

        </div>
        `
    );
}


function readBook() {

    advanceTime(30);

    saveGame();

    openPanel(
        "Shelf",
        `
        <div class="result-message">

            <div class="result-icon">
                📖
            </div>

            <h3>Kamu membaca.</h3>

            <p>
                30 menit berlalu.
            </p>

            <button onclick="closePanel()">
                Tutup Buku
            </button>

        </div>
        `
    );
}


// =====================================================
// CLEANING / PACKING / PHONE
// =====================================================

/*
    Fungsi berikut berasal dari:
    
    cleaning.js
    packing.js
    phone.js

    Tidak perlu dibuat ulang di sini.
*/


// =====================================================
// HELPER
// =====================================================

function formatMinutes(minutes) {

    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    let result = "";

    if (hours > 0) {
        result += `${hours} jam `;
    }

    if (mins > 0) {
        result += `${mins} menit`;
    }

    return result.trim();
}