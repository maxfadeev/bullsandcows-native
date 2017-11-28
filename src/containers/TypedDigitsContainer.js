import React from 'react'
import { connect } from 'react-redux'

import TypedDigitsList from '../components/TypedDigitsList'
import {
  discardDigit,
  toggleNumericButtonsVisibility
} from '../actions/numerals'
import { SUB } from '../constants/Game'

const mapStateToProps = ({ typedDigits }) => {
  return {
    typedDigits
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
    const { typedDigits, dispatch } = this.props
    return (
      <TypedDigitsList
        typedDigits={typedDigits}
        onDiscardDigit={(numeral, key) => {
          if (!typedDigits.includes(SUB)) {
            dispatch(toggleNumericButtonsVisibility())
          }
          dispatch(discardDigit(numeral, key))
        }}
      />
    )
  }
}

export default connect(mapStateToProps)(TypedDigitsContainer)
