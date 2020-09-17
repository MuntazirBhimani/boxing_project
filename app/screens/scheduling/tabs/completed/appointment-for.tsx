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

const AppointmentItem = ({
  info
}: {
  info: any
}) => {
    return(
        <View style={styles.card_shadow}>
            <TouchableOpacity onPress={() => {}} style={{ flex: 1 }}>
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

export const AppointmentFor = observer(function AppointmentFor() {
  const appointmentData = [
    {
      drName: "Dr. Katherine Jo-Yang",
      age: "37 years old",
      desc: "Authorized patient family member of Nicholas Torres",
    },
  ]
  return (
    <View style={FULL}>
      <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
          <Text style={{marginHorizontal: 100, textAlign: 'center'}} text="Just to confirm,who is this appointment for?"/>
          <FlatList
              style={{ marginTop: 10}}
              data={appointmentData}
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
    shadowOffset: { width: 0, height: 5 },
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
  }
})