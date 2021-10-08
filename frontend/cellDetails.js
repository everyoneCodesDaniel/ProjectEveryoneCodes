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
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
            } else {
                let blockMessage = "I already put the red orb into the circular indentation.";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
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
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
                drawEventLocation()
                useDB = true;
                if (events[4][1] && events[5][1] && events[6][1]) {allOrbs();}
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
                let blockMessage = "There is a green orb lying on the ground!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
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
                let blockMessage = "There is a shield lying on the ground!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
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
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
            } else {
                let blockMessage = "I already put the green orb into the circular indentation.";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
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
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
                drawEventLocation()
                useDB = true;
                if (events[4][1] && events[5][1] && events[6][1]) {allOrbs();}
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
            let info = "Info";
            let blockMessage = "Make sure to look for items on the ground! They are sometimes hard to see.";
            chatWindow.innerHTML += "<p><b>" + "<i> " + info.fontcolor("darkyellow") + ": </i></b>" + blockMessage + "</p>";
            chatWindow.scrollTo(0,chatWindow.scrollHeight);
            lookDB = true;
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
            let blockMessage = "(What is this man doing here? Maybe he knows how to get out of this forest.)";
            chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
            chatWindow.scrollTo(0,chatWindow.scrollHeight);
            lookDB = true;
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
            saveInput = !saveInput;
            talkDB = true;
            if (npc[1][2]) {
                let npcName = "Guy";
                let blockMessage = "I found this paper with the numbers 42763 written on it. Maybe you have a use for it.";
                chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
                saveInput = !saveInput;
            } else {
                if (npc[1][1]) {
                    let npcName = "Guy";
                    let blockMessage = "Do you already know the girl's name?";
                    chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
                    chatWindow.scrollTo(0,chatWindow.scrollHeight);
                    setTimeout(function() {
                        girlName();
                        saveInput = !saveInput;
                    }, 1500);
                } else {
                    let npcName = "Guy";
                    let blockMessage = "Hey, I got lost in the woods, I need to find a way out!";
                    chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                    chatWindow.scrollTo(0,chatWindow.scrollHeight);
                    setTimeout(function() {
                        blockMessage = "What a coincidence, I also need to get out of the maze!";
                        chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
                        chatWindow.scrollTo(0,chatWindow.scrollHeight);
                        setTimeout(function() {
                            blockMessage = "There is a little girl somewhere. I need to know her name...";
                            chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
                            chatWindow.scrollTo(0,chatWindow.scrollHeight);
                            setTimeout(function() {
                                blockMessage = "Do you know her?";
                                chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
                                chatWindow.scrollTo(0,chatWindow.scrollHeight);
                                npc[1][1] = true;
                                setTimeout(function() {
                                    girlName();
                                    saveInput = !saveInput;
                                }, 1500);
                            }, 1500);
                        }, 1500);
                    }, 1500);
                }
            }
        }
    }
    if ( x == 5 && y == 2) {
        passableDir_SW();
        if (input == "look") {
            let blockMessage = "A big tree. In front of it there is a red puddle.";
            chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
            chatWindow.scrollTo(0,chatWindow.scrollHeight);
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
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
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
            if (npc[3][2]) {
                let blockMessage = "(Oh my God! The cultist killed the hunter! I shouldn't have told him where he is...)";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
                lookDB = true;
            } else {
                let blockMessage = "(A hunter? Why is he hiding in here?)";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
                lookDB = true;
            }
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
            saveInput = !saveInput;
            talkDB = true;
            if (npc[3][2]) {
                let npcName = "Cultist";
                let blockMessage = "Thank you! Now I have the right blood for the ritual!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
                saveInput = !saveInput;
            } else {
                if (npc[2][1]) {
                    let npcName = "Hunter";
                    let blockMessage = "I hope he is not gonna find me!";
                    chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
                    chatWindow.scrollTo(0,chatWindow.scrollHeight);
                    saveInput = !saveInput;
                } else {
                    let npcName = "Hunter";
                    let blockMessage = "What are you doing here?";
                    chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                    chatWindow.scrollTo(0,chatWindow.scrollHeight);
                    setTimeout(function() {
                        blockMessage = "Pssssst! I´m hiding from this fanatic cultist!";
                        chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
                        chatWindow.scrollTo(0,chatWindow.scrollHeight);
                        setTimeout(function() {
                            blockMessage = "What do you think he will do to you?";
                            chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                            chatWindow.scrollTo(0,chatWindow.scrollHeight);
                            setTimeout(function() {
                                blockMessage = "I think he wants to kill me for a ritual.";
                                chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
                                chatWindow.scrollTo(0,chatWindow.scrollHeight);
                                setTimeout(function() {
                                    blockMessage = "I am not going to tell him you are hiding here!";
                                    chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                                    chatWindow.scrollTo(0,chatWindow.scrollHeight);
                                    npc[2][1] = true;
                                    saveInput = !saveInput;
                                }, 1500);
                            }, 1500);
                        }, 1500);
                    }, 1500);
                }
            }
        }
    }
    //#endregion
    //#region ---Zeile-3----------->
    if ( x == 1 && y == 3) {
        passableDir_NE();
        if (input == "look") {
            if (!items[0][2]) { //---RustyKey--->
                items[0][1] = true;
                let blockMessage = "There is a key lying on the ground!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
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
            if (events[0][1]) {
                let blockMessage = "The chest is empty.";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
                lookDB = true;
            } else {
                let blockMessage = "A locked wooden chest. The keyhole looks rusty.";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
                lookDB = true;
            }
        }
        if (input == "pickup") { //---Doll--->
            if (events[0][1] && !items[1][2]) {
                items[1][2] = true;
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
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
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
            let info = "Info";
            let blockMessage = "Find the 3 orbs and put them on the altars. They will guide you the way out.";
            chatWindow.innerHTML += "<p><b>" + "<i> " + info.fontcolor("darkyellow") + ": </i></b>" + blockMessage + "</p>";
            chatWindow.scrollTo(0,chatWindow.scrollHeight);
            lookDB = true;
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
        if (events[2][1]) {
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
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
                drawPlayerLocation();
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
        if (events[4][1] && events[5][1] && events[6][1]) {
            wonGame();
        } else {
            passableDir_S();
        }
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
            let blockMessage = "(A little girl? What is it doing here?)";
            chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
            chatWindow.scrollTo(0,chatWindow.scrollHeight);
            lookDB = true;
        }
        if (input == "pickup") {
            if (false) {

            } else { nothingToPickup(); }
        }
        if (input[0] == "use" &&  input[1] == "doll" || input[0] == "doll" && input[1] == "use") { //---Use-doll--->
            if (items[1][2] && !items[1][3]) {
                items[1][3] = true;
                npc[0][2] = true;
                document.getElementById('doll').src='/img/doll_used.png';
                drawEventLocation()
                saveInput = !saveInput;
                let npcName = "Lotty";
                let blockMessage = "I found your doll. Please, take it!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
                setTimeout(function() {
                    blockMessage = "You found it! <br>Thank you mister! The secret is that my name is Lotty. <br>Please don´t tell anybody.";
                    chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
                    chatWindow.scrollTo(0,chatWindow.scrollHeight);
                    saveInput = !saveInput;
                }, 1500);
                useDB = true;
            } else { cannotUse(); }
        }
        if (input == "talk") {
            saveInput = !saveInput;
            talkDB = true;
            if (npc[0][2]) {
                let npcName = "Lotty";
                let blockMessage = "Thank you mister! My name is Lotty, but don´t tell anybody.";
                chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
                saveInput = !saveInput;
            } else {
                if (npc[0][1]) {
                    let npcName = "Girl";
                    let blockMessage = "I will tell you a secret if you bring me my doll back!";
                    chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
                    chatWindow.scrollTo(0,chatWindow.scrollHeight);
                    saveInput = !saveInput;
                } else {
                    let npcName = "Girl";
                    let blockMessage = "Hello! What does a little girl like you do alone in the woods?";
                    chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                    chatWindow.scrollTo(0,chatWindow.scrollHeight);
                    setTimeout(function() {
                        blockMessage = "I lost my doll... <br>Have you seen it? I will tell you a secret if you bring me my doll back!";
                        chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
                        chatWindow.scrollTo(0,chatWindow.scrollHeight);
                        npc[0][1] = true;
                        saveInput = !saveInput;
                    }, 1500);
                }
            }
        }
    }
    if ( x == 4 && y == 4) {
        passableDir_SW();
        if (input == "look") {
            if (!items[6][3]) { //---Blue-Orb-Altar--->
                let blockMessage = "Here is an altar with a circular indentation. There is something written on it.";
                let altarMessage = " The deep blue artefact will guide your way!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + altarMessage.fontcolor("blue") + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
            } else {
                let blockMessage = "I already put the blue orb into the circular indentation.";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
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
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
                drawEventLocation()
                useDB = true;
                if (events[4][1] && events[5][1] && events[6][1]) {allOrbs();}
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
                let blockMessage = "There is an empty bottle lying on the ground!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
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
                let blockMessage = "There is a casket lying on the ground!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
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
            if (!events[3][1]) {
                let blockMessage = "Who made this huge pentagramm? Do you not need offerings for such rituals?";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
                lookDB = true;
            } else if (!items[4][2]) { //---Red-Orb--->
                let blockMessage = "There is a red orb lying on the ground!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
                lookDB = true;
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
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
                drawEventLocation();
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
            let info = "Info";
            let blockMessage = "One needs offerings for certain rituals. Blood or something similar is sufficient.";
            chatWindow.innerHTML += "<p><b>" + "<i> " + info.fontcolor("darkyellow") + ": </i></b>" + blockMessage + "</p>";
            chatWindow.scrollTo(0,chatWindow.scrollHeight);
            lookDB = true;
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
            if (!items[6][1]) {
                let blockMessage = "(This guy looks creepy. Is he a member of some kind of cult?)";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
                lookDB = true;
            } else if (!items[6][2]) { //---Blue-Orb--->
                let blockMessage = "There is a blue orb lying on the ground!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
                lookDB = true;
            } else { nothingToLook(); }
        }
        if (input == "pickup") {
            if (items[6][1] && !items[6][2]) {
                items[6][2] = true;
                document.getElementById('blueOrb').hidden = false;
                document.getElementById('blueOrbText').hidden = false;
                confirm("You got a Blue Orb!");
                pickupDB = true;
            } else { nothingToPickup(); }
        }
        if (input == "use") {
            if (false) {

            } else { cannotUse(); }
        }
        if (input == "talk") {
            saveInput = !saveInput;
            talkDB = true;
            if (npc[3][2]) {
                noTalk();
                saveInput = !saveInput;
            } else {
                if (npc[3][1]) {
                    let npcName = "Cultist";
                    let blockMessage = "Do you know where the hunter is?";
                    chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
                    chatWindow.scrollTo(0,chatWindow.scrollHeight);
                    setTimeout(function() {
                        hunterLocation();
                        saveInput = !saveInput;
                    }, 1500);
                } else {
                    let npcName = "Cultist";
                    let blockMessage = "You look really strange. What are you doing here?";
                    chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                    chatWindow.scrollTo(0,chatWindow.scrollHeight);
                    setTimeout(function() {
                        blockMessage = "I am preparing a ritual for our true God. I´m looking for the hunter, he somewhere around here.";
                        chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
                        chatWindow.scrollTo(0,chatWindow.scrollHeight);
                        setTimeout(function() {
                            blockMessage = "What will you do to him?";
                            chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                            chatWindow.scrollTo(0,chatWindow.scrollHeight);
                            setTimeout(function() {
                                blockMessage = "I need an assistant and he is the only one who can help me.";
                                chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
                                chatWindow.scrollTo(0,chatWindow.scrollHeight);
                                setTimeout(function() {
                                    blockMessage = "Maybe I know where he is.";
                                    chatWindow.innerHTML += "<p><b>" + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
                                    chatWindow.scrollTo(0,chatWindow.scrollHeight);
                                    npc[3][1] = true;
                                    setTimeout(function() {
                                        hunterLocation();
                                        saveInput = !saveInput;
                                    }, 1500);
                                }, 1500);
                            }, 1500);
                        }, 1500);
                    }, 1500);
                }
            }
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
    if ( x == 1 && y == 4 && input == "west") {var blockMessage = "This seems to be the exit. I need to open it somehow!";}

    chatInput.value = "";
    var reserve = chatWindow.innerHTML;
    chatWindow.innerHTML = "<p><b>" + chatWindow.innerHTML + "<i> " + username + ": </i></b>" + blockMessage.fontcolor("red") + "</p>";
    chatWindow.scrollTo(0,chatWindow.scrollHeight);
    saveInput = !saveInput;
    setTimeout(function() {
        chatWindow.innerHTML = reserve;
        saveInput = !saveInput;
        chatWindow.scrollTo(0,chatWindow.scrollHeight);
    }, 1500);
}

function nothingToLook() {
    var blockMessage = "There is nothing interesting here...";
    var reserve = chatWindow.innerHTML;
    chatInput.value = "";
    chatWindow.innerHTML = "<p><b>" + chatWindow.innerHTML + "<i> " + username + ": </i></b>" + blockMessage.fontcolor("red") + "</p>";
    chatWindow.scrollTo(0,chatWindow.scrollHeight);
    saveInput = !saveInput;
    setTimeout(function() {
        chatWindow.innerHTML = reserve;
        saveInput = !saveInput;
        chatWindow.scrollTo(0,chatWindow.scrollHeight);
    }, 1000);
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
        chatWindow.scrollTo(0,chatWindow.scrollHeight);
    }, 1000);
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
        chatWindow.scrollTo(0,chatWindow.scrollHeight);
    }, 1000);
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
        chatWindow.scrollTo(0,chatWindow.scrollHeight);
    }, 1000);
}

