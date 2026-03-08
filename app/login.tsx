import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
             style={styles.input}
             placeholder="Username"
             value={username}
             onChangeText={setUsername}

            />

            <TextInput
             style={styles.input}
             placeholder="Password"
             value={password}
             onChangeText={setPassword}

            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>

            </TouchableOpacity>

        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 40,
        color: "#333"
    },
    input: {
        borderWidth: 1,
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
    },

    button: {
        height: 50,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: "#4A90E2",
        alignItems: "center",
        justifyContent: "center",
    },

    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "500",

    }


})