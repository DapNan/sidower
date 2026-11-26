
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const starCount = document.getElementById("starCount");
const scoreCount = document.getElementById("scoreCount");
const progressFill = document.getElementById("progressFill");

const startOverlay = document.getElementById("startOverlay");
const questionOverlay = document.getElementById("questionOverlay");
const winOverlay = document.getElementById("winOverlay");

const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");

const questionText = document.getElementById("questionText");
const answerList = document.getElementById("answerList");
const answerFeedback = document.getElementById("answerFeedback");

const QUESTIONS = [
  {
    question: "Apa nama tradisi yang dikenal di Desa Brayublandong untuk menghormati Mbah Tulak?",
    answers: ["Alung-Alung", "Sedekah Laut", "Karapan Sapi"],
    correct: 0
  },
  {
    question: "Desa Suru terkenal dengan makanan khas berupa ...",
    answers: ["Rendang", "Belalang Goreng", "Pempek"],
    correct: 1
  },
  {
    question: "Apa nama waduk yang menjadi potensi wisata di Desa Cinandang?",
    answers: ["Waduk Selorejo", "Waduk Gajah Mungkur", "Waduk Windu"],
    correct: 2
  },
  {
    question: "Tanaman apa yang menjadi salah satu hasil pertanian masyarakat Desa Gunungan?",
    answers: ["Tembakau", "Apel", "Teh"],
    correct: 0
  },
  {
    question: "Apa nama tradisi tahunan masyarakat Desa Sumberwuluh sebagai bentuk kebersamaan dan rasa syukur?",
    answers: ["Ruah Deso atau Sedekah Desa", "Festival Layang-Layang", "Lomba Perahu"],
    correct: 0
  }
];

const groundY = 360;

const platforms = [
  { x: 185, y: 300, w: 125, h: 14 },
  { x: 385, y: 250, w: 130, h: 14 },
  { x: 610, y: 295, w: 130, h: 14 }
];

const initialStars = [
  { x: 145, y: 315 },
  { x: 245, y: 255 },
  { x: 450, y: 205 },
  { x: 665, y: 250 },
  { x: 825, y: 315 }
];

let player;
let stars = [];
let score = 0;
let collected = 0;
let currentQuestion = 0;
let playing = false;
let gameFinished = false;

const keys = {
  left: false,
  right: false
};

function resetGame() {
  player = {
    x: 55,
    y: groundY - 48,
    w: 34,
    h: 48,
    vx: 0,
    vy: 0,
    speed: 3.8,
    jumpPower: -10.5,
    onGround: false
  };

  stars = initialStars.map((star, index) => ({
    ...star,
    index,
    active: true
  }));

  score = 0;
  collected = 0;
  currentQuestion = 0;
  playing = false;
  gameFinished = false;

  updateStats();
  drawGame();
}

function updateStats() {
  starCount.textContent = `${collected} / 5`;
  scoreCount.textContent = score;
  progressFill.style.width = `${collected * 20}%`;
}

function startGame() {
  resetGame();
  startOverlay.classList.add("hidden");
  winOverlay.classList.add("hidden");
  playing = true;
}

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", () => {
  startOverlay.classList.remove("hidden");
  winOverlay.classList.add("hidden");
  resetGame();
});

// NAVBAR MOBILE
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Tutup navigasi" : "Buka navigasi"
    );
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// KEYBOARD CONTROL
document.addEventListener("keydown", event => {
  if (["ArrowLeft", "ArrowRight", "ArrowUp", " "].includes(event.key)) {
    event.preventDefault();
  }

  if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
    keys.left = true;
  }

  if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
    keys.right = true;
  }

  if (event.key === "ArrowUp" || event.key === " ") {
    jump();
  }
});

document.addEventListener("keyup", event => {
  if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
    keys.left = false;
  }

  if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
    keys.right = false;
  }
});

function setupHoldButton(id, direction) {
  const button = document.getElementById(id);

  button.addEventListener("pointerdown", event => {
    event.preventDefault();
    keys[direction] = true;
    button.setPointerCapture(event.pointerId);
  });

  ["pointerup", "pointercancel", "lostpointercapture"].forEach(type => {
    button.addEventListener(type, () => {
      keys[direction] = false;
    });
  });
}

setupHoldButton("leftButton", "left");
setupHoldButton("rightButton", "right");

document.getElementById("jumpButton").addEventListener("pointerdown", event => {
  event.preventDefault();
  jump();
});

function jump() {
  if (playing && player.onGround) {
    player.vy = player.jumpPower;
    player.onGround = false;
  }
}

