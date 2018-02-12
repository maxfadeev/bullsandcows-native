import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'

export default class ModalMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isVisible: props.isVisible
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isVisible !== this.props.isVisible) {
      this.setState({
        isVisible: this.props.isVisible
      })
    }
  }

  render() {
    const { navigation, toggleModalMenu } = this.props
    return (
      <View style={styles.container}>
        <Modal
          visible={this.state.isVisible}
          animationType="fade"
          onRequestClose={() => toggleModalMenu()}
        >
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
              <TouchableOpacity onPress={() => toggleModalMenu()}>
                <Text style={styles.menuFont}>Resume</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home')
                  toggleModalMenu()
                }}
              >
                <Text style={styles.menuFont}>Quit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  innerContainer: {
    alignItems: 'center'
  },
  menuFont: {
    fontFamily: 'VollkornSC-Regular',
    fontSize: 18,
    marginBottom: 10
  }
})
