import React from 'react';
import { View, StyleSheet } from 'react-native';
import GameCell from './GameCell';

const GameBoard = () => {
  return (
    <View style={styles.board}>
      <View style={styles.row}>
        <GameCell index={0} />
        <GameCell index={1} />
        <GameCell index={2} />
      </View>
      <View style={styles.row}>
        <GameCell index={3} />
        <GameCell index={4} />
        <GameCell index={5} />
      </View>
      <View style={styles.row}>
        <GameCell index={6} />
        <GameCell index={7} />
        <GameCell index={8} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
  },
});

export default GameBoard;