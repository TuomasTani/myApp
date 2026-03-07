import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Locations() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Locations!</Text>

      <Link href="/" style={styles.link}>
      Go Back Home
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
  fontSize: 28,

},

link: {
  marginTop: 20,
  color: "blue",
  fontSize: 20,

}
})