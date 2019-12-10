 var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1,
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:430},
                {type: 'sawblade',x:800,y:450},
                {type: 'sawblade',x:1300,y:500},
                {type: 'sawblade',x:1700,y:500},
                {type: 'sawblade',x:2500,y:450},
                {type: 'sawblade',x:4000,y:430},
                {type: 'sawblade',x:5500,y:500}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        function createRobotBlade(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 15;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);

            var obstacleImage = draw.bitmap('img/sparkevilrobot3.png');
            obstacleImage.x = -45;
            obstacleImage.y = -45;
            obstacleImage.scaleX = 0.09;
            obstacleImage.scaleY = 0.09;
            myObstacle.addChild(obstacleImage);
        }

        for (var i = 0; i < levelData.gameItems.length; i++) {
            var eachGameItem = levelData.gameItems[i];
            var type = eachGameItem.type;
            var x = eachGameItem.x;
            var y = eachGameItem.y;

            createRobotBlade(x, y);

        }
            var enemy =  game.createGameItem('enemy',25);
            var redSquare = draw.rect(50,50,'red');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.x = 400;
            enemy.y = groundY-50;
            enemy.addChild(redSquare);
            game.addGameItem(enemy);
    };

};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}