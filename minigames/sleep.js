// Data Koleksi Mimpi (Gacha saat tidur)
const dreamLogs = [
    "Kamu bermimpi dikejar deadline tugas yang belum dikerjakan.",
    "Kamu bermimpi bisa terbang, tapi cuma 10 cm dari lantai.",
    "Kamu bermimpi makan seblak terenak di dunia, pas bangun malah ngiler.",
    "Kamu bermimpi codinganmu jalan tanpa error dan tanpa perlu debugging. Mustahil!",
    "Mimpi kosong. Gelap. Kamu tertidur sangat pulas.",
    "Kamu bermimpi ketemu gebetan, tapi sayangnya dia jadian sama temanmu.",
    "Kamu bermimpi menjadi kaya raya, lalu alarm HP membangunkanmu ke realita."
];

function openBed() {
    const title = document.getElementById("modal-title") || document.getElementById("panel-title");
    const panel = document.getElementById("game-modal") || document.getElementById("interaction-panel");

    if (panel.classList.contains("hidden")) {
        panel.classList.remove("hidden");
    }

    title.innerHTML = "🛏️ Kasur (Sleep Area)";
    renderBedMenu();
}

function renderBedMenu() {
    const content = document.getElementById("modal-body") || document.getElementById("panel-content");
    
    // Cek jam sekarang untuk menentukan teks suasana
    let timeContext = "";
    if (gameState.hour >= 22 || gameState.hour < 4) {
        timeContext = "Sudah larut malam. Kasur empuk ini memanggil namamu.";
    } else if (gameState.hour >= 12 && gameState.hour <= 15) {
        timeContext = "Siang yang lumayan terik. Cocok banget buat siesta (tidur siang).";
    } else {
        timeContext = "Sebenarnya belum waktunya tidur, tapi rebahan bentar boleh lah.";
    }

    content.innerHTML = `
        <div class="space-y-4">
            <!-- Info Status Kamar & Jam -->
            <div class="bg-indigo-950/60 p-4 rounded-xl border border-indigo-900 text-center relative overflow-hidden">
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(99,102,241,0.15),transparent_70%)]"></div>
                <div class="text-4xl mb-2 animate-float">🥱</div>
                <p class="text-sm text-indigo-200 relative z-10">${timeContext}</p>
                <p class="text-xs text-indigo-400 mt-2 relative z-10">
                    Jam saat ini: <b class="text-amber-300 tracking-wider">${String(gameState.hour).padStart(2,'0')}:${String(gameState.minute).padStart(2,'0')}</b>
                </p>
            </div>

            <!-- Pilihan Durasi Tidur -->
            <div class="grid grid-cols-1 gap-3">
                <button onclick="executeSleep('nap')" class="flex justify-between items-center bg-slate-800 hover:bg-slate-700 p-3 rounded-xl border border-slate-700 transition cursor-pointer group">
                    <div class="text-left">
                        <div class="font-bold text-slate-200 group-hover:text-amber-300 transition">Power Nap</div>
                        <div class="text-[10px] text-slate-400">Tidur ayam (+1 Jam)</div>
                    </div>
                    <span class="text-2xl group-hover:scale-110 transition">🔋</span>
                </button>

                <button onclick="executeSleep('normal')" class="flex justify-between items-center bg-slate-800 hover:bg-slate-700 p-3 rounded-xl border border-slate-700 transition cursor-pointer group">
                    <div class="text-left">
                        <div class="font-bold text-slate-200 group-hover:text-amber-300 transition">Tidur Normal</div>
                        <div class="text-[10px] text-slate-400">Istirahat cukup (+8 Jam)</div>
                    </div>
                    <span class="text-2xl group-hover:scale-110 transition">🛌</span>
                </button>

                <button onclick="executeSleep('morning')" class="flex justify-between items-center bg-indigo-900/60 hover:bg-indigo-800 p-3 rounded-xl border border-indigo-700 transition cursor-pointer group">
                    <div class="text-left">
                        <div class="font-bold text-indigo-300 group-hover:text-amber-300 transition">Tidur Sampai Pagi</div>
                        <div class="text-[10px] text-indigo-400/80">Otomatis bangun tepat pukul 06:00</div>
                    </div>
                    <span class="text-2xl group-hover:scale-110 transition">🌅</span>
                </button>
            </div>
        </div>
    `;
}

