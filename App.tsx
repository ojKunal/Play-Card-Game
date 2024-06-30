import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cards from './Components/Cards';

export default function App() {
  return (
    <View style={styles.app}>
      <Text style={styles.title}>Memory Game</Text>
      <Cards />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  title: {
    marginTop:50,
    fontSize: 35,
    marginBottom: 40,
    textAlign: 'center',
    color:"white",
    fontWeight:"bold",
  },
});
