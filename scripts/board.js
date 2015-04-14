vtd.board = (function () {
    var settings,
            mode,
            currWave,
            maxWaves,
            hpMultiplier,
            scoreMultiplier,
            playerHealth,
            startGold;
    
           

        

    function initialize(mode, callback) {
        settings = vtd.settings;
        currWave = vtd.currWave;
        
        
        
           
        callback();
    }
    return {
        initialize: initialize
    };

})();

