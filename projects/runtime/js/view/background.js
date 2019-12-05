/*eslint-disable no-shadow, no-redeclare, no-unused-vars*/
var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var tree; 
        var buildings = [];  
        var building; 
        var mountain;
        var mountains = [];
        var gras; 
        var grass = [];
        var fatTree;
        var tallTrees = [];
        var tallTree;
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth, groundY,'#410663');
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
            var circle;
            for(var i = 0; i < 100 ;i ++) {
                circle = draw.circle(1,'white','LightGray', 0.2);
                circle.x = canvasWidth*Math.random();
                circle.y = groundY*Math.random();
                background.addChild(circle);
            }
           
           var moon = draw.bitmap('img/sparkmoon3.png');
                moon.x = 700;
                moon.y = -100;
                moon.scaleX = 0.5;
                moon.scaleY = 0.5;
                background.addChild(moon);
                
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
              for(var i=0;i<15;++i) {
            var buildingHeight = 30;
            var building = draw.rect(1000,buildingHeight,'LightGray','Black',1);
            building.x = 200*i;
            building.y = groundY-buildingHeight;
            background.addChild(building);
            buildings.push(building);
        }
             
              var mountainHeight = 200;
            
            for(var i = 0; i < 20; i ++) {
                mountain = draw.bitmap('img/sparkbackgroundbig3.png');
                mountain.x = 200*i;
                mountain.y = 220;
                mountain.scaleX = 0.3;
                mountain.scaleY = 0.4; 
                background.addChild(mountain);
                mountains.push(mountain);
            }
             
             
             
             var buildingHeight = 200;
             
             for(var i = 0; i < 15; i ++) {  
                building = draw.bitmap('img/sparkforegroundbig3.png');
                building.x = 200*i;
                building.y = 350;
                building.scaleX = 0.3;
                building.scaleY = 0.4;
                background.addChild(building);
                buildings.push(building);
            }
        

   
                                
            // TODO 4: Part 1 - Add a tree
            
            
               var tallTreeHeight = 200;
            
            for(var i = 0; i < 8; i ++) {
                tallTree = draw.bitmap('img/sparktalltree2.png');
                tallTree.x = 150*i;
                tallTree.y = 380;
                tallTree.scaleX = 0.1;
                tallTree.scaleY = 0.1; 
                background.addChild(tallTree);
                tallTrees.push(tallTree);
            }
           tree = draw.bitmap('img/sparktree2.png');
                tree.x = 1600;
                tree.y = 300;
                tree.scaleX = 0.2;
                tree.scaleY = 0.2;
                background.addChild(tree);
                
                 fatTree = draw.bitmap('img/sparkfattree2.png');
                fatTree.x = 800;
                fatTree.y = 283;
                fatTree.scaleX = 0.2;
                fatTree.scaleY = 0.2;
                background.addChild(fatTree);
                
                   var grasHeight = 200;
             
             for(var i = 0; i < 60; i ++) {  
                gras = draw.bitmap('img/sparkgrass3.png');
                gras.x = 30*i;
                gras.y = 472;
                gras.scaleX = 0.2;
                gras.scaleY = 0.1;
                background.addChild(gras);
                grass.push(gras);
            }
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            
            if(tree.x < -250) {
               tree.x = canvasWidth;
          
         }
                tree.x = tree.x - 3;  
                
                 if(fatTree.x < -250) {
               fatTree.x = canvasWidth;
          
         }
                fatTree.x = fatTree.x - 3;  
                
                 for(var i = 0; i < tallTrees.length; i ++) {
                   tallTree = tallTrees[i]; 
                    tallTree.x = tallTree.x -2.1;  
                 if(tallTree.x < -250) {
                    tallTree.x = canvasWidth;
          }    
                }
                
                for(var i = 0; i < grass.length; i ++) {
                   gras = grass[i]; 
                    gras.x = gras.x -4;  
                 if(gras.x < -250) {
                    gras.x = canvasWidth;
          
         }
            }
            // TODO 5: Part 2 - Parallax               
             for(var i = 0; i < mountains.length; i ++) {
                   mountain = mountains[i]; 
                    mountain.x = mountain.x -0.1;  
                 if(mountain.x < -250) {
                    mountain.x = canvasWidth;
          
         }
            }

            
            
            
            for(var i = 0; i < buildings.length; i ++) {
                   building = buildings[i]; 
                   building.x = building.x -1;
                if(building.x < -250) {
                   building.x = canvasWidth;
                }
         }

                for(var i = 0; i < buildings.length; i ++) {
                  building = buildings[i]; 
                   building.x = building.x -0.1;
                if(building.x < -250) {
                   building.x = canvasWidth;
                }
         }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
