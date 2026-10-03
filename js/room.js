const room = document.getElementById("room");

function createRoom() {
    room.innerHTML = `
        <defs>

            <!-- Shadow -->
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                    dx="0"
                    dy="10"
                    stdDeviation="8"
                    flood-opacity="0.18"
                />
            </filter>

            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                    dx="0"
                    dy="5"
                    stdDeviation="5"
                    flood-opacity="0.13"
                />
            </filter>

            <!-- Window gradient -->
            <linearGradient id="windowSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#8BC7F2"/>
                <stop offset="100%" stop-color="#D8F0FF"/>
            </linearGradient>

            <!-- Wood -->
            <linearGradient id="wood" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#B97845"/>
                <stop offset="100%" stop-color="#87502F"/>
            </linearGradient>

            <!-- Bed -->
            <linearGradient id="mattress" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#FFFDF9"/>
                <stop offset="100%" stop-color="#E6DDD1"/>
            </linearGradient>

            <!-- Carpet -->
            <linearGradient id="carpet" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#D99176"/>
                <stop offset="100%" stop-color="#B76551"/>
            </linearGradient>

            <!-- Plant -->
            <linearGradient id="plantLeaf" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#7FAF7C"/>
                <stop offset="100%" stop-color="#497052"/>
            </linearGradient>

        </defs>

        ${createFloor()}
        ${createWalls()}
        ${createWindow()}
        ${createPoster()}
        ${createWardrobe()}
        ${createShelf()}
        ${createBed()}
        ${createBedsideTable()}
        ${createLamp()}
        ${createRug()}
        ${createDesk()}
        ${createLaptop()}
        ${createChair()}
        ${createPlant()}
        ${createSuitcase()}
        ${createBackpack()}
        ${createPhone()}
        ${createCup()}
        ${createShoes()}
        ${createTrashBin()}
    `;
}


/* =========================================================
   FLOOR
========================================================= */

function createFloor() {
    return `
        <g class="room-part">

            <polygon
                class="floor"
                points="
                    120,475
                    500,290
                    880,475
                    500,690
                "
            />

            <!-- Floor plank lines -->
            <g class="floor-lines">

                <line x1="200" y1="515" x2="500" y2="665"/>
                <line x1="280" y1="475" x2="500" y2="585"/>
                <line x1="360" y1="435" x2="500" y2="505"/>
                <line x1="640" y1="435" x2="500" y2="505"/>
                <line x1="720" y1="475" x2="500" y2="585"/>
                <line x1="800" y1="515" x2="500" y2="665"/>

            </g>

        </g>
    `;
}


/* =========================================================
   WALLS
========================================================= */

function createWalls() {
    return `
        <g class="room-part">

            <!-- Left wall -->
            <polygon
                class="wall wall-left"
                points="
                    120,475
                    120,145
                    500,35
                    500,290
                "
            />

            <!-- Right wall -->
            <polygon
                class="wall wall-right"
                points="
                    500,35
                    880,145
                    880,475
                    500,290
                "
            />

            <!-- Wall divider -->
            <line
                x1="500"
                y1="35"
                x2="500"
                y2="290"
                class="wall-edge"
            />

            <!-- Baseboard -->
            <line
                x1="120"
                y1="440"
                x2="500"
                y2="290"
                class="baseboard"
            />

            <line
                x1="500"
                y1="290"
                x2="880"
                y2="440"
                class="baseboard"
            />

        </g>
    `;
}


/* =========================================================
   WINDOW
========================================================= */

