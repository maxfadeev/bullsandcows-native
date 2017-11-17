import { connect } from 'react-redux'

import NumericButtonsList from '../components/NumericButtonsList'
import { pressNumericButton } from '../actions/numerals'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    onNumericButtonPress: numeral => {
      dispatch(pressNumericButton(numeral))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NumericButtonsList)
