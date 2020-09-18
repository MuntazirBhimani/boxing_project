import React, {useState} from "react"
import { TextStyle, View, SectionList, TouchableOpacity, StyleSheet,Image,FlatList} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Text, Screen, Icon, Button, TextField } from "../../../../components"
import { color, typography } from "../../../../theme"
import {screenHeight} from '../../../../theme/size'

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.white,
}

export const AppointmentBook3 = observer(function AppointmentBook3() {
  const [option1Selected, setOption1Selected] = useState(false)
  const [option2Selected, setOption2Selected] = useState(false)
  const navigation = useNavigation()
  
  const arrOfData = [
        { 
            title: "Monday July 6, 2020", 
            data: [{"name":"Dr. Katherine Jo-Yang :", "designation": "Pulmonologist","time": ["2:00pm","3:00pm","3:30pm","4:00pm"]},{"name":"Dr. Katherine Jo-Yang :", "designation": "Pulmonologist","time": ["2:00pm","3:00pm","3:30pm","4:00pm"]}]
        },
        { 
            title: "Monday July 7, 2020", 
            data: [{"name":"Dr. Katherine Jo-Yang :", "designation": "Pulmonologist","time": ["2:00pm","3:00pm"]},{"name":"Dr. Katherine Jo-Yang :", "designation": "Pulmonologist","time": ["2:00pm","3:00pm","3:30pm","4:00pm"]}]
        }
  ]


  const SectionListItem = ({
      info
    }: {
      info: any
    }) => {
        return(
            <View style={{flex: 1, marginHorizontal: 20, marginVertical: 10}}>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 20}}>
                    <View style={styles.shadowView}>
                        <View style={{ flex: 1 }} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 25, justifyContent: 'center' }}>
                        <Text text={info.name} />
                        <Text text={info.designation} />
                    </View>
                </View>
                <View>
                    <FlatList
                        columnWrapperStyle={{flex: 1,
                        justifyContent: "space-around"}}
                        data={info.time}
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            return(
                                <View style={styles.timeView}>
                                    <Text text={item}/>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
        )
    }

  return (
    <View style={FULL}>
      <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
        <View style={styles.navigationHeader}>
            <TouchableOpacity onPress={() => {
                }}>
                <Icon icon='clock' containerStyle={{...styles.headerButton, left: 10}}/>
            </TouchableOpacity>
            <Text text="Pick an appointment time"/>
            <TouchableOpacity onPress={() => {
                }}>
                <Icon icon='clock' containerStyle={{...styles.headerButton, right: -10}}/>
            </TouchableOpacity>
        </View>
        <View style={{height: 0.5, backgroundColor: color.seperatorColor}}/>
        <View style={styles.calendarContainer}>
            <Text text="CalendarView"/>
        </View>
        <SectionList
                sections={arrOfData}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item,index }) => <SectionListItem info={item}/>}
                renderSectionHeader={({ section: { title } }) => (
                    <View style={{height: 50,backgroundColor: color.headerColor, justifyContent: 'center'}}>
                        <Text style={{marginLeft: 20}}>{title}</Text>
                    </View>
                )}
                />
      </Screen>
    </View>
  )
})

const styles = StyleSheet.create({
  navigationHeader: {
      flexDirection: 'row', 
      justifyContent: 'space-between',  
      alignItems: 'center', 
      height: 44, 
      marginTop: -44
  },
  headerButton: {
      justifyContent: 'center',
      flex: 1, 
      height: 44, 
      aspectRatio: 1
  },
  calendarContainer: {
      height: screenHeight*0.20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'yellow'
  },
  shadowView: {
    height: 70,
    aspectRatio: 1,
    backgroundColor: color.white,
    borderRadius: 15,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  timeView: {
    width: '45%',
    backgroundColor: color.white,
    borderRadius: 27,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    height: 54,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }

})