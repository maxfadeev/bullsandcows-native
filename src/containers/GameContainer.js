import React from 'react'
import { connect } from 'react-redux'

import NumericButtonsListContainer from './NumericButtonsListContainer'
import { View } from 'react-native'

const GameContainer = () => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 3 }} />
    <NumericButtonsListContainer numerals={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} />
  </View>
)

export default connect()(GameContainer)
