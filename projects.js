/* ============================================
   PROJECTS.JS — Project data, modal, gallery & filters
   Pranav Portfolio
   ============================================ */


/* ── PROJECT DATA ──
   images[] = array of screenshot paths.
   imageLabels[] = caption for each screenshot.
   Add your real screenshot filenames here.
   ─────────────────────────────────────────── */

const projects = [
    {
        accent: 'accent-purple',
        icon: '🎮',
        num: '01',
        title: '3D Horror',
        titleAccent: 'Game',
        tags: ['Unity', 'C#', 'Blender', '3D'],
        year: '2025',
        role: 'Game Developer',
        platform: 'PC / WebGL',
        duration: '3 Months',
        status: 'Completed',
        desc: 'A first-person survival horror game built in Unity Engine. Players navigate through a dark, atmospheric environment, hunted by AI-driven enemies with patrol and detection systems. The game features custom 3D assets modelled in Blender, dynamic lighting for tension, and a cinematic opening sequence.',
        features: [
            'AI enemy with patrol, chase and attack state machine',
            'Dynamic flashlight and volumetric fog for atmosphere',
            'Custom 3D environment and character models in Blender',
            'Inventory and item pickup system',
            'Cinematic opening with jump scares and audio design',
            'Optimised for WebGL browser export'
        ],
        video:'Project Images/3D Horror Game/Gameplay.MP4',
        // ── ADD YOUR SCREENSHOT FILENAMES HERE ──
        // Put your images in the same folder as index.html
        // Example: images/horror-game-1.jpg
        images: [
            { src: 'Project Images/3D Horror Game/Main Menu.png', label: 'Main Menu' },
            { src: 'Project Images/3D Horror Game/Environment.png', label: 'Environment' },
            { src: 'Project Images/3D Horror Game/AI Enemy.png', label: 'Enemy AI' },
            { src: 'Project Images/3D Horror Game/Pause Menu.png', label: 'Pause Menu' },
            { src: 'Project Images/3D Horror Game/Gun.png', label: 'Gun' },
        ],
        accentColor: '#9b5de5',
        itch: '',          // Add your itch.io or GitHub link here
        github: '',
    },
    {
        accent: 'accent-teal',
        icon: '✨',
        num: '02',
        title: 'Animated',
        titleAccent: 'Portfolio',
        tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
        year: '2026',
        role: 'Front-End Developer',
        platform: 'Web / Browser',
        duration: '2 Weeks',
        status: 'Live',
        desc: 'A personal portfolio website featuring a custom animated cursor, scroll-triggered section fade-ins via IntersectionObserver, and a dark space-themed aesthetic. Built with pure HTML, CSS, and vanilla JavaScript — no frameworks, no bloat.',
        features: [
            'Custom cursor with hover scaling effects',
            'Scroll-triggered fade-up animation on all sections',
            'Responsive layout for mobile and desktop',
            'Glassmorphic navbar with backdrop blur',
            'Glowing profile image with cyan accent',
            'Contact form with clean field styling'
        ],
        showGallery: false,   // gallery hidden — this site IS the live demo
        live: window.location.href,   // links to this page itself
        github: '',
    },
    {
        accent: 'accent-orange',
        icon: '🎰',
        num: '03',
        title: 'Casino Slot',
        titleAccent: 'Game Prototype',
        tags: ['Unity', 'UI Animation', 'C#', 'Audio'],
        year: '2025',
        role: 'Game Developer / UI Designer',
        platform: 'Mobile / PC',
        duration: '6 Weeks',
        status: 'Completed',
        desc: 'A polished casino slot machine game built in Unity with full UI animation, spin mechanics, win detection, and audio feedback. Designed to feel satisfying and rewarding, with smooth reel-spin animations and particle effects on wins.',
        features: [
            'Spinning reel animation with easing curves',
            'Symbol matching win logic for 3-reel slots',
            'Coin particle burst and screen flash on win',
            'Looped casino ambient audio and win sound effects',
            'Bet multiplier system and coin balance tracking',
            'Polished UI with animated buttons and transitions'
        ],
        video:'Project Images/Casino Slot Game/Casino Overview.MP4',
        images: [
            { src: 'Project Images/Casino Slot Game/Casino.png', label: 'Main UI' },
            { src: 'Project Images/Casino Slot Game/Win.png', label: 'Win Screen' },
            { src: 'Project Images/Casino Slot Game/Lose.png', label: 'Lose Screen' },
            { src: 'Project Images/Casino Slot Game/Unity Image.png', label: 'Unity Screen' },
        ],
        accentColor: '#ff6b35',
        itch: '',
        github: '',
    },
    {
    accent: 'accent-yellow',
    icon: '☕',
    num: '04',
    title: 'Cafe Arosha',
    titleAccent: 'Web Application',
    tags: ['React', 'Spring Boot', 'Java', 'JWT', 'CSS', 'REST API'],
    year: '2026',
    role: 'Full Stack Developer',
    platform: 'Web (Mobile + Desktop)',
    duration: '6 Weeks',
    status: 'Completed',
    desc: 'A full-stack cafe ordering web application built for Cafe Arosha, Kothrud, Pune. Features secure JWT-based authentication, interactive menu with cart system, user profile management, and order history tracking. Designed with a dark premium aesthetic and fully responsive layout.',
    features: [
        'JWT-secured login and registration with BCrypt password hashing',
        'Interactive menu with category filters and auth-gated cart',
        'Real-time cart sidebar with quantity controls and order total',
        'User profile panel with avatar upload and order history',
        'Password change and account settings with client-side validation',
        'Spring Boot REST API with Spring Security and H2/MySQL database',
        'Fully responsive dark UI with smooth animations and transitions',
        'Dev mode fallback — works without backend using localStorage',
    ],

    images: [
        { src: 'Project Images/Cafe Arosha/Home Page.png',   label: 'Home Page' },
        { src: 'Project Images/Cafe Arosha/Menu Section 2.png',label: 'Menu Section' },
        { src: 'Project Images/Cafe Arosha/Menu Section.png',label: 'Menu Section' },
        { src: 'Project Images/Cafe Arosha/Login Modal.png',       label: 'Login Modal' },
        { src: 'Project Images/Cafe Arosha/Register Modal.png',    label: 'Register Modal' },
        { src: 'Project Images/Cafe Arosha/Cart Sidebar.png',        label: 'Cart Sidebar' },
        { src: 'Project Images/Cafe Arosha/Profile Section.png',     label: 'Profile Panel' },
        { src: 'Project Images/Cafe Arosha/Order History.png',      label: 'Order History' },
    ],
    accentColor: '#ffb703',
    itch: '',
    github: '',
}
];


