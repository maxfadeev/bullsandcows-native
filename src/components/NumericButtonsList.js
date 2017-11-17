import React from 'react'
import { FlatList, Text } from 'react-native'

import NumericButton from './NumericButton'

const NumericButtonsList = ({ numerals }) => (
  <FlatList
    numColumns={5}
    data={numerals.map(n => ({ key: n }))}
    renderItem={({ item }) => <NumericButton>{item.key}</NumericButton>}
  />
)

export default NumericButtonsList
