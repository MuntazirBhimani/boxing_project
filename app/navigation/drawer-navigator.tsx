import React from "react"
import { ImageStyle, View, ViewStyle, Platform, TouchableOpacity, ImageBackground, Image, Alert,  SafeAreaView, TextStyle } from "react-native"
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import { TabNavigator } from './bottom-tab-navigator';
import { Icon, Text } from "../components";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/native";
import { useStores } from "../models";
import { spacing } from "../theme";

const Drawer = createDrawerNavigator();

const DrawerView: ViewStyle={
  backgroundColor:'black',
  width:'67%',
  borderLeftWidth:0.2,
  borderLeftColor:'white'
}

const TEXT : TextStyle={
  color:'white'
}

const SafeAreaViewStyle : ViewStyle={
  flex:1,
  justifyContent:'space-between'
} 

const LogoStyle : ImageStyle={
  width:36,
  height:36
}

const Brand: TextStyle={
  ...TEXT,
  fontSize:23,
  fontWeight:'bold'
}

const Organization : TextStyle={
  ...TEXT,
  fontSize:5,
  letterSpacing:3
}

const BrandDetails:ViewStyle={
  padding:spacing[4],
  marginBottom:spacing[5]
}

const DrawerItemLabel:TextStyle={
  fontSize:20,
  fontWeight:'bold'
}

const CustomDrawerContent = observer((props) => {

  const navigation = useNavigation();
  const { apiData, auth } = useStores(); 

  return (
    <SafeAreaView style={SafeAreaViewStyle}>

        <View >
          <View style={BrandDetails}>
              <Icon icon='logo'style={LogoStyle}/>
              <Text text='BOXING'  style={Brand}/>
              <Text text='BY TATVASOFT' style={Organization}></Text>
          </View>

          <View>
            <DrawerItem 
              label='DASHBOARD'
              activeTintColor={'yellow'}
              inactiveTintColor={'white'}
              labelStyle={DrawerItemLabel}
              activeBackgroundColor={'black'}
              onPress={()=>navigation.navigate('Dashboard')}
              focused={apiData.subCategoriesIndex == 0 ? true : false}
            />
            {
              apiData.categoryData.map((item,key)=>(
                <DrawerItem 
                  label={item.name}
                  activeTintColor={'yellow'}
                  inactiveTintColor={'white'}
                  labelStyle={DrawerItemLabel}
                  activeBackgroundColor={'black'}
                  onPress={()=>navigation.navigate('Subcategory',{
                    parentId:item.id,
                    name:item.name
                  })}
                  focused={apiData.subCategoriesIndex == item.id ? true : false}
                />
              ))
            }
          </View>
        </View>

        <View>
          <DrawerItem 
            label='LOGOUT'
            labelStyle={[TEXT,DrawerItemLabel]}
            onPress={()=>auth.removeToken()}
          />
        </View>
    </SafeAreaView>
  );

}) 
    
  

export function DrawerNavigator(){
  return(
    <Drawer.Navigator 
    drawerPosition="right" 
    drawerType="slide"
    drawerStyle={DrawerView} 
    // drawerContentOptions={{labelStyle:{fontSize:20},activeTintColor:'yellow',inactiveTintColor:'white',activeBackgroundColor:'black'}}
    drawerContent={props=><CustomDrawerContent {...props}/>}
    hideStatusBar={true}
    sceneContainerStyle={{flex:1,alignItems:'stretch'}}
    >

      <Drawer.Screen name="tab" component={TabNavigator}/>
            
    </Drawer.Navigator>
  )
}