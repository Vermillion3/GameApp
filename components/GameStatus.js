import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useGame } from '../context/GameContext';

const GameStatus = () => {
  const { isXNext, gameOver, resetGame, resetScores } = useGame();
  const { board } = useGame();

  const getStatusMessage = () => {
    if (gameOver) {
      const winner = calculateWinner(board);
      return winner ? `Player ${winner} wins!` : "It's a draw!";
    }
    return `Next player: ${isXNext ? 'X' : 'O'}`;
  };

  // Helper function to calculate winner (same as in context)
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>{getStatusMessage()}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.resetButton]}
          onPress={resetGame}
        >
          <Text style={styles.buttonText}>New Game</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.resetScoresButton]}
          onPress={resetScores}
        >
          <Text style={styles.buttonText}>Reset Scores</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  statusText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  resetButton: {
    backgroundColor: '#4caf50',
  },
  resetScoresButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default GameStatus;