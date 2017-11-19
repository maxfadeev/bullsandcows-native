import React from 'react'
import { FlatList } from 'react-native'

import NumericButton from './NumericButton'

const NumericButtonsList = ({ numerals }) => (
  <FlatList
    style={styles}
    numColumns={5}
    data={numerals.map(n => ({ key: n }))}
    renderItem={({ item }) => <NumericButton>{item.key}</NumericButton>}
  />
)

const styles = {
  marginLeft: 40,
  marginRight: 40
}

export default NumericButtonsList
