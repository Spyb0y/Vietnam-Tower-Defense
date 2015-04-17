vtd.board = (function () {
    var settings,
            mode,
            currWave,
            currGold,
            maxWaves,
            hpMultiplier,
            scoreMultiplier,
            playerHealth,
            globalTowerPositions,
            startGold;
    
           

        

    function initialize(callback) {
        settings = vtd.settings;
        currWave = settings.currWave;
        currGold = settings.currGold;
        
        
        
           
        callback();
    }

    function fillBoard()
    {
        var towerPositions = [];

        var mapWidth = 700//background.width;
        var boxSize = mapWidth / cols;

        var pos1 = { x: (boxSize * 1) - boxSize, y: 10 };
        towerPositions[towerPositions.length] = pos1;
        var pos2 = { x: (boxSize * 2) - boxSize, y: 10 };
        towerPositions[towerPositions.length] = pos2;
        var pos3 = { x: (boxSize * 3) - boxSize, y: 10 };
        towerPositions[towerPositions.length] = pos3;
        var pos4 = { x: (boxSize * 4) - boxSize, y: 10 };
        towerPositions[towerPositions.length] = pos4;
        var pos5 = { x: (boxSize * 5) - boxSize, y: 10 };
        towerPositions[towerPositions.length] = pos5;
        var pos6 = { x: (boxSize * 6) - boxSize, y: 10 };
        towerPositions[towerPositions.length] = pos6;
        var pos7 = { x: (boxSize * 7) - boxSize, y: 10 };
        towerPositions[towerPositions.length] = pos7;
        var pos8 = { x: (boxSize * 8) - boxSize, y: 10 };
        towerPositions[towerPositions.length] = pos8;
        var pos9 = { x: (boxSize * 9) - boxSize, y: 10 };
        towerPositions[towerPositions.length] = pos9;
        var pos10 = { x: (boxSize * 10) - boxSize, y: 10 };
        towerPositions[towerPositions.length] = pos10;
        var pos11 = { x: (boxSize * 11) - boxSize, y: 10 };
        towerPositions[towerPositions.length] = pos11;
        var pos12 = { x: (boxSize * 12) - boxSize, y: 10 };
        towerPositions[towerPositions.length] = pos12;
        var pos13 = { x: (boxSize * 13) - boxSize, y: 10 };
        towerPositions[towerPositions.length] = pos13;
        var pos14 = { x: (boxSize * 14) - boxSize, y: 10 };
        towerPositions[towerPositions.length] = pos14;
        var pos15 = { x: (boxSize * 15) - boxSize, y: 10 };
        towerPositions[towerPositions.length] = pos15;

        globalTowerPositions = towerPositions;
        
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

