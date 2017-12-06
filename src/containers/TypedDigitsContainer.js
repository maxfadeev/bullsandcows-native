import React from 'react'
import { connect } from 'react-redux'

import TypedDigitsList from '../components/TypedDigitsList'
import {
  discardDigit,
  toggleNumericButtonsVisibility
} from '../actions/numerals'
import { SUB } from '../constants/Game'

const mapStateToProps = ({ typedDigits, turn }) => {
  return {
    typedDigits,
    turn
  }
}

class TypedDigitsContainer extends React.Component {
  componentDidUpdate() {
    const { typedDigits, dispatch } = this.props
    if (!typedDigits.includes(SUB)) {
      dispatch(toggleNumericButtonsVisibility())
    }
  }

  render() {
    const { typedDigits, turn, dispatch } = this.props
    return (
      <TypedDigitsList
        onDiscardDigit={(numeral, key) => {
          if (!typedDigits.includes(SUB)) {
            dispatch(toggleNumericButtonsVisibility())
          }
          dispatch(discardDigit(numeral, key))
        }}
        {...this.props}
      />
    )
  }
}

export default connect(mapStateToProps)(TypedDigitsContainer)
