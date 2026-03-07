import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { Link } from "expo-router";
import React, {useState} from 'react';

export default function Locations() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('1');

  const addLocation = () => {
    if (!name.trim()) {
      Alert.alert('Location name is required');
    }

  const newLocation = {
    name: name.trim(),
    description: description.trim(),
    rating: parseInt(rating, 10),
  };

  console.log('New Location:', newLocation);
  Alert.alert('Location Added', `${newLocation.name}`)

  setName('');
  setDescription('');
  setRating('1');

  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add a New Location</Text>

      <TextInput
      style={styles.input}
      placeholder="Location Name"
      value={name}
      onChangeText={setName}
      />

      <TextInput
      style={styles.input}
      placeholder="Description"
      value={description}
      onChangeText={setDescription}
      />

      <TextInput
      style={styles.input}
      placeholder="Rating 1-5"
      value={rating}
      onChangeText={setRating}
      keyboardType="numeric"
      />

      <Button title="Add Location" onPress={addLocation} />

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
  padding: 16,
},

text: {
  color: "black",
  fontWeight: "bold",
  fontSize: 28,
  marginBottom: 14,

},

link: {
  marginTop: 20,
  color: "#8ED1FC",
  fontSize: 20,

},

input: {
  width: "100%",
  borderWidth: 1,
  borderColor: "#000",
  padding: 8,
  marginBottom: 14,
  borderRadius: 4,
}
})