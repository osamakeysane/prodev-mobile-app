import "@/styles/global.css";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#34967C",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
          title: "Home",
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={size} />
          ),
          title: "Search",
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
          title: "Saved",
        }}
      />

      <Tabs.Screen
        name="inbox"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-outline" color={color} size={size} />
          ),
          title: "Inbox",
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          // 👇 REMOVE this line if it exists
          // headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
          title: "Profile",
        }}
      />
    </Tabs>
  );
}
