import React from 'react'
import { connect } from 'react-redux'

import TypedDigitsList from '../components/TypedDigitsList'
import {
  discardDigit,
  enableRoundButton,
  disableRoundButton
} from '../actions/numerals'
import { SUB, RELAY_NUMERALS } from '../constants/Game'

const mapStateToProps = ({ typedDigits, turn }) => {
  return {
    typedDigits,
    turn
  }
}

class TypedDigitsContainer extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.typedDigits.length !== this.props.typedDigits.length) {
      this.props.toggleTypedDigitsLock()
    }
  }

  componentDidUpdate() {
    const {
      typedDigits,
      isLocked,
      enableRoundButton,
      toggleRelay,
      relay
    } = this.props
    if (!typedDigits.includes(SUB) && !isLocked && relay === RELAY_NUMERALS) {
      enableRoundButton()
      toggleRelay()
    }
  }

  render() {
    const {
      typedDigits,
      dispatch,
      disableRoundButton,
      toggleRelay
    } = this.props
    return (
      <TypedDigitsList
        onDiscardDigit={(numeral, key) => {
          if (!typedDigits.includes(SUB)) {
            disableRoundButton()
            toggleRelay()
          }
          dispatch(discardDigit(numeral, key))
        }}
        {...this.props}
      />
    )
  }
}

export default connect(mapStateToProps)(TypedDigitsContainer)
