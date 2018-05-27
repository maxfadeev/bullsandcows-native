import { connect } from 'react-redux'

import Message from '../components/Message'
import { GUESS_TURN, SCORE_TURN } from '../constants/Game'

const mapStateToProps = ({ guesses, scores, turn }) => {
  let message = ''
  if (guesses.fetchedDigits.length === 0) {
    message = 'The game has started but there are no any guesses yet'
  } else if (turn === GUESS_TURN) {
    message = 'The result of your guess is'
  } else if (turn === SCORE_TURN) {
    message = 'Here is the guess of your opponent'
  }
  return {
    turn,
    message,
    digits:
      turn === GUESS_TURN
        ? scores.fetchedDigits[scores.fetchedDigits.length - 1]
        : guesses.fetchedDigits[guesses.fetchedDigits.length - 1]
  }
}

export default connect(mapStateToProps)(Message)
