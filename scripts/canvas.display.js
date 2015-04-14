vtd.display = (function () {
    var canvas, ctx,
        firstRun = true,
        paused;

    function createBackground() {
        var background = document.createElement("canvas"),
            bgctx = background.getContext("2d");

        vtd.dom.addClass(background, "background");
       

        bgctx.fillStyle = "rgba(225,235,255,0.15)";
        bgctx.fillRect(0,0,100,100)
       
        return background;
    }

    function setup() {
        var $ = vtd.dom.$,
            boardElement = $("#game-screen .game-board")[0];

      

        canvas = document.createElement("canvas");
        ctx = canvas.getContext("2d");
        vtd.dom.addClass(canvas, "board");

       
        var rect = boardElement.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        

        boardElement.appendChild(createBackground());
        boardElement.appendChild(canvas);

       

    }
    function initialize(callback) {
        paused = false;
        if (firstRun) {
            setup();
           
            firstRun = false;
        } else {
            callback();
        }
    }

    function redraw(callback) {
        var x, y;
       
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      
        
        callback();
    }

    return {

        initializze : initialize,
        redraw: redraw
    };
            
})();