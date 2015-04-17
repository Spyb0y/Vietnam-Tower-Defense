vtd.display = (function () {
    var settings,
        globalTowerPositions;
    const FRAME_RATE = 20;

    var canvas, ctx,
        cols, rows,
        towerSize,
        firstRun = true,
        paused;

    var background = document.getElementById("mycanvas"),
           bgctx = background.getContext("2d");

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
        var checkPoints = [];

        var checkpoint1 = { x: 50, y: 25 };
        checkPoints.push(checkpoint1);

        for( i = 0; i < checkPoints.length; i++)
        {
            drawEnemies(checkPoints[i].x, checkPoints[i].y)
        }
       

    }

    function GetGlobalTowerPositions()
    {
        return globalTowerPositions;
    }

    function SetGlobalTowerPositions(towerPositionsArray)
    {
        globalTowerPositions = towerPositionsArray;
    }

    function createTowers()
    {
        var towerPositions = [];

        var mapWidth = 700//background.width;
        var boxSize = mapWidth / cols;

        var pos1 = { x: (boxSize * 1) - boxSize , y: 10 };
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

        SetGlobalTowerPositions(towerPositions);

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

    function drawEnemies(x,y)
    {
        var context = document.getElementById("mycanvas"),
            ctx = context.getContext("2d"),
         img = new Image();
        img.src = 'Assets/Enemies/Tank.png';

        ctx.drawImage(img, 5, 60, x, y);
    }


 
    function setup() {
        cols = vtd.settings.cols;
        rows = vtd.settings.rows;
        var towerSize = 600 / cols;

        createBackground();
        createEnemy();
        createTowers();
        
       

    }
    function initialize(callback) {
        paused = false;
        if (firstRun) {
            setup();
            towerLocationSprite = new Image();
            towerLocationSprite.addEventListener("load", callback, false);
            towerLocationSprite.src = "Assets/Towers/sign.png";
           
            firstRun = false;
        } else {
            callback();
        }
    }

    function redraw(callback) {
        var x, y;
       
        bgctx.clearRect(0, 0, background.width, background.height);
        createBackground()
        createEnemy();
        createTowers();

        
        callback();
    }

    return {

        initialize : initialize,
        redraw: redraw,
        GetGlobalTowerPositions: GetGlobalTowerPositions
    };
            
})();