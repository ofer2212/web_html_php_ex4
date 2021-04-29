var hero = {
    left: 425,
    top: 600
};
var controls = {
    letterIndex: 0,
    questionIndex: 0,
    gameOn: false,
    missiles: [],
    mousedownID: -1,
}


var tips = [
    ["At least one space", "Not numbers"],
    ["javascript right ? (:"],
    [],
    ["Valid one ok?"],
    ["shoot only numbers"],
    [],
    [],
    [],
    ["shoot the checkbox numbers"],
    ["shoot the radio btns number"]
]

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '@', '.', '␣', '=', '<', '>', '~', '0', '0']


var enemies = [
    {left: 140, top: 100, letter: letters[0]},
    {left: 170, top: 100, letter: letters[1]},
    {left: 200, top: 100, letter: letters[2]},
    {left: 230, top: 100, letter: letters[3]},
    {left: 260, top: 100, letter: letters[4]},
    {left: 290, top: 100, letter: letters[5]},
    {left: 320, top: 100, letter: letters[6]},
    {left: 350, top: 100, letter: letters[7]},
    {left: 380, top: 100, letter: letters[8]},
    {left: 410, top: 100, letter: letters[9]},
    {left: 440, top: 100, letter: letters[10]},
    {left: 470, top: 100, letter: letters[11]},
    {left: 500, top: 100, letter: letters[12]},
    {left: 530, top: 100, letter: letters[13]},
    {left: 560, top: 100, letter: letters[14]},

    {left: 140, top: 150, letter: letters[15]},
    {left: 170, top: 150, letter: letters[16]},
    {left: 200, top: 150, letter: letters[17]},
    {left: 230, top: 150, letter: letters[18]},
    {left: 260, top: 150, letter: letters[19]},
    {left: 290, top: 150, letter: letters[20]},
    {left: 320, top: 150, letter: letters[21]},
    {left: 350, top: 150, letter: letters[22]},
    {left: 380, top: 150, letter: letters[23]},
    {left: 410, top: 150, letter: letters[24]},
    {left: 440, top: 150, letter: letters[25]},
    {left: 470, top: 150, letter: letters[26]},
    {left: 500, top: 150, letter: letters[27]},
    {left: 530, top: 150, letter: letters[28]},
    {left: 560, top: 150, letter: letters[29]},

    {left: 140, top: 200, letter: letters[30]},
    {left: 170, top: 200, letter: letters[31]},
    {left: 200, top: 200, letter: letters[32]},
    {left: 230, top: 200, letter: letters[33]},
    {left: 260, top: 200, letter: letters[34]},
    {left: 290, top: 200, letter: letters[35]},
    {left: 320, top: 200, letter: letters[36]},
    {left: 350, top: 200, letter: letters[37]},
    {left: 380, top: 200, letter: letters[38]},
    {left: 410, top: 200, letter: letters[39]},
    {left: 440, top: 200, letter: letters[40]},
    {left: 470, top: 200, letter: letters[41]},
    {left: 500, top: 200, letter: letters[42]},
    {left: 530, top: 200, letter: letters[43]},
    {left: 560, top: 200, letter: letters[44]},

];


document.onkeydown = function (e) {
    if (e.keyCode === 37) {
        // Left
        hero.left = hero.left - 10;
    }
    if (e.keyCode === 39) {
        // Right
        hero.left = hero.left + 10;
    }
    if (e.keyCode === 32) {
        // fire
        controls.missiles.push({
            left: hero.left + 20,
            top: hero.top - 20
        });
        drawMissiles()
    }
    drawHero();
}

function drawInbox(letterCount) {
    inboxIndex = 0;
    controls.letterIndex = 0
    var inboxContainer = document.getElementById("inbox")
    inboxContainer.style.width = 30 * letterCount + "px"
    inboxContainer.innerHTML = ""
    // inboxContainer.style.display="block"
    for (let i = 0; i < letterCount; i++) {

        setTimeout(function () {
            inboxContainer.innerHTML += '<li class="inbox-line"><p id="inbox-letter-' + i + '"></p></li>';
        }, 50 * i)

    }
}

function fillForm(qIndex, letter, erase = false) {

    var currentQuestion = document.getElementById("q" + qIndex)
    var currentInput = currentQuestion.getElementsByTagName("input")[0]
    if (erase) {
        var newVal = currentInput.value.slice(0, -1)
        currentInput.value = newVal
        removeInboxLetter()
    } else {
        currentInput.value += letter;
    }

}



