import { connect } from 'react-redux'

import RoundButton from '../components/RoundButton'
import { turn } from '../actions/numerals'

const mapDispatchToProps = dispatch => {
  return {
    onRoundButtonPress: () => {
      dispatch(turn())
    }
  }
}

export default connect(null, mapDispatchToProps)(RoundButton)
