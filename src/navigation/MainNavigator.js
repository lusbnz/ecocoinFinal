import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import HomeScreen from "../screens/main/HomeScreen";
import QRScannerScreen from "../screens/qrscan/QRScannerScreen";
import { LinearGradient } from "expo-linear-gradient";
import ProfileScreen from "../screens/profile/ProfileScreen";
import PromoScreen from "../screens/promo/PromoScreen";
import HistoryScreen from "../screens/history/HistoryScreen";

const Tab = createBottomTabNavigator();

const CustomQRButton = ({ children, onPress }) => {
  const scale = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[styles.qrButtonContainer, { transform: [{ scale }] }]}
    >
      <TouchableOpacity
        style={styles.qrButton}
        onPress={onPress}
        activeOpacity={0.7}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <LinearGradient
          colors={["#3D8BEB", "#3D8BEB"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.qrButton}
        >
          {children}
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};

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
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Promo" component={PromoScreen} />

      <Tab.Screen
        name="QR"
        component={QRScannerScreen}
        options={({ navigation }) => ({
          tabBarButton: (props) => (
            <CustomQRButton {...props}>
              <Ionicons name="qr-code" size={32} color="white" />
            </CustomQRButton>
          ),
          tabBarStyle: { display: "none" }, 
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 20 }}
            >
              <Ionicons name="arrow-back" size={28} color="black" />
            </TouchableOpacity>
          ),
          title: "Ecocoin",
          headerStyle: {
            backgroundColor: "#fff",
            elevation: 0,
            shadowOpacity: 0,
          },
        })}
      />

      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Me" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  tabBar: {
    height: 80,
    position: "absolute",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
  },
  qrButtonContainer: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    backgroundColor: "transparent",
    borderRadius: 40,
    shadowColor: "#64A6F0",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  qrButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#64A6F0",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
});