/* ── GALLERY STATE ── */
let currentProject = null;
let activeImageIndex = 0;


/* ── MODAL ── */
const overlay = document.getElementById('overlay');
const modal   = document.getElementById('modal');

function openModal(id) {
    const p = projects[id];
    currentProject = id;
    activeImageIndex = 0;

    modal.className = `modal ${p.accent}`;

    const imagesHtml = buildGallery(p);
    const actionsHtml = buildActions(p);

    modal.innerHTML = `
        <div class="modal-top">
            <div class="bg-num">${p.num}</div>
            <div class="modal-icon">${p.icon}</div>
            <button class="close-btn" onclick="closeModal()">✕</button>
        </div>

        <div class="modal-body">

            <div class="modal-tags">
                ${p.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
            </div>

            <h2>${p.title} <span>${p.titleAccent}</span></h2>
            <p class="modal-desc">${p.desc}</p>

            ${imagesHtml}

            <div class="detail-grid">
                <div class="detail-item">
                    <div class="label">ROLE</div>
                    <div class="value">${p.role}</div>
                </div>
                <div class="detail-item">
                    <div class="label">PLATFORM</div>
                    <div class="value">${p.platform}</div>
                </div>
                <div class="detail-item">
                    <div class="label">DURATION</div>
                    <div class="value">${p.duration}</div>
                </div>
                <div class="detail-item">
                    <div class="label">STATUS</div>
                    <div class="value">${p.status}</div>
                </div>
            </div>

            <p class="features-title">KEY FEATURES</p>
            <ul class="features-list">
                ${p.features.map(f => `<li>${f}</li>`).join('')}
            </ul>

            ${actionsHtml}

        </div>
    `;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Animate thumbnails in after render
    requestAnimationFrame(() => {
        document.querySelectorAll('.thumb').forEach((th, i) => {
            th.style.transitionDelay = `${i * 60}ms`;
            th.classList.add('thumb-in');
        });
    });
}


