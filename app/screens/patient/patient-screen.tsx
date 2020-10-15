import * as React from "react"
import { View, StyleSheet, Dimensions, Image, Platform } from "react-native"
import { TabView, SceneMap, TabBar } from "react-native-tab-view"
import { Icon, Screen, Text } from "../../components"
import { color, typography } from "../../theme"
import { PatientDiagnosis } from "./tabs/diagnosis/patient-diagnosis"
import { FacilityScreen } from "./tabs/facility/facility-screen"
import { PatientMedications } from "./tabs/Medications/patient-medications"
import { PatientProfile } from "./tabs/profile/patient-profile"
import DeviceInfo from "react-native-device-info"

const initialLayout = { width: Dimensions.get("window").width }
const isIphoneX = DeviceInfo.hasNotch()

export default function PatientScreen() {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: "profile", title: "Profile" },
    { key: "facility", title: "Facility" },
    { key: "diagnosis", title: "Diagnosis" },
    { key: "medications", title: "Medications" },
  ])

  const renderScene = SceneMap({
    profile: PatientProfile,
    facility: FacilityScreen,
    diagnosis: PatientDiagnosis,
    medications: PatientMedications,
  })

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: color.activeTab, height: 3 }}
      renderLabel={({ route, focused }) => (
        <Text
          style={[
            { color: focused ? color.activeTab : color.inactiveTab },
            { textAlign: "center", fontSize: 12 },
          ]}
          text={route.title}
        />
      )}
      style={styles.tabBar}
    />
  )
  return (
    <View style={styles.scene}>
      <View style={styles.headerView}>
        <Icon style={styles.headerIcon} icon={"temp"} />
        <Text text={"Patient"} style={styles.headerText} />
      </View>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: color.white,
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
    marginEnd: 30,
    color: color.textDarkGray,
    textAlign: "center",
    alignSelf: "center",
  },
  tabBar: {
    backgroundColor: color.white,
    elevation: 0,
    borderBottomWidth: 0.5,
    borderColor: color.seperatorColor,
    height: 50,
    marginBottom: Platform.select({ ios: isIphoneX ? -45 : -20, android: 10 }),
  },
})
