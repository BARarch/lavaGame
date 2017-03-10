////////////////////////////   The Game Engine   /////////////////////////////////
var arrowCodes = {37: "left", 38:  "up", 39: "right", 27: "pause"};
var pauseCode = 27;

// TrackKeys Function
function trackKeys(codes) {
	var pressed = Object.create(null);
	function handler(event) {
		if (codes.hasOwnProperty(event.keyCode)) {
			var down = event.type == "keydown";
			pressed[codes[event.keyCode]] = down;
			event.preventDefault();
		}
	}
	addEventListener("keydown", handler);
	addEventListener("keyup", handler);
	return pressed;
}

// Pause Handler
// Tracks The Escape Button controll the pause state
function trackPause(code){
	//var pause = Object.create(null);
	var pause = { state: false,
				  clear: false,
				  paused: function() {return pause.state;} };

	var pauseState;
	var pause2;
	function pauseHandler(event) {
	
		 pauseState = pause.state;
		 pause2 = pause.clear;
	
		if (event.keyCode == code) {
			if (!pauseState && (event.type == "keydown") && !pause2){
				pause.state = true;
				pause.clear = false;
				console.log("Pause Issued");
			} else if (pauseState && (event.type == "keyup") && !pause2){
			// The first keyup we ignore but record so the following keydown cancels the pause
				pause.state = true;
				pause.clear = true;		
			} else if (pauseState && (event.type == "keydown") && pause2) {
				pause.state = false;
				pause.clear = true;
				console.log("Pause Arrested");
			} else if (!pauseState && (event.type == "keyup") && pause2) {
			// On the seconde keyup we reset the pause fsm so we can pause again
				pause.state = false;
				pause.clear = false;	
			}
		}				
	}		
	addEventListener("keydown", pauseHandler);
	addEventListener("keyup", pauseHandler);
	return pause;
}

// runAnimation
function runAnimation(frameFunc) {
	var lastTime = null;
	function frame(time) {
		var stop = false;
		if (lastTime != null) {
			var timeStep = Math.min(time - lastTime, 100) / 1000;
			stop = frameFunc(timeStep) === false;
		}
		lastTime = time;
		if (!stop)
			requestAnimationFrame(frame);
	}
	requestAnimationFrame(frame);
}

var arrows = trackKeys(arrowCodes);
var pause = trackPause(pauseCode);
var gamePaused = pause.paused;

// runLevel
function runLevel(level, Display, Score, levelNum, lifeNum, andThen) {
	var display = new Display(document.body, level);
	var score = new Score(display.wrap, level);
	var pause3 = false;
	var gameOver2 = false 
	score.setLevelNum(levelNum);
	score.setLifeNum(lifeNum);
	score.setCoinCount(level.totalCoins);
	runAnimation(function(step) {
		
		//console.log("State of Pause:", pause);
		if (!gamePaused()) {	
			level.animate(step, arrows);
			if(level.foundCoin())
				score.setCoinNum(level.collectedCoins)
			if(pause3) {
				score.turnOffPause();
				pause3 = false;
			}
			display.drawFrame(step);
		}else{
			if(!pause3){
				score.turnOnPause();
				pause3 = true;
			}
		}

		if(level.status == "lost" && lifeNum == 0 && !gameOver2) {
			score.turnOnGameOver();
			gameOver2 = true;
		}
		
		if (level.isFinished()) {
			display.clear();
			if (andThen)
				andThen(level.status);
			return false
		}
	});
}


// runGame
function runGame(plans, Display, Score) {
	var initLives = 2;
	function startLevel(n, lives) {
		console.log("qp x0" + lives.toString());
		runLevel(new Level(plans[n]), Display, Score, n + 1, lives, function(status) {
			if (status == "lost") {
				if (lives > 0)
					startLevel(n, --lives);	
				else {
					console.log("Game Over");
					startLevel(0, initLives);
						
				}						
			} else if (n < plans.length - 1)
				startLevel((n + 1), lives);
			else
				console.log("You Win");				
		});
	}
	startLevel(0, initLives);
}