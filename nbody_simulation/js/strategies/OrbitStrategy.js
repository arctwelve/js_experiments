"use strict";

define(function (require) {
    
    var Strategy = require('strats/Strategy'); 
    var CircleBody = require('app/CircleBody');
     
    var OrbitStrategy = function () {
                
        Strategy.call(this, {timeStep:1/10, gravity:0.5, damping:1.0});

        var c = view.center
        var star =   new CircleBody(c.x, c.y, 100, 300, 'orange');
        var planetA = new CircleBody(c.x, c.y + 350, 5, 0.1, 'blue');
        var planetB = new CircleBody(c.x, c.y - 250, 4, 0.09, 'red');
        var planetC = new CircleBody(c.x, c.y - 450, 6, 0.5, 'green');

        this.bodies = [];
        this.bodies.push(star);
        this.bodies.push(planetA);
        this.bodies.push(planetB);
        this.bodies.push(planetC);
        this.numBodies = this.bodies.length;

        planetA.addForce(new Point(-200, 0));
        planetB.addForce(new Point(-100, 0));
        planetC.addForce(new Point(-800, 0)); 
    }
    OrbitStrategy.prototype = Object.create(Strategy.prototype);
    OrbitStrategy.prototype.constructor = OrbitStrategy;
    
    return OrbitStrategy;  
});