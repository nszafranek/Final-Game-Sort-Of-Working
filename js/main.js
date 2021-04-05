var hitPoints = 4;
var score = 0;
var time = 0;
var gemCount = 0;
var coinCount = 0;
var fightType
var flightType
var posX
var posY
var spriteSpeed
var nextShark = 0;
var sharkMinWait = 1;
var sharkInterval = 3;
var sharkArr = [];
var nextGem = 0;
var gemMinWait = 20;
var gemInterval = 30;
var gemArr = [];
var nextcoin = 0;
var coinMinWait = 5;
var coinInterval = 10;
var coinArr = [];
var scoreOutput = document.getElementById('scoreOutput')
var scoreOutputing = setInterval(scoreSeconds, 1000);
var enemies = document.getElementsByClassName('enemies');

setInterval(function () {

  if (time == nextShark) {
    createNewShark();
    nextShark = Math.ceil(Math.random() * sharkInterval + sharkMinWait) + nextShark;
  }

  if (time == nextGem) {
    createNewGem();
    nextGem = Math.ceil(Math.random() * GemInterval + GemkMinWait) + nextGem;
  }

  if (time == nextCoin) {
    createNewCoin();
    nextGem = Math.ceil(Math.random() * Cointerval + CoinkMinWait) + nextCoin;
  }

  time++;

}, 1000);

function scoreSeconds() {
  score += 1;
  scoreOutput.innerText = "SCORE :" + (score);
}

function dash() {
  //dash forward

if (keys[90]) {
  hero.style.left=parseInt(hero.style.left)+20 +'px';
  //startle nearby enemy
  startleEnemy();
}
else {

}
}
document.addEventListener("keypress", dash);
function populateObject() {
  //use random sprite from pool
  //determine x and y position
  //have it move from right to left of screen at random spriteSpeed
}
function shield() {
//prevent damage
}

function hpLoss() {
  //lose 1 hp
    hitPoints = hitPoints - 1;
    if (hitPoints == 3) {
      var hpChange = document.getElementById('hp');
      element.classList.remove("hpFull");
      element.classList.add("hp3")
    }
    else if (hitPoints == 2) {
      var hpChange = document.getElementById('hp');
      element.classList.remove("hp3");
      element.classList.add("hp2")
    }
    else if (hitPoints == 1) {
      var hpChange = document.getElementById('hp');
      element.classList.remove("hp2");
      element.classList.add("hp1")
    }
    else {
      gameOver();
    }
}
function heartGet() {
  //gain 1 hp
  hitPoints = hitPoints + 1;
  if (hitPoints >= 4) {
    invincibility();
  }
  else {

  }
}
function invincibility(){
  //hero is invincible for 30 secods
}
function timeBonus() {
  //add time to score
  score = score + time;
}
function startleEnemy() {
  //startle nearby sprites for 4s
  if (fightType) {
    //sprite becomes agressive
    agro();
  }
  else {
    //sprite becomes avoidant
    avoid();
  }
}
function gemGet() {
  //add 50 points to score
  score = score + 50;
  //add 1 gem to count
  gemCount = gemCount + 1;
}
function coinGet() {
  //add 10 points to score
  score = score + 10;
  //add 1 coin to count
  coinCount = coinCount + 1;
}
function agro() {
  //change sprite to agressive version
  //turn on hitDetection for sprite
}
function moveBckgrnd() {
  //select random background scenery and add to queue, move right to left until it disappears off screen
}
function moveFrgrnd() {
  //select random foreground scenery and add to queue, move right to left until it disappears off screen.

}
function avoid() {
   //swims away from you

}
function knockBack() {
  //Knock sprite back if blocking way ahead, make passable briefly
}
function gameOver() {
  timeBonus();
}
function createNewShark() {
  // <div class="shark"></div>
  var shark = document.createElement('div');
  shark.classList.add('shark');
  shark.style.top = (Math.random() * (window.innerHeight - 100) + 50) + 'px';
  shark.addEventListener('click', function() {
    this.classList.add('agressive');
  })
  sharkArr.push(enemies.appendChild(shark));


}
function createNewGem() {
  // <div class="gem"></div>
  var gem = document.createElement('div');
  gem.classList.add('gem');
  gem.style.top = (Math.random() * (window.innerHeight - 100) + 50) + 'px';
  gem.addEventListener('click', function() {
    this.classList.add('item');
  })
  gemMake.push(items.appendChild('gem'));

}
function createCoin() {
  // <div class="coin"></div>
  var gem = document.createElement('div');
  coin.classList.add('coin');
  coin.style.top = (Math.random() * (window.innerHeight - 100) + 50) + 'px';
  coin.addEventListener('click', function() {
    this.classList.add('item');
  })
  gemMake.push(items.appendChild('coin'));
}

var hero= null;
	function init(){
		hero=document.getElementById("hero");
		hero.style.position='relative';
		hero.style.left='20px';
		hero.style.top='50%';
	}
	function getKeyAndMove(e){
		var key_code=e.which||e.keyCode;
		switch(key_code){
			case 37: //left arrow key
				moveLeft();
				break;
			case 38: //Up arrow key
				moveUp();
				break;
			case 39: //right arrow key
				moveRight();
				break;
			case 40: //down arrow key
				moveDown();
				break;
		}
	}
	function moveLeft(){
		hero.style.left=parseInt(hero.style.left)-5 +'px';
	}
	function moveUp(){
		hero.style.top=parseInt(hero.style.top)-5 +'px';
	}
	function moveRight(){
		hero.style.left=parseInt(hero.style.left)+5 +'px';
	}
	function moveDown(){
		hero.style.top=parseInt(hero.style.top)+5 +'px';
	}
	window.onload=init;
