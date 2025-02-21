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

btnRoll.onclick = rollClick

function rollClick(event) {
  dice.throwDice()
  updateScores()
}

  function updateScores() {
    ones.value = dice.scores.ones
    twos.value = dice.scores.twos
    threes.value = dice.scores.threes
    fours.value = dice.scores.fours
    fives.value = dice.scores.fives
    sixes.value = dice.scores.sixes
    onePair.value = dice.scores.onePair
    twoPairs.value = dice.scores.twoPairs
    threeSame.value = dice.scores.threeSame
    fourSame.value = dice.scores.fourSame
    fullHouse.value = dice.scores.fullHouse
    smallStraight.value = dice.scores.smallStraight
    largeStraight.value = dice.scores.largeStraight
    chance.value = dice.scores.chance
    yatzy.value = dice.scores.yatzy
  }

