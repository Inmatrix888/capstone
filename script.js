//get user selected text
const getUserSelectedText = () => {
  return window.getSelection().toString();
};
// knowing when user is at end of screen
window.onscroll = () => {
  if (window.innerHeight + window.pageOffset >= document.body.offsetHeight) {
  }
};
//console.log ("you are at the end of page".)

//taking user back top
const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function spinWheel() {
  let userNumber =Number(prompt("Whats the lucky number?"));
  let luckyNumber = 73;
  let chances = 2;
  for (let i = 1; i <= chances; i++) {
    if (i== 1) {
      if (luckyNumber == userNumber) {
        alert("Congratulations you've won a cake!");
        i=2
      }
    } else {
      let userNumber2 = Number(prompt("Sorry Try Again"));
      if (userNumber2 == luckyNumber) {
        alert("congratulations you've won 20% off your next order");
      } else {
        alert("Sorry Try Again Tomorrow");
      }
    }
  }
}
