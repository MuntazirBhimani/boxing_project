import React,{useState} from "react"
import { View, ViewStyle, StyleSheet,TouchableOpacity,SectionList, Image, ImageBackground } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text, Button,Header, Screen } from "../../components"
import { TextInput } from "react-native-gesture-handler"

export const TrainScreen = ({navigation})=>{
    return(
        <Screen style={{backgroundColor:'black'}}>
            <Header headerText="Train" leftIcon="back"  rightIcon="menu"
                onLeftPress={()=>navigation.goBack()}
                onRightPress={()=>navigation.openDrawer()}/>
            <ImageBackground source={require('../../components/icon/icons/background/layer2.png')}style={styles.backImageContainer}>
                    <View style={styles.container2}>
                       <Text style={styles.dashboardComponent}>Train Screen </Text>
                    </View>
            </ImageBackground>            
        </Screen>
    )
}

const styles = StyleSheet.create({
    backImageContainer:{
        width:375,
        height:812,
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
        marginBottom:'60%'
    }
})
