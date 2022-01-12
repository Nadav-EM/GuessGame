import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

const GameScreen = ({ route, navigation }) => {
  const [randomNumbers, setRandomNumbers] = useState(new Array(100).fill(0).map((_, index) => index + 1));
  const [computerChoice, setComputerChoice] = useState(randomNumbers[Math.floor(Math.random() * 100)]);

  useEffect(() => {
    setComputerChoice(randomNumbers[Math.floor(Math.random() * randomNumbers.length)]);
  }, [randomNumbers]);

  const handleHigher = () => {
    if (computerChoice == route.params.PlayerChoice) {
      console.log("WINNTER");
      return;
    }
    setRandomNumbers((prevRandomNumber) => prevRandomNumber.filter((item) => item > computerChoice));
  };

  const handleLower = () => {
    if (computerChoice == route.params.PlayerChoice) {
      console.log("WINNTER");
      return;
    }

    setRandomNumbers((prevRandomNumber) => prevRandomNumber.filter((item) => item < computerChoice));
  };

  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.button} activeOpacity={0.6}>
        <Text style={styles.buttonText}>{computerChoice}</Text>
      </TouchableOpacity>

      <View style={styles.part1}>
        <View style={styles.playerButtons}>
          <TouchableOpacity style={styles.buttonBorder} activeOpacity={0.6} onPress={handleHigher}>
            <Text style={styles.playerButtonsText}>Higher</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonBorder} activeOpacity={0.6} onPress={handleLower}>
            <Text style={styles.playerButtonsText}>Lower</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.part2}>
        <TouchableOpacity style={styles.button} activeOpacity={0.2} onPress={() => navigation.navigate("Home", { name: "Home" })}>
          <Text style={styles.buttonText}>Back Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  part1: { flex: 2, marginTop: 25 },
  part2: { flex: 1 },
  button: {
    marginTop: 50,
    width: 100,
    height: 50,
    backgroundColor: "#ff1493",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "normal",
    fontSize: 17,
    letterSpacing: 0.5,
  },
  playerButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  playerButtonsText: {
    color: "white",
    fontWeight: "normal",
    fontSize: 16,
    margin: 1,
    letterSpacing: 0.5,
    padding: 5,
  },
  buttonBorder: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    margin: 10,
  },
});
