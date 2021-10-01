function cellAction() {
    pathOK = false;
    chatInput.value = "";
    //#region ---Zeile-1----------->
    if ( x == 1 && y == 1) {
        passableDir_E();
    }
    if ( x == 2 && y == 1) {
        passableDir_SW();
    }
    if ( x == 3 && y == 1) {
        passableDir_SE();
    }
    if ( x == 4 && y == 1) {
        passableDir_SEW();
    }
    if ( x == 5 && y == 1) {
        passableDir_W();
    }
    if ( x == 6 && y == 1) {
        passableDir_S();
    }
    //#endregion
    //#region ---Zeile-2----------->
    if ( x == 1 && y == 2) {
        passableDir_SE();
    }
    if ( x == 2 && y == 2) {
        passableDir_NEW();
    }
    if ( x == 3 && y == 2) {
        passableDir_NSW();
    }
    if ( x == 4 && y == 2) {
        passableDir_NSE();
    }
    if ( x == 5 && y == 2) {
        passableDir_SW();
    }
    if ( x == 6 && y == 2) {
        passableDir_NS();
    }
    //#endregion
    //#region ---Zeile-3----------->
    if ( x == 1 && y == 3) {
        passableDir_NE();
        if (input == "look") {
            if (!items[0][1] && !items[0][2]) { //---Key1--->
                items[0][1] = true;
                let blockMessage = "There is a key on the ground!";
                chatWindow.innerHTML += "<p><b>" + chatWindow.innerHTML + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
            } else { nothingToLook(); }
        }
        if (input == "pickup") {
            if (!items[0][2]) {
                items[0][2] = true;
                document.getElementById('rustyKey').hidden = false;
                document.getElementById('rustyKeytext').hidden = false;
            } else { nothingToPickup(); }
        }
        if (input == "use") {
            if (false) {

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    //------------------------------------------------------------------------------------------------------------------------------------------>
    if ( x == 2 && y == 3) {
        passableDir_EW();
        if (input == "look") {
            if (false) {

            } else { nothingToLook(); }
        }
        if (input == "pickup") {
            if (events[0][1] && !items[1][2]) {
                items[0][2] = true;
                document.getElementById('doll').hidden = false;
                document.getElementById('dollText').hidden = false;
            } else { nothingToPickup(); }
        }
        if (input[0] == "use" &&  input[1] == "key" || input[0] == "key" && input[1] == "use") {
            if (items[0][2] && !items[0][3]) {
                items[0][3] = true;
                events[0][1] = true;
                document.getElementById('rustyKey').src='/img/rustyKey_used.png';
                let blockMessage = "I opened the chest with the key! There is a doll inside!";
                chatWindow.innerHTML += "<p><b>" + chatWindow.innerHTML + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                drawEventLocation()
            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    //------------------------------------------------------------------------------------------------------------------------------------------>
    if ( x == 3 && y == 3) { //Startposition!
        passableDir_NSEW();
        if (input == "look") {
            if (false) {

            } else { nothingToLook(); }
        }
        if (input == "pickup") {
            if (false) {

            } else { nothingToPickup(); }
        }
        if (input == "use") {
            if (false) {

            } else { nothingToPickup(); }
        }
        if (input == "talk") {
            if (false) {

            } else { nothingToPickup(); }
        }
    }
    //------------------------------------------------------------------------------------------------------------------------------------------>
    if ( x == 4 && y == 3) {
        passableDir_NEW();
    }
    //------------------------------------------------------------------------------------------------------------------------------------------>
    if ( x == 5 && y == 3) {
        passableDir_NSEW();
    }
    //------------------------------------------------------------------------------------------------------------------------------------------>
    if ( x == 6 && y == 3) {
        passableDir_NSW();
    }
    //#endregion
    //#region ---Zeile-4----------->
    if ( x == 1 && y == 4) {
        passableDir_S();
    }
    if ( x == 2 && y == 4) {
        passableDir_SE();
    }
    if ( x == 3 && y == 4) {
        passableDir_NSEW();
    }
    if ( x == 4 && y == 4) {
        passableDir_SW();
    }
    if ( x == 5 && y == 4) {
        passableDir_NSE();
    }
    if ( x == 6 && y == 4) {
        passableDir_NW();
    }
    //#endregion
    //#region ---Zeile-5----------->
    if ( x == 1 && y == 5) {
        passableDir_NS();
    }
    if ( x == 2 && y == 5) {
        passableDir_NSE();
    }
    if ( x == 3 && y == 5) {
        passableDir_NSW();
    }
    if ( x == 4 && y == 5) {
        passableDir_NE();
    }
    if ( x == 5 && y == 5) {
        passableDir_NSEW();
    }
    if ( x == 6 && y == 5) {
        passableDir_SW();
    }
    //#endregion
    //#region ---Zeile-6----------->
    if ( x == 1 && y == 6) {
        passableDir_NE();
    }
    if ( x == 2 && y == 6) {
        passableDir_NEW();
    }
    if ( x == 3 && y == 6) {
        passableDir_NW();
    }
    if ( x == 4 && y == 6) {
        passableDir_E();
    }
    if ( x == 5 && y == 6) {
        passableDir_NEW();
    }
    if ( x == 6 && y == 6) {
        passableDir_NW();
    }
    //#endregion
    //----------------------------->
    if (input == "north" && pathOK) {y = clamp(y-1, 1, 6); document.getElementById("Y").innerHTML = y; drawPlayerLocation();}
    else if (input == "south" && pathOK) {y = clamp(y+1, 1, 6); document.getElementById("Y").innerHTML = y; drawPlayerLocation();}
    else if (input == "east" && pathOK) {x = clamp(x+1, 1, 6); document.getElementById("X").innerHTML = x; drawPlayerLocation();}
    else if (input == "west" && pathOK) {x = clamp(x-1, 1, 6); document.getElementById("X").innerHTML = x; drawPlayerLocation();}
    else if (input == "north" || input == "south" || input == "east" || input == "west") {blockedPath();}
}

//---------passable-directions---------->
//#region passableDirections
//----N=North-S=South-E=East-W=West----->
function passableDir_NSEW() {
    if (input == "north") {pathOK = true;}
    if (input == "south") {pathOK = true;}
    if (input == "east") {pathOK = true;}
    if (input == "west") {pathOK = true;}
}
function passableDir_NS() {
    if (input == "north") {pathOK = true;}
    if (input == "south") {pathOK = true;}
}
function passableDir_EW() {
    if (input == "east") {pathOK = true;}
    if (input == "west") {pathOK = true;}
}
function passableDir_NEW() {
    if (input == "north") {pathOK = true;}
    if (input == "east") {pathOK = true;}
    if (input == "west") {pathOK = true;}
}
function passableDir_NSE() {
    if (input == "north") {pathOK = true;}
    if (input == "south") {pathOK = true;}
    if (input == "east") {pathOK = true;}
}
function passableDir_NSW() {
    if (input == "north") {pathOK = true;}
    if (input == "south") {pathOK = true;}
    if (input == "west") {pathOK = true;}
}
function passableDir_SEW() {
    if (input == "south") {pathOK = true;}
    if (input == "east") {pathOK = true;}
    if (input == "west") {pathOK = true;}
}
function passableDir_NW() {
    if (input == "north") {pathOK = true;}
    if (input == "west") {pathOK = true;}
}
function passableDir_NE() {
    if (input == "north") {pathOK = true;}
    if (input == "east") {pathOK = true;}
}
function passableDir_SE() {
    if (input == "south") {pathOK = true;}
    if (input == "east") {pathOK = true;}
}
function passableDir_SW() {
    if (input == "south") {pathOK = true;}
    if (input == "west") {pathOK = true;}
}
function passableDir_N() {
    if (input == "north") {pathOK = true;}
}
function passableDir_S() {
    if (input == "south") {pathOK = true;}
}
function passableDir_E() {
    if (input == "east") {pathOK = true;}
}
function passableDir_W() {
    if (input == "west") {pathOK = true;}
}
//#endregion
//-------------------------------------->

function blockedPath() {
    var rngMessage = Math.floor(Math.random() * 5) + 1;
    //console.log(rngMessage);
    if (rngMessage == "1") {var blockMessage = "I can´t go this way...";}
    if (rngMessage == "2") {var blockMessage = "There is a wall in my way...";}
    if (rngMessage == "3") {var blockMessage = "There is no path...";}
    if (rngMessage == "4") {var blockMessage = "I can´t get past the undergrowth...";}
    if (rngMessage == "5") {var blockMessage = "I get a strange feeling looking in this direction...";}

    chatInput.value = "";
    var reserve = chatWindow.innerHTML;
    chatWindow.innerHTML = "<p><b>" + chatWindow.innerHTML + "<i> " + username + ": </i></b>" + blockMessage.fontcolor("red") + "</p>";
    saveInput = !saveInput;
    setTimeout(function() {
        chatWindow.innerHTML = reserve;
        saveInput = !saveInput;
    }, 1500);
}

function nothingToLook() {
    var blockMessage = "There is nothing interesting...";
    var reserve = chatWindow.innerHTML;
    chatInput.value = "";
    chatWindow.innerHTML = "<p><b>" + chatWindow.innerHTML + "<i> " + username + ": </i></b>" + blockMessage.fontcolor("red") + "</p>";
    saveInput = !saveInput;
    setTimeout(function() {
        chatWindow.innerHTML = reserve;
        saveInput = !saveInput;
    }, 1000);
}

function nothingToPickup() {
    var blockMessage = "There is nothing to pick up...";
    chatInput.value = "";
    var reserve = chatWindow.innerHTML;
    chatWindow.innerHTML = "<p><b>" + chatWindow.innerHTML + "<i> " + username + ": </i></b>" + blockMessage.fontcolor("red") + "</p>";
    saveInput = !saveInput;
    setTimeout(function() {
        chatWindow.innerHTML = reserve;
        saveInput = !saveInput;
    }, 1000);
}

function cannotUse() {
    var blockMessage = "I can´t use this item here...";
    chatInput.value = "";
    var reserve = chatWindow.innerHTML;
    chatWindow.innerHTML = "<p><b>" + chatWindow.innerHTML + "<i> " + username + ": </i></b>" + blockMessage.fontcolor("red") + "</p>";
    saveInput = !saveInput;
    setTimeout(function() {
        chatWindow.innerHTML = reserve;
        saveInput = !saveInput;
    }, 1000);
}

function noTalk() {
    var blockMessage = "Here is nobody to talk to...";
    chatInput.value = "";
    var reserve = chatWindow.innerHTML;
    chatWindow.innerHTML = "<p><b>" + chatWindow.innerHTML + "<i> " + username + ": </i></b>" + blockMessage.fontcolor("red") + "</p>";
    saveInput = !saveInput;
    setTimeout(function() {
        chatWindow.innerHTML = reserve;
        saveInput = !saveInput;
    }, 1000);
}

function uncover() {
    console.log("Uncover!");

    for (let xxx = 1; xxx <= 6; xxx++) {
        for (let yyy = 1; yyy <= 6; yyy++) {
            document.getElementById('X'+xxx+'/'+'Y'+yyy).hidden = true;
        }
    }
    drawEventLocation();
}

function test() {
    let code = prompt("Enter a code!");
    if (code == "12345") {
    console.log("Richtig!");
    } else {
    console.log("Falsch!");
    } 
}

