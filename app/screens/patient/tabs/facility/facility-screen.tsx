import React from "react"
import { TextStyle, View, ViewStyle, TouchableOpacity } from "react-native"
import { observer } from "mobx-react-lite"
import { Text, Screen, Icon } from "../../../../components"
import { color, typography } from "../../../../theme"
import { screenHeight } from "../../../../theme/size"
import MapView from "react-native-maps"

const FULL: ViewStyle = { flex: 1 }

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
}

const CHILD_CONTAINER: ViewStyle = {
  flex: 1,
  marginLeft: 20,
  marginRight: 30,
}

const DETAIL_CONTAINER_VIEW: ViewStyle = {
  flex: 1,
  marginRight: 10,
  flexDirection: "row",
}

const TITLE: TextStyle = {
  fontSize: 12,
  lineHeight: 25,
  width: "30%",
  textAlign: "left",
  color: color.textLightGray,
  fontFamily: typography.latoSemiBold,
}

const DETAILS: TextStyle = {
  fontSize: 14,
  lineHeight: 25,
  textAlign: "left",
  marginStart: 12,
  color: color.textDarkGray,
  fontFamily: typography.latoMedium,
}

const OUTER_SHADOW_VIEW: ViewStyle = {
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
}

const HEADER: TextStyle = {
  fontSize: 16,
  lineHeight: 22,
  textAlign: "left",
  color: color.textDarkGray,
  fontFamily: typography.CooperMdBTMedium,
  marginBottom: 18,
  marginLeft: 10,
  marginTop: 10,
}

const MEDICAL_OFFICER_VIEW_CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}

const MEDICAL_OFFICER_IMAGE_CONTAINER: ViewStyle = {
  marginLeft: 10,
  height: screenHeight * 0.09,
  aspectRatio: 1,
  backgroundColor: "red",
  borderRadius: 15,
  elevation: 5,
  shadowColor: "black",
  shadowOpacity: 0.4,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 10,
}

const MEDICAL_OFFICER_NAME: TextStyle = {
  fontFamily: typography.latoSemiBold,
  fontSize: 14,
  lineHeight: 22,
  textAlign: "left",
  color: color.textDarkGray,
}

const MEDICAL_OFFICER_DESIGNATION: TextStyle = {
  fontFamily: typography.latoMedium,
  fontSize: 12,
  lineHeight: 18,
  textAlign: "left",
  color: color.textLightGray,
}

const MAPVIEW_CONTAINER: ViewStyle = {
  height: 124,
  borderRadius: 20,
  marginBottom: 30,
  marginTop: 25,
  overflow: "hidden",
  marginHorizontal: 10,
}

const MAP_VIEW: ViewStyle = {
  flex: 1,
}

export const ItemSeperator = () => {
  return (
    <View
      style={{
        height: 0.4,
        marginVertical: 10,
        marginHorizontal: 15,
        backgroundColor: color.seperatorColor,
      }}
    />
  )
}

const MadicalProfessionalsItems = ({
  info,
  onPress,
}: {
  info: any
  onPress: (info: any) => void
}) => {
  return (
    <TouchableOpacity onPress={() => onPress(info)} style={{ flex: 1, marginVertical: 20 }}>
      <View style={MEDICAL_OFFICER_VIEW_CONTAINER}>
        <View style={MEDICAL_OFFICER_IMAGE_CONTAINER}>
          <View style={{ flex: 1 }} />
        </View>
        <View style={{ flex: 1, marginLeft: 25 }}>
          <Text style={MEDICAL_OFFICER_NAME} text={info.name} />
          <Text style={MEDICAL_OFFICER_DESIGNATION} text={info.designation} />
        </View>
        <View style={{ marginHorizontal: -2, justifyContent: "center" }}>
          <Icon style={{ height: 15, aspectRatio: 1 }} icon={"next"} />
        </View>
      </View>
    </TouchableOpacity>
  )
}
const FacilityInfoItems = ({
  info,
  onPress,
  isBasicInfo,
}: {
  info: any
  isBasicInfo: boolean
  onPress: (info: any) => void
}) => {
  return (
    <TouchableOpacity onPress={() => onPress(info)}>
      <View style={{ flex: 1, marginTop: 3 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{...MEDICAL_OFFICER_IMAGE_CONTAINER, marginTop: 5}}>
              <View style={{ flex: 1 }} />
            </View>
            <View style={CHILD_CONTAINER}>
              <View style={DETAIL_CONTAINER_VIEW}>
                <Text style={TITLE} text="Name" />
                <Text style={DETAILS} text={info.name} />
              </View>
              <View style={DETAIL_CONTAINER_VIEW}>
                <Text style={TITLE} text="Phone" />
                <Text style={DETAILS} text={info.phone} />
              </View>
              <View style={DETAIL_CONTAINER_VIEW}>
                <Text style={TITLE} text="Address" />
                <Text style={[DETAILS, { color: color.activeTab }]} text={info.address} />
              </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "flex-end", marginTop: -30 }}>
              <Icon style={{ height: 15, aspectRatio: 1 }} containerStyle={{marginHorizontal: -2}} icon={"next"} />
            </View>
          </View>
        </View>
        <View style={MAPVIEW_CONTAINER}>
          <MapView style={MAP_VIEW} region={info.mapRegion} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export const FacilityScreen = observer(function FacilityScreen() {
  const facilityInfo = [
    {
      title: "Facility Information",
      name: "Nicholas Torres",
      phone: "Son",
      address: "110 Irving St NW, Washington, DC 20010",
      mapRegion: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    },
  ]
  const medicalProfessionals = [
    {
      name: "Dr. Katherine Jo-Yang",
      designation: "Pulmonologist",
    },
    {
      name: "Dr. Jamal Shillingford",
      designation: "Orthopedic Spine Surgery",
    },
    {
      name: "Patricia Grimes",
      designation: "Nurse Practitioner",
    },
  ]

  return (
    <View style={FULL}>
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <View style={OUTER_SHADOW_VIEW}>
          <Text text="Facility Information" style={HEADER} />
          {facilityInfo.map((item, index) => {
            return (
              <FacilityInfoItems key={index} info={item} onPress={() => {}} isBasicInfo={true} />
            )
          })}
        </View>
        <View style={OUTER_SHADOW_VIEW}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text text="Medical Professionals" style={HEADER} />
          </View>
          {medicalProfessionals.map((item, index) => {
            return <MadicalProfessionalsItems key={index} info={item} onPress={() => {}} />
          })}
        </View>
      </Screen>
    </View>
  )
})
