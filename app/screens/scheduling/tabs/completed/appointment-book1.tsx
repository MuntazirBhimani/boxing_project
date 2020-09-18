import React, {useState} from "react"
import { TextStyle, View, ViewStyle, FlatList, TouchableOpacity, StyleSheet,Image} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Text, Screen, Icon, Button, UpcomingItems } from "../../../../components"
import { color, typography } from "../../../../theme"
import {screenHeight} from '../../../../theme/size'

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.white,
}

export const AppointmentFor = observer(function AppointmentFor() {
  const [selectedId, setSelectedId] = useState(null)
  const navigation = useNavigation()
  const appointmentData = [
    {
      id: 1,
      drName: "Dr. Katherine Jo-Yang",
      age: "37 years old",
      desc: "Authorized patient family member of Nicholas Torres",
    },
  ]

  const AppointmentItem = ({
      info
    }: {
      info: any
    }) => {
        return(
            <View style={{...styles.card_shadow, borderColor: info.id === selectedId ? 'white' : color.activeTab, borderWidth: info.id === selectedId ? 0 : 3}}>
                <TouchableOpacity onPress={() => {
                  if (selectedId === info.id){
                       setSelectedId(null)
                  } else {
                     setSelectedId(info.id)
                    
                  }
                  if (selectedId !== null){
                       navigation.navigate('appointment2')
                  }

                }} style={{ flex: 1 }}>
                    <View style={styles.progressNoteContainer}>
                        <View style={styles.imageContainer}>
                            <View style={{ flex: 1 }} />
                        </View>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                        <Text style={styles.progressNoteText1} text={info.drName} />
                        <Text style={{...styles.progressNoteText2,marginTop: -3}} text={info.age} />
                        <Text style={styles.progressNoteText3} text={info.desc} />
                        </View>
                        <View style={{ marginHorizontal: -2, marginTop: -20}}>
                        <Icon style={{ height: 15, aspectRatio: 1 }} icon={"next"} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

  return (
    <View style={FULL}>
      <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
          <Button text="×" onPress={() => {
            navigation.goBack()
          }} style={styles.button_close} textStyle={{color: color.textDarkGray, fontSize: 40}}/>
          <Text style={{...styles.header_text, marginTop: 60}} text="Just to confirm,"/>
          <Text style={styles.header_text} text="who is this appointment for?"/>
          <FlatList
              style={{ marginTop: 10}}
              data={appointmentData}
              extraData={selectedId}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <AppointmentItem info={item}/>}
          />
      </Screen>
    </View>
  )
})

const styles = StyleSheet.create({
  card_shadow: {
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    backgroundColor: "white",
    padding: 10,
    margin: 13,
    elevation: 5,
  },
  progressNoteContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20
  },
  imageContainer:{
    marginLeft: 10,
    height: 70,
    aspectRatio: 1,
    backgroundColor: color.white,
    borderRadius: 15,
    alignSelf: 'flex-start',
    marginTop: 7,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    },
  progressNoteText1: {
    fontFamily: typography.latoSemiBold,
    fontSize: 14,
    lineHeight: 22,
    marginRight: 10,
    textAlign: "left",
    color: color.textDarkGray,
    },
  progressNoteText2: {
    fontFamily: typography.latoMedium,
    fontSize: 12,
    lineHeight: 22,
    textAlign: "left",
    marginRight: 10,
    color: color.textLightGray,
    },
  progressNoteText3: {
    fontFamily: typography.latoMedium,
    fontSize: 12,
    lineHeight: 20,
    textAlign: "left",
    marginBottom: 20,
    marginRight: 10,
    color: color.textDarkGray,
    },
  bulletItemTextStyle: {
  fontSize: 12,
  lineHeight: 22,
  textAlign: "left",
  color: color.textDarkGray,
  fontFamily: typography.latoMedium,
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
    height: 60,
    aspectRatio: 1,
    alignSelf: 'flex-end',
    position: 'absolute',
    marginTop: 0,
    right: 10
  }
})