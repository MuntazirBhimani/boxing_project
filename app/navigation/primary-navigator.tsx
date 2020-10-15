/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react"
import { ImageStyle, View, ViewStyle, Platform, TouchableOpacity, ImageBackground, Image } from "react-native"
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { Icon, Text, Button } from "../components"
import { color } from "../theme"
import { screenHeight } from "../theme"
import DeviceInfo from "react-native-device-info"
import { SafeAreaView } from "react-native-safe-area-context"
import { LoginScreen } from '../screens/login-screen/login-screen';
import { isSigned } from '../screens/login-screen/login-screen';
import { TabDashboard } from './bottom-tab-navigator';

const Stack = createNativeStackNavigator()

export function PrimaryNavigator(){
  return(
    isSigned ? (
      <TabDashboard />
    ):(
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}/>
      </Stack.Navigator>
    )
  )
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["home"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
