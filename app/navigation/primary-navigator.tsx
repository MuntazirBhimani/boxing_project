/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react"
import { ImageStyle, View, ViewStyle, Platform } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { Icon, Text } from "../components"
import { color } from "../theme"
import { PatientMedications } from "../screens"
import { screenHeight } from "../theme"
import PatientScreen from "../screens/patient/patient-screen"
import EvaluationsScreen from "../screens/evaluations/evaluations-screen"
import SchedulingScreen from '../screens/scheduling/scheduling-screen'
import DeviceInfo from "react-native-device-info"
import { HomeScreen } from "../screens/home-screen/home-screen"
import {AppointmentFor} from "../screens/scheduling/tabs/completed/appointment-for"
/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type PrimaryParamList = {
  home: undefined
  patient_profile: undefined
  patient_diagnosis: undefined
  patient_medications: undefined
}

// Documentation: https://github.com/software-mansion/react-native-screens/tree/master/native-stack
const Stack = createNativeStackNavigator<PrimaryParamList>()
const isIphoneX = DeviceInfo.hasNotch()
const Tab = createBottomTabNavigator()

const TAB_ICON: ImageStyle = {
  height: 22,
  width: 22,
  alignSelf: "center",
}

const ACTIVE_TAB_ICON: ImageStyle = {
  ...TAB_ICON,
  tintColor: color.palette.activeTab,
}
const INACTIVE_TAB_ICON: ImageStyle = {
  ...TAB_ICON,
  tintColor: color.palette.inactiveTab,
}
const TAB_VIEW: ViewStyle = {
  borderTopColor: color.palette.activeTab,
  borderTopWidth: 0,
  minWidth: "100%",
  flex: 1,
  justifyContent: "center",
}

function tabIcon(focused, name, icon) {
  return (
    <View style={[TAB_VIEW, focused && { borderTopWidth: 3 }]}>
      <Icon style={focused ? ACTIVE_TAB_ICON : INACTIVE_TAB_ICON} icon={icon} />
      <Text
        style={[
          { color: focused ? color.activeTab : color.inactiveTab },
          { fontSize: 10, textAlign: "center", marginTop: 5 },
        ]}
        text={name}
      />
    </View>
  )
}

const tabItem = (screen,icon, stack): any => {
  return (
    <Tab.Screen
      options={{
        tabBarIcon: ({ focused }) => tabIcon(focused, screen,icon),
      }}
      name={screen}
      component={stack}
    />
  )
}

function HomeTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: screenHeight * 0.1,
          marginBottom: Platform.select({ ios: isIphoneX ? -34 : 0, android: 0 }),
        },
        showLabel: false,
      }}
    >
      {tabItem("Home", 'homeTab', HomeScreen)}
      {tabItem("Evaluations",'evaluations', EvaluationsScreen)}
      {tabItem("Patient",'home', PatientScreen)}
      {tabItem("Scheduling",'home', SchedulingScreenStack)}
      {tabItem("Lab Results",'labresult', HomeScreen)}
    </Tab.Navigator>
  )
}

function SchedulingScreenStack(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="scheduling" component={SchedulingScreen} />
      <Stack.Screen name="appointment" component={AppointmentFor} />
    </Stack.Navigator>
  )
}

export function PrimaryNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="home" component={HomeTabs} />
      {/* <Stack.Screen name="patient_profile" component={PatientProfile} /> */}
      {/* <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="demo" component={DemoScreen} />
      <Stack.Screen name="patient_profile" component={PatientProfile} /> */}
      {/* <Stack.Screen name="patient_diagnosis" component={PatientDiagnosis} /> */}
      <Stack.Screen name="patient_medications" component={PatientMedications} />
    </Stack.Navigator>
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
