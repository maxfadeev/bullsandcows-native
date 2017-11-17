import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { StyleSheet, Text, View } from 'react-native'
import Expo from 'expo'

import reducer from './reducers'

import GameContainer from './containers/GameContainer'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <GameContainer />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {}
})

Expo.registerRootComponent(App)
