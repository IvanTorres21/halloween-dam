//This function is used to move the ghost around the page without having to make ten functions
function moveGhost(element) {

    var elem = document.getElementById(element);
    var curPosX = parseInt(window.getComputedStyle(elem, null).getPropertyValue("left"));
    var posX = curPosX;
    var curPosY = parseInt(window.getComputedStyle(elem, null).getPropertyValue("top"));
    var posY = curPosY;
    var id = setInterval(frame, 3);
    var camDir = 0; //Its used for multiple step movement
    function frame() {
        if (curPosX == 200) { //First time

            if (posX == 700) {

                clearInterval(id);
            }
            else {

                posX++;
                elem.style.left = posX + "px";
                if (posX > 400 && posY != 500) {
                    posY++;
                    elem.style.top = posY + "px";
                }
            }

        } else if (curPosX == 700) { //Second time
            if (posX == 400) {

                clearInterval(id);
            }
            else {
                posX--;
                elem.style.left = posX + "px";
                if (posY != 200) {
                    posY--;
                    elem.style.top = posY + "px";
                }
            }
        } else if (curPosX == 400) { //Third time

            if (posX == 500) {

                clearInterval(id);
            }
            else if (posX != 201 && camDir == 0) {
                posX--;
                elem.style.left = posX + "px";
                if (posY != 600) {
                    posY++;
                    elem.style.top = posY + "px";
                }
            } else if (posY <= 1000) {
                camDir = 1;
                if (posX < 500) {
                    posX++;
                    elem.style.left = posX + "px";
                }
                if (posY != 1000) {
                    posY++;
                    elem.style.top = posY + "px";
                } else {
                    posX++;
                    elem.style.left = posX + "px";
                }
            }
        } else if (curPosX == 500) { //Fourth time
            if (posY == 1600) {

                clearInterval(id);
            } else {
                posY++;
                elem.style.top = posY + "px";
            }
        }
    }
}
//This function changes the text box that shows what spooky is saying
function moveTextBox(textBox, innerText) {

    var box = document.getElementById(textBox);
    var textP = document.getElementById(innerText);
    var boxPosX = parseInt(window.getComputedStyle(box, null).getPropertyValue("left"));
    var boxPosY = parseInt(window.getComputedStyle(box, null).getPropertyValue("top"));
    box.style.visibility = "hidden";
    if (boxPosX == 400) {

        setTimeout(function () {
            box.style.left = 900 + "px";
            box.style.top = 370 + "px";
            box.style.visibility = "visible";
            textP.innerHTML = "This is my profile picture, it's so people know who made this\nThere is a cool pumpkin in the corner, try to hover over it";
        }, 2500);
    } else if (boxPosX == 900) {

        setTimeout(function () {
            box.style.left = 200 + "px";
            box.style.top = 180 + "px";
            box.style.visibility = "visible";
            textP.innerHTML = "I really like this part, this is my header.\nYou can change the background music by clicking\non the pumpkins, try the last one first for example.";
        }, 2000);
    } else if (boxPosX == 200) {
        setTimeout(function () {
            box.style.left = 660 + "px";
            box.style.top = 700 + "px";
            box.style.visibility = "visible";
            textP.innerHTML = "Be sure to follow me, we are going somewhere pretty far away.\nClick on me when you are ready";
        }, 2800);
    } else if (boxPosX == 660) {
        setTimeout(function () {
            box.style.left = 201 + "px";
            box.style.top = 1550 + "px";
            box.style.visibility = "visible";
            textP.innerHTML = "We are out of the webpage now, it's pretty dark around here.\nTell me, did you like it? I spent a\nlot of time on this.";
            document.getElementById("Opt1").style.visibility = "visible";
            document.getElementById("Opt1").style.top = 1680 + "px";
            document.getElementById("Opt1").style.left = 200 + "px";
            document.getElementById("Opt2").style.visibility = "visible";
            document.getElementById("Opt2").style.top = 1680 + "px";
            document.getElementById("Opt2").style.left = 260 + "px";
        }, 5000);

    } else if (boxPosY == 1550) {
        box.style.left = 400 + "px";
        box.style.top = 1550 + "px";
        box.style.visibility = "visible";
        textP.innerHTML = "You are right.\nI know this isn't good, i know that you want to go away\nAll this effort was for nothing...";
        setTimeout(function () {

            textP.innerHTML = "You know what? It's not my fault.\nYeah that's right, it's yours. You should be the one suffering\n\nNot me."
            setTimeout(function () {

                textP.innerHTML = "You were the one who made me realize it,\nso it should be you the one suffering.";
            }, 10000);
        }, 10000);
    }
}
//This functions are used for when we need to change the text but not the position of the box.
function changeText(innerText, currentElement, textBox) {

    var textP = document.getElementById(innerText);
    var box = document.getElementById(textBox);
    var curPosX = parseInt(window.getComputedStyle(box, null).getPropertyValue("left")); // This is so that we are sure we have to change the text
    if (currentElement == "MusicPumpkin5" && curPosX == 200) {
        textP.innerHTML = "See? Pretty cool right?\nThe middle one is my favourite, you should try it";
    } else if (currentElement == "MusicPumpkin3" && curPosX == 200) {
        textP.innerHTML = "Did I scare you? You have to admit that it was pretty funny.\nWell, let's continue with the tour.\nClick on me again when you are ready";
    }
}
//This function is used once the user tells spooky if they liked the web
function theEnd(opt) {
    if (opt == "Opt1") {

        document.getElementById(opt).innerText = "no"
    }
    document.getElementById("Opt1").style.backgroundColor = "red";
    document.getElementById("Opt2").style.backgroundColor = "red";
    stopAllMusic();
    recursiveDelay(creatButton, 20, 0.1);
    var ghost = document.getElementById("ghost").src = "imagenes/ghost2.gif";
    moveTextBox("GhostText", "GhostP");
    setTimeout(function () {
        document.getElementById("first").remove();
        setTimeout(function () {
            document.getElementById("second").style.display = "initial";
            startMusic("back5");
            startMusic("demVoic")
            setTimeout(function () {
                document.getElementById("exitbutton").style.visibility = "visible";
            }, 5000);
        }, 2000);
    }, 25000);
}
//Creates a lot of buttons
function creatButton() {

    var div = document.getElementById("AllButtons");
    var newbuttn = document.createElement("button");
    newbuttn.tagName = "Opt1";
    var randY = parseInt(Math.random() * (1800 - 1200) + 1200);
    var randX = parseInt(Math.random() * (1200 - 100) + 100);
    newbuttn.style.position = "absolute";
    newbuttn.style.width = 50 + "px";
    newbuttn.style.height = 30 + "px";
    newbuttn.innerText = "no"
    newbuttn.style.top = randY + "px";
    newbuttn.style.left = randX + "px";
    newbuttn.style.visibility = "visible";
    newbuttn.style.backgroundColor = "red";
    div.appendChild(newbuttn);

}
function recursiveDelay(functionToCall, executionsNumber, timeoutInSeconds) {
    if (executionsNumber) { //exit condition

        functionToCall(); // external function execution

        setTimeout(
            () => {
                recursiveDelay(functionToCall, executionsNumber - 1, timeoutInSeconds); //recursive call
            }, 1000 * timeoutInSeconds);
    }
}
//This function creates more exits buttons.
function createExitButton() {

    var div = document.getElementById("AllExitButtons");
    var newbuttn = document.createElement("button");
    var randY = parseInt(Math.random() * (1200));
    var randX = parseInt(Math.random() * (1200));
    newbuttn.style.position = "absolute";
    newbuttn.style.width = 80 + "px";
    newbuttn.style.height = 40 + "px";
    newbuttn.innerText = "EXIT"
    newbuttn.style.top = randY + "px";
    newbuttn.style.left = randX + "px";
    newbuttn.style.visibility = "visible";
    newbuttn.style.zIndex = "1000";
    newbuttn.style.backgroundColor = "red";
    newbuttn.style.color = "white";
    div.appendChild(newbuttn);

}
//This function exits The Other Side
function exitWeb() {

    recursiveDelay(createExitButton, 20, 0.1);
    setTimeout(
        function() {
            document.getElementById("second").remove();
            document.getElementById("third").style.display = "initial";
            stopAllMusic();
            startMusic("back1");
            setTimeout(function () {

                alert("I'm Sorry");
            }, 2000);
        }
    , 4000);

}
//This function changes the avatar picture
function changeProf(element) {

    var elem = document.getElementById(element);
    var time = 400;
    setTimeout(function () {
        elem.style.visibility = "visible";
    }, time);
    time = 2000;
    setTimeout(function () {
        elem.style.visibility = "hidden";
    }, time);

}
//This function is used for all the jumpscares if possible
function jumpScare(element, sound) {

    var elem = document.getElementById(element);
    elem.style.visibility = "visible";
    var scream = document.getElementById(sound);
    scream.play();
    var time = 3000;
    setTimeout(function () {
        elem.style.visibility = "hidden";
        scream.pause();
    }, time);

}
//This function starts sounds
function startMusic(element) {

    document.getElementById(element).play();
}
//This functions stops sounds
function stopMusic(element) {
    document.getElementById(element).pause();
}
//This function stops all music
function stopAllMusic() {
    document.getElementById("back1").pause();
    document.getElementById("back2").pause();
    document.getElementById("back3").pause();
    document.getElementById("back4").pause();
    document.getElementById("back5").pause();
}
