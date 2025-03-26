import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useGame } from '../context/GameContext';

const PlayerStats = () => {
  const { scores, isXNext } = useGame();

  return (
    <View style={styles.container}>
      <View style={[styles.player, isXNext && styles.activePlayer]}>
        <Text style={styles.playerSymbol}>X</Text>
        <Text style={styles.playerScore}>Wins: {scores.X}</Text>
      </View>
      <View style={[styles.player, !isXNext && styles.activePlayer]}>
        <Text style={styles.playerSymbol}>O</Text>
        <Text style={styles.playerScore}>Wins: {scores.O}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  player: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    width: '40%',
  },
  activePlayer: {
    backgroundColor: '#e3f2fd',
    borderWidth: 1,
    borderColor: '#90caf9',
  },
  playerSymbol: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  playerScore: {
    fontSize: 16,
  },
});

export default PlayerStats;