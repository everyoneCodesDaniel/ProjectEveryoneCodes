function cellAction() {
    pathOK = false;
    chatInput.value = "";
    //#region ---Zeile-1----------->
    if ( x == 1 && y == 1) {
        passableDir_E();
        if (input == "look") {
            if (!items[4][3]) { //---Red-Orb-Altar--->
                let blockMessage = "Here is an altar with a circular indentation. There is something written on it.";
                let altarMessage = " The carminred artefact will guide your way!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + altarMessage.fontcolor("red") + "</p>";
            } else {
                let blockMessage = "I already put the red orb in the circular indentation.";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
            }
            lookDB = true;
        }
        if (input == "pickup") {
            if (false) {

            } else { nothingToPickup(); }
        }
        if (input[0] == "use" &&  input[1] == "redorb" || input[0] == "redorb" && input[1] == "use") { //---Use-RedOrb--->
            if (items[4][2] && !items[4][3]) {
                items[4][3] = true;
                events[4][1] = true;
                document.getElementById('redOrb').src='/img/redOrb_used.png';
                let blockMessage = "I put the red orb on the altar. It starts glowing!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                drawEventLocation()
                useDB = true;
            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 2 && y == 1) {
        passableDir_SW();
        if (input == "look") {
            if (!items[5][2]) { //---Green-Orb--->
                let blockMessage = "There is a green orb on the ground!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                lookDB = true;
            } else { nothingToLook(); }
        }
        if (input == "pickup") {
            if (!items[5][2]) {//---Green-Orb--->
                items[5][2] = true;
                document.getElementById('greenOrb').hidden = false;
                document.getElementById('greenOrbText').hidden = false;
                confirm("You got a green orb!");
                pickupDB = true;
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
    if ( x == 3 && y == 1) {
        passableDir_SE();
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 4 && y == 1) {
        passableDir_SEW();
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 5 && y == 1) {
        passableDir_W();
        if (input == "look") {
            if (!items[7][2]) { //---Shield--->
                items[7][1] = true;
                let blockMessage = "There is a shield on the ground!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                lookDB = true;
            } else { nothingToLook(); }
        }
        if (input == "pickup") {
            if (!items[7][2]) {//---Shield--->
                items[7][2] = true;
                document.getElementById('shield').hidden = false;
                document.getElementById('shieldText').hidden = false;
                confirm("You got a shield!");
                pickupDB = true;
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
    if ( x == 6 && y == 1) {
        passableDir_S();
        if (input == "look") {
            if (!items[5][3]) { //---Green-Orb-Altar--->
                let blockMessage = "Here is an altar with a circular indentation. There is something written on it.";
                let altarMessage = " The leafgreen artefact will guide your way!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + altarMessage.fontcolor("green") + "</p>";
            } else {
                let blockMessage = "I already put the green orb in the circular indentation.";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
            }
            lookDB = true;
        }
        if (input == "pickup") {
            if (false) {

            } else { nothingToPickup(); }
        }
        if (input[0] == "use" &&  input[1] == "greenorb" || input[0] == "greenorb" && input[1] == "use") { //---Use-GreenOrb--->
            if (items[5][2] && !items[5][3]) {
                items[5][3] = true;
                events[5][1] = true;
                document.getElementById('greenOrb').src='/img/greenOrb_used.png';
                let blockMessage = "I put the green orb on the altar. It starts glowing!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                drawEventLocation()
                useDB = true;
            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    //#endregion
    //#region ---Zeile-2----------->
    if ( x == 1 && y == 2) {
        passableDir_SE();
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 2 && y == 2) {
        passableDir_NEW();
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 3 && y == 2) {
        passableDir_NSW();
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 4 && y == 2) {
        passableDir_NSE();
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 5 && y == 2) {
        passableDir_SW();
        if (input == "look") {
            let blockMessage = "A big tree. In front of it is a red puddle.";
            chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
            lookDB = true;
        }
        if (input == "pickup") {
            if (false) {

            } else { nothingToPickup(); }
        }
        if (input[0] == "use" &&  input[1] == "bottle" || input[0] == "bottle" && input[1] == "use") { //---Use-Bottle-on-Tree--->
            if (items[3][2] && !items[3][3]) {
                items[3][3] = true;
                items[9][2] = true;
                events[1][1] = true;
                document.getElementById('bottle').src='/img/redLiquid.png';
                document.getElementById('bottleText').textContent="RedLiquid";
                let blockMessage = "I filled the bottle with the red liquid.";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                drawEventLocation()
                useDB = true;
            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 6 && y == 2) {
        passableDir_NS();
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    //#endregion
    //#region ---Zeile-3----------->
    if ( x == 1 && y == 3) {
        passableDir_NE();
        if (input == "look") {
            if (!items[0][2]) { //---RustyKey--->
                items[0][1] = true;
                let blockMessage = "There is a key on the ground!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                lookDB = true;
            } else { nothingToLook(); }
        }
        if (input == "pickup") {
            if (!items[0][2]) {//---RustyKey--->
                items[0][2] = true;
                document.getElementById('rustyKey').hidden = false;
                document.getElementById('rustyKeytext').hidden = false;
                confirm("You got a Rusty Key!");
                pickupDB = true;
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
    if ( x == 2 && y == 3) {
        passableDir_EW();
        if (input == "look") {
            if (false) {

            } else { nothingToLook(); }
        }
        if (input == "pickup") { //---Doll--->
            if (events[0][1] && !items[1][2]) {
                items[0][2] = true;
                document.getElementById('doll').hidden = false;
                document.getElementById('dollText').hidden = false;
                confirm("You got a doll!");
                pickupDB = true;
            } else { nothingToPickup(); }
        }
        if (input[0] == "use" &&  input[1] == "rustykey" || input[0] == "rustykey" && input[1] == "use") { //---Use-RustyKey--->
            if (items[0][2] && !items[0][3]) {
                items[0][3] = true;
                events[0][1] = true;
                document.getElementById('rustyKey').src='/img/rustyKey_used.png';
                let blockMessage = "I opened the chest with the key! There is a doll inside!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                drawEventLocation()
                useDB = true;
            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 4 && y == 3) {
        passableDir_NEW();
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 5 && y == 3) {
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 6 && y == 3) {
        if (events[2][1] == true) {
            passableDir_NSW();
        } else {
            passableDir_SW();
        }
        if (input == "look") {
            if (false) {

            } else { nothingToLook(); }
        }
        if (input == "pickup") {
            if (false) {

            } else { nothingToPickup(); }
        }
        if (input[0] == "use" &&  input[1] == "goldenkey" || input[0] == "goldenkey" && input[1] == "use") { //---Use-Golden-Key-to-open-Gate--->
            if (items[8][2] && !items[8][3]) {
                items[8][3] = true;
                events[2][1] = true;
                document.getElementById('casket').src='/img/goldenKey_used.png';
                let blockMessage = "I opened the gate with the golden key!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                drawEventLocation()
                useDB = true;
            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    //#endregion
    //#region ---Zeile-4----------->
    if ( x == 1 && y == 4) {
        passableDir_S();
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 2 && y == 4) {
        passableDir_SE();
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 3 && y == 4) {
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 4 && y == 4) {
        passableDir_SW();
        if (input == "look") {
            if (!items[6][3]) { //---Blue-Orb-Altar--->
                let blockMessage = "Here is an altar with a circular indentation. There is something written on it.";
                let altarMessage = " The deep blue artefact will guide your way!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + altarMessage.fontcolor("blue") + "</p>";
            } else {
                let blockMessage = "I already put the blue orb in the circular indentation.";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
            }
            lookDB = true;
        }
        if (input == "pickup") {
            if (false) {

            } else { nothingToPickup(); }
        }
        if (input[0] == "use" &&  input[1] == "blueorb" || input[0] == "blueorb" && input[1] == "use") { //---Use-BlueOrb--->
            if (items[6][2] && !items[6][3]) {
                items[6][3] = true;
                events[6][1] = true;
                document.getElementById('blueOrb').src='/img/blueOrb_used.png';
                let blockMessage = "I put the blue orb on the altar. It starts glowing!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                drawEventLocation()
                useDB = true;
            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 5 && y == 4) {
        passableDir_NSE();
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 6 && y == 4) {
        passableDir_NW();
        if (input == "look") {
            if (!items[3][2]) { //---bottle--->
                items[3][1] = true;
                let blockMessage = "There is an empty bottle on the ground!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                lookDB = true;
            } else { nothingToLook(); }
        }
        if (input == "pickup") {
            if (!items[3][2]) {//---bottle--->
                items[3][2] = true;
                document.getElementById('bottle').hidden = false;
                document.getElementById('bottleText').hidden = false;
                confirm("You got a bottle!");
                pickupDB = true;
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
    //#endregion
    //#region ---Zeile-5----------->
    if ( x == 1 && y == 5) {
        passableDir_NS();
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 2 && y == 5) {
        passableDir_NSE();
        if (input == "look") {
            if (!items[2][2]) { //---Casket--->
                items[2][1] = true;
                let blockMessage = "There is a casket on the ground!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                lookDB = true;
            } else { nothingToLook(); }
        }
        if (input == "pickup") {
            if (!items[2][2]) {//---Casket--->
                items[2][2] = true;
                document.getElementById('casket').hidden = false;
                document.getElementById('casketText').hidden = false;
                confirm("You got a casket!");
                pickupDB = true;
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
    if ( x == 3 && y == 5) {
        passableDir_NSW();
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 4 && y == 5) {
        passableDir_NE();
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 5 && y == 5) {
        passableDir_NSEW();
        if (input == "look") {
            if (false) {

            } else { nothingToLook(); }
        }
        if (input == "pickup") { //---Red-Orb--->
            if (events[3][1] && !items[4][2]) {
                items[4][2] = true;
                document.getElementById('redOrb').hidden = false;
                document.getElementById('redOrbText').hidden = false;
                confirm("You got a Red Orb!");
                pickupDB = true;
            } else { nothingToPickup(); }
        }
        if (input[0] == "use" &&  input[1] == "redliquid" || input[0] == "redliquid" && input[1] == "use") { //---Use-Red-Liquid--->
            if (items[9][2] && !items[9][3]) {
                items[9][3] = true;
                events[3][1] = true;
                document.getElementById('bottle').src='/img/redLiquid_used.png';
                let blockMessage = "The deepenings at the bottom begin to fill with the red liquid! A red orb appears.";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                drawEventLocation()
                useDB = true;
            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 6 && y == 5) {
        passableDir_SW();
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    //#endregion
    //#region ---Zeile-6----------->
    if ( x == 1 && y == 6) {
        passableDir_NE();
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 2 && y == 6) {
        passableDir_NEW();
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 3 && y == 6) {
        passableDir_NW();
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 4 && y == 6) {
        passableDir_E();
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 5 && y == 6) {
        passableDir_NEW();
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    if ( x == 6 && y == 6) {
        passableDir_NW();
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

            } else { cannotUse(); }
        }
        if (input == "talk") {
            if (false) {

            } else { noTalk(); }
        }
    }
    //#endregion
    //----------------------------->
    if (input == "north" && pathOK) {y = clamp(y-1, 1, 6); document.getElementById("Y").innerHTML = y; drawPlayerLocation();updatedb(input);}
    else if (input == "south" && pathOK) {y = clamp(y+1, 1, 6); document.getElementById("Y").innerHTML = y; drawPlayerLocation();updatedb(input);}
    else if (input == "east" && pathOK) {x = clamp(x+1, 1, 6); document.getElementById("X").innerHTML = x; drawPlayerLocation();updatedb(input);}
    else if (input == "west" && pathOK) {x = clamp(x-1, 1, 6); document.getElementById("X").innerHTML = x; drawPlayerLocation();updatedb(input);}
    else if (input == "north" || input == "south" || input == "east" || input == "west") {blockedPath();}
    if (input == "look" || input == "pickup" || input.includes('use') || input == "talk") {updatedb(input);}
    chatWindow.scrollTo(0,chatWindow.scrollHeight);
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
    if ( x == 6 && y == 3 && input == "north") {var blockMessage = "I need a key for this gate!";}

    chatInput.value = "";
    var reserve = chatWindow.innerHTML;
    chatWindow.innerHTML = "<p><b>" + chatWindow.innerHTML + "<i> " + username + ": </i></b>" + blockMessage.fontcolor("red") + "</p>";
    chatWindow.scrollTo(0,chatWindow.scrollHeight);
    saveInput = !saveInput;
    setTimeout(function() {
        chatWindow.innerHTML = reserve;
        saveInput = !saveInput;
    }, 1500);
    chatWindow.scrollTo(0,chatWindow.scrollHeight);
}

function nothingToLook() {
    var blockMessage = "There is nothing interesting...";
    var reserve = chatWindow.innerHTML;
    chatInput.value = "";
    chatWindow.innerHTML = "<p><b>" + chatWindow.innerHTML + "<i> " + username + ": </i></b>" + blockMessage.fontcolor("red") + "</p>";
    chatWindow.scrollTo(0,chatWindow.scrollHeight);
    saveInput = !saveInput;
    setTimeout(function() {
        chatWindow.innerHTML = reserve;
        saveInput = !saveInput;
    }, 1000);
    chatWindow.scrollTo(0,chatWindow.scrollHeight);
}

function nothingToPickup() {
    var blockMessage = "There is nothing to pick up...";
    chatInput.value = "";
    var reserve = chatWindow.innerHTML;
    chatWindow.innerHTML = "<p><b>" + chatWindow.innerHTML + "<i> " + username + ": </i></b>" + blockMessage.fontcolor("red") + "</p>";
    chatWindow.scrollTo(0,chatWindow.scrollHeight);
    saveInput = !saveInput;
    setTimeout(function() {
        chatWindow.innerHTML = reserve;
        saveInput = !saveInput;
    }, 1000);
    chatWindow.scrollTo(0,chatWindow.scrollHeight);
}

function cannotUse() {
    var blockMessage = "I can´t use this item here...";
    chatInput.value = "";
    var reserve = chatWindow.innerHTML;
    chatWindow.innerHTML = "<p><b>" + chatWindow.innerHTML + "<i> " + username + ": </i></b>" + blockMessage.fontcolor("red") + "</p>";
    chatWindow.scrollTo(0,chatWindow.scrollHeight);
    saveInput = !saveInput;
    setTimeout(function() {
        chatWindow.innerHTML = reserve;
        saveInput = !saveInput;
    }, 1000);
    chatWindow.scrollTo(0,chatWindow.scrollHeight);
}

function noTalk() {
    var blockMessage = "Here is nobody to talk to...";
    chatInput.value = "";
    var reserve = chatWindow.innerHTML;
    chatWindow.innerHTML = "<p><b>" + chatWindow.innerHTML + "<i> " + username + ": </i></b>" + blockMessage.fontcolor("red") + "</p>";
    chatWindow.scrollTo(0,chatWindow.scrollHeight);
    saveInput = !saveInput;
    setTimeout(function() {
        chatWindow.innerHTML = reserve;
        saveInput = !saveInput;
    }, 1000);
    chatWindow.scrollTo(0,chatWindow.scrollHeight);
}

function casket() { //caskest && goldenkey
    if (items[8][2]) {  
        chatInput.value += ' goldenKey ';
    } else {
        let code = prompt("It won´t open, but it has a combination lock!");
        if (code == "12345") {
            console.log("Richtig!");
            items[2][3] = true;
            items[8][2] = true;
            document.getElementById('casket').src='/img/goldenKey.png';
            document.getElementById('casketText').textContent="GoldenKey";
            let blockMessage = "The code was right. There is a golden key inside.";
            chatWindow.innerHTML += "<p><b>" + chatWindow.innerHTML + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
            drawEventLocation()
        } else {
            console.log("Falsch!");
            var blockMessage = "That was the wrong code...";
            chatInput.value = "";
            var reserve = chatWindow.innerHTML;
            chatWindow.innerHTML = "<p><b>" + chatWindow.innerHTML + "<i> " + username + ": </i></b>" + blockMessage.fontcolor("red") + "</p>";
            chatWindow.scrollTo(0,chatWindow.scrollHeight);
            saveInput = !saveInput;
            setTimeout(function() {
                chatWindow.innerHTML = reserve;
                saveInput = !saveInput;
            }, 1000);
        }
        chatWindow.scrollTo(0,chatWindow.scrollHeight);
    }
}

function bottle() { //bottle & red liquid
    if (items[3][3]) {  
        chatInput.value += ' redLiquid ';
    } else {
        chatInput.value += ' bottle '
    }
    chatWindow.scrollTo(0,chatWindow.scrollHeight);
}

function shieldDescription() {
    var blockMessage = "This shield will save me from an monster´s attack!";
    chatInput.value = "";
    var reserve = chatWindow.innerHTML;
    chatWindow.innerHTML = "<p><b>" + chatWindow.innerHTML + "<i> " + username + ": </i></b>" + blockMessage.fontcolor("blue") + "</p>";
    chatWindow.scrollTo(0,chatWindow.scrollHeight);
    saveInput = !saveInput;
    setTimeout(function() {
        chatWindow.innerHTML = reserve;
        saveInput = !saveInput;
    }, 3000);
    chatWindow.scrollTo(0,chatWindow.scrollHeight);
}

function casket() {
    let code = prompt("It won´t open, but it has a combination lock!");
    if (code == "12345") {
    console.log("Richtig!");

    } else {
    console.log("Falsch!");

    } 
}

function shieldDescription() {
    var blockMessage = "This shield will save me from an monster´s attack!";
    chatInput.value = "";
    var reserve = chatWindow.innerHTML;
    chatWindow.innerHTML = "<p><b>" + chatWindow.innerHTML + "<i> " + username + ": </i></b>" + blockMessage.fontcolor("blue") + "</p>";
    saveInput = !saveInput;
    setTimeout(function() {
        chatWindow.innerHTML = reserve;
        saveInput = !saveInput;
    }, 3000);
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

function showItems() {
    console.log("Show all items!");
    for (let i = 0; i <= items.length-1; i++) {
        items[i][1] = true;
    }
    drawEventLocation();
}

function test() {

}

