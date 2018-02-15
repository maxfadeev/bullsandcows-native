import React, { Component } from 'react'

import Game from './Game'

export default class GameScreen extends Component {
  render() {
    return <Game {...this.props} />
  }
}
