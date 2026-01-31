const heartWrap = document.getElementById("heartWrap");
const firstMessage = document.getElementById("firstMessage");
const nextBtn = document.getElementById("nextBtn");
const letterSection = document.getElementById("letterSection");
const letterText = document.getElementById("letterText");
const flowers = document.getElementById("flowers");

const photosBox = document.getElementById("photos");
const photo = document.getElementById("photo");
const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");

const LETTER_LINES = [
  "I love you so much more than I could ever fully explain and being with you is one of the greatest gifts in my life.",
  "You mean everything to me.",
  "You are incredibly beautiful and absolutely gorgeous inside and out.",
  "Love your smile, your eyes and the whole you baby.",
  "Lucky to call you mine.",
  "I love you, always and forever ♾️",
  "Your Daddy"
];

const PHOTO_FILES = ["photo1.jpg", "photo2.jpg"];
let photoIndex = 0;
let split = false;

// HEART CLICK
heartWrap.onclick = () => {
  if (split) return;
  split = true;
  heartWrap.classList.add("split");
  setTimeout(() => {
    firstMessage.classList.remove("hidden");
  }, 500);
};

// NEXT BUTTON
nextBtn.onclick = async () => {
  firstMessage.classList.add("hidden");
  letterSection.classList.remove("hidden");
  startFlowers();

  for (const line of LETTER_LINES) {
    const p = document.createElement("p");
    letterText.appendChild(p);
    for (const ch of line) {
      p.textContent += ch;
      await new Promise(r => setTimeout(r, 20));
    }
  }

  photosBox.classList.remove("hidden");
  showPhoto();
};

// PHOTOS
function showPhoto() {
  photo.src = PHOTO_FILES[photoIndex];
}

nextPhoto.onclick = () => {
  photoIndex = (photoIndex + 1) % PHOTO_FILES.length;
  showPhoto();
};

prevPhoto.onclick = () => {
  photoIndex = (photoIndex - 1 + PHOTO_FILES.length) % PHOTO_FILES.length;
  showPhoto();
};

// FLOWERS
function startFlowers() {
  setInterval(() => {
    const f = document.createElement("span");
    f.textContent = ["🌸","🌹","🌺","🌷"][Math.floor(Math.random()*4)];
    f.style.left = Math.random() * 100 + "vw";
    f.style.animationDuration = (6 + Math.random() * 6) + "s";
    flowers.appendChild(f);
    setTimeout(() => f.remove(), 12000);
  }, 400);
}
