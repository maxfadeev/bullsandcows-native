import { connect } from 'react-redux'

import TypedDigitsList from '../components/TypedDigitsList'
import { discardDigit } from '../actions/numerals'
import { SCORE_TURN } from '../constants/Game'

const mapStateToProps = ({ typedDigits }) => {
  return {
    typedDigits
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDiscardDigit: (numeral, key) => {
      dispatch(discardDigit(numeral, key))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TypedDigitsList)
