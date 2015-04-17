vtd.input = (function () {
    var inputHandlers;

    function initialize() {
        var dom = vtd.dom,
            $ = dom.$,
            controls = vtd.settings.controls,
            board = $("#game-screen .game-board")[0];

        inputHandlers = {};
        dom.bind(board, "mousedown", function (event) {
            handleClick(event, "CLICK", event);
        });
    }

    function handleClick(event, control, click) {
        // is any action bound to this input control?
        var settings = vtd.settings,
            action = settings.controls[control];
        if (!action) {
            return;
        }

        var board = vtd.dom.$("#game-screen .game-board")[0],
            rect = board.getBoundingClientRect(),
            relX, relY,
            towerX, towerY;

        // click position relative to board
        relX = click.clientX - rect.left;
        relY = click.clientY - rect.top;
        // jewel coordinates
        towerX = Math.floor(relX / rect.width * settings.cols);
        towerY = Math.floor(relY / /*rect.height*/600 * settings.rows);
        // trigger functions bound to action
        trigger(action, towerX, towerY);
        // prevent default click behavior
        event.preventDefault();
    }

    function bind(action, handler) {
        //bind a handler function to a game action
        if (!inputHandlers[action]) {
            inputHandlers[action] = [];
        }
        inputHandlers[action].push(handler);
    }

    function trigger(action) {
        // trigger a game action
        var handlers = inputHandlers[action],
            args = Array.prototype.slice.call(arguments, 1);
        console.log("Game action: " + action);
        if (handlers) {
            for (var i = 0; i < handlers.length;i++)
            {
                //handlers[i].apply(null, arge);
                break;
            }
        }
    }

    return {
        initialize: initialize,
        bind: bind
    };
})();