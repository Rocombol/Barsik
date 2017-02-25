"use strict";

function Cat () {
	var empty,
    	events = {};

    this.on = function (eventName, callback) {
        if (!events[eventName]) {
            events[eventName] = [];
        }       
        events[eventName].push(callback);
    };

    this.trigger = function(eventName, arg) {
        if (events[eventName]){                
            events[eventName].forEach(function (callback) {
                callback(arg);
            });         
        }                           
    };
	
	this.play = function () {
        empty = true;
        this.trigger('empty');
    };
	
    this.eat = function () {
        empty = false;
        this.trigger('sleep');
    };


}

var barsik = new Cat();

barsik.on('empty', function () {
    console.log('-Meow, Hey, I want to eat!');
});

barsik.on('sleep', function () {
    console.log(' Thx, now I want to sleep');
});

barsik.play();


barsik.eat();