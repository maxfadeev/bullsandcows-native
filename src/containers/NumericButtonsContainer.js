import { connect } from 'react-redux'

import NumericButtonsList from '../components/NumericButtonsList'
import { pressNumericButton } from '../actions/numerals'

const mapStateToProps = ({ turn, numericButtonsVisibility }) => {
  return {
    turn,
    numericButtonsVisibility
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNumericButtonPress: (numeral, turn) => {
      dispatch(pressNumericButton(numeral, turn))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NumericButtonsList)
