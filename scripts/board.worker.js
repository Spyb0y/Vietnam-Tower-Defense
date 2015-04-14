var vtd = {};

importScripts("board.js");

addEventListener("message", function (event) {
    var board = vtd.board,
        message = event.data;

    switch (message.command) {
        case "initialize":
            vtd.settings = message.data;
            board.initialize(callback);
            break;
        case "swap":
            board.swap(
                message.data.x1,
                message.data.y1,
                message.data.x2,
                message.data.y2,
                callback
            );
            break;
    }

    function callback(data) {
        postMessage({
            id: message.id,
            data: data,
            vtd: board.getBoard()
        });
    }

}, false);
