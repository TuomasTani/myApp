import { Tabs } from "expo-router";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons"

export default function RootLayout() {
  return (
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "blue",
      tabBarInactiveTintColor: "gray",
    }}
    >
      <Tabs.Screen
      name="index"
      options={{ title: "Home",
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" size={size} color={color} />
      )

      }}
      />
      <Tabs.Screen
      name="locations"
      options={{ title: "Locations",
      tabBarIcon: ({ color, size }) => (
        <MaterialIcons name="location-on" size={size} color={color} />
      )

      }}
      />

      <Tabs.Screen
      name="login"
      options={{ title: "Login",
      tabBarIcon: ({ color, size }) => (
        <FontAwesome name="user" size={size} color={color} />
      )

      }}
      />

    </Tabs>
  )
}
