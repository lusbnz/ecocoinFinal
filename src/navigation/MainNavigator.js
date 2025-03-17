import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import HomeScreen from "../screens/main/HomeScreen";

const PromoScreen = () => (
  <View>
    <Text>Promo Screen</Text>
  </View>
);
const QRScreen = () => (
  <View>
    <Text>QR Screen</Text>
  </View>
);
const HistoryScreen = () => (
  <View>
    <Text>History Screen</Text>
  </View>
);
const ProfileScreen = () => (
  <View>
    <Text>Me Screen</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const CustomQRButton = ({ children, onPress }) => (
  <TouchableOpacity style={styles.qrButton} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          let iconSize = size;

          if (route.name === "Home") iconName = "home";
          else if (route.name === "Promo") iconName = "gift";
          else if (route.name === "QR") iconName = "qr-code";
          else if (route.name === "History") iconName = "time";
          else if (route.name === "Me") iconName = "person";

          return <Ionicons name={iconName} size={iconSize} color={color} />;
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 85,
          position: "absolute",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "#fff",
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Promo" component={PromoScreen} />

      <Tab.Screen
        name="QR"
        component={QRScreen}
        options={{
          tabBarButton: (props) => (
            <CustomQRButton {...props}>
              <Ionicons name="qr-code" size={24} color="white" />
            </CustomQRButton>
          ),
        }}
      />

      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Me" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  qrButton: {
    position: "absolute",
    bottom: 15,
    right: 10,
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: "#64A6F0",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});
