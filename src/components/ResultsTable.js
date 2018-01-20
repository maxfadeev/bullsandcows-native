import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'

import ScoreDigitIcon from './ScoreDigitIcon'

function isEven(n) {
  return n % 2 === 0
}

const ResultsTable = ({ guesses, scores }) => (
  <View style={styles.container}>
    <FlatList
      data={guesses.map((v, i) => ({ key: i, guess: v }))}
      renderItem={({ item }) => (
        <View
          style={[
            styles.item,
            { backgroundColor: isEven(item.key) ? '#efefef' : 'white' }
          ]}
        >
          <Text style={styles.text}>{item.guess}</Text>
        </View>
      )}
    />
    <FlatList
      data={scores.map((v, i) => ({ key: i, score: v }))}
      renderItem={({ item }) => (
        <View
          style={[
            styles.item,
            styles.scoreContainer,
            { backgroundColor: isEven(item.key) ? '#efefef' : 'white' }
          ]}
        >
          {item.score.map((n, k) => (
            <View key={k} style={styles.score}>
              <Text style={styles.text}>{n}</Text>
              <ScoreDigitIcon index={k} />
            </View>
          ))}
        </View>
      )}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1
  },
  item: {
    width: 90,
    height: 34
  },
  text: {
    fontFamily: 'VollkornSC-Bold',
    textAlign: 'center',
    fontSize: 24
  },
  scoreContainer: {
    flexDirection: 'row'
  },
  score: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    width: 40
  }
})

export default ResultsTable
