import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'

import NumericButtonsContainer from '../containers/NumericButtonsContainer'
import TypedDigitsContainer from '../containers/TypedDigitsContainer'
import RoundButtonContainer from '../containers/RoundButtonContainer'

export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isRoundButtonDisabled: false,
      isTypedDigitsLocked: false
    }
    this.handleRoundButton = {
      enableRoundButton: this.enableRoundButton.bind(this),
      disableRoundButton: this.disableRoundButton.bind(this)
    }
    this.toggleTypedDigitsLock = this.toggleTypedDigitsLock.bind(this)
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

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ flex: 6 }} />
        <View style={{ flex: 1 }}>
          <TypedDigitsContainer
            {...this.handleRoundButton}
            isLocked={this.state.isTypedDigitsLocked}
            toggleTypedDigitsLock={this.toggleTypedDigitsLock}
          />
        </View>
        <View style={{ flex: 3, width: 300 }}>
          <NumericButtonsContainer numerals={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} />
          <RoundButtonContainer
            {...this.handleRoundButton}
            isDisabled={this.state.isRoundButtonDisabled}
            toggleTypedDigitsLock={this.toggleTypedDigitsLock}
          />
        </View>
      </View>
    )
  }
}