function createWindow() {
    return `
        <g
            class="object interactive window-object"
            data-object="window"
        >

            <!-- Outer frame -->
            <polygon
                class="window-frame"
                points="
                    585,105
                    765,157
                    765,305
                    585,252
                "
                filter="url(#softShadow)"
            />

            <!-- Glass -->
            <polygon
                class="window-glass"
                points="
                    600,120
                    750,164
                    750,287
                    600,243
                "
            />

            <!-- Clouds -->
            <g class="clouds">

                <ellipse cx="650" cy="160" rx="28" ry="11"/>
                <ellipse cx="675" cy="160" rx="18" ry="9"/>

                <ellipse cx="705" cy="212" rx="25" ry="10"/>
                <ellipse cx="730" cy="213" rx="16" ry="8"/>

            </g>

            <!-- Window frames -->
            <line
                x1="675"
                y1="141"
                x2="675"
                y2="265"
                class="window-detail"
            />

            <line
                x1="600"
                y1="180"
                x2="750"
                y2="224"
                class="window-detail"
            />

            <!-- Curtains -->
            <polygon
                class="curtain curtain-left"
                points="
                    565,100
                    600,110
                    600,265
                    565,250
                "
            />

            <polygon
                class="curtain curtain-right"
                points="
                    765,157
                    800,168
                    800,315
                    765,302
                "
            />

            <!-- Curtain tie -->
            <line
                x1="575"
                y1="205"
                x2="598"
                y2="205"
                class="curtain-tie"
            />

            <line
                x1="770"
                y1="257"
                x2="798"
                y2="267"
                class="curtain-tie"
            />

        </g>
    `;
}


/* =========================================================
   POSTER
========================================================= */

function createPoster() {
    return `
        <g class="poster">

            <polygon
                class="poster-shadow"
                points="
                    190,205
                    290,177
                    290,285
                    190,313
                "
            />

            <polygon
                class="poster-frame"
                points="
                    180,195
                    280,167
                    280,275
                    180,303
                "
            />

            <polygon
                class="poster-paper"
                points="
                    188,201
                    272,178
                    272,267
                    188,291
                "
            />

            <text
                x="230"
                y="225"
                class="poster-title"
                text-anchor="middle"
            >
                KOS
            </text>

            <text
                x="230"
                y="246"
                class="poster-subtitle"
                text-anchor="middle"
            >
                take it easy
            </text>

            <circle
                cx="230"
                cy="267"
                r="7"
                class="poster-sun"
            />

        </g>
    `;
}


/* =========================================================
   WARDROBE
========================================================= */

function createWardrobe() {
    return `
        <g
            class="object interactive"
            data-object="wardrobe"
        >

            <!-- Shadow -->
            <polygon
                class="object-shadow"
                points="
                    175,405
                    355,340
                    405,363
                    220,435
                "
            />

            <!-- Main body -->
            <polygon
                class="wardrobe"
                points="
                    175,220
                    325,178
                    325,390
                    175,434
                "
            />

            <!-- Side -->
            <polygon
                class="wardrobe-side"
                points="
                    325,178
                    365,193
                    365,405
                    325,390
                "
            />

            <!-- Left door -->
            <polygon
                class="wardrobe-door"
                points="
                    187,228
                    252,209
                    252,394
                    187,414
                "
            />

            <!-- Right door -->
            <polygon
                class="wardrobe-door"
                points="
                    255,209
                    316,192
                    316,380
                    255,394
                "
            />

            <!-- Handles -->
            <circle
                cx="248"
                cy="304"
                r="5"
                class="wardrobe-handle"
            />

            <circle
                cx="258"
                cy="301"
                r="5"
                class="wardrobe-handle"
            />

            <!-- Top -->
            <polygon
                class="wardrobe-top"
                points="
                    175,220
                    325,178
                    365,193
                    215,238
                "
            />

        </g>
    `;
}


/* =========================================================
   SHELF
========================================================= */

