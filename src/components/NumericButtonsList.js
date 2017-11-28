import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import NumericButton from './NumericButton'

export default class NumericButtonsList extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.numericButtonsVisibility === false) {
    }
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    const { numerals, turn, onNumericButtonPress } = this.props
    return (
      <FlatList
        style={styles.flatList}
        numColumns={5}
        data={numerals.map((n, i) => ({ key: i, numeral: n }))}
        renderItem={({ item }) => (
          <NumericButton
            onPress={() => onNumericButtonPress(item.numeral, turn)}
          >
            {item.numeral}
          </NumericButton>
        )}
      />
    )
  }
}

const styles = StyleSheet.create({
  flatList: {
    width: 250
  }
})
