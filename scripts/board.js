vtd.board = (function () {
    var settings,
            mode,
            currWave,
            currGold,
            maxWaves,
            hpMultiplier,
            scoreMultiplier,
            playerHealth,
            startGold;
    
           

        

    function initialize(callback) {
        settings = vtd.settings;
        currWave = vtd.currWave;
        currGold = vtd.currGold;
        
        
        
           
        callback();
    }

    function print() {
        var str = "";
       
            str += "\r\n";
        
        console.log(str);
}

    return {
        initialize: initialize,
        print : print
    };

})();

