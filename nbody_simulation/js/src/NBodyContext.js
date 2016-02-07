"use strict";

var NBodyContext = function () {

	this.bindStrategy("obtBtn", OrbitStrategy);
	this.bindStrategy("cptBtn", CarpetStrategy);
	this.bindStrategy("sprBtn", SpiralStrategy);
	this.bindStrategy("dstBtn", DistanceForceStrategy);

    this.initCanvas();
    this.simStrategy = new SpiralStrategy();
	this.run();
}


NBodyContext.prototype.initCanvas = function () {
	let canvas = document.getElementById('myCanvas');
	paper.setup(canvas);
	paper.install(window);
}


NBodyContext.prototype.run = function () {
	let $this = this;
	view.onFrame = function (event) {
		$this.simStrategy.simulate();
		$this.draw();
	}
}


NBodyContext.prototype.draw = function () {
    let s = this.simStrategy;
    for (let i = 0; i < s.getNumBodies(); i++) {
		s.getBodies()[i].draw();
	}
}


NBodyContext.prototype.bindStrategy = function (buttonID, strategyClass) {

    let $this = this;
    let b = document.getElementById(buttonID);

    b.onclick = function () {
        project.clear();
        $this.simStrategy = new strategyClass();
        $this.run();
    }
}
