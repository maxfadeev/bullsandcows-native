import equals from 'array-equal'
import shuffle from 'shuffle-array'

import permutations from './permutations'
import scoreCalc from './scoreCalc'

import { NUMERALS, SECRET_LENGTH } from '../constants/Game'

const pmtns = permutations(NUMERALS, SECRET_LENGTH)

export function calculateChoices(prevChoices, answer, score) {
  if (prevChoices === undefined || prevChoices === null) {
    return shuffle(pmtns)
  } else {
    return prevChoices.filter(choice => {
      return equals(scoreCalc(choice, answer), score)
    })
  }
}

export function getGuess(choices) {
  return choices[0]
}

export function createSecret() {
  return shuffle.pick(pmtns)
}