/* ── BUILD GALLERY HTML ── */
function buildGallery(p) {
    // Project opted out of gallery (e.g. portfolio — visitor is already viewing it)
    if (p.showGallery === false) {
        return `
        <div class="no-gallery-banner">
            <span class="no-gallery-icon">✨</span>
            <div>
                <div class="no-gallery-title">You're already viewing this project!</div>
                <div class="no-gallery-sub">This portfolio site is itself the live demo — scroll around to explore it.</div>
            </div>
        </div>`;
    }
    if (!p.images || p.images.length === 0) return '';

    // Build items: video first (if exists), then images
    const items = [];
    if (p.video) {
        items.push({ type: 'video', src: p.video, label: 'Gameplay Video' });
    }
    p.images.forEach(img => items.push({ type: 'image', ...img }));

    const thumbsHtml = items.map((item, i) => `
        <div class="thumb ${i === 0 ? 'active' : ''}"
             onclick="switchImage(${i})"
             data-index="${i}"
             title="${item.label}">
            ${item.type === 'video'
                ? `<div class="thumb-video-icon">▶</div>`
                : `<img src="${item.src}" alt="${item.label}" onerror="this.parentElement.classList.add('thumb-error')">`
            }
            <div class="thumb-num">${String(i + 1).padStart(2, '0')}</div>
        </div>
    `).join('');

    return `
        <div class="gallery-section" data-items='${JSON.stringify(items).replace(/'/g, "&#39;")}'>

            <div class="gallery-main" id="gallery-main">

                <video
                    id="gallery-video"
                    class="gallery-video"
                    controls
                    playsinline
                    style="display:none"
                >
                    <source id="gallery-video-src" src="" type="video/mp4">
                    Your browser does not support video.
                </video>

                <img
                    class="gallery-img"
                    id="gallery-img"
                    src="${items[0].type === 'image' ? items[0].src : ''}"
                    alt="${items[0].label}"
                    onerror="handleImgError(this)"
                    style="${items[0].type === 'video' ? 'display:none' : ''}"
                >

                ${p.video && items[0].type === 'video' ? `
                <script>
                    document.getElementById('gallery-video').src = '${p.video}';
                    document.getElementById('gallery-video').style.display = 'block';
                <\/script>` : ''}

                <div class="gallery-placeholder" id="gallery-placeholder">
                    <div class="placeholder-icon">${p.icon}</div>
                    <div class="placeholder-text">Add your screenshots here</div>
                    <div class="placeholder-sub">Place images in an <code>images/</code> folder</div>
                </div>

                <div class="gallery-caption" id="gallery-caption">
                    <span class="caption-label" id="caption-label">${items[0].label}</span>
                    <span class="caption-count" id="caption-count">01 / ${String(items.length).padStart(2, '0')}</span>
                </div>

                ${items.length > 1 ? `
                <button class="gallery-arrow left"  onclick="galleryNav(-1)">&#8592;</button>
                <button class="gallery-arrow right" onclick="galleryNav(1)">&#8594;</button>
                ` : ''}

                <button class="gallery-fullscreen" onclick="openLightbox()" title="View fullscreen">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                    </svg>
                </button>

            </div>

            <div class="gallery-thumbs" id="gallery-thumbs">
                ${thumbsHtml}
            </div>

        </div>
    `;
}


/* ── SWITCH IMAGE ── */
function switchImage(index) {
    const p = projects[currentProject];
    if (!p) return;

    // Rebuild items list same way as buildGallery
    const items = [];
    if (p.video) items.push({ type: 'video', src: p.video, label: 'Gameplay Video' });
    p.images.forEach(img => items.push({ type: 'image', ...img }));

    if (index < 0 || index >= items.length) return;
    activeImageIndex = index;

    const item      = items[index];
    const mainImg   = document.getElementById('gallery-img');
    const mainVideo = document.getElementById('gallery-video');
    const placeholder = document.getElementById('gallery-placeholder');

    // Stop any playing video when switching away
    if (mainVideo && !mainVideo.paused) mainVideo.pause();

    if (item.type === 'video') {
        mainImg.style.display   = 'none';
        mainVideo.style.display = 'block';
        mainVideo.src           = item.src;
        placeholder.classList.remove('show');
    } else {
        mainVideo.style.display = 'none';
        mainImg.style.display   = 'block';
        mainImg.classList.add('img-fade');
        setTimeout(() => {
            mainImg.src = item.src;
            mainImg.alt = item.label;
            mainImg.classList.remove('img-fade');
            placeholder.classList.remove('show');
        }, 180);
    }

    document.getElementById('caption-label').textContent = item.label;
    document.getElementById('caption-count').textContent =
        `${String(index + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`;

    document.querySelectorAll('.thumb').forEach((th, i) => {
        th.classList.toggle('active', i === index);
    });
}

