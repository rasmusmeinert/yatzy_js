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

let textFields = [ones, twos, threes, fours, fives, sixes, onePair, twoPairs, threeSame, fourSame, fullHouse
  , smallStraight, largeStraight, chance, yatzy]

btnRoll.onclick = rollClick

for (let die of diceImages) {
  die.onclick = toggleHold
}

for (let textField of textFields) {
  textField.onclick = selectScore
}

//TODO currently the game breaks when u save a roll from previous round

function rollClick(event) {
  if (dice.throwCount < 3) {
    dice.throwDice()
    updateDieImage()
    smartUpdateScores()
    turns.innerHTML = `Turn ${dice.throwCount}`
  }
}

function toggleHold(event) {
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

function selectScore(event) {
  if (event.target.value != 0) {
    let index = textFields.indexOf(event.target)
    dice.playerScores[index] = event.target.value
    event.target.style.border = '2px solid #83a598'
    resetThrowCount()
  }
}

function resetThrowCount() {
  dice.resetThrowCount()
  turns.innerHTML = `Turn ${dice.throwCount}`
  dice.resetDice()
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
      textFields[textField].value = dice.currentScores[textField]
    }
  }
}

//Updates dice image to represent new roll
function updateDieImage() {
  for (let i = 0; i < 5; i++) {
    diceImages[i].src = `images/dice${dice.dice[i].face}.png`
  }

}

