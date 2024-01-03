

const squares = document.querySelectorAll(".square")
const enemy = document.querySelector(".enemy")
const times = document.getElementById("time-left")
const score = document.getElementById("score")

let timerId = null
const velociter = 1000
let hitPositions = 0
let result = 0
let currentTime = 60
let correnTimeId = setInterval(countDonw, velociter)

function randomSquare(){
    squares.forEach((square) => {
        square.classList.remove("enemy")
    })
    let randomNumber = Math.floor(Math.random() * 9)
    let randomSquare = squares[randomNumber]

    randomSquare.classList.add("enemy")
    hitPositions = randomSquare.id
}

function playAudio(){
    let audio = new Audio("./src/audio/hit.m4a")
    audio.volume = 0.2
    audio.play()
}
function countDonw(){
    currentTime--
    times.textContent = currentTime
    correnTimeId
    
    if(currentTime <= 0){
        clearInterval(timerId)
        clearInterval(times)
        alert(`Game over! o seu resultaod foi: ${result}`)
        
    }
}

function moveEnemy(){
  timerId = setInterval(randomSquare, velociter);
}

function addSquare(){
    squares.forEach((square)=>{
      square.addEventListener("click",()=>{
      if(square.id === hitPositions){
         result ++
         score.textContent = result
         hitPositions = null
         playAudio()
      }
      })
    })
}



function init(){
 moveEnemy()
 addSquare()
}

init()