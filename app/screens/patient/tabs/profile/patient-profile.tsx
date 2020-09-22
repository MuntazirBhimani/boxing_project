import React from "react"
import {
  ImageStyle,
  TextStyle,
  SafeAreaView,
  View,
  SectionList,
  FlatList,
  ViewStyle,
  TouchableOpacity,
} from "react-native"
import { observer } from "mobx-react-lite"
import { BulletItem, Text, Screen, Icon, LatestVitals } from "../../../../components"
import { color, typography } from "../../../../theme"

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
  margin: 13,
  elevation: 5,
}

const FIRST_ROW_SHADOW: ViewStyle = {
  marginHorizontal: 20,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  shadowColor: "black",
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 5 },
  shadowRadius: 10,
  backgroundColor: "white",
  padding: 10,
  marginTop: 25,
  elevation: 5,
}

const MIDDLE_ROW_SHADOW: ViewStyle = {
  marginHorizontal: 20,
  shadowColor: "black",
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 14 },
  shadowRadius: 10,
  backgroundColor: "white",
  padding: 10,
  // margin: 13,
  elevation: 5,
}

const LAST_ROW_SHADOW: ViewStyle = {
  marginHorizontal: 20,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  shadowColor: "black",
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 14},
  shadowRadius: 10,
  backgroundColor: "white",
  padding: 10,
  marginBottom: 13,
  elevation: 5,
}

const ItemMainView: ViewStyle = {
  flex: 1,
  flexDirection: "row",
}

const imageView: ViewStyle = {
  flex: 0.3,
  alignItems: "center",
  marginLeft: -8,
}

const HEADER: TextStyle = {
  fontSize: 16,
  lineHeight: 22,
  textAlign: "left",
  color: color.textDarkGray,
  fontFamily: typography.CooperMdBTMedium,
  marginBottom: 10,
  marginLeft: 10,
  marginTop: 10,
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
  marginStart: 15,
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
  width: 70,
  aspectRatio: 1,
  marginLeft: 10,
  backgroundColor: color.white,
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
}

const ContainerView: ViewStyle = {
  flex: 0.57,
  marginLeft: 15,
  // marginBottom : 10,
  flexDirection: "column",
}

