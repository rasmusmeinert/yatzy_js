// Setup dice array
let die = { face: NaN, hold: false }

export let dice = []

export let throwCount = 0

for (let i = 0; i < 5; i++) {
  dice[i] = Object.create(die)
}


//Throw all dice that are not on hold
export function throwDice() {
  throwCount++
  for (let die of dice) {
    if (die.hold === false) {
      die.face = Math.floor(Math.random() * 6 + 1)
    }
  }
}

export function resetDice(){
  for (let die of dice){
    dice.face = 0;
    dice.hold = false
  }
}

export function resetThrowCount(){
  throwCount = 0;
}


//Logs all dice values
//TODO remove this maybe?
export function printDiceValues() {
  for (let die of dice) {
    console.log(die.face + " ")
  }
}

//Get the frequency of the dice values
export function frequency() {
  let frequency = [0, 0, 0, 0, 0, 0, 0]
  for (let die in dice) {
    frequency[dice[die].face]++
  }
  return frequency
}

//Return the amount of points for a given value (1-6)
export function sameValuePoints(value) {
  return frequency()[value] * value
}

//Return the amount of points for the highest pair
export function onePairPoints() {
  for (let i = 6; i > 0; i--) {
    if (frequency()[i] >= 2) {
      return i * 2
    }
  }
  return 0
}

export function twoPairPoints() {
  for (let i = 6; i > 0; i--) {
    if (frequency()[i] >= 2) {
      for (let j = i - 1; j > 0; j--) {
        if (frequency()[j] >= 2) {
          return i * 2 + j * 2
        }
      }
    }
  }
  return 0
}

export function threeSamePoints() {
  for (let i = 6; i > 0; i--) {
    if (frequency()[i] >= 3) {
      return i * 3
    }
  }
  return 0
}

export function fourSamePoints() {
  for (let i = 6; i > 0; i--) {
    if (frequency()[i] >= 4) {
      return i * 4
    }
  }
  return 0
}

export function fullHousePoints() {
  for (let i = 6; i > 0; i--) {
    if (frequency()[i] === 3) {
      for (let j = i - 1; j > 0; j--) {
        if (frequency()[j] === 2) {
          return i * 3 + j * 2
        }
      }
    }
  }
  return 0
}

export function smallStraightPoints(){
  let smallStraight = [0,1,1,1,1,1,0]
  for (let i = 0; i <= 6; i ++){
    if (frequency()[i] !== smallStraight[i]){
      return 0
    }
  }
  return 15
}

export function largeStraightPoints(){
  let largeStraight = [0,0,1,1,1,1,1]
  for (let i = 0; i <= 6; i ++){
    if (frequency()[i] !== largeStraight[i]){
      return 0
    }
  }
  return 20
}

export function chancePoints(){
  let chancePoints = 0
  for (let die of dice){
    chancePoints += die.face
  }
  return chancePoints
}

export function yatzyPoints() {
  for (let i = 6; i > 0; i--) {
    if (frequency()[i] >= 5) {
      return i * 5
    }
  }
  return 0
}
throwDice()
console.log(frequency())
console.log("4's: " + sameValuePoints(4))
console.log("Pairs: " + onePairPoints())
console.log("Two Pairs:" + twoPairPoints())
console.log("Three Same:" + threeSamePoints())
console.log("Four Same:" + fourSamePoints())
console.log("Full House: " + fullHousePoints())
console.log("Small Straight: " + smallStraightPoints())
console.log("Large Straight: " + largeStraightPoints())
console.log("Chance:" + chancePoints())
