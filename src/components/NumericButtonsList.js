import React, { Component } from 'react'
import { FlatList, StyleSheet, Animated, View } from 'react-native'

import NumericButton from './NumericButton'
import { WINDOW_HEIGHT, SWITCHER_CURRENT_NUMERALS } from '../constants/Game'

export default class NumericButtonsList extends Component {
  constructor() {
    super()
    this.state = {
      translateY: new Animated.Value(20)
    }
  }

  componentDidUpdate(nextProps) {
    if (nextProps.switcher !== this.props.switcher) {
      Animated.spring(this.state.translateY, {
        toValue:
          nextProps.switcher === SWITCHER_CURRENT_NUMERALS
            ? WINDOW_HEIGHT / 3
            : 30,
        speed: 25,
        bounciness: 15,
        useNativeDriver: true
      }).start()
    }
  }

  render() {
    const { numerals, turn, onTypeDigit } = this.props
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.animatedContainer,
            { transform: [{ translateY: this.state.translateY }] }
          ]}
        >
          <FlatList
            scrollEnabled={false}
            style={styles.flatList}
            numColumns={5}
            data={numerals.map((n, i) => ({ key: i, numeral: n }))}
            renderItem={({ item }) => (
              <NumericButton onPress={() => onTypeDigit(item.numeral, turn)}>
                {item.numeral}
              </NumericButton>
            )}
          />
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatList: {
    width: 250,
    flex: 1
  },
  animatedContainer: {
    position: 'absolute'
  }
})
