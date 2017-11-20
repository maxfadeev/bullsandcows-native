import { connect } from 'react-redux'

import NumericButtonsList from '../components/NumericButtonsList'
import { pressNumericButton } from '../actions/numerals'

const mapStateToProps = ({ typedDigits, turn }) => {
  return {
    typedDigits,
    turn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNumericButtonPress: (numeral, typedDigits, turn) => {
      dispatch(pressNumericButton(numeral, typedDigits, turn))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NumericButtonsList)
