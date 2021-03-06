import React from 'react'
import { connect } from 'react-redux'

import TypedDigitsList from '../components/TypedDigitsList'
import { discardDigit } from '../actions/numerals'
import { SUB, RELAY_NUMERALS } from '../constants/Game'

const mapStateToProps = ({ typedDigits, turn }) => {
  return {
    typedDigits,
    turn
  }
}

class TypedDigitsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.onDiscard = this.onDiscard.bind(this)
  }

  componentDidUpdate(prevProps) {
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

    if (typedDigits.length !== prevProps.typedDigits.length) {
      this.props.toggleTypedDigitsLock()
    }
  }

  onDiscard(numeral, key) {
    const {
      typedDigits,
      disableRoundButton,
      toggleRelay,
      dispatch
    } = this.props
    if (!typedDigits.includes(SUB)) {
      disableRoundButton()
      toggleRelay()
    }
    dispatch(discardDigit(numeral, key))
  }

  render() {
    return <TypedDigitsList onDiscardDigit={this.onDiscard} {...this.props} />
  }
}

export default connect(mapStateToProps)(TypedDigitsContainer)
