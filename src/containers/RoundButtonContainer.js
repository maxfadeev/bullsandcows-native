import { connect } from 'react-redux'

import RoundButton from '../components/RoundButton'
import { pressRoundButton } from '../actions/numerals'

const mapStateToProps = ({ roundButtonSpring }) => {
  return {
    roundButtonSpring
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
