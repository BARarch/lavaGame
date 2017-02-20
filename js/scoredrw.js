///////////////////////////  SCORE Display  ////////?/////////////////////

function SCOREDisplay(parent, level) {
	this.container = parent.appendChild(elt("div", "scoreing"));
	this.level = level;
	
	var levelSymbol = this.drawLevelSymbol();
	var levelNum = this.drawLevelCount();
	//var heart = this.drawHeart();
	//var xSymbol = this.drawX();
	//var lifeNum = this.container.appendChild(this.drawLifeNum());
	//var coinSymbol = this.drawCoin();
	//var coinNum = this.container.appendChild(this.drawCoinNum());
	//var slashSymbol = this.drawSlash();
	//var coinCount = this.container.appendChild(this.drawCoinCount());

	//this.drawScoreFrame();
}



SCOREDisplay.prototype.drawLevelSymbol = function() {
	return new BitMap(LEV, this.container, "s-level-symbol");
};


SCOREDisplay.prototype.drawLevelCount = function() {
	return new Numeral2(NUMERALS, this.container, "s-level-count");
};
/*
SCOREDisplay.prototype.drawHeart = function() {
	return new Bitmap(HEART, this.container, "s-heart");	
};

SCOREDisplay.prototype.drawX= function() {
	return new Bitmap(TIMES, this.container, "s-x");
};

SCOREDisplay.prototype.drawLifeNum = function() {
	return new Numeral2(NUMERALS, "s-life-num");	
};

SCOREDisplay.prototype.drawCoin = function() {
	return new Bitmap(COIN, this.container, "s-coin");
};

SCOREDisplay.prototype.drawCoinNum = function() {
	return new Numeral2(NUMERALS, "s-coun-num");
};

SCOREDisplay.prototype.drawSlash = function() {
	return new Bitmap(OVER, this.container, "s-slash");
};

SCOREDisplay.prototype.drawCoinCount = function() {
	return new Numeral2(NUMERALS, "s-coin-count");
};

*/

var scoreScale = 2;



///////////////////////////  BITMAP  ///////////////////////////////
function BitMap(sbmap, parent, classname) {
	console.log(typeof parent);
	console.log(typeof sbmap);
	sbmap.forEach(function (row) {
		console.log (typeof row)});
	this.sfont = sbmap;
	this.bmap = parent.appendChild(this.drawBitmap(classname));
	
	//this.drawBitmap(); 
}

BitMap.prototype.drawBitmap = function (classname) {
	//console.log(typeof sbmap);
	//var rand = LEV[0];
	//console.log(typeof sbmap[0]);
	//console.log(typeof sbmap);
	//this.sfonts.forEach(function (row) {
	//	console.log (typeof row)});
	var width = this.sfont[0].length;
	var table = elt("table", classname);
	table.style.width = width * scoreScale + "px";
	this.sfont.forEach(function(row){
		console.log (typeof row)
		rowElt = table.appendChild(elt("tr"));
		rowElt.style.height = scoreScale + "px";
		for (var ch = 0; ch < width; ch++) {
			if(row[ch] == " ")
				rowElt.appendChild(elt("td"));
			else
				rowElt.appendChild(elt("td", row[ch].toString()));
		}
	});
	return table;
};


	

///////////////////////////  NUMERAL  ///////////////////////////////

function Numeral(numbers, parent, classname){
	this.digit = parent.appendChild(elt("div", classname));
	this.digitPixelRows = numbers[0].length;
	this.digit.style.maxHeight = this.digitPixelRows * scoreScale + "px";
	this.numbersSprite = collapse(numbers);
	console.log(this.numbersSprite);
	this.numStrip = new BitMap(this.numbersSprite, this.digit, "s-num-strip");
	this.showDigit(0);
}

Numeral.prototype.newNumberSprite = function(nums){
	var numStrip = new Array(nums[0]);
	console.log(nums);
	console.log(numStrip);
	nums.forEach(function(elm) {numStrip.concat(elm)} );
	console.log(numStrip);
	return numStrip;
};

function collapse(arr) {
	var elm = arr[0];
	if(arr.length <= 1)
		return elm;
	else
		return elm.concat(collapse(arr.slice(1, arr.length)));
}

Numeral.prototype.showDigit = function(num){
	var offset = Math.floor(num) % 10;
	this.digit.scrollTop = offset * this.digitPixelRows * scoreScale;
};



///////////////////////////  NUMERAL2  //////////////////////////////

function Numeral2(numbers, parent, classname){
	this.pair = parent.appendChild(elt("div", classname));
	this.leftDigit = new Numeral(numbers, this.pair, "s-left-digit");
	this.rightDigit = new Numeral(numbers, this.pair, "s-right-digit");

}

Numeral2.prototype.showNum = function(num){
	var leftVal = Math.floor((num % 100)/10);
	var rightVal = Math.floor(num %10 );

	this.leftDigit.showDigit(leftVal);
	this.rightDigit.showDigit(rightVal);
};







