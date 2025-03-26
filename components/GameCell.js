import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useGame } from '../context/GameContext';

const GameCell = ({ index }) => {
  const { board, handleCellPress } = useGame();
  const value = board[index];

  return (
    <TouchableOpacity 
      style={styles.cell} 
      onPress={() => handleCellPress(index)}
    >
      <Text style={styles.cellText}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  cellText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default GameCell;