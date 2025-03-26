import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import HomeScreen from "../screens/main/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import PromoScreen from "../screens/promo/PromoScreen";
import HistoryScreen from "../screens/history/HistoryScreen";
import MapScreen from "../screens/map/MapScreen";

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          let iconSize = size;

          if (route.name === "Home") iconName = "home-outline";
          else if (route.name === "Promo") iconName = "gift-outline";
          else if (route.name === "Map") iconName = "map-outline";
          else if (route.name === "History") iconName = "time-outline";
          else if (route.name === "Me") iconName = "person-outline";

          return <Ionicons name={iconName} size={iconSize} color={color} />;
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Promo" component={PromoScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Me" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    position: "absolute",
    backgroundColor: "#EDF1F0",
    shadowColor: "#222524",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
});
