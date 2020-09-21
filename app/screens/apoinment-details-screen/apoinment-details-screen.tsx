import React from "react"
import { observer } from "mobx-react-lite"
import { Icon, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { appoinment_details_Screen } from "./styles"
import { Image, View } from "react-native"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import { screenHeight, screenWidth } from "../../theme"
import MapView from "react-native-maps"

export const AppointmentBookDetails = observer(function AppointmentBookDetails() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  let imageUrl = "https://homepages.cae.wisc.edu/~ece533/images/pool.png"
  let mapRegion: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  const btnBackPressed = () => {
   navigation.goBack()
  }

  const btnCancelPressed = () => {
    console.log("====== Cancel Button Pressed =======")
  }

  return (
    <View style={appoinment_details_Screen.FULL}>

      <View style={appoinment_details_Screen.TOP_NAVIGATION_STYLE}>
        <TouchableOpacity onPress={() => btnBackPressed()} style={appoinment_details_Screen.BTN_BACKBUTTON_STYLE} >
          <Icon style={appoinment_details_Screen.IMG_BACKBUTTON} icon="heart" />
        </TouchableOpacity>
        <Text
          tx="appointmentDetailScreen.appointmentTitle"
          style={appoinment_details_Screen.TXT_TITLE_STYLE} />
      </View>
      <ScrollView>
        <View style={appoinment_details_Screen.CONTAINERVIEW_STYLE}>
          <Icon style={appoinment_details_Screen.IMG_GENRALQUESTION} icon="pulse" />
          <Text tx="appointmentDetailScreen.generalQuestions" style={appoinment_details_Screen.TXT_GENRAL_QUESTION} />
        </View>

        <View style={appoinment_details_Screen.CONTAINERVIEW_STYLE}>
          <Image style={[appoinment_details_Screen.IMG_GENRALQUESTION, appoinment_details_Screen.IMG_PROFILEPICTURE]} source={{ uri: imageUrl }} />
          <Text text={"Michael Torres (you)"} style={appoinment_details_Screen.TXT_GENRAL_QUESTION} />
        </View>

        <View style={appoinment_details_Screen.CONTAINERVIEW_STYLE}>
          <Image style={appoinment_details_Screen.IMG_GENRALQUESTION} source={require('../../components/icon/icons/clock/clock.png')} />
          <View >
            <Text text={"Mon, Jul 6, 2020"} style={appoinment_details_Screen.TXT_GENRAL_QUESTION} />
            <Text text={"2:00 pm"} style={appoinment_details_Screen.TXT_GENRAL_QUESTION} />
          </View>
        </View>

        <View style={appoinment_details_Screen.CONTAINERVIEW_STYLE}>
          <Image style={[appoinment_details_Screen.IMG_GENRALQUESTION, appoinment_details_Screen.IMG_PROFILEPICTURE]} source={{ uri: imageUrl }} />
          <View >
            <Text text={"Dr. Katherine Jo-Yang"} style={appoinment_details_Screen.TXT_GENRAL_QUESTION} />
            <Text text={"Pulmonologist"} style={[appoinment_details_Screen.TXT_GENRAL_QUESTION, appoinment_details_Screen.TXT_DESIGNATION]} />
          </View>
        </View>

        <View style={appoinment_details_Screen.CONTAINERVIEW_HOSPITAL}>
          <Icon style={appoinment_details_Screen.IMG_GENRALQUESTION} icon="resp" />
          <View >
            <Text text={"Medstar Washington Hospital"} style={appoinment_details_Screen.TXT_HOSPITAL_NAME} />
            <Text text={"110 Irving St NW, Washington, DC 20010"} style={[appoinment_details_Screen.TXT_HOSPITAL_NAME, appoinment_details_Screen.TXT_HOSPITAL_ADD]} />
          </View>
        </View>

        <View>
          <MapView style={appoinment_details_Screen.MAP_VIEW} region={mapRegion} />
        </View>

        <Text
          text={"This confirms your appointment. Please arrive \n early to check-in."}
          style={appoinment_details_Screen.TXT_CONFIRM_DES} />

        <View style={appoinment_details_Screen.TXT_CANCELVIEW_STYLE}>
          <TouchableOpacity onPress={() => btnCancelPressed()} style={appoinment_details_Screen.BTN_CANCEL_STYLE}>
            <Text tx="appointmentDetailScreen.cancelAppointment" style={appoinment_details_Screen.TXT_CANCEL_APPOINMENT} />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  )
})
