import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Expo, { Font } from 'expo'
import { View } from 'react-native'

import reducer from './reducers'

import Game from './components/Game'

export default class Main extends React.Component {
  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'VollkornSC-Bold': require('./assets/fonts/VollkornSC-Bold.ttf'),
      'VollkornSC-Regular': require('./assets/fonts/VollkornSC-Regular.ttf'),
      'Lora-Regular': require('./assets/fonts/Lora-Regular.ttf')
    })

    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.fontLoaded ? (
          <Provider store={createStore(reducer, applyMiddleware(thunk))}>
            <Game />
          </Provider>
        ) : null}
      </View>
    )
  }
}

Expo.registerRootComponent(Main)
