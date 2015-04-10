vtd.screens["map-select"] = (function () {
    var dom = vtd.dom,
        firstRun = true;

    function setup() {
        dom.bind("#map-select ul.menu", "click", function (e) {
            if (e.target.nodeName.toLowerCase() === "button") {
                var action = e.target.getAttribute("name");
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