function casket() { //caskest && goldenkey
    if (items[8][2]) {  
        chatInput.value += ' goldenKey ';
    } else {
        let code = prompt("It won´t open, but it has a combination lock!");
        if (code == "42763") {
            console.log("Richtig!");
            items[2][3] = true;
            items[8][2] = true;
            document.getElementById('casket').src='/img/goldenKey.png';
            document.getElementById('casketText').textContent="GoldenKey";
            let blockMessage = "The code was right. There is a golden key inside the casket.";
            chatWindow.innerHTML += "<p><b>" + chatWindow.innerHTML + "<i> " + username + ": </i></b>" + blockMessage + "</p>";
            chatWindow.scrollTo(0,chatWindow.scrollHeight);
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
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
            }, 1000);
        }
    }
}

function girlName() { //girlname
    let code = prompt("What is the name of the girl?");
    if (code == "lotty" || code == "Lotty") {
        console.log("Richtig!");
        npc[1][2] = true;
        setTimeout(function() {
            let npcName = "Guy";
            blockMessage = "That seems to be right! <br>I found a paper with the numbers 42763 written on it. Maybe they are useful.";
            chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
            chatWindow.scrollTo(0,chatWindow.scrollHeight);
        }, 1000);
    } else {
        console.log("Falsch!");
        setTimeout(function() {
            let npcName = "Guy";
            blockMessage = "I don't think that's her name...";
            chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
            chatWindow.scrollTo(0,chatWindow.scrollHeight);
        }, 1000);
    }
}

