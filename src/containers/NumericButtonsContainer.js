import { connect } from 'react-redux'

import NumericButtonsList from '../components/NumericButtonsList'
import { typeDigit } from '../actions/numerals'

const mapStateToProps = ({ turn }) => {
  return {
    turn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNumericButtonPress: (numeral, turn) => {
      dispatch(typeDigit(numeral, turn))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NumericButtonsList)
