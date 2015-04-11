vtd.board = (function () {
    var settings,
        jewels,
        cols,
        rows,
        baseScore,
        numJewelTypes,
        mode,
        currWave,
        maxWaves,
        startMoney;

    //function to set the mode difficulty
    function setMode(mode)
    {
        switch(mode)
        {
            case "easy":
                {
                    mode = "easy";
                    break;
                }
            case "medium":
                {
                    mode = "normal";
                    break;
                }
            case "hard":
                {
                    mode = "hard";
                    break;
                }
        }
        this.mode = mode;
        console.log(this.mode);
    }
    function initialize(callback) {
        settings = vtd.settings;
        

    }
    return {
        setMode: setMode,
        initialize: initialize
    };
})();

