const songList = {
  1: "imperfect for you.html",
  2: "save your tears.html",
};

const discover = document.querySelectorAll(".discoverSOTD");
let randomSong;

discover.forEach((button) => {
  button.addEventListener("click", function (e) {
    randomSong = Math.floor(Math.random() * 2 + 1);
    window.location.href = songList[randomSong];
  });
});
// discover.addEventListener("click", function (e) {
//   randomSong = Math.floor(Math.random() * 2 + 1);
//   window.location.href = songList[randomSong];
// });

console.log(songList[randomSong]);