// COLLISION
function overlaps(a, b) {
  return (
    a.x < b.x + b.w &&
    a.x + a.w > b.x &&
    a.y < b.y + b.h &&
    a.y + a.h > b.y
  );
}

// UPDATE GAME
function updateGame() {
  if (!playing || gameFinished) return;

  player.vx = 0;

  if (keys.left) player.vx = -player.speed;
  if (keys.right) player.vx = player.speed;

  player.x += player.vx;
  player.x = Math.max(0, Math.min(canvas.width - player.w, player.x));

  const previousY = player.y;

  player.vy += 0.48;
  player.y += player.vy;
  player.onGround = false;

  // Lantai
  if (player.y + player.h >= groundY) {
    player.y = groundY - player.h;
    player.vy = 0;
    player.onGround = true;
  }

  // Platform
  platforms.forEach(platform => {
    const wasAbove = previousY + player.h <= platform.y;
    const isCrossing = player.y + player.h >= platform.y;

    const overlapsX =
      player.x + player.w > platform.x &&
      player.x < platform.x + platform.w;

    if (wasAbove && isCrossing && overlapsX && player.vy >= 0) {
      player.y = platform.y - player.h;
      player.vy = 0;
      player.onGround = true;
    }
  });

  // Jatuh dari arena
  if (player.y > canvas.height) {
    player.x = 55;
    player.y = groundY - player.h;
    player.vy = 0;
  }

  // Cek bintang
  stars.forEach(star => {
    if (!star.active) return;

    const starBox = {
      x: star.x - 13,
      y: star.y - 13,
      w: 26,
      h: 26
    };

    if (overlaps(player, starBox)) {
      openQuestion(star.index);
    }
  });
}

// QUESTION
function openQuestion(index) {
  if (!playing) return;

  playing = false;
  currentQuestion = index;

  const question = QUESTIONS[index];

  questionText.textContent = question.question;
  answerFeedback.textContent = "";
  answerList.innerHTML = "";

  question.answers.forEach((answer, answerIndex) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.textContent = `${String.fromCharCode(65 + answerIndex)}. ${answer}`;

    button.addEventListener("click", () => {
      checkAnswer(answerIndex, button);
    });

    answerList.appendChild(button);
  });

  questionOverlay.classList.remove("hidden");
}

function checkAnswer(selected, selectedButton) {
  const question = QUESTIONS[currentQuestion];
  const buttons = answerList.querySelectorAll("button");

  if (selected === question.correct) {
    selectedButton.classList.add("correct");

    buttons.forEach(button => {
      button.disabled = true;
    });

    answerFeedback.textContent = "Hebat! Kamu mendapatkan 1 bintang! ⭐";

    stars[currentQuestion].active = false;
    collected++;
    score += 10;
    updateStats();

    setTimeout(() => {
      questionOverlay.classList.add("hidden");

      if (collected === 5) {
        finishGame();
      } else {
        playing = true;
      }
    }, 1200);

  } else {
    selectedButton.classList.add("wrong");
    answerFeedback.textContent = "Belum tepat. Coba jawaban lainnya, ya!";

    selectedButton.disabled = true;
  }
}

function finishGame() {
  playing = false;
  gameFinished = true;

  document.getElementById("finalScore").textContent = score;
  winOverlay.classList.remove("hidden");
}

// DRAW BACKGROUND
function drawBackground() {
  // Langit
  ctx.fillStyle = "#bce7f5";
  ctx.fillRect(0, 0, 900, 420);

  // Matahari
  ctx.fillStyle = "#ffdb76";
  ctx.beginPath();
  ctx.arc(790, 75, 34, 0, Math.PI * 2);
  ctx.fill();

  // Awan
  drawCloud(140, 75);
  drawCloud(430, 95);
  drawCloud(650, 55);

  // Bukit belakang
  ctx.fillStyle = "#9bcf94";
  ctx.beginPath();
  ctx.moveTo(0, 275);
  ctx.quadraticCurveTo(180, 120, 370, 275);
  ctx.quadraticCurveTo(570, 135, 780, 275);
  ctx.lineTo(900, 275);
  ctx.lineTo(900, 420);
  ctx.lineTo(0, 420);
  ctx.fill();

  // Bukit depan
  ctx.fillStyle = "#6fb77c";
  ctx.beginPath();
  ctx.moveTo(0, 315);
  ctx.quadraticCurveTo(200, 235, 390, 315);
  ctx.quadraticCurveTo(610, 235, 900, 315);
  ctx.lineTo(900, 420);
  ctx.lineTo(0, 420);
  ctx.fill();

  // Rumah desa
  drawHouse(720, 245);
  drawHouse(80, 265);

  // Tanah
  ctx.fillStyle = "#8b603e";
  ctx.fillRect(0, groundY, 900, 60);

  ctx.fillStyle = "#55a85e";
  ctx.fillRect(0, groundY, 900, 12);

  // Rumput kecil
  for (let x = 15; x < 900; x += 42) {
    ctx.fillStyle = "#d6e99a";
    ctx.fillRect(x, groundY + 15, 13, 3);
  }
}

