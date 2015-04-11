vtd.board = (function () {
    var settings,
        mode,
        currWave,
        maxWaves,
        startMoney;

    //function to set variables based on mode
    function seVariables(mode)
    {
        switch(mode)
        {
            case "easy":
                {
                    mode = "easy";
                    maxWaves = 20;
                    break;
                }
            case "medium":
                {
                    mode = "normal";
                    maxWaves = 25;
                    break;
                }
            case "hard":
                {
                    mode = "hard";
                    maxWaves = 35;
                    break;
                }
        }
        vtd.board.mode = mode;
        vtd.board.maxWaves = maxWaves;
       
    }


    function initialize(callback) {
        settings = vtd.settings;
           

    }
    return {
        seVariables: seVariables,
        initialize: initialize
    };

})();

