
function resetgame()
{
    activeplayer=0;
    counttheboard=1;
    eneteredplayername=0
    gameovered=false;
    gameover.firstElementChild.innerHTML="You won,<span id='winner-name'>PLAYER NAME</span>!";
    gameover.style.display='none';

    let dataele=0;
    for(let i=0;i<3;i++)
    {
        for(let j=0;j<3;j++)
        {
            data[i][j]=0
            gamefield.children[dataele].textContent=' ';
            gamefield.children[dataele].classList.remove('disabled');
            dataele++;

        }
    }

}
function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Plase enter names for both players");
    return;
  }
  resetgame();
  activeplayername.textContent = players[activeplayer].name;
  activegame.style.display = "block";
}

function activePlayer() {
  if (activeplayer == 0) {
    activeplayer = 1;
  } else {
    activeplayer = 0;
  }
  activeplayername.textContent = players[activeplayer].name;
}
function gamefieldelement(event) {
  if (event.target.tagName != "LI" || gameovered) {
    return;
  }
  const selectedelement = event.target;
  let selectedcol = selectedelement.dataset.col - 1;
  let selectedrow = selectedelement.dataset.row - 1;
  if (data[selectedrow][selectedcol] > 0) {
    alert("please select the row which is empty");
    return;
  }

  data[selectedrow][selectedcol] = activeplayer + 1;
  //   console.log(data);

  selectedelement.textContent = players[activeplayer].symbol;
  selectedelement.classList.add("disabled");

  const winner = checkforwinner();
  //   console.log(winner);
  if (winner !== 0) {

    Gameover(winner);
    

  }
  counttheboard++;
  activePlayer();
}

function checkforwinner() {
  for (let i = 0; i < 3; i++) {
    if (
      data[i][0] > 0 &&
      data[i][0] == data[i][1] &&
      data[i][1] == data[i][2]
    ) {
      return data[i][0];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      data[0][i] > 0 &&
      data[0][i] == data[1][i] &&
      data[1][i] == data[2][i]
    ) {
      return data[0][i];
    }
  }

  if (data[0][0] > 0 && data[0][0] == data[1][1] && data[1][1] == data[2][2]) {
    return data[0][0];
  }
  if (data[2][0] > 0 && data[2][0] == data[1][1] && data[1][1] == data[0][2]) {
    return data[2][0];
  }
  if (counttheboard == 9) {
    return -1;
  }

  return 0;
}

function Gameover(winner) {
  gameover.style.display = "block";
  gameovered=true;
 
  
  if (winner > 0) {
    gameover.firstElementChild.firstElementChild.textContent =
      players[winner - 1].name;
  } else {
    gameover.firstElementChild.textContent = "It's a draw";
  }
}
