window.addEventListener("load", getTimer());

function getTimer() {
  const startMinutes = 0.05; //(Testing)
  // const startMinutes = 2;//(project)
  let time = startMinutes * 60;
  const countDown = document.getElementById("countdown");
  let timeStopper = setInterval(updateCountDown, 1000);

  function updateCountDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDown.innerHTML = `${minutes}:${seconds}`;
    time--;

    if (time == -1) {
      clearTimeout(timeStopper);
    }
    if (time == -1) {
      let popUp = setTimeout(function open() {
        document.querySelector(".modal").style.display = "block";
      }, 0500);
    }
  }
}
getTimer();

//close the popUp
var modal = document.getElementById("closePopUp");

//When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  modal.style.display = "none";
  getTimer();
};
