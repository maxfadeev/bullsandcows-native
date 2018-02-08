import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Expo, { Font } from 'expo'
import { View, Button } from 'react-native'
import { TabNavigator } from 'react-navigation'

import reducer from './reducers'

import ModalMenu from './components/ModalMenu'
import Game from './components/Game'
import Home from './components/Home'

class GameScreen extends Component {
  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'VollkornSC-Bold': require('./assets/fonts/VollkornSC-Bold.ttf'),
      'VollkornSC-Regular': require('./assets/fonts/VollkornSC-Regular.ttf')
    })

    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.fontLoaded && (
          <Provider store={createStore(reducer, applyMiddleware(thunk))}>
            <Game />
          </Provider>
        )}
      </View>
    )
  }
}

const RootStack = TabNavigator(
  {
    Home: {
      screen: Home
    },
    Game: {
      screen: GameScreen
    }
  },
  {
    initialRouteName: 'Home',
    cardStyle: {
      backgroundColor: 'white'
    },
    tabBarComponent: () => <View />
  }
)

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}

Expo.registerRootComponent(RootStack)
