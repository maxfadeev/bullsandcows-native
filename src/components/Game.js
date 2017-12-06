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
      isRoundButtonDisabled: false
    }
    this.enableRoundButton = this.enableRoundButton.bind(this)
    this.disableRoundButton = this.disableRoundButton.bind(this)
  }

  disableRoundButton() {
    this.setState({
      isRoundButtonDisabled: true
    })
  }

  enableRoundButton() {
    this.setState({
      isRoundButtonDisabled: false
    })
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ flex: 6 }} />
        <View style={{ flex: 1 }}>
          <TypedDigitsContainer
            disableRoundButton={this.disableRoundButton}
            enableRoundButton={this.enableRoundButton}
          />
        </View>
        <View style={{ flex: 3, width: 300 }}>
          <NumericButtonsContainer numerals={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} />
          <RoundButtonContainer
            disableRoundButton={this.disableRoundButton}
            enableRoundButton={this.enableRoundButton}
            disabled={this.state.isRoundButtonDisabled}
          />
        </View>
      </View>
    )
  }
}
