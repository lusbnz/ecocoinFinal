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
import MyCouponsScreen from "../screens/promo/MyCouponsScreen";
import QRScannerScreen from "../screens/qrscan/QRScannerScreen";
import NotificationsScreen from "../screens/main/NotificationsScreen";

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

        <Stack.Screen name="QRScan" component={QRScannerScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />

        <Stack.Screen name="BannerDetail" component={BannerDetailScreen} />
        <Stack.Screen
          name="TransactionDetail"
          component={TransactionDetailScreen}
        />

        <Stack.Screen
          name="PlasticIdentification"
          component={PlasticIdentificationScreen}
        />
        <Stack.Screen name="PlasticDetail" component={PlasticDetailScreen} />

        <Stack.Screen name="MyCoupons" component={MyCouponsScreen} />
      </Stack.Navigator>
      <Toast />
    </>
  );
}
