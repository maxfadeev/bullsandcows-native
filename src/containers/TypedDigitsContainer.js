import React from 'react'
import { connect } from 'react-redux'

import TypedDigitsList from '../components/TypedDigitsList'
import {
  discardDigit,
  toggleRoundButtonSpring,
  enableRoundButton,
  disableRoundButton
} from '../actions/numerals'
import { SUB } from '../constants/Game'

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
    const { typedDigits, dispatch, isLocked } = this.props
    if (!typedDigits.includes(SUB) && !isLocked) {
      this.props.enableRoundButton()
      dispatch(toggleRoundButtonSpring())
    }
  }

  render() {
    const { typedDigits, turn, dispatch } = this.props
    return (
      <TypedDigitsList
        onDiscardDigit={(numeral, key) => {
          if (!typedDigits.includes(SUB)) {
            this.props.disableRoundButton()
            dispatch(toggleRoundButtonSpring())
          }
          dispatch(discardDigit(numeral, key))
        }}
        {...this.props}
      />
    )
  }
}

export default connect(mapStateToProps)(TypedDigitsContainer)
