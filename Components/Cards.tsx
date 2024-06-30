import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Card from "./card";

const initialItems = [
  { id: 1, letter: "A", stat: "" },
  { id: 1, letter: "A", stat: "" },
  { id: 2, letter: "B", stat: "" },
  { id: 2, letter: "B", stat: "" },
  { id: 3, letter: "C", stat: "" },
  { id: 3, letter: "C", stat: "" },
  { id: 4, letter: "D", stat: "" },
  { id: 4, letter: "D", stat: "" },
  { id: 5, letter: "E", stat: "" },
  { id: 5, letter: "E", stat: "" },
  { id: 6, letter: "F", stat: "" },
  { id: 6, letter: "F", stat: "" },
  { id: 7, letter: "G", stat: "" },
  { id: 7, letter: "G", stat: "" },
  { id: 8, letter: "H", stat: "" },
  { id: 8, letter: "H", stat: "" },
];

const Cards: React.FC = () => {
  const [items, setItems] = useState(initialItems);
  const [prev, setPrev] = useState(-1);
  const [turnCount, setTurnCount] = useState(0);
  const [matchesCount, setMatchesCount] = useState(0);

  const restartGame = () => {
    const shuffledItems = [...initialItems].sort(() => Math.random() - 0.5);
    setItems(shuffledItems);
    setPrev(-1);
    setTurnCount(0);
    setMatchesCount(0);

    const resetItems = shuffledItems.map((item) => ({ ...item, stat: "" }));
    setItems(resetItems);
  };

  const check = (current: number) => {
    if (items[current].letter === items[prev].letter) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setMatchesCount(matchesCount + 1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
      }, 1000);
    }
    setItems([...items]);
    setPrev(-1);
    setTurnCount(turnCount + 1);
  };

  const handleClick = (id: number) => {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={restartGame}>
        <Text style={styles.buttonText}>Restart Game</Text>
      </TouchableOpacity>
      <Text style={styles.turnText}>Turn: {turnCount}</Text>
      <Text style={styles.matchesText}>Matches Completed: {matchesCount}</Text>
      <View style={styles.grid}>
        {items.map((item, index) => (
          <Card key={index} item={item} id={index} handleClick={handleClick} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
    paddingHorizontal: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    maxWidth: 350,
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
  },
  button: {
    marginTop: 60,
    backgroundColor: "#65e469",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  turnText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  matchesText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
});

export default Cards;
