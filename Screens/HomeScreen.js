import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [userInput, setUserInput] = useState(null);

  const letsPlayButton = () => {
    if (userInput === null) return;
    navigation.navigate("Game", { PlayerChoice: userInput });
    setUserInput(null);
  };

  return (
    <View style={styles.root}>
      <View style={styles.part1}>
        <TextInput style={styles.input} placeholder="Pick a Number" value={userInput} placeholderTextColor="white" onChangeText={(text) => setUserInput(text)} />
      </View>
      <View style={styles.part2}>
        <TouchableOpacity style={styles.button} activeOpacity={0.2} onPress={letsPlayButton}>
          <Text style={styles.buttonText}>Lets Play</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  part1: { flex: 2, marginTop: 50, alignItems: "center", justifyContent: "center" },
  part2: { flex: 1 },
  button: {
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
  input: {
    textAlign: "center",
    width: 200,
    height: 50,
    margin: 12,
    borderWidth: 1,
    color: "white",
    padding: 10,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#ff1493",
    borderRadius: 5,
  },
});