function executeSleep(type) {
    let sleepMinutes = 0;
    let wakeUpMsg = "";

    // Kalkulasi Waktu Tidur
    if (type === 'nap') {
        sleepMinutes = 60;
        wakeUpMsg = "Lumayan seger, tapi rasanya masih pengen narik selimut lagi.";
    } else if (type === 'normal') {
        sleepMinutes = 8 * 60;
        wakeUpMsg = "Tidur yang nyenyak. Badan terasa pegal-pegal sedikit, tapi energi pulih.";
    } else if (type === 'morning') {
        // Logika Pintar: Hitung selisih waktu ke jam 06:00 pagi (6 * 60 = 360 menit)
        let currentTotalMinutes = (gameState.hour * 60) + gameState.minute;
        let targetMinutes = 6 * 60; 

        if (currentTotalMinutes < targetMinutes) {
            // Kondisi: Lewat tengah malam (contoh jam 02:00), belum jam 6 pagi
            sleepMinutes = targetMinutes - currentTotalMinutes;
        } else {
            // Kondisi: Masih sore/malam, tidurnya nembus ke besok jam 6 pagi
            sleepMinutes = (24 * 60 - currentTotalMinutes) + targetMinutes;
        }
        wakeUpMsg = "Cahaya pagi masuk melalui celah jendela. Pagi yang cerah!";
    }

    // Gacha Mimpi
    const randomDream = dreamLogs[Math.floor(Math.random() * dreamLogs.length)];

    // UI State 1: "Sedang Tidur" (Layar Gelap)
    const content = document.getElementById("modal-body") || document.getElementById("panel-content");
    content.innerHTML = `
        <div class="h-64 flex flex-col items-center justify-center space-y-4 bg-black rounded-2xl border border-slate-900 transition-opacity duration-1000">
            <div class="text-5xl animate-bounce">💤</div>
            <div class="text-xs text-slate-500 text-center px-8 italic">
                Mimpi malam ini:<br>
                <span class="text-slate-300">"${randomDream}"</span>
            </div>
            <!-- Loading Bar -->
            <div class="w-32 h-1 bg-slate-800 rounded-full mt-4 overflow-hidden">
                <div class="bg-indigo-500 h-full animate-[pulse_2s_ease-in-out_infinite]" style="width: 100%"></div>
            </div>
        </div>
    `;

    // UI State 2: "Bangun Tidur" (Set Timeout untuk simulasi waktu berlalu)
    setTimeout(() => {
        // Majukan jam utama
        advanceTime(sleepMinutes);
        saveGame();

        // Tampilkan hasil bangun tidur
        content.innerHTML = `
            <div class="h-64 flex flex-col items-center justify-center space-y-4 bg-indigo-950/80 rounded-2xl border border-indigo-900 text-center px-6 animate-[fadeIn_1s_ease-out]">
                <div class="text-5xl">🌞</div>
                <div>
                    <h3 class="font-bold text-xl text-amber-300 tracking-wide">Selamat Pagi!</h3>
                    <p class="text-xs text-indigo-300 mt-1">${wakeUpMsg}</p>
                </div>
                
                <div class="bg-slate-900/80 px-4 py-2 rounded-lg border border-slate-700">
                    <p class="text-[10px] text-slate-400">Jam menunjukkan pukul:</p>
                    <p class="text-lg font-mono font-bold text-white">${String(gameState.hour).padStart(2,'0')}:${String(gameState.minute).padStart(2,'0')}</p>
                </div>
                
                <button onclick="closeModal()" class="mt-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition cursor-pointer shadow-lg shadow-indigo-900/50">
                    Bangun & Mulai Hari
                </button>
            </div>
        `;
    }, 2500); // Delay 2.5 detik agar pemain sempat baca mimpinya
}

// Helper untuk menutup modal jika belum terdeklarasi di file lain
function closeModal() {
    const panel = document.getElementById("game-modal") || document.getElementById("interaction-panel");
    if (panel) panel.classList.add("hidden");
}