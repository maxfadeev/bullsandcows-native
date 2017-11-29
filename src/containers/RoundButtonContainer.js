import { connect } from 'react-redux'

import RoundButton from '../components/RoundButton'
import { pressRoundButton } from '../actions/numerals'

const mapStateToProps = ({ turn, typedDigits, numericButtonsVisibility }) => {
  return {
    turn,
    typedDigits,
    numericButtonsVisibility
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRoundButtonPress: (turn, typedDigits) => {
      dispatch(pressRoundButton(turn, typedDigits))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundButton)
