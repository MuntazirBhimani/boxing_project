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
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    elevation: 5,
}

const CONTAINER_VIEW: ViewStyle = {
    flex: 1,
    flexDirection: 'row'
}

const InnerView: ViewStyle = {
    flex: 0.9,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
}

const DESC: TextStyle = {
  fontSize: 12,
  lineHeight: 20,
  color: color.textLightGray,
  marginLeft: 18,
  marginRight: 20,
  marginBottom: 38,
  marginTop: 7,
  fontFamily: typography.latoMedium
}

const TITLE: TextStyle = {
  fontSize: 14,
  lineHeight: 24,
  textAlign: "left",
  fontFamily: typography.latoSemiBold,
  color: color.textDarkGray,
  marginVertical : 10,
  marginHorizontal: 18,
}

const DATE: TextStyle = {
  fontFamily: typography.latoMedium,
  fontSize: 12,
  lineHeight: 20,
  color: color.textLightGray,
  marginHorizontal: 18,
  marginTop: 20

}

export const MedicationsItems = ({ info, onPress,}: { info: any, onPress: (info: any) => void }) => {
        return (
            <TouchableOpacity
                onPress={() => onPress(info)}>
                    <View style={OUTER_SHADOW_VIEW}>
                        <View style={CONTAINER_VIEW}>
                            <View style={InnerView}>
                            <Text style={DATE} text={info.time}/>
                            <Text style={TITLE} text={info.title}/>
                            <Text style={DESC} text={info.desc}/>
                            </View> 
                            <View style={{flex: 0.1,justifyContent:'center'}}>
                                <Icon style={{height: 15, alignItems: 'flex-end'}} icon={"next"}/>
                            </View>
                        </View>
                      
                    </View>
            </TouchableOpacity>
        )
    }


export const PatientMedications = observer(function PatientMedications() {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()
    const medicationsData =[{
                'time': 'Take 1 table by mouth once weekly',
                'title': 'Protonix',
                'desc': "A dosage of 25 mg or 50 mg per day is the initial therapeutic dosage."
                },{
                'time': 'Take 2 by mouth twice daily',
                'title': 'Lasix',
                'desc': "To treat gastroesophageal reflux disease (GERD) and a damaged esophagus. It can also treat high..."
                }]

  return (
    <View style={FULL}>
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <FlatList
            data={medicationsData}
            renderItem={({ item }) => <MedicationsItems info={item} onPress={() => {}} />}
            keyExtractor={(item, index) => index.toString()}
        />
      </Screen>
    </View>
  )
})
