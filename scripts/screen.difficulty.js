vtd.screens["difficulty"] = (function () {
    var dom = vtd.dom,
        firstRun = true;

    function setup() {
        dom.bind("#difficulty ul.menu", "click", function (e) {
            if (e.target.nodeName.toLowerCase() === "button") {
                var action = e.target.getAttribute("name");
                if (action === "easy")
                {
                    action = "map-select";
                    vtd.settings.difficultyLevel = 1;
                }
                if (action === "medium")
                {
                    action = "map-select";
                    vtd.settings.difficultyLevel = 2;
                }
                if (action === "hard")
                {
                    action = "map-select";
                    vtd.settings.difficultyLevel = 3;
                }
                vtd.showScreen(action);
            }
        });
    }

    function run() {
        if (firstRun) {
            setup();
            firstRun = false;
        }
    }

    return {
        run: run
    };
})();