function drawCloud(x, y) {
  ctx.fillStyle = "rgba(255,255,255,.85)";
  ctx.beginPath();
  ctx.arc(x, y, 18, 0, Math.PI * 2);
  ctx.arc(x + 20, y - 8, 23, 0, Math.PI * 2);
  ctx.arc(x + 43, y, 17, 0, Math.PI * 2);
  ctx.fill();
}

function drawHouse(x, y) {
  ctx.fillStyle = "#f5d9a3";
  ctx.fillRect(x, y, 62, 48);

  ctx.fillStyle = "#b86e4c";
  ctx.beginPath();
  ctx.moveTo(x - 8, y);
  ctx.lineTo(x + 31, y - 30);
  ctx.lineTo(x + 70, y);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#805338";
  ctx.fillRect(x + 25, y + 22, 14, 26);

  ctx.fillStyle = "#a9dce9";
  ctx.fillRect(x + 7, y + 12, 12, 12);
  ctx.fillRect(x + 44, y + 12, 12, 12);
}

// DRAW PLATFORM
function drawPlatforms() {
  platforms.forEach(platform => {
    ctx.fillStyle = "#8b603e";
    ctx.fillRect(platform.x, platform.y, platform.w, platform.h);

    ctx.fillStyle = "#62ad60";
    ctx.fillRect(platform.x, platform.y, platform.w, 7);

    ctx.fillStyle = "#d5e89a";
    for (let x = platform.x + 10; x < platform.x + platform.w; x += 28) {
      ctx.fillRect(x, platform.y + 9, 12, 2);
    }
  });
}

// DRAW STARS
function drawStars() {
  stars.forEach(star => {
    if (!star.active) return;

    const pulse = Math.sin(Date.now() / 180 + star.index) * 3;

    ctx.save();
    ctx.translate(star.x, star.y + pulse);
    ctx.fillStyle = "#ffd34f";
    ctx.strokeStyle = "#d99b24";
    ctx.lineWidth = 2;

    ctx.beginPath();

    for (let i = 0; i < 10; i++) {
      const radius = i % 2 === 0 ? 15 : 7;
      const angle = -Math.PI / 2 + i * Math.PI / 5;

      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }

    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  });
}

// DRAW CHARACTER
function drawPlayer() {
  const x = player.x;
  const y = player.y;

  // Bayangan
  ctx.fillStyle = "rgba(30,60,40,.18)";
  ctx.beginPath();
  ctx.ellipse(x + 17, groundY + 2, 18, 5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Badan
  ctx.fillStyle = "#176447";
  ctx.fillRect(x + 5, y + 21, 25, 24);

  // Kepala
  ctx.fillStyle = "#f1bd8e";
  ctx.beginPath();
  ctx.arc(x + 17, y + 13, 13, 0, Math.PI * 2);
  ctx.fill();

  // Rambut
  ctx.fillStyle = "#493324";
  ctx.beginPath();
  ctx.arc(x + 17, y + 7, 13, Math.PI, Math.PI * 2);
  ctx.fill();
  ctx.fillRect(x + 5, y + 6, 8, 5);

  // Mata
  ctx.fillStyle = "#253a2e";
  ctx.beginPath();
  ctx.arc(x + 21, y + 13, 1.5, 0, Math.PI * 2);
  ctx.fill();

  // Senyum
  ctx.strokeStyle = "#9a5543";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(x + 22, y + 17, 3, 0.1, Math.PI - 0.1);
  ctx.stroke();

  // Kaki
  ctx.fillStyle = "#344b65";
  ctx.fillRect(x + 6, y + 42, 10, 6);
  ctx.fillRect(x + 20, y + 42, 10, 6);

  // Sepatu
  ctx.fillStyle = "#f4d06c";
  ctx.fillRect(x + 4, y + 46, 13, 3);
  ctx.fillRect(x + 19, y + 46, 13, 3);
}

function drawGame() {
  drawBackground();
  drawPlatforms();
  drawStars();

  if (player) {
    drawPlayer();
  }
}

function gameLoop() {
  updateGame();
  drawGame();
  requestAnimationFrame(gameLoop);
}

// Mulai dari tampilan awal
resetGame();
gameLoop();
