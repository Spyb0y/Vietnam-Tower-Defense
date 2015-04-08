vtd.screens["splash-screen"] = (function() {
    var firstRun = true;

    function setup() {
        vtd.dom.bind("#splash-screen", "click", function() {
            vtd.showScreen("main-menu");
        });
    }

    function run() {
        if (firstRun) {
            setup();
            firstRun = false;
        }
    }

    return {
        run : run
    };
})();
