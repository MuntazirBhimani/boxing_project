import React from "react"
import {
  Image,
  ImageStyle,
  Platform,
  TextStyle,
  View,
  ViewStyle,
  FlatList,
  TouchableOpacity,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { BulletItem, Button, Header, Text, Screen, Wallpaper, Icon } from "../../../../components"
import { color, spacing, typography } from "../../../../theme"

const FULL: ViewStyle = { flex: 1 }

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
}

const OUTER_SHADOW_VIEW: ViewStyle = {
  marginHorizontal: 20,
  borderRadius: 10,
  shadowColor: "black",
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 5 },
  shadowRadius: 10,
  overflow: "hidden",
  backgroundColor: "white",
  padding: 10,
  margin: 10,
  elevation: 5,
}

const ItemMainView: ViewStyle = {
  flex: 1,
  flexDirection: "row",
}

const imageView: ViewStyle = {
  flex: 0.3,
  alignItems: "center",
}

const HEADER: TextStyle = {
  fontSize: 16,
  lineHeight: 22,
  textAlign: "left",
  color: color.textDarkGray,
  fontFamily: typography.CooperMdBTMedium,
  marginBottom: 18,
  marginLeft: 16,
  marginTop: 16,
}

const TITLE: TextStyle = {
  fontSize: 12,
  lineHeight: 18,
  width: "30%",
  textAlign: "left",
  fontFamily: typography.latoSemiBold,
}

const DETAILS: TextStyle = {
  fontSize: 14,
  lineHeight: 22,
  textAlign: "left",
  color: color.textDarkGray,
  fontFamily: typography.latoMedium,
}

const NAME: TextStyle = {
  fontSize: 16,
  lineHeight: 22,
  textAlign: "left",
  color: color.textDarkGray,
  marginBottom: 5,
}

const IMAGE_CONTAINER: ViewStyle = {
  width: "65%",
  aspectRatio: 1,
  backgroundColor: "red",
  borderRadius: 15,
  marginTop: 10,
  elevation: 5,
  shadowColor: "black",
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 5 },
  shadowRadius: 10,
}

const IMAGE: ImageStyle = {
  flex: 1,
  // width: '65%',
  // aspectRatio: 1,
  // backgroundColor: 'red',
  // borderRadius: 15,
  // marginTop: 10
}

const ContainerView: ViewStyle = {
  flex: 0.6,
  flexDirection: "column",
}

const insiderView: ViewStyle = {
  flexDirection: "row",
  width: "100%",
  paddingVertical: 3,
}

const DATE: TextStyle = {
  fontFamily: typography.latoMedium,
  fontSize: 12,
  lineHeight: 20,
  textAlign: "right",
  marginRight: 16,
  marginTop: 16,
  color: color.textLightGray,
}

const ARROW: ImageStyle = {
  flex: 0.1,
  resizeMode: "center",
  width: "100%",
  position: "absolute",
  aspectRatio: 1,
}

const MadicalProfessionalsItems = ({
  info,
  onPress,
}: {
  info: any
  onPress: (info: any) => void
}) => {
  return (
    <TouchableOpacity onPress={() => onPress(info)} style={{ flex: 1, marginTop: 20 }}>
      <View style={ItemMainView}>
        <View style={imageView}>
          <View style={IMAGE_CONTAINER}>
            <Image style={IMAGE} />
          </View>
        </View>
        <View style={ContainerView}>
          <View style={insiderView}>
            <Text style={DETAILS} text={info.name} />
          </View>
          <View style={insiderView}>
            <Text style={DETAILS} text={info.designation} />
          </View>
        </View>
        <View
          style={{ flex: 0.1, justifyContent: "center", alignItems: "flex-end", marginTop: -40 }}
        >
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
      <View style={ItemMainView}>
        <View style={imageView}>
          <View style={IMAGE_CONTAINER}>
            <Image style={IMAGE} />
          </View>
        </View>
        <View style={ContainerView}>
          <View style={insiderView}>
            <Text style={TITLE} text="Name" />
            <Text text={info.name} style={NAME} />
          </View>
          <View style={insiderView}>
            <Text style={TITLE} text="Phone" />
            <Text style={DETAILS} text={info.phone} />
          </View>
          <View style={insiderView}>
            <Text style={TITLE} text="Address" />
            <Text style={[DETAILS, { color: color.activeTab, marginEnd: 5 }]} text={info.address} />
          </View>

          <View style={{ height: 100, justifyContent: "center" }}>
            <Text text={"MapView"} />
          </View>
        </View>
        <View
          style={{ flex: 0.1, justifyContent: "center", alignItems: "flex-end", marginTop: -40 }}
        >
          <Icon style={{ height: 15, aspectRatio: 1 }} icon={"next"} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export const FacilityScreen = observer(function FacilityScreen() {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()
  const facilityInfo = [
    {
      title: "Facility Information",
      name: "Nicholas Torres",
      phone: "Son",
      address: "110 Irving St NW, Washington, DC 20010",
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
          <FlatList
            data={facilityInfo}
            renderItem={({ item }) => (
              <FacilityInfoItems info={item} onPress={() => {}} isBasicInfo={true} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={OUTER_SHADOW_VIEW}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text text="Medical Professionals" style={HEADER} />
          </View>
          <FlatList
            data={medicalProfessionals}
            renderItem={({ item }) => <MadicalProfessionalsItems info={item} onPress={() => {}} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Screen>
    </View>
  )
})