function createShelf() {
    return `
        <g class="object interactive" data-object="shelf">

            <!-- Shelf body -->
            <polygon
                class="shelf"
                points="
                    665,260
                    795,298
                    795,420
                    665,382
                "
            />

            <!-- Shelves -->
            <line
                x1="670"
                y1="302"
                x2="790"
                y2="337"
                class="shelf-line"
            />

            <line
                x1="670"
                y1="345"
                x2="790"
                y2="380"
                class="shelf-line"
            />

            <!-- Books -->
            <polygon
                class="book book-red"
                points="
                    690,272
                    707,277
                    707,298
                    690,293
                "
            />

            <polygon
                class="book book-blue"
                points="
                    710,278
                    726,283
                    726,304
                    710,299
                "
            />

            <polygon
                class="book book-green"
                points="
                    735,286
                    751,291
                    751,312
                    735,307
                "
            />

        </g>
    `;
}


/* =========================================================
   BED
========================================================= */

function createBed() {
    return `
        <g
            class="object interactive"
            data-object="bed"
        >

            <!-- Bed shadow -->
            <polygon
                class="object-shadow"
                points="
                    310,490
                    520,400
                    715,485
                    505,585
                "
            />

            <!-- Headboard -->
            <polygon
                class="headboard"
                points="
                    300,405
                    470,340
                    650,420
                    475,485
                "
            />

            <!-- Mattress -->
            <polygon
                class="bed-base"
                points="
                    315,420
                    475,365
                    675,450
                    510,515
                "
            />

            <!-- Mattress side -->
            <polygon
                class="bed-side"
                points="
                    315,420
                    315,452
                    510,545
                    510,515
                "
            />

            <!-- Blanket -->
            <polygon
                class="blanket"
                points="
                    430,388
                    475,371
                    660,448
                    515,503
                "
            />

            <!-- Blanket stripe -->
            <polygon
                class="blanket-stripe"
                points="
                    600,422
                    620,430
                    620,465
                    600,473
                "
            />

            <!-- Pillow -->
            <polygon
                class="pillow"
                points="
                    325,404
                    390,380
                    447,400
                    380,425
                "
            />

            <!-- Small pillow -->
            <polygon
                class="pillow pillow-small"
                points="
                    380,380
                    425,365
                    460,378
                    415,394
                "
            />

            <!-- Bed legs -->
            <rect
                x="335"
                y="448"
                width="18"
                height="62"
                rx="4"
                class="bed-leg"
            />

            <rect
                x="650"
                y="454"
                width="18"
                height="58"
                rx="4"
                class="bed-leg"
            />

        </g>
    `;
}


/* =========================================================
   BEDSIDE TABLE
========================================================= */

function createBedsideTable() {
    return `
        <g
            class="object interactive"
            data-object="bedside"
        >

            <polygon
                class="table-shadow"
                points="
                    690,405
                    760,380
                    800,397
                    728,423
                "
            />

            <polygon
                class="bedside-top"
                points="
                    680,355
                    735,338
                    780,355
                    725,375
                "
            />

            <polygon
                class="bedside-front"
                points="
                    680,355
                    725,375
                    725,425
                    680,407
                "
            />

            <polygon
                class="bedside-side"
                points="
                    725,375
                    780,355
                    780,405
                    725,425
                "
            />

            <!-- Drawer -->
            <polygon
                class="drawer"
                points="
                    688,369
                    720,381
                    720,400
                    688,389
                "
            />

        </g>
    `;
}


/* =========================================================
   LAMP
========================================================= */

function createLamp() {
    return `
        <g class="lamp">

            <!-- Lamp shade -->
            <polygon
                class="lamp-shade"
                points="
                    700,327
                    740,315
                    755,326
                    715,339
                "
            />

            <!-- Pole -->
            <line
                x1="730"
                y1="333"
                x2="730"
                y2="360"
                class="lamp-pole"
            />

            <!-- Light -->
            <circle
                cx="730"
                cy="331"
                r="6"
                class="lamp-light"
            />

        </g>
    `;
}


/* =========================================================
   RUG
========================================================= */

