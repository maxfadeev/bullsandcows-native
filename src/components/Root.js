import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'

import Expo, { Font } from 'expo'

import AppNavigation from './AppNavigation'

import configureStore from '../configureStore'

export default class Root extends Component {
  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'VollkornSC-Bold': require('../assets/fonts/VollkornSC-Bold.ttf'),
      'VollkornSC-Regular': require('../assets/fonts/VollkornSC-Regular.ttf')
    })

    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.fontLoaded && (
          <Provider store={configureStore()}>
            <AppNavigation {...this.props} />
          </Provider>
        )}
      </View>
    )
  }
}

Expo.registerRootComponent(Root)
