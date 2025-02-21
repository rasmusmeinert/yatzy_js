import * as dice from './yatzy.js'

let btnRoll = document.querySelector("#btnRoll");

btnRoll.onclick = rollClick

function rollClick(event){
  dice.throwDice()
  console.log(dice.frequency())
}

