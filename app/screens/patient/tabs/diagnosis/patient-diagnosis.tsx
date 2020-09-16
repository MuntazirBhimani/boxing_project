import React from "react"
import { Image, ImageStyle, Platform, TextStyle, View, ViewStyle, FlatList,TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { BulletItem, Button, Header, Text, Screen, Wallpaper, Icon } from "../../../../components"
import { color, spacing ,typography} from "../../../../theme"

const FULL: ViewStyle = { flex: 1 }

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
}

const OUTER_SHADOW_VIEW: ViewStyle = {
    marginHorizontal: 20,
    justifyContent:'center',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    elevation: 5,
}

const INNERCONTAINER: ViewStyle = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 20,
    marginHorizontal: 18,
}

const DESC: TextStyle = {
  fontSize: 12,
  lineHeight: 20,
  color: color.textLightGray,
  marginLeft: 18,
  marginRight: 41,
  marginBottom: 38,
  fontFamily: typography.latoMedium
}

const TITLE: TextStyle = {
  fontSize: 14,
  lineHeight: 24,
  textAlign: "left",
  fontFamily: typography.latoSemiBold,
  color: color.textDarkGray,
  marginBottom : 10,
  marginHorizontal: 18
}

const DATE: TextStyle = {
  fontFamily: typography.latoMedium,
  fontSize: 12,
  lineHeight: 20,
  color: color.textLightGray,
}

export const DiagnosisItems = ({ info, onPress,}: { info: any, onPress: (info: any) => void }) => {
        return (
            <TouchableOpacity
                onPress={() => onPress(info)}>
                    <View style={OUTER_SHADOW_VIEW}>
                        <View style={INNERCONTAINER}>
                            <Text style={DATE} text={info.no}/>
                            <Text style={DATE} text={info.time}/>
                        </View>
                        <Icon style={{height: 15, marginRight: -10}} containerStyle={{position: 'absolute',alignSelf:'flex-end'}} icon={"next"}/>
                        <Text style={TITLE} text={info.title}/>
                        <Text style={DESC} text={info.desc}/>
                    </View>
            </TouchableOpacity>
        )
    }


export const PatientDiagnosis = observer(function PatientDiagnosis() {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()
    const diagnosisData =[{
                'no': 'I67.4',
                'time': 'Wed, Jun 24',
                'title': 'Hyperextensive Encephalopathy',
                'desc': "Cray iceland before they sold out palo santo, tattooed hell of gastropub aesthetic. Wolf biodiesel you probably haven't heard of them...'A dosage of 25 mg or 50 mg per day is the initial therapeutic dosage."
                },{
                'no': 'I67.4',
                'time': 'Wed, Jun 24',
                'title': 'Hyperextensive Encephalopathy',
                'desc': "Cray iceland before they sold out palo santo, tattooed hell of gastropub aesthetic. Wolf biodiesel you probably haven't heard of them...Cray iceland before they sold out palo santo, tattooed hell of gastropub aesthetic. Wolf biodiesel you probably haven't heard of them..."
                }]

  return (
    <View style={FULL}>
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
      {diagnosisData.map((item, index) => {
            return <DiagnosisItems info={item} onPress={() => {}} isBasicInfo={true} />
          })}
        <FlatList
            data={diagnosisData}
            renderItem={({ item }) => <DiagnosisItems info={item} onPress={() => {}} />}
            keyExtractor={(item, index) => index.toString()}
        />
      </Screen>
    </View>
  )
})
