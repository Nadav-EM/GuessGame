import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const GameOver = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageContainer}
        source={{
          uri: "https://direct.rhapsody.com/imageserver/images/alb.329115697/600x600.jpg",
        }}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
  },
  button: {
    flex: 0.3,
    marginTop: 55,
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
});
