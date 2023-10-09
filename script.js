
var newHit = 0;
var hitNum = document.querySelector("#hitNum");

var time = 60;
var timerDisplay = document.querySelector("#Timer");

var score = 0;
var scoreDisplay = document.querySelector("#scoreDisplay");

var gameBody = document.querySelector(".game-area-body");
var clickedNum = 0;

var randomNumber = 0;

function makeButton() {
var clutter = ""

    for (let i = 0; i < 189; i++) {
        randomNumber = Math.floor(Math.random() * 30);
        clutter += `<div class="bubble">${randomNumber}</div>`
    }

 
    gameBody.innerHTML = clutter;
}

function getNewHit() {
    newHit = Math.floor(Math.random() * 30);
    hitNum.textContent = newHit;

}

function timerDecrease() 
{
    var timeInterval = setInterval(function() 
        {
            if(time>=0)
            {
                var changedTime = time--;
                timerDisplay.textContent = changedTime;
            }
        else
        {
         clearInterval(timeInterval);
    gameBody.innerHTML = `<h1>Game Over</h1>`


        }
        
        }, 1000)

}

function scoreIncrease()
{
    score += 10;
    scoreDisplay.textContent = score
}

function scoreChange()
{
    gameBody.addEventListener("click",function(dets)
    {
         clickedNum = (Number(dets.target.textContent));

     if(clickedNum === newHit)
    {
    scoreIncrease();
    getNewHit();
    makeButton();
    }
    })

    
}



















getNewHit();
makeButton();
timerDecrease();
scoreChange();