function removeInboxLetter() {
    if ((controls.questionIndex === 8 || controls.questionIndex === 9) && controls.letterIndex > 0) {
        var letter = document.getElementById("inbox-letter-" + (controls.letterIndex - 1)).innerHTML
        if (letter > 0 && letter <= 4) {
            document.getElementById((controls.questionIndex === 8 ? "interests" : "gender") + letter + letter).checked = false
        }
    }

    if (controls.letterIndex > 0) {
        controls.letterIndex--
        document.getElementById("inbox-letter-" + controls.letterIndex).innerHTML = " "
    }

}

function addInboxLetter(inboxIndex, letter) {
    var limit = document.getElementById("inbox").childElementCount;
    if (letter === "␣") {
        letter = " "
    }

    if (inboxIndex < limit) {


        document.getElementById("inbox-letter-" + inboxIndex).innerHTML = letter;
        if (controls.questionIndex === 8 || controls.questionIndex === 9) {
            if (letter > 0 && letter <= 4) {
                document.getElementById((controls.questionIndex === 8 ? "interests" : "gender") + letter).checked = true
            }
        } else {
            fillForm(controls.questionIndex, letter)
        }
    }
}

function drawHero() {
    document.getElementById('hero').style.left = hero.left + 'px';
    document.getElementById('hero').style.top = hero.top + 'px';
}

function drawMissiles() {
    document.getElementById('missiles').innerHTML = ""
    for (var i = 0; i < controls.missiles.length; i++) {
        document.getElementById('missiles').innerHTML += `<div class='missile1' style='left:${controls.missiles[i].left}px; top:${controls.missiles[i].top}px'></div>`;
    }
}

function moveMissiles() {
    for (var i = 0; i < controls.missiles.length; i++) {
        controls.missiles[i].top = controls.missiles[i].top - 8
    }
}

function drawEnemies() {
    document.getElementById('enemies').innerHTML = ""
    for (var i = 0; i < enemies.length; i++) {
        document.getElementById('enemies').innerHTML += `<div class='enemy letter' style='left:${enemies[i].left}px; top:${enemies[i].top}px'>${enemies[i].letter}</div>`;
    }
}

function moveEnemies() {
    letters.unshift(letters.pop())
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].letter = letters [i];
    }
}

function detectHitControls() {
    var {missiles} = controls
    for (var missile = 0; missile < missiles.length; missile++) {
        if (missiles[missile] && missiles[missile].left && missiles[missile].top) {

            if (
                missiles[missile].left > 350 &&
                missiles[missile].top < 400 &&
                missiles[missile].left < 425 && !controls.gameOn) {
                handleHitStart()
                missiles.splice(missile, 1);
                return

            }
            if (
                missiles[missile].left > 700 &&
                missiles[missile].top < 20 &&
                missiles[missile].left < 775) {
                handleHitNext()
                missiles.splice(missile, 1);
                return
            }

            if (
                missiles[missile].left > 600 &&
                missiles[missile].top < 20 &&
                missiles[missile].left < 675) {
                handleHitDone()
                missiles.splice(missile, 1);
                return
            }
            if (
                missiles[missile].left > 20 &&
                missiles[missile].top < 20 &&
                missiles[missile].left < 95) {
                handleHitDelete()
                missiles.splice(missile, 1);
                return
            }
        }
    }
}

function collisionDetection() {
    for (var enemy = 0; enemy < enemies.length; enemy++) {
        for (var missile = 0; missile < controls.missiles.length; missile++) {


            if (
                controls.missiles[missile].left >= enemies[enemy].left &&
                controls.missiles[missile].left <= (enemies[enemy].left + 50) &&
                controls.missiles[missile].top <= (enemies[enemy].top + 50) &&
                controls.missiles[missile].top >= enemies[enemy].top
            ) {

                if (enemies[enemy].letter !== " ") {
                    controls.missiles.splice(missile, 1);
                }
                addInboxLetter(controls.letterIndex, letters[enemy])
                controls.letterIndex++
                enemies[enemy].letter = " "


            }
        }
    }
}


function gameLoop() {
    setTimeout(gameLoop, 1500)
    // moveMissiles();
    // drawMissiles();
    moveEnemies();

    // collisionDetection();
}

function movesLoop() {
    setTimeout(movesLoop, 10)
    moveMissiles();
    drawMissiles();
    // moveEnemies();
    drawEnemies();
    detectHitControls();
    collisionDetection();
}


function init() {
    let modal = document.querySelector('#result');
    setTimeout(function () {
        modal.classList.remove('hidden');
    }, 10000);
    console.log('Results shown');
}


