import { Tabs } from "expo-router";

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
      options={{ title: "Home"}}
      />
      <Tabs.Screen
      name="locations"
      options={{ title: "Locations"}}
      />

    </Tabs>
  )
}
