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
import BannerDetailScreen from "../components/BannerDetail";
import TransactionDetailScreen from "../components/TransactionDetail";

enableScreens();

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
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
      <Stack.Screen
        name="BannerDetail"
        component={BannerDetailScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerTransparent: true,
          gestureEnabled: true,
          headerTintColor: "#000",
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
      />
       <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetailScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerTransparent: true,
          gestureEnabled: true,
          headerTintColor: "#000",
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
      />
    </Stack.Navigator>
  );
}
