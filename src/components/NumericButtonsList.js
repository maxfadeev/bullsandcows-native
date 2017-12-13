import React from 'react'
import {
  FlatList,
  StyleSheet,
  UIManager,
  LayoutAnimation,
  View,
  Platform,
  NativeModules,
  Dimensions
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
    if (nextProps.roundButtonSpring === true) {
      this.setState({ top: height / 3 })
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
const minTopPosition = 20

let { height } = Dimensions.get('window')

const styles = StyleSheet.create({
  flatList: {
    width: 250
  },
  view: {
    position: 'absolute',
    alignItems: 'center',
    width: 300
  }
})
