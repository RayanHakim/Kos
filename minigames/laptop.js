// Data untuk Mini-Game Coding (Bug Rush)
const codePuzzles = [
    {
        question: "let x = 10;\nlet y = __;\nconsole.log(x * y); // Output: 50",
        options: ["5", "40", "500"],
        answer: 0 // Index dari options (5)
    },
    {
        question: "const isTired = true;\nif (___) {\n  sleep();\n}",
        options: ["!isTired", "isTired == false", "isTired"],
        answer: 2
    },
    {
        question: "let arr = [1, 2, 3];\nconsole.log(arr[___]); // Output: 3",
        options: ["3", "2", "1"],
        answer: 1
    },
    {
        question: "for(let i=0; i<3; i++) {\n // Berapa kali loop ini jalan?\n}",
        options: ["2 kali", "3 kali", "Infinite"],
        answer: 1
    }
];

// Data untuk Video MeTube
const videoList = [
    { title: "Tutorial React.js dalam 100 Jam (No Ads)", duration: 120, img: "⚛️" },
    { title: "Kompilasi Kucing Jatuh dari Meja", duration: 30, img: "🐈" },
    { title: "Lofi Hip Hop Radio - Beats to Overthink to", duration: 60, img: "🎧" },
    { title: "Kenapa Kamu Harus Resign Hari Ini Juga", duration: 45, img: "🔥" }
];

// State Laptop
let currentApp = "desktop";
let currentPuzzleIndex = 0;
let codeLives = 3;

function openLaptop() {
    const title = document.getElementById("modal-title") || document.getElementById("panel-title");
    const panel = document.getElementById("game-modal") || document.getElementById("interaction-panel");

    if (panel.classList.contains("hidden")) {
        panel.classList.remove("hidden");
    }

    title.innerHTML = "💻 KosOS v1.0";
    renderDesktop();
}

function renderDesktop() {
    const content = document.getElementById("modal-body") || document.getElementById("panel-content");
    
    // UI ala-ala Desktop OS minimalis
    content.innerHTML = `
        <div class="h-80 bg-gradient-to-br from-indigo-900 to-slate-900 rounded-lg relative overflow-hidden border-2 border-slate-700 shadow-inner">
            
            <!-- Wallpaper & Icons -->
            <div class="p-6 grid grid-cols-4 gap-4">
                <!-- App: VS Code -->
                <button onclick="openApp('bugrush')" class="flex flex-col items-center space-y-2 group cursor-pointer">
                    <div class="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-2xl border border-slate-600 group-hover:bg-slate-700 transition shadow-lg">
                        👨‍💻
                    </div>
                    <span class="text-[10px] text-slate-300 font-semibold drop-shadow-md">Bug Rush</span>
                </button>

                <!-- App: MeTube -->
                <button onclick="openApp('metube')" class="flex flex-col items-center space-y-2 group cursor-pointer">
                    <div class="w-12 h-12 bg-red-900/80 rounded-xl flex items-center justify-center text-2xl border border-red-700 group-hover:bg-red-800 transition shadow-lg">
                        ▶️
                    </div>
                    <span class="text-[10px] text-slate-300 font-semibold drop-shadow-md">MeTube</span>
                </button>
            </div>

            <!-- Taskbar Bawah -->
            <div class="absolute bottom-0 w-full h-8 bg-slate-950/80 backdrop-blur-md flex items-center justify-between px-3 border-t border-slate-700">
                <div class="flex space-x-2">
                    <div class="w-4 h-4 rounded-full bg-slate-700"></div>
                </div>
                <div class="text-[9px] text-slate-400 font-mono">
                    ${String(gameState.hour).padStart(2, '0')}:${String(gameState.minute).padStart(2, '0')}
                </div>
            </div>
        </div>
        <button onclick="closeModal()" class="w-full mt-4 bg-red-900/40 hover:bg-red-900/60 text-red-400 py-2 rounded-xl text-xs font-bold border border-red-800/50 transition cursor-pointer">
            Shut Down (Tutup Laptop)
        </button>
    `;
}

function openApp(appName) {
    if (appName === 'bugrush') {
        codeLives = 3;
        startBugRush(true);
    } else if (appName === 'metube') {
        renderMeTube();
    }
}

