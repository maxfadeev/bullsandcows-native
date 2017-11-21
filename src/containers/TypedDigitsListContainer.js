import { connect } from 'react-redux'

import TypedDigitsList from '../components/TypedDigitsList'
import { removeTypedDigit } from '../actions/numerals'
import { SCORE_TURN } from '../constants/Game'

const mapStateToProps = ({ typedDigits }) => {
  return {
    typedDigits
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRemoveTypedDigit: (numeral, key) => {
      dispatch(removeTypedDigit(numeral, key))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TypedDigitsList)
