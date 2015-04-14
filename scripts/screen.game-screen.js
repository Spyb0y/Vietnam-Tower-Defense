vtd.screens["game-screen"] = (function () {
    var firstRun = true,
        paused;

    function startGame() {
        var board = vtd.board,
            display = vtd.display;
        board.initialize(function () {
            display.initialize(function () {
                display.redraw(board.getBoard(), function () {
                    // do nothing for now
                });
            });
        });
    }

    function pauseGame() {
        if (paused) {
            return; // do nothing if already paused
        }
        var dom = vtd.dom,
            overlay = dom.$("#game-screen .pause-overlay")[0];
        overlay.style.display = "block";
        paused = true;
    }

    function resumeGame() {
        var dom = vtd.dom,
            overlay = dom.$("#game-screen .pause-overlay")[0];
        overlay.style.display = "none";
        paused = false;
    }

    function exitGame() {
        pauseGame();
        var confirmed = window.confirm(
            "Do you want to return to the main menu?"
        );
        resumeGame();
        if (confirmed) {
            vtd.showScreen("main-menu");
        }
    }

    function setup() {
        var dom = vtd.dom;
        //dom.bind("footer button.exit", "click", exitGame);
        //dom.bind("footer button.pause", "click", pauseGame);
        //dom.bind(".pause-overlay", "click", resumeGame);
    }

    function run() {
        if (firstRun) {
            setup();
            firstRun = false;
        }
        startGame();
    }

    return {
        run: run
    };
})();
