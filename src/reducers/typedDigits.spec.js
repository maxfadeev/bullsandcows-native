import reducer from './typedDigits'
import * as types from '../constants/ActionTypes'
import {
  SUB,
  GUESS_TURN,
  SCORE_TURN,
  SECRET_LENGTH,
  SCORE_LENGTH
} from '../constants/Game'

describe('typedDigits reducer', () => {
  const initialState = Array(SECRET_LENGTH).fill(SUB)

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  describe('handle PRESS_NUMERIC_BUTTON on the guess turn', () => {
    const turn = GUESS_TURN

    it('should add the numeral', () => {
      const numeral = 7
      expect(
        reducer(initialState, {
          type: types.PRESS_NUMERIC_BUTTON,
          numeral,
          turn
        })
      ).toEqual([numeral, SUB, SUB, SUB])
    })

    it('should not add the numeral if it is the first one numeral and equals 0', () => {
      const numeral = 0
      expect(
        reducer(initialState, {
          type: types.PRESS_NUMERIC_BUTTON,
          numeral,
          turn
        })
      ).toEqual([SUB, SUB, SUB, SUB])
    })

    it('should not add the numeral if it already exists', () => {
      const numeral = 7
      expect(
        reducer([numeral, SUB, SUB, SUB], {
          type: types.PRESS_NUMERIC_BUTTON,
          numeral,
          turn
        })
      ).toEqual([numeral, SUB, SUB, SUB])
    })

    it(`should not add the numeral if there are already ${SECRET_LENGTH} typed numerals`, () => {
      const numeral = 7
      expect(
        reducer([1, 2, 3, 4], {
          type: types.PRESS_NUMERIC_BUTTON,
          numeral,
          turn
        })
      ).toEqual([1, 2, 3, 4])
    })
  })

  describe('handle PRESS_NUMERIC_BUTTON on the score turn', () => {
    const turn = SCORE_TURN

    it(`should add the numeral if it is less than or equal ${SECRET_LENGTH}`, () => {
      const numeral = 3
      expect(
        reducer([SUB, SUB], {
          type: types.PRESS_NUMERIC_BUTTON,
          numeral,
          turn
        })
      ).toEqual([numeral, SUB])
    })

    it(`should not add the numeral if it is greater than ${SECRET_LENGTH}`, () => {
      const numeral = 8
      expect(
        reducer([SUB, SUB], {
          type: types.PRESS_NUMERIC_BUTTON,
          numeral,
          turn
        })
      ).toEqual([SUB, SUB])
    })

    it(`should not add the numeral if a sum is greater than ${SECRET_LENGTH}`, () => {
      const numeral = 3
      expect(
        reducer([2, SUB], {
          type: types.PRESS_NUMERIC_BUTTON,
          numeral,
          turn
        })
      ).toEqual([2, SUB])
    })

    it(`should not add the numeral if there are already ${SCORE_LENGTH} typed numerals`, () => {
      const numeral = 1
      expect(
        reducer([1, 2], {
          type: types.PRESS_NUMERIC_BUTTON,
          numeral,
          turn
        })
      ).toEqual([1, 2])
    })
  })

  describe('handle DISCARD_TYPED_DIGIT', () => {
    it('should discard the numeral', () => {
      const numeral = 1
      const key = 0
      expect(
        reducer([1, 2, 3, 4], {
          type: types.DISCARD_TYPED_DIGIT,
          key
        })
      ).toEqual([SUB, 2, 3, 4])
    })
  })

  describe('handle FETCH_DIGITS_SUCCESS', () => {
    it('should wape out all numerals', () => {
      expect(
        reducer([1, 2, 3, 4], {
          type: types.FETCH_DIGITS_SUCCESS,
          turn: GUESS_TURN
        })
      ).toEqual([SUB, SUB])
    })
  })
})
