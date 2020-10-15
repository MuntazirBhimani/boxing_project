import React,{useState,useEffect} from "react"
import { View, ViewStyle, StyleSheet,TouchableOpacity,SectionList, Image, ImageBackground, Alert, StatusBar,FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text, Button, Screen, Header } from "../../components"
import { TextInput, TouchableHighlight } from "react-native-gesture-handler"
import { color } from "react-native-reanimated"
import { observer } from 'mobx-react-lite'
import { useStores } from "../../models"
import { useIsFocused, useNavigation } from '@react-navigation/native'

// export const DashboardScreen = ({navigation})=>{
//     return(
            
//             <View style={{flex:1}}>
//                 <Screen style={{backgroundColor:'black',flex:1}}>
//                 <Header headerText="Dashboard" rightIcon="menu" onRightPress={()=>navigation.openDrawer()}/>
//                 <ImageBackground source={require('../../components/icon/icons/background/layer2.png')}style={styles.backImageContainer}>
//                     <View style={styles.container2}>
//                         <TouchableHighlight onPress={()=>navigation.navigate('PREPARE')}>
//                             <Text style={styles.dashboardComponent}>PREPARE</Text>
//                         </TouchableHighlight>
//                         <TouchableHighlight onPress={()=>navigation.navigate('LEARN')}>
//                             <Text style={styles.dashboardComponent}>LEARN</Text>
//                         </TouchableHighlight>
//                         <TouchableHighlight onPress={()=>navigation.navigate('TRAIN')}>
//                             <Text style={styles.dashboardComponent}>TRAIN</Text>
//                         </TouchableHighlight>
//                     </View>
//                 </ImageBackground>
//              </Screen>
//              </View>
//     )
// }

export const DashboardScreen = observer(function DashboardScreen() {
    
    const { apiData } = useStores();
    const isFocused = useIsFocused()
    const navigation = useNavigation();

    useEffect(() => {
      if (isFocused) {
        apiData.setSubCategoryIndex(0);
        LoadDataFromApi();
      }
    }, [isFocused]);
  
    const LoadDataFromApi = async () => {
      await apiData.getCategoryData();
      await apiData.getCategories();
    }
  
   
    const RenderCategories = ({item,index}) =>{
        return(
            <TouchableHighlight onPress={()=>navigation.navigate('Subcategory',{
                parentId:item.id,
                name:item.name
            })}>
                <Text text={item.name} style={styles.dashboardComponent}/>
            </TouchableHighlight>
        )
    }

    return (
        <View style={{flex:1}}>        
            <Screen preset="fixed" style={{flex:1,backgroundColor:'black'}}>      
            <Header headerText="Dashboard" rightIcon="menu"/>
            <ImageBackground source={require('../../components/icon/icons/background/layer2.png')}style={styles.backImageContainer}>
                <View style={styles.container2}>
                <FlatList
                data={apiData.categoryData}
                renderItem={RenderCategories}
                keyExtractor={(item, index) => index.toString()}
                />
                </View>
            </ImageBackground>
            </Screen>
        </View>
    )
  })

const styles = StyleSheet.create({
    backImageContainer:{
        flex:1,
        opacity:10,
        backgroundColor:'black',
        justifyContent:'center',
    },
    container2:{
        marginHorizontal:33.3,
    },
    dashboardComponent:{
        color:'white',
        borderWidth:1,
        borderColor:'white',
        textAlign:'center',
        padding:20,
        marginBottom:20
    }
})