function galleryNav(dir) {
    const p = projects[currentProject];
    if (!p || !p.images) return;
    const items = [];
    if (p.video) items.push({ type: 'video' });
    p.images.forEach(img => items.push({ type: 'image', ...img }));
    const next = (activeImageIndex + dir + items.length) % items.length;
    switchImage(next);
}

function handleImgError(imgEl) {
    imgEl.style.display = 'none';
    const placeholder = document.getElementById('gallery-placeholder');
    if (placeholder) placeholder.classList.add('show');
}


/* ── LIGHTBOX ── */
function openLightbox() {
    const p = projects[currentProject];
    if (!p) return;
    const img = p.images[activeImageIndex];

    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.id = 'lightbox';
    lb.innerHTML = `
        <div class="lightbox-backdrop" onclick="closeLightbox()"></div>
        <div class="lightbox-content">
            <img src="${img.src}" alt="${img.label}" onerror="this.style.display='none'">
            <div class="lightbox-caption">${img.label}</div>
            <button class="lightbox-close" onclick="closeLightbox()">✕</button>
            ${p.images.length > 1 ? `
            <button class="lightbox-nav left"  onclick="lightboxNav(-1)">&#8592;</button>
            <button class="lightbox-nav right" onclick="lightboxNav(1)">&#8594;</button>
            ` : ''}
        </div>
    `;
    document.body.appendChild(lb);
    requestAnimationFrame(() => lb.classList.add('open'));
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (lb) { lb.classList.remove('open'); setTimeout(() => lb.remove(), 300); }
}

function lightboxNav(dir) {
    const p = projects[currentProject];
    if (!p) return;
    activeImageIndex = (activeImageIndex + dir + p.images.length) % p.images.length;
    const lb = document.getElementById('lightbox');
    const img = p.images[activeImageIndex];
    if (lb) {
        lb.querySelector('img').src = img.src;
        lb.querySelector('.lightbox-caption').textContent = img.label;
        // Sync modal gallery too
        switchImage(activeImageIndex);
    }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (document.getElementById('lightbox')) {
        if (e.key === 'ArrowLeft')  lightboxNav(-1);
        if (e.key === 'ArrowRight') lightboxNav(1);
        if (e.key === 'Escape')     closeLightbox();
    } else if (overlay.classList.contains('open')) {
        if (e.key === 'ArrowLeft')  galleryNav(-1);
        if (e.key === 'ArrowRight') galleryNav(1);
        if (e.key === 'Escape')     closeModal();
    }
});


/* ── BUILD ACTION BUTTONS ── */
function buildActions(p) {
    const buttons = [];

    if (p.live) {
        const isThisSite = p.showGallery === false;
        buttons.push(`<a href="${p.live}" ${isThisSite ? 'onclick="closeModal();return false;"' : 'target="_blank" rel="noopener"'} class="modal-btn primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            ${isThisSite ? 'View Live Site ↑' : 'Live Demo'}
        </a>`);
    }
    if (p.itch) {
        buttons.push(`<a href="${p.itch}" target="_blank" rel="noopener" class="modal-btn primary">
            🎮 Play on itch.io
        </a>`);
    }
    /*if (p.github) {
        buttons.push(`<a href="${p.github}" target="_blank" rel="noopener" class="modal-btn secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            View Code
        </a>`);
    }*/

    if (buttons.length === 0) {
        buttons.push(`<button class="modal-btn secondary" disabled style="opacity:0.5;cursor:default">
            🔒 Coming Soon
        </button>`);
    }

    return `<div class="modal-actions">${buttons.join('')}</div>`;
}


/* ── MODAL OPEN / CLOSE ── */
function closeModal() {
    // Stop any playing video before closing
    const vid = document.getElementById('gallery-video');
    if (vid && !vid.paused) vid.pause();
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    currentProject = null;
}

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click',   () => openModal(+card.dataset.id));
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter') openModal(+card.dataset.id); });
});


/* ── FILTER TABS ── */
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        document.querySelectorAll('.project-card').forEach(card => {
            const match = filter === 'all' || card.dataset.category === filter;
            card.style.display = match ? 'block' : 'none';
        });
    });
});
