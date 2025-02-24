import * as dice from './yatzy.js'

let btnRoll = document.querySelector("#btnRoll")
let ones = document.querySelector("#txfOnes")
let twos = document.querySelector("#txfTwos")
let threes = document.querySelector("#txfThrees")
let fours = document.querySelector("#txfFours")
let fives = document.querySelector("#txfFives")
let sixes = document.querySelector("#txfSixes")
let onePair = document.querySelector("#txfOnePair")
let twoPairs = document.querySelector("#txfTwoPairs")
let threeSame = document.querySelector("#txfThreeSame")
let fourSame = document.querySelector("#txfFourSame")
let fullHouse = document.querySelector("#txfFullHouse")
let smallStraight = document.querySelector("#txfSmallStraight")
let largeStraight = document.querySelector("#txfLargeStraight")
let chance = document.querySelector("#txfChance")
let yatzy = document.querySelector("#txfYatzy")
let diceImages = document.querySelectorAll(".dice")
let turns = document.querySelector("#turns")
let total = document.querySelector("#txfTotal")
let pairSum = document.querySelector("#txfSum")
let bonus = document.querySelector("#txfBonus")
let btnScores = Array.from(document.querySelectorAll(".btnScores"))

let textFields = [ones, twos, threes, fours, fives, sixes, onePair, twoPairs, threeSame, fourSame, fullHouse
  , smallStraight, largeStraight, chance, yatzy]

btnRoll.onclick = rollClick

for (let die of diceImages) {
  die.onclick = toggleHold
}

for (let btn of btnScores) {
  btn.onclick = selectScore
}


function rollClick(event) {
  if (dice.throwCount < 3) {
    dice.throwDice()
    updateDieImage()
    smartUpdateScores()
    turns.innerHTML = 3 - dice.throwCount
  }
}

function toggleHold(event) {
  if (dice.throwCount != 0) {
    let diceNumber = event.target.id.charAt(3)
    //Fixes off by one error
    diceNumber--
    if (dice.dice[diceNumber].hold == true) {
      event.target.style.border = '0px solid'
      event.target.style.borderRadius = "15px"
      dice.dice[diceNumber].hold = false
    } else {
      event.target.style.border = '2px solid #fe8019'
      event.target.style.borderRadius = "18px"
      dice.dice[diceNumber].hold = true
    }
  }
}

function selectScore(event) {
  let index = btnScores.indexOf(event.target)
  let textField = textFields[index]
  let score = textField.value
  if (score == 0) {
    dice.playerScores[index] = 0
  } else {
    dice.playerScores[index] = parseInt(score)
  }
  textField.style.backgroundColor = '#83a598'
  resetThrowCount()
  event.target.disabled = true
  total.value = dice.totalScore()
  pairSum.value = dice.pairScore()
  bonus.value = dice.getBonus()
}


function resetThrowCount() {
  dice.resetThrowCount()
  turns.innerHTML = 3 - dice.throwCount
  dice.resetDice()
  updateDieImage()
  smartUpdateScores()
  resetHold()
}

function resetHold() {
  for (let die of diceImages) {
    die.style.border = '0px solid'
    die.style.borderRadius = "15px"
  }
}


//Updates all scores that are not already set in the playerscores
function smartUpdateScores() {
  for (let textField in textFields) {
    if (dice.playerScores[textField] == undefined) {
      if (dice.currentScores[textField] != 0) {
        textFields[textField].value = dice.currentScores[textField]
      } else {
        textFields[textField].value = ""
      }
    }
  }
}

//Updates dice image to represent new roll
function updateDieImage() {
  for (let i = 0; i < 5; i++) {
    diceImages[i].src = `images/dice${dice.dice[i].face}.png`
  }

}

