import React from "react"
import {
  Image,
  ImageStyle,
  Platform,
  TextStyle,
  SafeAreaView,
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
  flex: 0.57,
  marginHorizontal: 10,
  flexDirection: "column",
}

const insiderView: ViewStyle = {
  flexDirection: "row",
  // marginHorizontal: 10,
  // width: "100%",
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

export const LatestVitalsItems = ({
  info,
  onPress,
}: {
  info: any
  onPress: (info: any) => void
}) => {
  return (
    <TouchableOpacity onPress={() => onPress(info)} style={{ flex: 1 }}>
      <View style={ItemMainView}>
        <View style={imageView}>
          <View style={IMAGE_CONTAINER}>
            <Image style={IMAGE} />
          </View>
        </View>
        <View style={ContainerView}>
          <View style={insiderView}>
            <BulletItem style={{ width: "40%" }} text="BP" />
            <Text style={DETAILS} text={info.BP} />
          </View>
          <View style={insiderView}>
            <BulletItem text="Resp" />
            <Text style={DETAILS} text={info.Resp} />
          </View>
          <View style={insiderView}>
            <BulletItem text="Pulse" />
            <Text style={DETAILS} text={info.pulse} />
          </View>
          <View style={insiderView}>
            <BulletItem text="Temp" />
            <Text style={DETAILS} text={info.temp} />
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

const BasicInfoItems = ({
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
          <Text text={info.name} style={NAME} />
          <View style={insiderView}>
            <Text style={TITLE} text="Gender" />
            <Text style={DETAILS} text={info.gender} />
          </View>
          <View style={insiderView}>
            <Text style={TITLE} text="DOB" />
            <Text style={DETAILS} text={info.DOB} />
          </View>
          <View style={insiderView}>
            <Text style={TITLE} text="MD" />
            <Text style={DETAILS} text={info.MD} />
          </View>
          <View style={insiderView}>
            <Text style={TITLE} text="Location" />
            <Text style={DETAILS} text={info.location} />
          </View>
          <View style={insiderView}>
            <Text style={TITLE} text="Allergies" />
            <Text style={DETAILS} text={info.allergies} />
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

export const ItemSeperator = () => {
  return (
    <View
      style={{
        height: 0.4,
        marginVertical: 30,
        marginHorizontal: 15,
        backgroundColor: color.seperatorColor,
      }}
    />
  )
}

export const EmergencyContactsItems = ({
  info,
  onPress,
}: {
  info: any
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
            <Text style={DETAILS} text={info.name} />
          </View>
          <View style={insiderView}>
            <Text style={TITLE} text="Type" />
            <Text style={DETAILS} text={info.type} />
          </View>
          <View style={insiderView}>
            <Text style={TITLE} text="Relation" />
            <Text style={DETAILS} text={info.relation} />
          </View>
          <View style={insiderView}>
            <Text style={TITLE} text="Phone" />
            <Text style={DETAILS} text={info.phone} />
          </View>
          <View style={insiderView}>
            <Text style={TITLE} text="Email" />
            <Text style={DETAILS} text={info.email} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export const PatientProfile = observer(function PatientProfile() {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()
  const basicInfo = [
    {
      title: "Basic Info",
      name: "Nicholas Torres",
      gender: "Male",
      DOB: "02/1/1957 (63)",
      MD: "Katherine Jo-Yang",
      location: "PPCU 115-1",
      allergies: "No Known AllergiesNo Known Allergies No Known Allergies No Known Allergies No Known Allergies",
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
  const eContacts = [
    {
      name: "Michael Torres",
      type: "Responsible Party",
      relation: "Son",
      phone: "252-513-8881",
      email: "mtorres@gmail.com",
    },
    {
      name: "Carisma Torres",
      type: "Emergency Contact #1",
      relation: "Sister",
      phone: "626-340-8881",
      email: "ctorres@gmail.com",
    },
    {
      name: "Pedro Torres",
      type: "Emergency Contact #1",
      relation: "Brother",
      phone: "626-340-8881",
      email: "pedrot4@gmail.com",
    },
  ]

  return (
    <SafeAreaView style={FULL}>
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <View style={OUTER_SHADOW_VIEW}>
          <Text text="Basic Info" style={HEADER} />
          <FlatList
            data={basicInfo}
            renderItem={({ item }) => (
              <BasicInfoItems info={item} onPress={() => {}} isBasicInfo={true} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={OUTER_SHADOW_VIEW}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text text="Latest Vitals" style={HEADER} />
            <Text text="6/28/2020 8:57am" style={DATE} />
          </View>
          <FlatList
            data={latestVitals}
            renderItem={({ item }) => <LatestVitalsItems info={item} onPress={() => {}} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={OUTER_SHADOW_VIEW}>
          <Text text="Emergency Contacts" style={HEADER} />
          <FlatList
            data={eContacts}
            ItemSeparatorComponent={ItemSeperator}
            renderItem={({ item }) => (
              <EmergencyContactsItems info={item} onPress={() => {}} isBasicInfo={false} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Screen>
    </SafeAreaView>
  )
})
