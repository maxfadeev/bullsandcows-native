import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Expo, { Font } from 'expo'
import { View } from 'react-native'
import { TabNavigator } from 'react-navigation'

import reducer from './reducers'

import Game from './components/Game'
import Home from './components/Home'

function withFonts(WrappedComponent) {
  return class extends Component {
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
          {this.state.fontLoaded && <WrappedComponent {...this.props} />}
        </View>
      )
    }
  }
}

class GameScreen extends Component {
  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <Game {...this.props} />
      </Provider>
    )
  }
}

class HomeScreen extends Component {
  render() {
    return <Home {...this.props} />
  }
}

const RootStack = TabNavigator(
  {
    Home: {
      screen: withFonts(HomeScreen)
    },
    Game: {
      screen: withFonts(GameScreen)
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