function createRug() {
    return `
        <g class="rug">

            <polygon
                class="rug-base"
                points="
                    350,535
                    530,465
                    690,535
                    505,615
                "
            />

            <polygon
                class="rug-inner"
                points="
                    385,538
                    530,480
                    650,534
                    505,595
                "
            />

            <line
                x1="420"
                y1="523"
                x2="515"
                y2="565"
                class="rug-pattern"
            />

            <line
                x1="610"
                y1="520"
                x2="525"
                y2="558"
                class="rug-pattern"
            />

        </g>
    `;
}


/* =========================================================
   DESK
========================================================= */

function createDesk() {
    return `
        <g
            class="object interactive"
            data-object="desk"
        >

            <!-- Shadow -->
            <polygon
                class="object-shadow"
                points="
                    560,500
                    720,437
                    825,482
                    665,545
                "
            />

            <!-- Desk top -->
            <polygon
                class="desk-top"
                points="
                    555,340
                    720,292
                    805,325
                    640,378
                "
            />

            <!-- Front -->
            <polygon
                class="desk-front"
                points="
                    555,340
                    640,378
                    640,407
                    555,369
                "
            />

            <!-- Side -->
            <polygon
                class="desk-side"
                points="
                    640,378
                    805,325
                    805,352
                    640,407
                "
            />

            <!-- Drawer -->
            <polygon
                class="desk-drawer"
                points="
                    680,347
                    745,326
                    775,337
                    710,359
                "
            />

            <!-- Desk legs -->
            <polygon
                class="desk-leg"
                points="
                    580,365
                    598,372
                    598,490
                    580,482
                "
            />

            <polygon
                class="desk-leg"
                points="
                    765,334
                    783,328
                    783,440
                    765,448
                "
            />

        </g>
    `;
}


/* =========================================================
   LAPTOP
========================================================= */

function createLaptop() {
    return `
        <g
            class="object interactive"
            data-object="laptop"
        >

            <!-- Screen frame -->
            <polygon
                class="laptop-screen"
                points="
                    625,295
                    700,273
                    700,323
                    625,346
                "
            />

            <!-- Display -->
            <polygon
                class="laptop-display"
                points="
                    633,299
                    692,282
                    692,317
                    633,335
                "
            />

            <!-- Display code -->
            <line
                x1="642"
                y1="307"
                x2="674"
                y2="298"
                class="code-line"
            />

            <line
                x1="642"
                y1="317"
                x2="685"
                y2="304"
                class="code-line"
            />

            <line
                x1="642"
                y1="327"
                x2="665"
                y2="320"
                class="code-line"
            />

            <!-- Keyboard -->
            <polygon
                class="laptop-keyboard"
                points="
                    613,347
                    693,322
                    727,336
                    645,365
                "
            />

            <!-- Trackpad -->
            <polygon
                class="trackpad"
                points="
                    648,348
                    668,341
                    680,346
                    660,353
                "
            />

        </g>
    `;
}


/* =========================================================
   CHAIR
========================================================= */

function createChair() {
    return `
        <g
            class="object interactive"
            data-object="chair"
        >

            <!-- Back -->
            <polygon
                class="chair-back"
                points="
                    680,410
                    730,393
                    750,402
                    700,421
                "
            />

            <!-- Seat -->
            <polygon
                class="chair-seat"
                points="
                    670,430
                    718,414
                    754,429
                    705,447
                "
            />

            <!-- Legs -->
            <line x1="685" y1="445" x2="685" y2="505" class="chair-leg"/>
            <line x1="738" y1="428" x2="738" y2="488" class="chair-leg"/>

        </g>
    `;
}


/* =========================================================
   PLANT
========================================================= */

