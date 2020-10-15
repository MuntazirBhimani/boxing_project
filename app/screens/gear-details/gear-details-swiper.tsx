import React,{useState} from "react"
import { View, ViewStyle, StyleSheet,TouchableOpacity,SectionList, Image, ImageBackground } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text, Button, Screen } from "../../components"
import { TextInput } from "react-native-gesture-handler"
import Swiper from 'react-native-swiper';
import { Clothes } from '../gear-details/clothes';
import { Gloves } from '../gear-details/gloves';
import { Pads } from '../gear-details/pads';
import { Shoes } from '../gear-details/shoes';
import { Header } from '../../components';

export const GearSwiper = ({navigation})=>{
    return(
        <View style={{flex:1}}>
            <Screen style={{backgroundColor:'black',flex:1}}>
                <Header headerText="Gear" leftIcon="back"  rightIcon="menu"
                onLeftPress={()=>navigation.goBack()}
                onRightPress={()=>navigation.openDrawer()}/>

                <Swiper style={styles.wrapper} 
                dot={<Image style={styles.paginationStyle}
                source={require('../../components/images/pagination/pagination.png')}/>}
                activeDot={<Image style={styles.paginationStyle}
                source={require('../../components/images/paginationActive/paginationActive.png')}/>}>
                    <Gloves />
                    <Pads />
                    <Shoes />
                    <Clothes />
                </Swiper>
            </Screen>            
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        
    },    
    paginationStyle:{        
        marginLeft: 3, 
        marginRight: 3, 
        marginTop: 3, 
        marginBottom: 3
    }
})
