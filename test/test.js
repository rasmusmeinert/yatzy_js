import * as chai from "chai"
import * as dice from "../yatzy.js"

describe("Pairs of 2 and Full House points", function(){
  dice.dice[0].face = 2
  dice.dice[1].face = 2
  dice.dice[2].face = 5
  dice.dice[3].face = 5
  dice.dice[4].face = 5
  it ("should return 4", function (){
    chai.assert(dice.sameValuePoints(2), 4)
  })
  it ("should return 19", function(){
    chai.assert(dice.fullHousePoints, 19)
  })
})
