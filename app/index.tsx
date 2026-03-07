import { Text, View, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Homepage!</Text>
      <Link href="/locations" style={styles.link}>
      Add a New Location
      </Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "grey",

},
  text: {
  color: "black",
  fontWeight: "bold",
  fontSize: 28,

},

link: {
  marginTop: 20,
  color: "#8ED1FC",
  fontSize: 20,
}

})