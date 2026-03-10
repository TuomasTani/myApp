import { Text, View, StyleSheet, TextInput, Button, Alert, FlatList } from "react-native";
import { Link } from "expo-router";
import React, {useState, useEffect} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";

type Location = {
  id: string;
  name: string;
  description: string;
  rating: number;
}

export default function Locations() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('1');
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const loadLocations = async () => {
      const storedLocations = await AsyncStorage.getItem('locations')

      if (storedLocations) {
        setLocations(JSON.parse(storedLocations))
      }
    } 
    loadLocations()
  }, []);

  const addLocation = async () => {
    if (!name.trim()) {
      Alert.alert('Location name is required');
      return;
    }

  const newLocation: Location = {
    id: Date.now().toString(),
    name: name.trim(),
    description: description.trim(),
    rating: parseInt(rating, 10),
  };

  const updatedLocations = [...locations, newLocation];

  setLocations(updatedLocations);

  try {
  await AsyncStorage.setItem(
    'locations',
    JSON.stringify(updatedLocations)
  );
  } catch (error) {
      Alert.alert('error', 'Failed to load saved locations')
      console.error(error);
    }

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

      <FlatList
      data={locations}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.locationItem}>
          <Text style={styles.locationName}>{item.name}</Text>
          <Text>{item.description}</Text>
          <Text>Rating: {item.rating}</Text>
          </View>
      )}
      />
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
  backgroundColor: "#93B1B5",
  padding: 16,
},

text: {
  color: "#B8E3E9",
  fontWeight: "bold",
  fontSize: 28,
  marginBottom: 14,

},

link: {
  marginTop: 20,
  color: "#B8E3E9",
  fontSize: 20,
  fontWeight: "bold",

},

input: {
  width: "100%",
  borderWidth: 1,
  borderColor: "#000",
  padding: 8,
  marginBottom: 14,
  borderRadius: 4,
},

locationItem: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 16,
  marginVertical: 8,
  marginHorizontal: 16,
  elevation: 3,
  flexWrap: "wrap",
  borderRadius: 10,

},

locationName: {
  fontSize: 18,
  fontWeight: "500",

}
})