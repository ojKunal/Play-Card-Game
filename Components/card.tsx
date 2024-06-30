import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CardProps {
  item: { id: number; letter: string; stat: string };
  id: number;
  handleClick: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ item, id, handleClick }) => {
  const isVisible = item.stat === 'active' || item.stat === 'correct';

  return (
    <TouchableOpacity style={[styles.card, styles[item.stat]]} onPress={() => handleClick(id)}>
      <View style={styles.cardContent}>
        {isVisible ? <Text style={styles.letter}>{item.letter}</Text> : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 70,
    height: 70,
    backgroundColor: '#ff5722',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  active: {
    backgroundColor: '#65e469',
  },
  correct: {
    backgroundColor: '#65e469',
  },
  wrong: {
    backgroundColor: 'red',
  },
});

export default Card;