function createPlant() {
    return `
        <g
            class="object interactive"
            data-object="plant"
        >

            <!-- Pot -->
            <polygon
                class="plant-pot"
                points="
                    790,430
                    830,417
                    837,454
                    797,467
                "
            />

            <!-- Stem -->
            <path
                d="M812 429 Q810 398 812 370"
                class="plant-stem"
            />

            <!-- Leaves -->
            <ellipse
                cx="795"
                cy="392"
                rx="13"
                ry="7"
                transform="rotate(-35 795 392)"
                class="leaf"
            />

            <ellipse
                cx="824"
                cy="387"
                rx="14"
                ry="7"
                transform="rotate(30 824 387)"
                class="leaf"
            />

            <ellipse
                cx="807"
                cy="372"
                rx="14"
                ry="7"
                transform="rotate(-10 807 372)"
                class="leaf"
            />

            <ellipse
                cx="829"
                cy="406"
                rx="12"
                ry="6"
                transform="rotate(40 829 406)"
                class="leaf"
            />

        </g>
    `;
}


/* =========================================================
   SUITCASE
========================================================= */

function createSuitcase() {
    return `
        <g
            class="object interactive"
            data-object="suitcase"
        >

            <!-- Handle -->
            <path
                d="M375 530 Q405 502 440 525"
                class="suitcase-handle"
            />

            <!-- Body -->
            <polygon
                class="suitcase"
                points="
                    355,532
                    420,507
                    475,530
                    410,556
                "
            />

            <!-- Front detail -->
            <line
                x1="415"
                y1="513"
                x2="415"
                y2="552"
                class="suitcase-line"
            />

            <!-- Wheel -->
            <circle
                cx="372"
                cy="538"
                r="5"
                class="suitcase-wheel"
            />

            <circle
                cx="452"
                cy="535"
                r="5"
                class="suitcase-wheel"
            />

        </g>
    `;
}


/* =========================================================
   BACKPACK
========================================================= */

function createBackpack() {
    return `
        <g
            class="object interactive"
            data-object="backpack"
        >

            <path
                d="M765 495 Q780 470 800 495"
                class="backpack-handle"
            />

            <polygon
                class="backpack"
                points="
                    750,500
                    795,487
                    815,500
                    805,550
                    760,560
                "
            />

            <polygon
                class="backpack-pocket"
                points="
                    760,523
                    802,511
                    804,532
                    765,543
                "
            />

        </g>
    `;
}


/* =========================================================
   PHONE
========================================================= */

function createPhone() {
    return `
        <g
            class="object interactive"
            data-object="phone"
        >

            <polygon
                class="phone"
                points="
                    535,355
                    555,348
                    563,352
                    543,359
                "
            />

            <circle
                cx="551"
                cy="353"
                r="2"
                class="phone-camera"
            />

        </g>
    `;
}


/* =========================================================
   CUP
========================================================= */

function createCup() {
    return `
        <g class="cup">

            <polygon
                class="cup-body"
                points="
                    745,314
                    770,307
                    777,323
                    752,330
                "
            />

            <ellipse
                cx="761"
                cy="310"
                rx="14"
                ry="4"
                class="coffee"
            />

            <path
                d="M775 313 Q790 314 782 323"
                class="cup-handle"
            />

        </g>
    `;
}


/* =========================================================
   SHOES
========================================================= */

function createShoes() {
    return `
        <g
            class="object interactive"
            data-object="shoes"
        >

            <polygon
                class="shoe shoe-one"
                points="
                    290,550
                    335,535
                    355,547
                    310,565
                "
            />

            <polygon
                class="shoe shoe-two"
                points="
                    325,566
                    370,550
                    390,562
                    344,580
                "
            />

        </g>
    `;
}


/* =========================================================
   TRASH BIN
========================================================= */

function createTrashBin() {
    return `
        <g
            class="object interactive"
            data-object="trash"
        >

            <polygon
                class="trash-bin"
                points="
                    805,470
                    848,457
                    854,516
                    812,530
                "
            />

            <polygon
                class="trash-lid"
                points="
                    800,465
                    848,451
                    860,458
                    812,474
                "
            />

            <line
                x1="821"
                y1="480"
                x2="823"
                y2="516"
                class="trash-detail"
            />

        </g>
    `;
}