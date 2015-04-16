vtd.board = (function () {
    var settings,
            mode,
            currWave,
            currGold,
            maxWaves,
            hpMultiplier,
            scoreMultiplier,
            playerHealth,
            towerPositions,
            startGold;
    
           

        

    function initialize(callback) {
        settings = vtd.settings;
        currWave = settings.currWave;
        currGold = settings.currGold;
        
        
        
           
        callback();
    }

    function fillBoard()
    {
        var x, y;

        for(x = 0; x < 15; x++)
        {
            towerPositions[x] = [];
            for(y = 0; y < 13; y++)
            {
                towerPositions[x] [y] = 1;
                //if(x == 1 && y == 2 || x == 1 && y == 3 || x == 1 && y == 4 || x == 1 && y == 5 || x == 1 && y == 6 || x == 2 && y == 11 || x == 2 && y == 12 || x == 2 && y == 13 || x == 2 && y == 14 ||
                   // x == 2 && y == 15 ||x == 3 && y == 2 || x == 3 && y == 3 || x == 3 && y == 4 || x == 3 && y == 6 || x == 3 && y == 11 || x == 4 && y == 4 || x == 4 && y == 6 || x == 4 && y == 11 ||
                   // x == 4 && y == 13 || x == 4 && y == 14 || x == 4 && y == 15 || x == 5 && y == 1 || x == 1 && y == 1 || x == 1 && y == 1 || x == 1 && y == 1 || x == 1 && y == 1 || x == 1 && y == 1 ||)
            }
        }
        
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

