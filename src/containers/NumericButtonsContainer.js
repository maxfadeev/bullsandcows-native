import { connect } from 'react-redux'

import NumericButtonsList from '../components/NumericButtonsList'
import { typeDigit } from '../actions/numerals'

const mapStateToProps = ({ turn }) => {
  return {
    turn
  }
}

export default connect(mapStateToProps, {
  onTypeDigit: typeDigit
})(NumericButtonsList)
