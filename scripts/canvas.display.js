vtd.display = (function () {
    var canvas, ctx,
        firstRun = true,
        paused;

    function createBackground() {
        var background = document.getElementById("mycanvas"),
            bgctx = background.getContext("2d"),
            img = new Image();
        img.src = 'images/map.png';

        vtd.dom.addClass(background, "background");
       
        
        bgctx.drawImage(img, 0, 0, 2000, 2000, 0, 0, 700, 600);
        
       
        return background;
    }

    function setup() {
        createBackground();

       

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

        initialize : initialize,
        redraw: redraw
    };
            
})();