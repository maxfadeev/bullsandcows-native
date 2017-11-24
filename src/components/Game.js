import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'

import NumericButtonsContainer from '../containers/NumericButtonsContainer'
import TypedDigitsContainer from '../containers/TypedDigitsContainer'

const Game = () => (
  <View style={{ flex: 1, alignItems: 'center' }}>
    <View style={{ flex: 6 }} />
    <View style={{ flex: 1 }}>
      <TypedDigitsContainer />
    </View>
    <View style={{ flex: 3 }}>
      <NumericButtonsContainer numerals={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} />
    </View>
  </View>
)

export default Game
