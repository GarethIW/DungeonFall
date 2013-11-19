﻿
/**
 * a HUD container and child items
 */

game.HUD = game.HUD || {};

game.HUD.TextLines = [],
game.HUD.addLine = function (line) {
    game.HUD.TextLines[game.HUD.TextLines.length] = line;
};

game.HUD.Container = me.ObjectContainer.extend({

    init: function () {
        // call the constructor
        this.parent();

        // persistent across level change
        this.isPersistent = true;

        // non collidable
        this.collidable = false;

        // make sure our object is always draw first
        this.z = -1;

        // give a name
        this.name = "HUD";

        var textWindow = new game.HUD.TextWindow(500, 608);
        this.addChild(textWindow);

        var bg = new me.SpriteObject(0, 608, me.loader.getImage("hudbg"), 1120, 128);
        bg.floating = true;
        bg.z = -2;
        this.addChild(bg);

        for(var i=0;i<7;i++) game.HUD.addLine("");

        this.alwaysUpdate = true;
    },

   
});



game.HUD.TextWindow = me.ObjectContainer.extend({ 
    init: function (x, y) {
        this.parent(x,y,620,128);

        this.font = new me.BitmapFont("font", { x: 32, y:32 }, 0.5);
        this.font.alignText = "top";

        this.floating = true;
        this.z = -1;
    },

    update: function () {


        return false;
    },

    draw: function (context) {
        var y = 2;
        for(var i=game.HUD.TextLines.length-7;i<game.HUD.TextLines.length;i++) {
            this.font.draw(context, game.HUD.TextLines[i], this.pos.x, this.pos.y + y);
            y+=18
        }
    }
});

//game.HUD.ScoreItem = me.Renderable.extend({
//    init: function (x, y) {
//        this.parent(new me.Vector2d(x, y), 10, 10);

//        this.font = new me.BitmapFont("font", { x: 32, y: 32 });
//        this.font.alignText = "bottom";
//        this.font.set("center", 1);

//        this.score = 0;

//        this.floating = true;
//    },

//    update: function () {

//        if (this.score !== game.data.score) {
//            this.score = game.data.score;
//            return true;
//        }
//        return false;
//    },

//    draw: function (context) {
//        this.font.draw(context, game.data.score, this.pos.x, this.pos.y);

//    }
//});

//game.HUD.LivesItem = me.Renderable.extend({
//    init: function (x, y) {
//        this.parent(new me.Vector2d(x, y), 10, 10);

//        this.font = new me.BitmapFont("font", { x: 32, y: 32 });
//        this.font.alignText = "bottom";
//        this.font.set("left", 1);

//        this.lives = 0;

//        this.floating = true;
//    },

//    update: function () {

//        if (this.lives !== game.data.lives) {
//            this.score = game.data.lives;
//            return true;
//        }
//        return false;
//    },

//    draw: function (context) {
//        this.font.draw(context, "x" + game.data.lives, this.pos.x, this.pos.y);

//    }
//});