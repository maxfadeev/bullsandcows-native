import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'

import NumericButtonsListContainer from './NumericButtonsListContainer'
import TypedDigitsListContainer from './TypedDigitsListContainer'

const GameContainer = () => (
  <View style={{ flex: 1, alignItems: 'center' }}>
    <View style={{ flex: 5 }} />
    <View style={{ flex: 1 }}>
      <TypedDigitsListContainer />
    </View>
    <View style={{ flex: 3 }}>
      <NumericButtonsListContainer numerals={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} />
    </View>
  </View>
)

export default connect()(GameContainer)
