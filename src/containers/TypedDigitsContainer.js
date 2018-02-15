import React from 'react'
import { connect } from 'react-redux'

import TypedDigitsList from '../components/TypedDigitsList'
import { discardDigit } from '../actions/numerals'
import { SUB, SWITCHER_CURRENT_NUMERALS } from '../constants/Game'

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

  componentDidUpdate(nextProps) {
    const {
      typedDigits,
      isDisabled,
      enableRoundButton,
      enableTypedDigits,
      toggleSwitcher,
      switcher
    } = this.props
    if (
      !typedDigits.includes(SUB) &&
      !isDisabled &&
      switcher === SWITCHER_CURRENT_NUMERALS
    ) {
      enableRoundButton()
      toggleSwitcher()
    }

    if (nextProps.typedDigits.length !== typedDigits.length) {
      enableTypedDigits()
    }
  }

  onDiscard(numeral, key) {
    const {
      typedDigits,
      disableRoundButton,
      toggleSwitcher,
      dispatch
    } = this.props
    if (!typedDigits.includes(SUB)) {
      disableRoundButton()
      toggleSwitcher()
    }
    dispatch(discardDigit(numeral, key))
  }

  render() {
    return <TypedDigitsList onDiscardDigit={this.onDiscard} {...this.props} />
  }
}

export default connect(mapStateToProps)(TypedDigitsContainer)
