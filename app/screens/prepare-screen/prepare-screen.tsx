import React,{useState} from "react"
import { View, ViewStyle, StyleSheet,TouchableOpacity,SectionList, Image, ImageBackground, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text, Button, Screen,Header } from "../../components"
import { TextInput, TouchableHighlight } from "react-native-gesture-handler"
import { flatten } from "ramda"

export const PrepareScreen = ({navigation})=>{
    return(
            <Screen style={{backgroundColor:'black'}}>
                <Header headerText="Prepare" leftIcon="back"  rightIcon="menu"
                onLeftPress={()=>navigation.goBack()}
                onRightPress={()=>navigation.openDrawer()}/>
                <ImageBackground source={require('../../components/icon/icons/background/layer2.png')}style={styles.backImageContainer}>
                    <View style={styles.container2}>
                        <TouchableHighlight onPress={()=>navigation.navigate('Gear')}>
                            <View style={styles.prepareViewContent}>
                                <Image source={require('../../components/icon/icons/prepare/gear.png')}
                                style={styles.prepareImageComponent}/>
                                <Text style={styles.prepareTextComponent}>Gear</Text>
                            </View>
                        </TouchableHighlight>
                        <View style={styles.prepareViewContent}>
                            <Image source={require('../../components/icon/icons/prepare/handWrap.png')}
                            style={styles.prepareImageComponent}/>
                            <Text style={styles.prepareTextComponent}>How to Tie Hand Wraps</Text>   
                        </View>
                        <View style={styles.prepareViewContent}> 
                            <Image source={require('../../components/icon/icons/prepare/warmUp.png')}
                            style={styles.prepareImageComponent}/>
                            <Text style={styles.prepareTextComponent}>Warm Up Exercises</Text>
                        </View>
                       
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
        justifyContent:'center'
    },
    container2:{
        marginLeft:36,
        justifyContent:'center',
        flex:1,
        marginBottom:300
    },
    prepareImageComponent:{
        width:66.7,
        height:66.7
    },
    prepareTextComponent:{
        color:'white',
        fontSize:20,
        textAlign:'center',
        padding:20
    },
    prepareViewContent:{
        flexDirection:'row',
        marginBottom:20
    }
})
