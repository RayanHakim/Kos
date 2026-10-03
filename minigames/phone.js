function openPhone() {

    const panel = document.getElementById("interaction-panel");
    const title = document.getElementById("panel-title");

    panel.classList.remove("hidden");

    title.textContent = "Phone";

    showPhoneHome();
}


/* =========================
   PHONE HOME
========================= */

function showPhoneHome() {

    const content = document.getElementById("panel-content");

    content.innerHTML = `

        <div class="phone-ui">

            <div class="phone-status">
                <span id="phone-time">08:00</span>
                <span>🔋 87%</span>
            </div>

            <div class="phone-screen">

                <h3>My Phone</h3>

                <div class="phone-apps">

                    <button onclick="showMessages()">
                        💬
                        <span>Messages</span>
                    </button>

                    <button onclick="showNotes()">
                        📝
                        <span>Notes</span>
                    </button>

                    <button onclick="showCalendar()">
                        📅
                        <span>Calendar</span>
                    </button>

                    <button onclick="showMusic()">
                        🎵
                        <span>Music</span>
                    </button>

                </div>

            </div>

        </div>
    `;
}


/* =========================
   MESSAGES
========================= */

function showMessages() {

    const content = document.getElementById("panel-content");

    content.innerHTML = `

        <div class="phone-page">

            <button onclick="showPhoneHome()">
                ← Back
            </button>

            <h3>💬 Messages</h3>

            <div class="message">

                <strong>Mentor</strong>

                <p>
                    Jangan lupa lanjutkan project hari ini.
                </p>

                <small>
                    08:32
                </small>

            </div>

            <div class="message">

                <strong>Teman</strong>

                <p>
                    Lagi di kos?
                </p>

                <small>
                    10:15
                </small>

            </div>

        </div>
    `;
}


/* =========================
   NOTES
========================= */

function showNotes() {

    const content = document.getElementById("panel-content");

    content.innerHTML = `

        <div class="phone-page">

            <button onclick="showPhoneHome()">
                ← Back
            </button>

            <h3>📝 Notes</h3>

            <textarea
                id="phone-note"
                placeholder="Tulis sesuatu..."
            ></textarea>

            <button onclick="savePhoneNote()">
                Save
            </button>

        </div>
    `;

    const savedNote = localStorage.getItem("KOS_NOTE");

    if (savedNote) {
        document.getElementById("phone-note").value = savedNote;
    }
}


function savePhoneNote() {

    const note = document.getElementById("phone-note").value;

    localStorage.setItem(
        "KOS_NOTE",
        note
    );

    alert("Catatan disimpan.");

}


/* =========================
   CALENDAR
========================= */

function showCalendar() {

    const content = document.getElementById("panel-content");

    content.innerHTML = `

        <div class="phone-page">

            <button onclick="showPhoneHome()">
                ← Back
            </button>

            <h3>📅 Calendar</h3>

            <div class="calendar">

                <div>
                    Monday
                </div>

                <div>
                    Tuesday
                </div>

                <div>
                    Wednesday
                </div>

                <div>
                    Thursday
                </div>

                <div>
                    Friday
                </div>

                <div>
                    Saturday
                </div>

                <div>
                    Sunday
                </div>

            </div>

            <p>
                Tidak ada agenda.
            </p>

        </div>
    `;
}


/* =========================
   MUSIC
========================= */

function showMusic() {

    const content = document.getElementById("panel-content");

    content.innerHTML = `

        <div class="phone-page">

            <button onclick="showPhoneHome()">
                ← Back
            </button>

            <h3>🎵 Music</h3>

            <div class="music-player">

                <div class="album">
                    🎧
                </div>

                <h4>Late Night</h4>

                <p>
                    Just another night in the kos.
                </p>

                <button onclick="fakeMusicPlay(this)">
                    ▶ Play
                </button>

            </div>

        </div>
    `;
}


function fakeMusicPlay(button) {

    if (button.textContent.includes("Play")) {

        button.textContent = "⏸ Playing...";

    } else {

        button.textContent = "▶ Play";

    }
}