const insiderView: ViewStyle = {
  flexDirection: "row",
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

const BasicInfoItems = ({
  info,
  onPress,
  isLastIndex,
}: {
  info: any[]
  isLastIndex: boolean
  onPress: (info: any) => void
}) => {
  return (
    <TouchableOpacity onPress={() => onPress(info)}>
      <View style={ItemMainView}>
        <View style={imageView}>
          <View style={IMAGE_CONTAINER}>
            <View style={IMAGE} />
          </View>
        </View>
        <View style={{...ContainerView, marginBottom: isLastIndex ? 10 : 0}}>
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
          <Icon style={{ height: 15, aspectRatio: 1}} containerStyle={{marginRight: -14}} icon={"next"} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const ItemSeparator = () => {
  return (
    <View
      style={{
        height: 0.4,
        marginTop: 15,
        marginBottom: 25,
        marginHorizontal: 15,
        backgroundColor: color.seperatorColor,
      }}
    />
  )
}

const EmergencyContactsItems = ({
  info,
  onPress,
  isLastIndex
}: {
  info: any
  isLastIndex: boolean
  onPress: (info: any) => void
}) => {
  return (
    <TouchableOpacity onPress={() => onPress(info)}>
      <View style={ItemMainView}>
        <View style={imageView}>
          <View style={IMAGE_CONTAINER}>
            <Icon icon='profile' containerStyle={{justifyContent: 'center',flex: 1}} style={{alignSelf: 'center', alignItems: 'center'}} />
          </View>
        </View>
        <View style={{...ContainerView, marginBottom: isLastIndex ? 10 : 0}}>
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

const renderItem = (item, index, section) => {  
  // console.log("section",section);
  // console.log("item",item);
  // console.log("index",index);
    let tempStyle = OUTER_SHADOW_VIEW
    if (index === 0 && (index === (section.data.length - 1))) {
        tempStyle = OUTER_SHADOW_VIEW
      }
      else if (index === 0) {
        tempStyle = FIRST_ROW_SHADOW
      } else if (index === (section.data.length - 1)){
        tempStyle = LAST_ROW_SHADOW
      } else {
        tempStyle = MIDDLE_ROW_SHADOW
      }
    if (section.title == "Basic info") {
    return(
      <View style={tempStyle}>
        {
          (index === 0) ?  <Text text="Basic Info" style={HEADER} /> : <Text/>
        }
        <BasicInfoItems key={index} info={item} index={index} onPress={() => {}} isBasicInfo={(section.data.length - 1) === index ? true : false} />
      </View>
    )
    } else if (section.title == "Latest Vitals") {
        return(
          <LatestVitals item={item} index={index} length={section.data.length}/>
        )
    } else if (section.title == "Emergency Contacts") {
      return(
        <View style={tempStyle}>
          {
            (index === 0) ?  <Text text="Emergency Contacts" style={HEADER} /> : <Text/>
          }
          <EmergencyContactsItems info={item} isLastIndex={(section.data.length - 1) === index ? true : false} onPress={() => {}} />
        </View> 
      )
    }
  }

export const PatientProfile = observer(function PatientProfile() {

      let data = [
        {
          "title": "Basic info",
          "data": [{
            "name": "Nicholas Torres",
            "gender": "Male",
            "DOB": "02/1/1957 (63)",
            "MD": "Katherine Jo-Yang",
            "location": "PPCU 115-1",
            "allergies": "No Known Allergies"},
            {
            "name": "Nicholas Torres",
            "gender": "Male",
            "DOB": "02/1/1957 (63)",
            "MD": "Katherine Jo-Yang",
            "location": "PPCU 115-1",
            "allergies": "No Known Allergies"}
            ]
        },
        {
          "title": "Latest Vitals",
          "data": [{
                  "BP": "133/77 mmHg",
              "Resp": "20 Breaths/min",
              "pulse": "63 bpm",
              "temp": "97.6 °F"
          },{
              "BP": "133/77 mmHg",
              "Resp": "20 Breaths/min",
              "pulse": "63 bpm",
              "temp": "97.6 °F"
          },
          {
              "BP": "133/77 mmHg",
              "Resp": "20 Breaths/min",
              "pulse": "63 bpm",
              "temp": "97.6 °F"
          },{
              "BP": "133/77 mmHg",
              "Resp": "20 Breaths/min",
              "pulse": "63 bpm",
              "temp": "97.6 °F"
          }]
        },
        {
          "title": "Emergency Contacts",
          "data": [
              {
                "name": "Michael Torres",
                "type": "Responsible Party",
                "relation": "Son",
                "phone": "252-513-8881",
                "email": "mtorres@gmail.com",
              },
              {
                "name": "Carisma Torres",
                "type": "Emergency Contact #1",
                "relation": "Sister",
                "phone": "626-340-8881",
                "email": "ctorres@gmail.com",
              },
              {
                "name": "Pedro Torres",
                "type": "Emergency Contact #1",
                "relation": "Brother",
                "phone": "626-340-8881",
                "email": "pedrot4@gmail.com",
              }
          ]
        }
      ]
  
  return (
    <SafeAreaView style={FULL}>
      <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
        <SectionList
          // ItemSeparatorComponent={this.FlatListItemSeparator}
          sections={data}
          renderItem={({ item,index, section }) => (
            renderItem(item,index,section)
          )}
          keyExtractor={(item, index) => item + index}
        />

        {/* <FlatList
          data={data}
          renderItem={({ item, index }) => (
            renderItem(item,index)
          )}
          keyExtractor={(item, index) => index.toString()}
        /> */}

        {/* <View style={OUTER_SHADOW_VIEW}>
          <Text text="Basic Info" style={HEADER} />
          {basicInfo.map((item, index) => {
            return <BasicInfoItems key={index} info={item} onPress={() => {}} isBasicInfo={true} />
          })}
        </View>
        <LatestVitals arrayItems={latestVitals}/>
        <View style={OUTER_SHADOW_VIEW}>
          <Text text="Emergency Contacts" style={HEADER} />
          {eContacts.map((item, index) => {
            return (
              <View key={index}>
                <EmergencyContactsItems info={item} onPress={() => {}} />
                {eContacts.length != index + 1 && ItemSeparator()}
              </View>
            )
          })}
        </View> */}
      </Screen>
    </SafeAreaView>
  )
})
