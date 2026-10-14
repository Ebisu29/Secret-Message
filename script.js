
const confession = document.getElementById("confession");
const dateSection = document.getElementById("dateSection");
const thankYou = document.getElementById("thankYou");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const dateForm = document.getElementById("dateForm");
const dateInput = document.getElementById("dateInput");
const timeInput = document.getElementById("timeInput");
const exitBtn = document.getElementById("exitBtn");
const hearts = document.getElementById("hearts");

function moveNoButton() {
    const padding = 15;
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX = Math.max(
        padding,
        window.innerWidth - buttonWidth - padding
    );

    const maxY = Math.max(
        padding,
        window.innerHeight - buttonHeight - padding
    );

    const x = padding + Math.random() * (maxX - padding);
    const y = padding + Math.random() * (maxY - padding);

    noBtn.style.position = "fixed";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.zIndex = "9999";
}

noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("touchstart", (event) => {
    event.preventDefault();
    moveNoButton();
}, { passive: false });

noBtn.addEventListener("click", (event) => {
    event.preventDefault();
    moveNoButton();
});

yesBtn.addEventListener("click", () => {
    confession.classList.add("hidden");
    noBtn.style.display = "none";
    dateSection.classList.remove("hidden");

    dateSection.style.animation = "appear 0.8s ease";
});

dateForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!dateInput.value || !timeInput.value) {
        return;
    }

    thankYou.classList.remove("hidden");
    thankYou.style.animation = "appear 0.8s ease";
    dateSection.classList.add("hidden");

    createHearts(25);

    thankYou.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});

exitBtn.addEventListener("click", () => {
    thankYou.innerHTML = `
        <div class="big-heart">💗</div>
        <h1>UNTIL WE MEET, MY LOVE!</h1>
        <p class="message">
            Take care and don't forget to smile. ♡
        </p>
        <div class="sparkle">💕 ✨ 💕</div>
    `;

    thankYou.style.animation = "appear 0.8s ease";

    createHearts(30);
});

function createHeart() {
    const heart = document.createElement("span");
    const symbols = ["💗", "💕", "♡", "💖", "🌸"];

    heart.className = "heart";
    heart.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (14 + Math.random() * 22) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

function createHearts(amount) {
    for (let i = 0; i < amount; i++) {
        setTimeout(createHeart, i * 100);
    }
}

setInterval(createHeart, 650);
