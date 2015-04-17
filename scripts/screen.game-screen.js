vtd.screens["game-screen"] = (function () {
    var firstRun = true,
        paused,
        cursor;

    function startGame() {
        var board = vtd.board,
            display = vtd.display;


        board.initialize(function () {
            display.initialize(function () {
                cursor = {
                    x: 0,
                    y: 0,
                    selected: false
                };
                display.redraw(board.getBoard(), function () {
                    // do nothing for now
                });
            });
        });
    }

    function setCursor(x, y, select)
    {
        cursor.x = x;
        cursor.y = y;
        cursor.selected = select;
    }

    function selectTower(x, y) {
        if (arguments.length === 0){
            selectTower(cursor.x, cursor.y);
            return;
        }
        if (cursor.selected) {
            var dx = Math.abs(x - cursor.x),
                dy = Math.abs(y - cursor.y),
                dist = dx + dy;

            if (dist === 0) {
                // deselected the selected towers
                setCursor(x, y, false);
            } else {
                // selected a different tower
                setCursor(x, y, true);
            }
        } else {
            setCursor(x, y, true);
        }
    }

    //potentially not used, not finsihed
    /*function playBoardEvents(events) {
        var display = vtd.display;
        if (events.length > 0) {
            var boardEvent = events.shift(),
                next = function () {
                    playBoardEvents(events);
                };
            switch(boardEvent.type)
            {
                case
            }
        }
    }*/

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
        vtd.input.initialize();
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
