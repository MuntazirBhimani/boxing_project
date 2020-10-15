import React from "react"
import { ImageStyle, View, ViewStyle, Platform, TouchableOpacity, ImageBackground, Image,Text } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ProfileScreen } from '../../app/screens/profile-screen/profile-screen';
import { StackNavigator } from './stack-navigator';

const Tab = createBottomTabNavigator()

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

export function TabNavigator(){
  return(
    <Tab.Navigator tabBar={props=><MyTabBar {...props}/>}>
        <Tab.Screen name="Dashboard" component={StackNavigator}/>
        <Tab.Screen name="My Profile" component={ProfileScreen}/>
    </Tab.Navigator>
  )
}