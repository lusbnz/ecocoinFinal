import React from "react";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import IntroduceScreen from "../screens/IntroduceScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import CreatePasswordScreen from "../screens/CreatePasswordScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
    >
      <Stack.Screen name="Introduce" component={IntroduceScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
    </Stack.Navigator>
  );
}
