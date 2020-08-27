
const outerBox = document.querySelector('.outer-box');

function newGame() {
  for(let i = 1; i <= 7000; i++) {
    const myDiv = document.createElement('div');
    outerBox.appendChild(myDiv);
  }
}

newGame();

function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
   const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  // const rndCol = 'red';
  return rndCol;
}

const divs = document.querySelectorAll('div');

for(let i = 0; i < divs.length; i++) {
  divs[i].onmousemove = function(e) {
    e.target.style.backgroundColor = bgChange();
  }
}
