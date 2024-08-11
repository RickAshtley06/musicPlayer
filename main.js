const player = document.getElementById("player");
const musicLink = "";

link1 =
  "https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg";
link2 = "https://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg";
link3 =
  "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg";

const card1 = document.getElementById("1");
const card2 = document.getElementById("2");
const card3 = document.getElementById("3");

const heading = document.getElementById("heading");

card1.addEventListener("click", () => {
  alert("you clicked on card 1");
  heading.textContent = "Now playing: " + card.textContent + "...";
  player.src = link1;
});

card2.addEventListener("click", () => {
  alert("you clicked on card 2");
  heading.textContent = "Now playing: " + card2.textContent + "...";
  player.src = link2;
});

card3.addEventListener("click", () => {
  alert("you clicked on card 3");
  heading.textContent = "Now playing: " + card3.textContent + "...";
  player.src = link3;
});
