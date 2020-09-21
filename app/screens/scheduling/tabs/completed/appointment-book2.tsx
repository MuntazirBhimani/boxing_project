import React, {useState} from "react"
import { TextStyle, View, ViewStyle, FlatList, TouchableOpacity, StyleSheet,Image} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Text, Screen, Icon, Button, TextField } from "../../../../components"
import { color, typography } from "../../../../theme"
import {screenHeight} from '../../../../theme/size'

const FULL: ViewStyle = { flex: 1,backgroundColor: color.white }
export const AppointmentBook2 = observer(function AppointmentBook2() {
  const [option1Selected, setOption1Selected] = useState(false)
  const [option2Selected, setOption2Selected] = useState(false)
  const navigation = useNavigation()
  const btnBackPressed = () => {
    navigation.goBack()
  }
  
  return (
    <View style={FULL}>

        <View style={styles.navigationBar}>
            <TouchableOpacity onPress={() => btnBackPressed()} >
              <Icon style={styles.navigationLeftButton} icon="heart" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => btnBackPressed()} >
              <Icon style={styles.navigationRightButton} icon="heart" />
            </TouchableOpacity>
        </View>

        <Text style={{...styles.header_text, marginTop: 50}} text="What brings you in?"/>
        <View style={styles.button_container}>
            <View style={{justifyContent: 'center', alignSelf: 'center',marginRight: 18}}>
                <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => {
                    setOption1Selected(!option1Selected)
                    setOption2Selected(false)
                  }}>
                    <View style={{...styles.card_shadow, borderWidth:  option1Selected ? 3: 0, borderColor: option1Selected ? color.activeTab : color.white}}>
                        <Icon icon='general_question' containerStyle={{justifyContent: 'center',flex: 1}} style={{alignSelf: 'center', alignItems: 'center'}} />
                    </View>
                </TouchableOpacity>
                <Text text="General Questions" style={styles.text_style}/>
            </View>
            <View style={{justifyContent: 'center', alignSelf: 'center', marginLeft: 18}}>
                <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => {
                    setOption2Selected(!option2Selected)
                    setOption1Selected(false)
                }}>
                    <View style={{...styles.card_shadow, borderWidth:  option2Selected ? 3: 0, borderColor: option2Selected ? color.activeTab : color.white}}>
                        <Icon icon='general_question' containerStyle={{justifyContent: 'center',flex: 1}} style={{alignSelf: 'center', alignItems: 'center'}} />
                    </View>
                </TouchableOpacity>
                <Text text="Lab Results Review" style={styles.text_style}/>
            </View>
        </View>
        {
          option1Selected ? (<TextField style={styles.textFiled_ContainerStyle} inputStyle={styles.textField_style} placeholder="Ask any questions here..."/>) : (<Text/>)
        
        }
        <Button style={styles.button_scheduling} text="Continue" textStyle={styles.button_textStyle} onPress={() => {
          navigation.navigate('appointment3')
        }}/>
    </View>
  )
})

const styles = StyleSheet.create({
  card_shadow: {
    marginHorizontal: 20,
    borderRadius: 15,
    height: 72,
    aspectRatio: 1,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    backgroundColor: "white",
    elevation: 5,
  },
  header_text: {
    fontSize: 18,
    lineHeight: 30,
    fontFamily: typography.CooperMdBTMedium,
    color: color.textDarkGray,
    textAlign: "center",
    alignItems: 'center'
  },
  button_close: {
    backgroundColor: color.white,
    aspectRatio: 1,
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  button_container:{
      flexDirection: 'row',
      justifyContent: 'center', 
      marginTop: 110
  },
  text_style: {
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 22,
      marginTop: 20,
      fontFamily: typography.latoMedium,
      color: color.textDarkGray,
  },
  textField_style: {
     textAlign: 'left',
      fontSize: 16,
      lineHeight: 20,
      fontFamily: typography.latoMedium,
      color: color.textDarkGray
  },
  textFiled_ContainerStyle: {
    borderBottomWidth: 1,
    marginHorizontal: 20,
    borderColor: color.textDarkGray,
    marginTop: 34,
  },
  button_scheduling: {
        marginBottom: screenHeight * 0.147,
        marginHorizontal: 20,
        marginTop: 50,
        height: 52,
        borderRadius: 26,
        backgroundColor: color.activeTab
    },
  button_textStyle: {
      fontSize: 16,
      fontFamily: typography.CooperMdBTMedium,
      color: color.white,
      textAlign: "center",
  },
  navigationBar: {
        flexDirection: 'row',
        height: 44,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
  navigationRightButton: {
    right: 10,
  },
  navigationLeftButton: {
    left: 10
  }
})