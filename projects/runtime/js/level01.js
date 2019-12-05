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
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY}
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
        
        createRobotBlade(800, 450);
        createRobotBlade(1000, 400);
        createRobotBlade(1500, 470);
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}