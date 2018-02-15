import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import NumericButtonsContainer from '../containers/NumericButtonsContainer'
import RoundButtonContainer from '../containers/RoundButtonContainer'
import TypedDigitsContainer from '../containers/TypedDigitsContainer'

import {
  SWITCHER_CURRENT_NUMERALS,
  SWITCHER_CURRENT_BUTTON
} from '../constants/Game'

export default class NumeralsControlPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRoundButtonDisabled: false,
      isTypedDigitsDisabled: false,
      switcher: SWITCHER_CURRENT_NUMERALS
    }

    this.handleRoundButton = {
      enableRoundButton: this.enableRoundButton.bind(this),
      disableRoundButton: this.disableRoundButton.bind(this)
    }
    this.enableTypedDigits = this.enableTypedDigits.bind(this)
    this.disableTypedDigits = this.disableTypedDigits.bind(this)
    this.toggleSwitcher = this.toggleSwitcher.bind(this)
  }

  enableRoundButton() {
    this.setState({
      isRoundButtonDisabled: false
    })
  }

  disableRoundButton() {
    this.setState({
      isRoundButtonDisabled: true
    })
  }

  enableTypedDigits() {
    this.setState({
      isTypedDigitsDisabled: false
    })
  }

  disableTypedDigits() {
    this.setState({
      isTypedDigitsDisabled: true
    })
  }

  toggleSwitcher() {
    this.setState(state => ({
      switcher:
        state.switcher === SWITCHER_CURRENT_NUMERALS
          ? SWITCHER_CURRENT_BUTTON
          : SWITCHER_CURRENT_NUMERALS
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <TypedDigitsContainer
          {...this.handleRoundButton}
          enableTypedDigits={this.enableTypedDigits}
          isDisabled={this.state.isTypedDigitsDisabled}
          toggleSwitcher={this.toggleSwitcher}
          switcher={this.state.switcher}
        />
        <NumericButtonsContainer
          numerals={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
          switcher={this.state.switcher}
        />
        <RoundButtonContainer
          {...this.handleRoundButton}
          disableTypedDigits={this.disableTypedDigits}
          isDisabled={this.state.isRoundButtonDisabled}
          toggleSwitcher={this.toggleSwitcher}
          switcher={this.state.switcher}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5
  }
})
