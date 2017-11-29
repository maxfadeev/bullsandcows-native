import React from 'react'
import {
  FlatList,
  StyleSheet,
  UIManager,
  LayoutAnimation,
  View,
  Platform,
  NativeModules
} from 'react-native'

import NumericButton from './NumericButton'

export default class NumericButtonsList extends React.Component {
  constructor() {
    super()
    this.state = {
      top: minTopPosition
    }

    if (Platform.OS === 'android') {
      NativeModules.UIManager.setLayoutAnimationEnabledExperimental &&
        NativeModules.UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }

  componentWillReceiveProps(nextProps) {
    LayoutAnimation.spring()
    if (nextProps.numericButtonsVisibility === false) {
      this.setState({ top: 200 })
    } else {
      this.setState({ top: minTopPosition })
    }
  }

  render() {
    const { numerals, turn, onNumericButtonPress } = this.props
    return (
      <View style={[styles.view, { top: this.state.top }]}>
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
      </View>
    )
  }
}
const minTopPosition = 15

const styles = StyleSheet.create({
  flatList: {
    width: 250
  },
  view: {
    position: 'absolute',
    top: minTopPosition,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center'
  }
})