function hunterLocation() { //hunterLocation
    let code = prompt("What is the location of hunter?", "X?/Y?");
    if (code == "X6/Y2" || code == "x6/y2") {
        console.log("Richtig!");
        npc[3][2] = true;
        items[6][1] = true;
        setTimeout(function() {
            let npcName = "Cultist";
            blockMessage = "Praised be Cthulhu! I get on my way to find the hunter!";
            chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
            chatWindow.scrollTo(0,chatWindow.scrollHeight);
            setTimeout(function() {
                let npcName = "Cultist";
                blockMessage = "Take this orb in exchange for your valuable information!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
                setTimeout(function() {
                    drawPlayerLocation();
                }, 1500);
            }, 1500);
        }, 1000);
    } else {
        if (code == null) {
            console.log("Nothing!");
            setTimeout(function() {
                let npcName = "Cultist";
                blockMessage = "Let me know when you know were he is!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
            }, 1000);
        } else {
            console.log("Falsch!");
            items[6][1] = true;
            setTimeout(function() {
                let npcName = "Cultist";
                blockMessage = "Praised be Cthulhu! I get on my way to find the hunter!";
                chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
                chatWindow.scrollTo(0,chatWindow.scrollHeight);
                setTimeout(function() {
                    let npcName = "Cultist";
                    blockMessage = "Take this orb in exchange for your valuable information!";
                    chatWindow.innerHTML += "<p><b>" + "<i> " + npcName.fontcolor("blue") + ": </i></b>" + blockMessage + "</p>";
                    chatWindow.scrollTo(0,chatWindow.scrollHeight);
                    setTimeout(function() {
                        drawPlayerLocation();
                    }, 1500);
                }, 1500);
            }, 1000);
        }
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
    var blockMessage = "This shield will save me from a monster´s attack!";
    chatInput.value = "";
    var reserve = chatWindow.innerHTML;
    chatWindow.innerHTML = "<p><b>" + chatWindow.innerHTML + "<i> " + username + ": </i></b>" + blockMessage.fontcolor("blue") + "</p>";
    chatWindow.scrollTo(0,chatWindow.scrollHeight);
    saveInput = !saveInput;
    setTimeout(function() {
        chatWindow.innerHTML = reserve;
        saveInput = !saveInput;
        chatWindow.scrollTo(0,chatWindow.scrollHeight);
    }, 3000);
}

function allOrbs() {
    confirm("A path has opened! Maybe I can leave this maze now!");
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