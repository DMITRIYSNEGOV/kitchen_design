function changeTopShelf(img) {
    var src = img.src;
    for (let i = 1; i <= 4; i++) {
        var shelf = document.getElementById("top_shelf" + i);
        shelf.src = src;
    }
}

function changeTallShelf(img) {
    var src = img.src;
    for (let i = 1; i <= 2; i++) {
        var shelf = document.getElementById("tall_shelf" + i);
        shelf.src = src;
    }
}

function changeMiddleShelf(img) {
    var src = img.src;
    for (let i = 1; i <= 3; i++) {
        var shelf = document.getElementById("mid_shelf" + i);
        shelf.src = src;
    }
    var shelf2_2 = document.getElementById("mid_shelf2_2");
    shelf2_2.src = src;
}

function changeSkirting(img) {
    var src = img.src;
    for (let i = 1; i <= 3; i++) {
        var skirting = document.getElementById("skirting" + i);
        skirting.src = src;
    }
}

function changeTabletop(img) {
    var src = img.src;
    for (let i = 1; i <= 2; i++) {
        var tabletop = document.getElementById("tabletop" + i);
        tabletop.src = src;
    }

    var tabletop_frame = document.getElementById("tabletop_frame");
    tabletop_frame.src = src;
}

function changeBotShelf(img) {
    var src = img.src;
    for (let i = 1; i <= 7; i++) {
        var bot_shelf = document.getElementById("bot_shelf" + i);
        bot_shelf.src = src;
    }
    for (let i = 1; i <= 10; i++) {
        var bot_shelf = document.getElementById("cap" + i);
        bot_shelf.src = src;
    }
}