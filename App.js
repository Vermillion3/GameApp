import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { GameProvider } from './context/GameContext';
import GameBoard from './components/GameBoard';
import PlayerStats from './components/PlayerStats';
import GameStatus from './components/GameStatus';

const App = () => {
  return (
    <GameProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <PlayerStats />
        <GameBoard />
        <GameStatus />
      </SafeAreaView>
    </GameProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333',
  },
});

export default App;