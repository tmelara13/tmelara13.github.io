(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     * 
     * Add as many cannons as necessary (at least 3) to make your level challenging. 
     *
     * The following functions are available to you:
     *  cannon.create.onTop(xLocation);
     *  cannon.create.onBottom(xLocation);
     *  cannon.create.onLeft(yLocation);
     *  cannon.create.onRight(yLocation);
     */ 
    cannon.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        cannon.create.onRight(55);
        cannon.create.onTop(710);
        cannon.create.onTop(226);
        cannon.create.onLeft(470);
        cannon.create.onBottom(350);
        

        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);
