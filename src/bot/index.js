import equals from 'array-equal'
import shuffle from 'shuffle-array'

import permutations from '../utils/permutations'
import scoreCalc from '../utils/scoreCalc'

import { NUMERALS, SECRET_LENGTH } from '../constants/Game'

class Bot {}

export class SimpleBot extends Bot {
  constructor() {
    super()
    this.permutations = permutations(NUMERALS, SECRET_LENGTH)
    this.refresh()
  }

  shufflePermutations(permutations) {
    return shuffle(permutations)
  }

  pickRandomPermutation(permutations) {
    return shuffle.pick(permutations)
  }

  filterChoices(prevChoices, prevGuess, score) {
    return prevChoices.filter(choice => {
      return equals(scoreCalc(choice, prevGuess), score)
    })
  }

  guess(score) {
    this._choices = this.filterChoices(this._choices, this.lastGuess, score)
    if (this._choices.length > 0) {
      this.lastGuess = this._choices[0]
    }
    return this.lastGuess
  }

  score(guess) {
    this.lastScore = scoreCalc(guess, this._secret)
    return this.lastScore
  }

  refresh() {
    this._secret = this.pickRandomPermutation(this.permutations)
    this._choices = this.shufflePermutations(this.permutations)
    this.lastGuess = this._choices[0]
    this.lastScore = []
  }
}

const simpleBot = new SimpleBot()

export default simpleBot
