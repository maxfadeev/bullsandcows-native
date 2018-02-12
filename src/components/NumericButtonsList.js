import React, { Component } from 'react'
import { FlatList, StyleSheet, Animated, View } from 'react-native'

import NumericButton from './NumericButton'
import { WINDOW_HEIGHT, RELAY_NUMERALS } from '../constants/Game'

export default class NumericButtonsList extends Component {
  constructor() {
    super()
    this.state = {
      translateY: new Animated.Value(20)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.relay !== this.props.relay) {
      Animated.spring(this.state.translateY, {
        toValue: nextProps.relay !== RELAY_NUMERALS ? WINDOW_HEIGHT / 3 : 30,
        speed: 25,
        bounciness: 15,
        useNativeDriver: true
      }).start()
    }
  }

  render() {
    const { numerals, turn, onTypeDigit } = this.props
    return (
      <Animated.View
        style={[
          styles.container,
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
    )
  }
}

const styles = StyleSheet.create({
  flatList: {
    width: 250,
    height: 140,
    position: 'absolute',
    top: 0
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
