import { connect } from 'react-redux'

import RoundButton from '../components/RoundButton'
import { pressRoundButton } from '../actions/numerals'

const mapStateToProps = ({ numericButtonsVisibility }) => {
  return {
    numericButtonsVisibility
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRoundButtonPress: () => {
      dispatch(pressRoundButton())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundButton)
