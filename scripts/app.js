let eneteredplayername = 0;
let activeplayer = 0;
let counttheboard=1;
const data = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let gameovered=false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playeroverlay = document.getElementById("config-overlay");
const backdropshadow = document.getElementById("backdrop");
const cancelplayerbtn = document.getElementById("cancel-player-name");
const editplayer1btn = document.getElementById("edit-player-1-btn");
const formdata = document.querySelector("form");
const startnewgame = document.getElementById("startnewgame");
const activegame = document.getElementById("active-game");
let activeplayername = document.getElementById("active-player-name");
const gameover=document.getElementById('game-over');
const turn=document.getElementById('turn')

const errorelement = document.getElementById("config-error");
const editplayer2btn = document.getElementById("edit-player-2-btn");

cancelplayerbtn.addEventListener("click", cancelplayer);

editplayer1btn.addEventListener("click", onplayername);
editplayer2btn.addEventListener("click", onplayername);
backdropshadow.addEventListener("click", cancelplayer);
formdata.addEventListener("submit", formelement);
startnewgame.addEventListener("click", startNewGame);

const gamefield = document.getElementById("game-board");
gamefield.addEventListener("click", gamefieldelement);



const sim=document.getElementById('simply');

