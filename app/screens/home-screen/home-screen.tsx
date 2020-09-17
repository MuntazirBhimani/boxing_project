import React from "react"
import { View, ViewStyle, StyleSheet,TouchableOpacity,ScrollView } from "react-native"
import { observer } from "mobx-react-lite"
import { Icon, Screen, Text, BulletItem, LatestVitals } from "../../components"
import { color, typography } from "../../theme"
import { screenHeight } from "../../theme/size"

const ProgressNoteItems = ({
  info,
  onPress,
}: {
  info: any
  onPress: (info: any) => void
}) => {
  return (
    <TouchableOpacity onPress={() => onPress(info)} style={{ flex: 1 }}>
      <View style={styles.progressNoteContainer}>
        <View style={styles.imageContainer}>
            <View style={{ flex: 1 }} />
        </View>
        <View style={{ flex: 1, marginLeft: 20 }}>
          <Text style={styles.progressNoteText1} text={info.name} />
          <Text style={{...styles.progressNoteText2, marginTop: -5}} text={info.designation} />
          <Text style={{...styles.progressNoteText3, marginTop: 5}} text={info.desc}/>
        </View>
        <View style={{ marginHorizontal: -2, marginTop: -45 }}>
          <Icon style={{ height: 15, aspectRatio: 1 }} icon={"next"} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const UpComingAppointmentItems = ({
  info,
  onPress,
}: {
  info: any
  onPress: (info: any) => void
}) => {
  return (
    <TouchableOpacity onPress={() => onPress(info)} style={{ flex: 1 }}>
      <View style={styles.progressNoteContainer}>
        <View style={styles.imageContainer}>
            <View style={{ flex: 1 }} />
        </View>
        <View style={{ flex: 1, marginLeft: 20 }}>
          <Text style={styles.progressNoteText1} text={info.drName} />
          <Text style={{...styles.progressNoteText2,marginTop: -3}} text={info.designation} />
          <BulletItem viewStyle={{width: '100%', marginTop: 10}} textStyle={{...styles.bulletItemTextStyle, marginTop: -2}} text={info.hospitalName} icon="navigation"/>
          <BulletItem viewStyle={{width: '100%', marginTop: -3, marginBottom: 35}} textStyle={{...styles.bulletItemTextStyle,lineHeight: 20}} text={info.appointmentTime} icon="clock"/>
        </View>
        <View style={{ marginHorizontal: -2, marginTop: -40}}>
          <Icon style={{ height: 15, aspectRatio: 1 }} icon={"next"} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export const HomeScreen = observer(function HomeScreen() {

  const progressNote = [
    {
      name: "Patricia Grimes",
      designation: "Nurse Practitioner",
      desc: "Patient was seen today as nursing request. F/u LGT. Patient afebrile today T 98.4, no distress or SOB...",
    },
  ]

  const appointmentData = [
    {
      drName: "Dr. Katherine Jo-Yang",
      designation: "Pulmonologist",
      hospitalName: "MedStarHospital",
      appointmentTime: "Wed, Jul 26, 2020 @ 2:00 pm"
    },
  ]

  const latestVitals = [
    {
      BP: "133/77 mmHg",
      Resp: "20 Breaths/min",
      pulse: "63 bpm",
      temp: "97.6 °F",
    },
  ]

  return (
  <View style={styles.FULL}>
    <View style={styles.headerView}>
          <Icon style={styles.headerIcon} icon={"temp"} />
          <Text text={"Good morning, Michael"} style={styles.headerText} />
    </View>
    <View style={styles.seperatorView}/>
    <ScrollView>
    <Text style={styles.TOP_TEXT_STYLE}>
      {'You have '}
      <Text style={{...styles.TOP_TEXT_STYLE,color: color.activeTab}}>
          1 new update
      </Text>
      {' & an '}
      <Text style={{...styles.TOP_TEXT_STYLE, color: color.activeTab}}>
          upcoming appointment
      </Text>
    </Text>

      <View style={{...styles.OUTER_SHADOW_VIEW, backgroundColor: color.lightBlue}}>
          <View style={{...styles.ItemHeader, marginBottom: 10}}>
            <Text text="Progress Note" style={styles.HEADER} />
            <Text text="Today 10:12am" style={styles.DATE} />
          </View>
          {progressNote.map((item, index) => {
            return <ProgressNoteItems key={index} info={item} onPress={() => {}} />
          })}
      </View>
      <View style={styles.OUTER_SHADOW_VIEW}>
          <View style={{...styles.ItemHeader,marginBottom: 10 }}>
            <Text text="Upcoming Appointment" style={styles.HEADER} />
          </View>
          {appointmentData.map((item, index) => {
            return <UpComingAppointmentItems key={index} info={item} onPress={() => {}} />
          })}
      </View>
      <LatestVitals arrayItems={latestVitals}/>
      </ScrollView>
  </View>
  )
})

const styles = StyleSheet.create({
  FULL: { 
    flex: 1,
    backgroundColor: 'white'
  },
  headerView: {
    height: 32,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  headerIcon: { height: 30, width: 30, alignSelf: "flex-start", flex: 1 },
  headerText: {
    fontSize: 18,
    flex: 1,
    fontFamily: typography.CooperMdBTMedium,
    color: color.textDarkGray,
    textAlign: "center",
    alignSelf: "center",
  },
  seperatorView: {
    height: 0.5,
    width: '100%',
    backgroundColor: color.seperatorColor
  },
  TOP_TEXT_STYLE: {
  fontFamily: typography.latoMedium,
  fontSize: 12,
  lineHeight: 18,
  textAlign: "left",
  marginLeft: 20,
  marginTop: 13.6,
  color: color.textDarkGray,
  },
  OUTER_SHADOW_VIEW: {
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
 HEADER : {
  fontSize: 16,
  lineHeight: 22,
  textAlign: "left",
  color: color.textDarkGray,
  fontFamily: typography.CooperMdBTMedium,
  marginBottom: 10,
  marginLeft: 10,
  marginTop: 10,
},
DATE: {
  fontFamily: typography.latoMedium,
  fontSize: 12,
  lineHeight: 20,
  textAlign: "right",
  marginRight: 16,
  color: color.textLightGray,
},
progressNoteContainer: {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},
imageContainer:{
  marginLeft: 10,
  height: 70,
  aspectRatio: 1,
  backgroundColor: "red",
  borderRadius: 15,
  alignSelf: 'flex-start',
  marginTop: 7,
  elevation: 5,
  shadowColor: "black",
  shadowOpacity: 0.4,
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
  fontFamily: typography.latoRegular,
  fontSize: 12,
  lineHeight: 18,
  textAlign: "left",
  color: color.textDarkGray,
  marginBottom: 25,
  marginRight: 10
},
TITLE:{
  fontSize: 12,
  lineHeight: 18,
  width: "30%",
  textAlign: "left",
  fontFamily: typography.latoSemiBold,
},
 DETAILS:{
  fontSize: 14,
  lineHeight: 22,
  textAlign: "left",
  marginStart: 0,
  color: color.textDarkGray,
  fontFamily: typography.latoMedium,
},
ItemHeader: {
  flexDirection: "row", 
  justifyContent: "space-between", 
  alignItems: 'center', 
  marginBottom: 5
},
bulletItemTextStyle: {
  fontSize: 12,
  lineHeight: 22,
  textAlign: "left",
  color: color.textDarkGray,
  fontFamily: typography.latoMedium,
}
})