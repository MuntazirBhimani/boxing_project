import React,{useState} from "react"
import { View, ViewStyle, StyleSheet,TouchableOpacity,SectionList, Image, ImageBackground } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text, Button, Screen } from "../../components"
import { TextInput } from "react-native-gesture-handler"

export const Gloves = ()=>{
    return(
            <Screen style={{backgroundColor:'black'}}> 
                <ImageBackground source={require('../../components/icon/icons/background/layer2.png')}style={styles.backImageContainer}>
                    <View style={styles.container2}>
                       <Image source={require('../../components/images/gloves/gloves.png')}
                                style={styles.headingImage}/>
                       <Text style={styles.headingText}>GLOVES</Text>
                       <Text style={styles.paragraphText}>
                           Sed ut perspiciatis unde ommis iste natus error sit voluptatem accusanitum dolomque 
                           laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
                       </Text>
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
        alignItems:'center',
        marginLeft:35.3,
        marginRight:35.7,
        marginBottom:200
    },
    headingImage:{
        width:139.7,
        height:270.7
    },
    headingText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        marginTop:'8%'
    },
    paragraphText:{
        color:'white',
        fontSize:16,
        fontWeight:'normal',
        textAlign:'center',
        marginTop:'5%'
    }
})
