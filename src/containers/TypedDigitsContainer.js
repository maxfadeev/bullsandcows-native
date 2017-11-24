import React from 'react'
import { connect } from 'react-redux'

import TypedDigitsList from '../components/TypedDigitsList'
import {
  discardDigit,
  hideNumericButtons,
  showNumericButtons
} from '../actions/numerals'
import { SUB } from '../constants/Game'

const mapStateToProps = ({ typedDigits }) => {
  return {
    typedDigits
  }
}

const TypedDigitsContainer = ({ typedDigits, dispatch }) => {
  if (!typedDigits.includes(SUB)) {
    dispatch(hideNumericButtons())
  }
  return (
    <TypedDigitsList
      typedDigits={typedDigits}
      onDiscardDigit={(numeral, key) => {
        if (!typedDigits.includes(SUB)) {
          dispatch(showNumericButtons())
        }
        dispatch(discardDigit(numeral, key))
      }}
    />
  )
}

export default connect(mapStateToProps)(TypedDigitsContainer)
