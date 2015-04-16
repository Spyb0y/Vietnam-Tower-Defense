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

    function createEnemy()//temp function to test pathing
    {

        var context = document.getElementById("mycanvas"),
        ctx = context.getContext("2d"),
        img = new Image();
        img.src = 'Assets/Enemies/Tank.png';

        ctx.drawImage(img, 5, 60, 50, 25);

    }

    function createTowers()
    {
        var towerPositions = [];

        var pos1 = { x: 10, y: 10 };
        towerPositions[towerPositions.length] = pos1;
        var pos2 = { x: 60, y: 10 };
        towerPositions[towerPositions.length] = pos2;
        var pos3 = { x: 110, y: 10 };
        towerPositions[towerPositions.length] = pos3;
        var pos4 = { x: 160, y: 10 };
        towerPositions[towerPositions.length] = pos4;
        var pos5 = { x: 210, y: 10 };
        towerPositions[towerPositions.length] = pos5;

        for(i = 0; i < towerPositions.length; i++)
        {
            drawTower(towerPositions[i].x, towerPositions[i].y)
        }

        /*for (x = 0; x < 15; x++) {
            towerPositions[x] = [];
            for (y = 0; y < 13; y++) {
                towerPositions[x][y] = 1;
                //if(x == 1 && y == 2 || x == 1 && y == 3 || x == 1 && y == 4 || x == 1 && y == 5 || x == 1 && y == 6 || x == 2 && y == 11 || x == 2 && y == 12 || x == 2 && y == 13 || x == 2 && y == 14 ||
                // x == 2 && y == 15 ||x == 3 && y == 2 || x == 3 && y == 3 || x == 3 && y == 4 || x == 3 && y == 6 || x == 3 && y == 11 || x == 4 && y == 4 || x == 4 && y == 6 || x == 4 && y == 11 ||
                // x == 4 && y == 13 || x == 4 && y == 14 || x == 4 && y == 15 || x == 5 && y == 1 || x == 1 && y == 1 || x == 1 && y == 1 || x == 1 && y == 1 || x == 1 && y == 1 || x == 1 && y == 1 ||)
            }
        }*/
    }

    function drawTower(x, y)
    {
        var context = document.getElementById("mycanvas"),
        ctx = context.getContext("2d"),
        img = new Image();
        img.src = 'Assets/Towers/sign.png';

        ctx.drawImage(img, x, y, 50, 25);
    }

    function setup() {
        createBackground();
        createEnemy();
        createTowers();
       

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