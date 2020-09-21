import React, {useState} from "react"
import { TextStyle, View, ViewStyle, FlatList, TouchableOpacity, StyleSheet,Image} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Text, Screen, Icon, Button, UpcomingItems } from "../../../../components"
import { color, typography } from "../../../../theme"
import {screenHeight} from '../../../../theme/size'

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
}
export const SchedulingCompleted = observer(function SchedulingCompleted() {
  const navigation = useNavigation()
  const appointmentData = [
    
  ]

  return (
    <View style={FULL}>
      <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
        
        {
          appointmentData.length > 0 ? (
          <FlatList
              style={{marginBottom: 20}}
              data={appointmentData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <UpcomingItems items={item}/>}
          />) : 
          (<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{justifyContent: 'center'}}>
                  <Text style={styles.textNoAppintment} text="No completed appointments yet"/>
                  <Image source={require('../../../../components/icon/icons/Scheduling/Upcoming/NoAppointment/noAppointment.png')}/>
              </View>
          </View>)
        }
        <Button style={styles.button_scheduling} text="Schedule Appointment" textStyle={styles.button_textStyle} onPress={() => {
          navigation.navigate('schedulingStack')
        }}/>
      </Screen>
    </View>
  )
})

const styles = StyleSheet.create({
    button_scheduling: {
        marginBottom: screenHeight * 0.147,
        marginHorizontal: 20,
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
    textNoAppintment: {
      fontSize: 16,
      lineHeight: 26,
      fontFamily: typography.latoMedium,
      color: color.textDarkGray,
      textAlign: "center",
      marginBottom: screenHeight*0.03
    }
});
