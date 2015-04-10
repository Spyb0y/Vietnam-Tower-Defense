var vtd = (function() {
    var settings = {
        difficultyLevel : 1,
        baseScore : 100,
        controls : {
            // keyboard
            KEY_UP : "moveUp",
            KEY_LEFT : "moveLeft",
            KEY_DOWN : "moveDown",
            KEY_RIGHT : "moveRight",
            KEY_ENTER : "selectJewel",
            KEY_SPACE : "selectJewel",
            // mouse and touch
            CLICK : "selectJewel",
            TOUCH : "selectJewel",
            // gamepad
            BUTTON_A: "selectJewel",
            LEFT_STICK_UP: "moveUp",
            LEFT_STICK_DOWN: "moveDown",
            LEFT_STICK_LEFT: "moveLeft",
            LEFT_STICK_RIGHT: "moveRight"
        }
    };

    var scriptQueue = [],
        numResourcesLoaded = 0,
        numResources = 0,
        executeRunning = false;

    function executeScriptQueue() {
        var next = scriptQueue[0],
            first, script;
        if (next && next.loaded) {
            executeRunning = true;
            // remove the first element in the queue
            scriptQueue.shift();
            first = document.getElementsByTagName("script")[0];
            script = document.createElement("script");
            script.onload = function() {
                if (next.callback) {
                    next.callback();
                }
                // try to execute more scripts
                executeScriptQueue();
            };
            script.src = next.src;
            first.parentNode.insertBefore(script, first);
        } else {
            executeRunning = false;
        }
    }

    function getLoadProgress() {
        return numResourcesLoaded / numResources;
    }

    function load(src, callback) {
        var image, queueEntry;
        numResources++;

        // add this resource to the execution queue
        queueEntry = {
            src: src,
            callback: callback,
            loaded: false
        };
        scriptQueue.push(queueEntry);

        image = new Image();
        image.onload = image.onerror = function() {
            numResourcesLoaded++;
            queueEntry.loaded = true;
            if (!executeRunning) {
                executeScriptQueue();
            }
        };
        image.src = src;
    }

    function preload(src) {
        var image = new Image();
        image.src = src;
    }
    
    
    // hide the active screen (if any) and show the screen
    // with the specified id
    function showScreen(screenId) {
        var dom = vtd.dom,
            $ = dom.$,
            activeScreen = $("#game .screen.active")[0],
            screen = $("#" + screenId)[0];
        if (!vtd.screens[screenId]) {
            alert("This module is not implemented yet!");
            return;
        }
        if (activeScreen) {
            dom.removeClass(activeScreen, "active");
        }
        dom.addClass(screen, "active");
        // run the screen module
        vtd.screens[screenId].run();
    }

    function isStandalone() {
        return (window.navigator.standalone !== false);
    }

    function hasWebWorkers() {
        return ("Worker" in window);
    }

    function setup() {
        // hide the address bar on Android devices
        if (/Android/.test(navigator.userAgent)) {
            vtd.dom.$("html")[0].style.height = "200%";
            setTimeout(function() {
                window.scrollTo(0, 1);
            }, 0);
        }

        // disable native touchmove behavior to 
        // prevent overscroll
        /*vtd.dom.bind(document, "touchmove", function(event) {
            event.preventDefault();
        });*/

        if (isStandalone()) {
            showScreen("splash-screen");
        } else {
            showScreen("install-screen");
        }
        
    }

    return {
        getLoadProgress: getLoadProgress,
        hasWebWorkers: hasWebWorkers,
        isStandalone: isStandalone,
        preload: preload,
        load: load,
        setup: setup,
        showScreen : showScreen,
        settings: settings,
        screens: {}
    };
})();