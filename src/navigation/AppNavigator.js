import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { enableScreens } from "react-native-screens";
import SignInScreen from "../screens/auth/SignInScreen";
import SignupScreen from "../screens/auth/SignUpScreen";
import CreatePasswordScreen from "../screens/auth/CreatePasswordScreen";
import IntroduceScreen from "../screens/introduce/IntroduceScreen";
import MainNavigator from "./MainNavigator";
import BannerDetailScreen from "../screens/main/BannerDetailScreen";
import TransactionDetailScreen from "../screens/main/TransactionDetailScreen";
import PlasticIdentificationScreen from "../screens/main/PlasticIdentificationScreen";
import PlasticDetailScreen from "../screens/main/PlasticDetailScreen";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";

enableScreens();

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
      >
        <Stack.Screen name="Introduce" component={IntroduceScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />

        <Stack.Screen name="Main" component={MainNavigator} />

        <Stack.Screen name="BannerDetail" component={BannerDetailScreen} />
        <Stack.Screen
          name="TransactionDetail"
          component={TransactionDetailScreen}
        />

        <Stack.Screen
          name="PlasticIdentification"
          component={PlasticIdentificationScreen}
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
            title: "Plasstic Identification",
            headerStyle: {
              backgroundColor: "#fff",
              elevation: 0,
              shadowOpacity: 0,
            },
          })}
        />
        <Stack.Screen name="PlasticDetail" component={PlasticDetailScreen}
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
          title: "Plasstic Detail",
          headerStyle: {
            backgroundColor: "#fff",
            elevation: 0,
            shadowOpacity: 0,
          },
        })}
        />
      </Stack.Navigator>
      <Toast />
    </>
  );
}
