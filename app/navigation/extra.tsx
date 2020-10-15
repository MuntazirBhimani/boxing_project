/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react"
import { ImageStyle, View, ViewStyle, Platform, TouchableOpacity, ImageBackground, Image } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { Icon, Text, Button } from "../components"
import { color } from "../theme"
import { PatientMedications } from "../screens"
import { screenHeight } from "../theme"
import PatientScreen from "../screens/patient/patient-screen"
import EvaluationsScreen from "../screens/evaluations/evaluations-screen"
import SchedulingScreen from '../screens/scheduling/scheduling-screen'
import DeviceInfo from "react-native-device-info"
import { HomeScreen } from "../screens/home-screen/home-screen"
import {AppointmentFor} from "../screens/scheduling/tabs/completed/appointment-book1"
import {AppointmentBook2} from "../screens/scheduling/tabs/completed/appointment-book2"
import {AppointmentBook3} from "../screens/scheduling/tabs/completed/appointment-book3"
import {AppointmentBookDetails} from "../screens/apoinment-details-screen/apoinment-details-screen"
import { SafeAreaView } from "react-native-safe-area-context"
import { LoginScreen } from '../screens/login-screen/login-screen';
import { DashboardScreen } from '../../app/screens/dashboard-screen/dashboard-screen';
import { PrepareScreen } from '../../app/screens/prepare-screen/prepare-screen';
import { ProfileScreen } from '../../app/screens/profile-screen/profile-screen';
import { Gloves } from '../../app/screens/gear-details/gloves';
import { Pads } from '../../app/screens/gear-details/pads';
import { Shoes } from '../../app/screens/gear-details/shoes';
import { Clothes } from '../screens/gear-details/clothes';
import { isSigned } from '../screens/login-screen/login-screen';
import { GearSwiper } from '../screens/gear-details/gear-details-swiper';

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
      {tabItem("Home", 'shape11', HomeScreen)}
      {tabItem("Evaluations",'evaluations', EvaluationsScreen)}
      {tabItem("Patient",'home', PatientScreen)}
      {tabItem("Scheduling",'scheduling', SchedulingScreen)}
      {tabItem("Lab Results",'labresult', HomeScreen)}
    </Tab.Navigator>
  )
}

export function SchedulingScreenStack(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      
      <Stack.Screen name="appointment" component={AppointmentFor} />
      <Stack.Screen name="appointment2" component={AppointmentBook2}/>
      <Stack.Screen name="appointment3" component={AppointmentBook3}/>
    </Stack.Navigator>
  )
}

export function SchedulingScreenDetailStack(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name="appointment_detail" component={AppointmentBookDetails}/>
    </Stack.Navigator>
  )
}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

          let imagePath;
          if(label=="Dashboard"){
            imagePath=require('../components/icon/icons/shape1/shape1.png')
          }
          else{
            imagePath=require('../components/icon/icons/shape11/shape11.png')
          }

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // const onLongPress = () => {
        //   navigation.emit({
        //     type: 'tabLongPress',
        //     target: route.key,
        //   });
        // };

        return (
          <TouchableOpacity key={label}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            // onLongPress={onLongPress}
            style={{ flex: 1,justifyContent:'flex-end',backgroundColor:'#000000'}}
          >
              {
                isFocused ? 
                  <ImageBackground style={{width:'auto', height:107.3,justifyContent:'flex-end'}}
                  source={require('../components/icon/icons/background/sahpe/sahpe.png')}>      
                    <View style={{alignItems:'center',padding:25}}>
                      <Image source={imagePath}/>
                      <Text style={{color:'black',fontSize:17.3,fontWeight:'normal',marginTop:6}}>{label}</Text>
                    </View> 
                </ImageBackground>
                :
                 <ImageBackground style={{width:'auto',height:91.3,justifyContent:'flex-end'}}
                 source={require('../components/icon/icons/background/layer5/layer5.png')}>
                   <View style={{alignItems:'center',padding:25}}>
                      <Image source={imagePath}/>
                      <Text style={{color:'black',fontSize:17.3,fontWeight:'normal',marginTop:6}}>{label}</Text>
                    </View>
                 </ImageBackground>                 
              }
              
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function DashboardTab(){
  return(
    <Tab.Navigator tabBar={props=><MyTabBar {...props}/>}>
      <Tab.Screen name="Dashboard" component={DashboardScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
  );
}

function DashboardStack(){
  return( 
    <Stack.Navigator
     screenOptions={{
       headerStyle:{backgroundColor:'transparent'},
       headerTitleStyle:{fontSize:24,color:'white'},
      //  headerLeft:()=>{
      //   <Image source={require('../components/images/back/back.png')}/>
      //  },
       headerRight:()=>(
         <Image source={require('../components/images/menu/menu.png')}/>
      )
     
     }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen}/>
      <Stack.Screen name="Prepare" component={PrepareScreen}/>
      <Stack.Screen name="Gear" component={GearSwiper}/>
    </Stack.Navigator>
  )
}

export function PrimaryNavigator(){
  return(
    isSigned ? (
      <Tab.Navigator tabBar={props=><MyTabBar {...props}/>}>
        <Tab.Screen name="Dashboard" component={DashboardStack}/>
        <Tab.Screen name="My Profile" component={ProfileScreen}/>
      </Tab.Navigator>
    ):(
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}/>
      </Stack.Navigator>
    )
  )
}

// export function PrimaryNavigator() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//         gestureEnabled: false,
//       }}
//     >
//       <Stack.Screen name="home" component={HomeTabs} /> 
//       <Stack.Screen name="schedulingStack" component={SchedulingScreenStack} options={{
//           headerShown: false,
//         }}/>
//       <Stack.Screen name="schedulingDetailStack" component={SchedulingScreenDetailStack} options={{
//           headerShown: false,
//         }}/>
//       <Stack.Screen name="patient_medications" component={PatientMedications} /> */}

//       <Stack.Screen name="splash-screen" component={SplashScreen}/>
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="dashboard" component={DashboardScreen} />
//       <Stack.Screen name="Dashboard" component={DashboardTab}/>
//       <Stack.Screen name="profile" component={ProfileScreen} /> 
//       <Stack.Screen name="prepare" component={PrepareScreen} /> 
//       <Stack.Screen name="gloves" component={Gloves}/>
//       <Stack.Screen name="pads" component={Pads}/>
//       <Stack.Screen name="shoes" component={Shoes}/>
//       <Stack.Screen name="clothes" component={Clothes}/>
//     </Stack.Navigator>
//   )
// }




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
