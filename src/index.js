import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Expo, { Font } from 'expo'
import { View } from 'react-native'

import reducer from './reducers'

import GameContainer from './containers/GameContainer'

export default class App extends React.Component {
  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      RubikMonoOne: require('./assets/fonts/RubikMonoOne.ttf')
    })

    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.fontLoaded ? (
          <Provider store={createStore(reducer)}>
            <GameContainer />
          </Provider>
        ) : null}
      </View>
    )
  }
}

Expo.registerRootComponent(App)
