import React from "react"
import { Text,View, ViewStyle, StyleSheet,TouchableOpacity,SectionList, Image, ImageBackground } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export const SplashScreenEx = ()=>{
    return(
        <ImageBackground source={require('../../components/icon/icons/background/layer2.png')}style={styles.backImageContainer}>
                    <View style={styles.container2}>
                        <Image source={require('../../components/icon/icons/login/l1.png')} style={styles.mainLogo}/>
                        <Text style={styles.mainText}>BOXING</Text>
                        <Text style={styles.mainSecondText}>BY TATVASOFT</Text>
                    </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backImageContainer:{
        flex:1,
        // width:375,
        // height:812,
        opacity:10,
        backgroundColor:'black',
        justifyContent:'center'
    },
    container2:{
        // marginLeft:77.7,
        // marginRight:77.3,
        // marginTop:30,
        alignItems:'center'
    },
    mainLogo:{
        width:85.3,
        height:85.3
    },
    mainText:{
        fontSize:56.7,
        color:'white',
        // fontFamily:'Aero',
        fontWeight:'bold'
    },
    mainSecondText:{
        fontSize:12,
        color:'white'
    }
})