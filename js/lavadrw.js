//////////////////////////////  Helpers  /////////////////////////////////

function elt(name, className){
	var elt = document.createElement(name);
	if (className) elt.className = className;
	return elt;
}


////////////////////////////  DOM Display  ///////////////////////////////

function DOMDisplay(parent, level){
	this.wrap = parent.appendChild(elt("div", "game"));
	this.level = level;
	
	this.wrap.appendChild(this.drawBackground());
	this.actorLayer = null;
	this.drawFrame();
}

var scale = 20;

DOMDisplay.prototype.drawBackground = function() {
	var table = elt("table", "background");
	table.style.width = this.level.width * scale + "px";
	this.level.grid.forEach(function(row) {
		var rowElt = table.appendChild(elt("tr"));
		rowElt.style.height = scale + "px";
		row.forEach(function(type) {
			rowElt.appendChild(elt("td", type));
		});
	});
	
	return table;
};

DOMDisplay.prototype.drawActors = function() {
	var wrap = elt("div");
	this.level.actors.forEach(function(actor) {
		var rect = wrap.appendChild(elt("div", "actor " + actor.type));
		rect.style.width = actor.size.x * scale + "px";
		rect.style.height = actor.size.y * scale + "px";
		rect.style.left = actor.pos.x * scale + "px";
		rect.style.top = actor.pos.y * scale + "px";
	});
	return wrap;
};

DOMDisplay.prototype.drawFrame = function() {
	if (this.actorLayer)
		this.wrap.removeChild(this.actorLayer);
	this.actorLayer = this.wrap.appendChild(this.drawActors());
	this.wrap.className = "game " + (this.level.status || "");
	this.scrollPlayerIntoView();	
};

DOMDisplay.prototype.scrollPlayerIntoView = function() {
	var width = this.wrap.clientWidth;
	var height = this.wrap.clientHeight;
	var margin = width / 3;
	var vmargin = height / 3;
	
	//console.log("This Margin " + margin.toFixed(2).toString());
	
	// The Viewport
	var left = this.wrap.scrollLeft, right = left + width;
	var top = this.wrap.scrollTop, bottom = top + height;
	
	var player = this.level.player;
	var center = player.pos.plus(player.size.times(0.5)).times(scale);
	
	
	//console.log("This Player x " + center.x.toFixed(2).toString() + " " + player.pos.x.toFixed(2).toString());
	//console.log(" Bottom " + bottom.toString());
	
	
	if (center.x < left + margin){
		this.wrap.scrollLeft = center.x - margin;
		//console.log("Scroll left");
	}else if (center.x  > right - margin){
		//console.log("Scroll Right");	
		this.wrap.scrollLeft = center.x + margin - width;
	}
	if (center.y < top + vmargin)
		this.wrap.scrollTop = center.y - vmargin;
	else if (center.y > bottom - vmargin){
		this.wrap.scrollTop = center.y + vmargin - height;
		//console.log("Scroll Down");
	}
};

DOMDisplay.prototype.clear = function() {
	this.wrap.parentNode.removeChild(this.wrap);
};