function onplayername(event) {
  eneteredplayername=+event.target.dataset.playername;
  // console.log(eneteredplayername);
  playeroverlay.style.display = "block";
  backdropshadow.style.display = "block";
}

function cancelplayer() {
  playeroverlay.style.display = "none";
  backdropshadow.style.display = "none";
  formdata.firstElementChild.classList.remove('error');
  errorelement.textContent='';
  formdata.firstElementChild.lastElementChild.value='';

}

function formelement(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const enteredname = form.get("playername").trim();
  //   console.log(enteredname);

  if (!enteredname) {
    event.target.firstElementChild.classList.add('error');
    errorelement.textContent = "Plase enter a valid username!";
    return;
  }
  

  const entered=document.getElementById('player-'+eneteredplayername+'-data');
  entered.children[1].textContent=enteredname;
  players[eneteredplayername-1].name=enteredname;
  cancelplayer();
}
