import reducer from './typedDigits'
import * as types from '../constants/ActionTypes'
import * as gameConstants from '../constants/Game'

describe('typedDigits reducer', () => {
  const initialState = Array(gameConstants.SECRET_LENGTH).fill(
    gameConstants.SUB
  )

  describe('handle PRESS_NUMERIC_BUTTON', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should add the numeral', () => {
      const numeral = 7
      const turn = gameConstants.GUESS_TURN
      const sub = gameConstants.SUB
      expect(
        reducer(initialState, {
          type: types.PRESS_NUMERIC_BUTTON,
          numeral,
          turn
        })
      ).toEqual([numeral, sub, sub, sub])
    })

    it('should not add the numeral if it is a guess turn, it is the first one numeral and equals 0', () => {
      const numeral = 0
      const turn = gameConstants.GUESS_TURN
      const sub = gameConstants.SUB
      expect(
        reducer(initialState, {
          type: types.PRESS_NUMERIC_BUTTON,
          numeral,
          turn
        })
      ).toEqual([sub, sub, sub, sub])
    })

    it('should not add the number if it is a guess turn and the numeral already exists', () => {
      const numeral = 7
      const turn = gameConstants.GUESS_TURN
      const sub = gameConstants.SUB
      expect(
        reducer(initialState, {
          type: types.PRESS_NUMERIC_BUTTON,
          numeral,
          turn
        })
      ).toEqual([numeral, sub, sub, sub])
    })
  })
})
