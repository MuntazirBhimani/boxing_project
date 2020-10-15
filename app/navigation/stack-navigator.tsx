import React from "react"
import { createNativeStackNavigator } from "react-native-screens/native-stack"

import { DashboardScreen } from '../screens/dashboard-screen/dashboard-screen';
import { SubCategoryScreen } from '../screens/sub-category/sub-category';
import { ImageDetailsScreen } from '../screens/image-details-screen/image-details-screen';
import { VideoDetailsScreen } from '../screens/video-details-screen/video-details-screen';


const Stack = createNativeStackNavigator()

export function StackNavigator(){
  return( 
    <Stack.Navigator screenOptions={{headerShown:false}}>  

      <Stack.Screen name="Dashboard" component={DashboardScreen}/>
      <Stack.Screen name="Subcategory" component={SubCategoryScreen}/>
      <Stack.Screen name="ImageDetails" component={ImageDetailsScreen}/>
      <Stack.Screen name="VideoDetails" component={VideoDetailsScreen}/>
      
    </Stack.Navigator>
  )
}