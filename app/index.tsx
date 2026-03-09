import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Redirect } from "expo-router";
import { ImageBackground } from "expo-image";

// <Redirect href={"/login" as any} />;

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Image
       source={require('../assets/images/home.png')}
       style={styles.image}
      />
      <Text style={styles.text}>Welcome to Homepage</Text>
      <Text style={styles.description}>
        Explore nearby places, find hidden gems, and navigate with ease. Whether you're searching
        for restaurants, parks, or local hotspots, our app helps you discover the best spots
        around you—fast, easy, and interactive.
      </Text>
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
  backgroundColor: "#93B1B5",

},
  text: {
  color: "#B8E3E9",
  fontWeight: "bold",
  fontSize: 28,
  marginTop: 32,

},

link: {
  marginBottom: 40,
  color: "#B8E3E9",
  fontSize: 22,
  fontWeight: "bold",
},

description: {
  fontSize: 18,
  textAlign: "center",
  marginBottom: 40,
  marginTop: "auto",
  color: "",
  borderWidth: 2,
  borderColor: "#B8E3E9",
  borderRadius: 10,
  fontWeight: "bold",

},

image: {
  position: "absolute",
  width: "100%",
  height: "100%",

}

})