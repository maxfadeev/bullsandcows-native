import React from 'react'
import { View, StyleSheet } from 'react-native'

import NumericButtonsContainer from '../containers/NumericButtonsContainer'
import TypedDigitsContainer from '../containers/TypedDigitsContainer'
import RoundButtonContainer from '../containers/RoundButtonContainer'
import ResultsTableContainer from '../containers/ResultsTableContainer'

import { RELAY_NUMERALS, RELAY_BUTTON } from '../constants/Game'

export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isRoundButtonDisabled: false,
      isTypedDigitsLocked: false,
      relay: RELAY_NUMERALS
    }
    this.handleRoundButton = {
      enableRoundButton: this.enableRoundButton.bind(this),
      disableRoundButton: this.disableRoundButton.bind(this)
    }
    this.toggleTypedDigitsLock = this.toggleTypedDigitsLock.bind(this)
    this.toggleRelay = this.toggleRelay.bind(this)
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

  toggleTypedDigitsLock() {
    this.setState(state => ({
      isTypedDigitsLocked: !state.isTypedDigitsLocked
    }))
  }

  toggleRelay() {
    this.setState(state => ({
      relay: state.relay === RELAY_NUMERALS ? RELAY_BUTTON : RELAY_NUMERALS
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <ResultsTableContainer />
        <TypedDigitsContainer
          {...this.handleRoundButton}
          toggleTypedDigitsLock={this.toggleTypedDigitsLock}
          isLocked={this.state.isTypedDigitsLocked}
          toggleRelay={this.toggleRelay}
          relay={this.state.relay}
        />
        <NumericButtonsContainer
          numerals={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
          relay={this.state.relay}
        />
        <RoundButtonContainer
          {...this.handleRoundButton}
          toggleTypedDigitsLock={this.toggleTypedDigitsLock}
          isDisabled={this.state.isRoundButtonDisabled}
          toggleRelay={this.toggleRelay}
          relay={this.state.relay}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})