// ==========================================
// APP 1: BUG RUSH (Coding Mini-Game)
// ==========================================
function startBugRush(isNew = false) {
    const content = document.getElementById("modal-body") || document.getElementById("panel-content");
    
    if (isNew) {
        // Acak puzzle
        currentPuzzleIndex = Math.floor(Math.random() * codePuzzles.length);
    }

    const puzzle = codePuzzles[currentPuzzleIndex];

    content.innerHTML = `
        <div class="h-80 bg-[#1e1e1e] rounded-lg relative overflow-hidden border-2 border-slate-700 flex flex-col font-mono">
            <!-- Header Editor -->
            <div class="bg-[#2d2d2d] flex justify-between items-center px-3 py-2 border-b border-[#3d3d3d]">
                <div class="flex space-x-1.5">
                    <button onclick="renderDesktop()" class="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer"></button>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div class="text-[10px] text-slate-400">script.js - Bug Rush</div>
                <div class="text-[10px] text-red-400">❤️ x${codeLives}</div>
            </div>

            <!-- Editor Body -->
            <div class="p-4 flex-1 text-sm text-emerald-400 whitespace-pre-wrap">${puzzle.question}</div>

            <!-- Options -->
            <div class="p-3 bg-[#252526] grid grid-cols-3 gap-2">
                ${puzzle.options.map((opt, idx) => `
                    <button onclick="checkCodeAnswer(${idx})" class="bg-[#3c3c3c] hover:bg-indigo-600 text-slate-200 py-2 rounded border border-[#555] text-xs transition cursor-pointer">
                        ${opt}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function checkCodeAnswer(selectedIndex) {
    const puzzle = codePuzzles[currentPuzzleIndex];
    
    if (selectedIndex === puzzle.answer) {
        alert("💻 BUILD SUCCESS! Kode berhasil jalan.");
        advanceTime(30); // Ngoding 30 menit
        saveGame();
        renderDesktop();
    } else {
        codeLives--;
        if (codeLives <= 0) {
            alert("💥 SYNTAX ERROR! Layar biru (BSOD). Kamu stress dan harus istirahat.");
            advanceTime(60); // Stress buang waktu 1 jam
            saveGame();
            renderDesktop();
        } else {
            alert(`❌ ERROR di baris 2! Sisa nyawa: ${codeLives}`);
            startBugRush(false); // Render ulang tanpa ganti soal
        }
    }
}

// ==========================================
// APP 2: MeTube (Video Player)
// ==========================================
function renderMeTube() {
    const content = document.getElementById("modal-body") || document.getElementById("panel-content");
    
    content.innerHTML = `
        <div class="h-80 bg-slate-900 rounded-lg relative overflow-y-auto border-2 border-slate-700 flex flex-col">
            <!-- Header MeTube -->
            <div class="bg-red-700 text-white flex justify-between items-center px-3 py-2 sticky top-0 z-10">
                <div class="font-bold text-sm tracking-tighter">▶️ MeTube</div>
                <button onclick="renderDesktop()" class="text-xs hover:text-slate-300 cursor-pointer">✕ Close</button>
            </div>

            <!-- Video Grid -->
            <div class="p-3 space-y-3">
                ${videoList.map((vid, idx) => `
                    <div onclick="watchVideo('${vid.title}',${vid.duration})" class="flex space-x-3 bg-slate-800 p-2 rounded-xl cursor-pointer hover:bg-slate-700 transition group">
                        <div class="w-20 h-14 bg-slate-950 rounded-lg flex items-center justify-center text-2xl group-hover:scale-105 transition">
                            ${vid.img}
                        </div>
                        <div class="flex-1 flex flex-col justify-center">
                            <div class="text-xs font-bold text-slate-200 line-clamp-2">${vid.title}</div>
                            <div class="text-[10px] text-slate-400 mt-1">${vid.duration} Menit</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function watchVideo(title, durationMinutes) {
    alert(`👀 Kamu menonton: "${title}"\n(Waktu berlalu ${durationMinutes} menit)`);
    advanceTime(durationMinutes);
    saveGame();
    renderDesktop(); // Balik ke desktop setelah nonton
}