function explode(xp, yp) {
    var particles = 15
    var explosion = document.createElement("div")
    explosion.classList.add("explosion")
    explosion.style.left = xp - 100 + "px"
    explosion.style.top = yp - 100 + "px"
    document.getElementsByTagName("body")[0].append(explosion)
    for (var i = 0; i < particles; i++) {
        var x = (explosion.style.width / 2) + rand(80, 150) * Math.cos(2 * Math.PI * i / rand(particles - 10, particles + 10)),
            y = (explosion.style.height / 2) + rand(80, 150) * Math.sin(2 * Math.PI * i / rand(particles - 10, particles + 10))

        var elm = document.createElement("div")
        elm.classList.add("particle")
        elm.style.backgroundColor = '#' + rand(0, 255) + rand(0, 255) + rand(0, 255);
        elm.style.top = y + "px"
        elm.style.left = x + "px"

        elm.style.zIndex = "9999"


        if (i === 0) {
            elm.onanimationend = function () {
                explosion.remove();
            }
        }
        explosion.append(elm);
    }
}


function rand(min, max) {
    return Math.floor(Math.random() * (max + 1)) + min;
}

function addTips(tips) {
    var tipEl = document.getElementById("tip")
    var tipUl = tipEl.getElementsByTagName("ul")[0]
    tipUl.innerHTML = ""
    if (!tips || tips.length === 0) {
        tipUl.innerHTML = ""
        tipEl.style.display = "none"
    } else {
        tips.forEach(function (tip) {
            tipUl.innerHTML += `<li>${tip}</li>`
        })
        tipEl.style.display = "block"
    }

}


// game controls
function handleHitStart() {
    document.getElementsByClassName("start")[0].style.display = "none"
    controls.gameOn = true
    setTimeout(gameLoop, 0)
    markQuestion(0, 0)
    drawInbox(12)
    addTips(tips[0])
    setLevel(1)
}

function markQuestion(prevQindex, qIndex) {
    document.getElementById("q" + prevQindex).classList.remove("marked-question")
    var nexQuestion = document.getElementById("q" + qIndex)
    nexQuestion.classList.add("marked-question")
    nexQuestion.scrollIntoView();
}


function handleHitNext() {
    if (controls.questionIndex < 11) {
        controls.questionIndex++;
        drawInbox(12)
        markQuestion(controls.questionIndex - 1, controls.questionIndex)
        addTips(tips[controls.questionIndex])
        console.log(controls.questionIndex)
        setLevel(controls.questionIndex + 1)
        // loadInput(controls.questionIndex)
    }
}

function handleHitDelete() {
    fillForm(controls.questionIndex, "", true)
}

function setLevel(level) {
    document.getElementById("level").innerHTML = level
}

function handleHitDone() {
    var c1 = document.getElementById("interests1")
    var c2 = document.getElementById("interests2")
    var c3 = document.getElementById("interests3")
    var c4 = document.getElementById("interests4")
    var r2 = document.getElementById("gender2")
    var q5 = document.getElementById("q4").getElementsByTagName("input")

    if (c1.checked && c3.checked && !c2.checked && !c4.checked) {
        alert("check your answer for question 9")
        return
    }
    if (!r2.checked) {
        alert("check your answer for question 10")
        return
    }


    document.getElementsByTagName("form")[0].submit()
}

function mouseup(event) {
    if (controls.mousedownID != -1) {
        clearInterval(controls.mousedownID);
        controls.mousedownID = -1;
    }

}

function fireWhileMousedown() {
    controls.missiles.push({
        left: hero.left + 20,
        top: hero.top - 20
    });
}

function moveLeftWhileMousedown() {

    hero.left = hero.left - 10;
    drawHero();
}

function moveRightWhileMousedown() {
    hero.left = hero.left + 10;
    drawHero();
}

function handleMouseDown(e) {

    if (e.target.id === "control-right") {
        //left
        if (controls.mousedownID == -1)
            controls.mousedownID = setInterval(moveLeftWhileMousedown, 100);
    }
    if (e.target.id === "control-fire") {
        //fire
        fireWhileMousedown()
    }
    if (e.target.id === "control-left") {
        //right
        if (controls.mousedownID == -1)
            controls.mousedownID = setInterval(moveRightWhileMousedown, 100);

    }
}

window.onload = function () {

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", mouseup);
    document.addEventListener("touchstart", handleMouseDown, false);
    document.addEventListener("touchend", mouseup, false);

    setTimeout(movesLoop, 0)
}


