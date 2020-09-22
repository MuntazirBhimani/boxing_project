import React, {useState} from "react"
import { TextStyle, View, SectionList, TouchableOpacity, StyleSheet,Image,FlatList} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Text, Screen, Icon, Button, TextField } from "../../../../components"
import { color, typography } from "../../../../theme"
import {screenHeight,screenWidth} from '../../../../theme/size'
import {CalendarList} from 'react-native-calendars';
import scale from '../../../../theme/scale'
const FULL: ViewStyle = { flex: 1 ,backgroundColor: color.white,}

export const AppointmentBook3 = observer(function AppointmentBook3() {
  const [option1Selected, setOption1Selected] = useState(false)
  const [option2Selected, setOption2Selected] = useState(false)
  const [selectedId, setSelectedId] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)

  const navigation = useNavigation()
  const btnBackPressed = () => {
    navigation.goBack()
  }
  const arrOfData = [
        { 
            title: "Monday July 6, 2020", 
            data: [{"name":"Dr. Katherine Jo-Yang :", "designation": "Pulmonologist","time": [{"id": 1, "time": "2:00pm"},{"id": 2, "time": "3:00pm"},{"id": 3, "time": "3:30pm"},{"id": 4, "time": "4:00pm"}]},{"name":"Dr. Katherine Jo-Yang :", "designation": "Pulmonologist","time": [{"id": 5, "time": "2:00pm"},{"id": 6, "time": "3:00pm"}]}]
        },
        { 
            title: "Monday July 7, 2020", 
            data: [{"name":"Dr. Katherine Jo-Yang :", "designation": "Pulmonologist","time": [{"id": 7, "time": "2:00pm"},{"id": 8, "time": "3:00pm"},{"id": 9, "time": "3:30pm"},{"id": 10, "time": "4:00pm"}]},{"name":"Dr. Katherine Jo-Yang :", "designation": "Pulmonologist","time": [{"id": 11, "time": "2:00pm"},{"id": 12, "time": "3:00pm"},{"id": 13, "time": "3:30pm"},{"id": 14, "time": "4:00pm"}]}]
        }
  ]


  const SectionListItem = ({
      info
    }: {
      info: any
    }) => {
        return(
            <View style={{flex: 1, marginVertical: 10}}>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 20}}>
                    <View style={styles.shadowView}>
                        <View style={{ flex: 1 }} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 25, justifyContent: 'center' }}>
                        <Text style={styles.name} text={info.name} />
                        <Text style={styles.designation} text={info.designation} />
                    </View>
                </View>
                <View>
                    <FlatList
                        style={{marginHorizontal: 10}}
                        columnWrapperStyle={{flex: 1,
                        justifyContent: "space-around"}}
                        data={info.time}
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            return(
                               <TouchableOpacity style={{...styles.timeView, backgroundColor: item.id === selectedId ? color.activeTab : color.white}} onPress={() => {
                                   setSelectedId(item.id);     
                               }}>
                                <View style={{flex:1,justifyContent: 'center'}}>
                                    <Text style={{...styles.timeTextStyle, color: item.id === selectedId ? color.white : color.activeTab}} text={item.time}/>
                                </View>
                              </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </View>
        )
    }

  return (
    <View style={FULL}>
        <View style={styles.navigationBar}>
            <TouchableOpacity onPress={() => btnBackPressed()} >
              <Icon style={styles.navigationLeftButton} icon="heart" />
            </TouchableOpacity>
            <Text style={styles.navigationHeaderTitle} text="Pick an appointment time"/>
            <TouchableOpacity onPress={() => btnBackPressed()} >
              <Icon style={styles.navigationRightButton} icon="heart" />
            </TouchableOpacity>
        </View>
        <View style={styles.calendarContainer}>
            <CalendarList
              // style={{height: 350}}
              horizontal={true}
              pagingEnabled={true}
              pastScrollRange={0}
              futureScrollRange={50}
              calendarWidth={screenWidth}
              onDayPress={(day) => {
                setSelectedDate({[day.dateString]:{selected: true, selectedColor: color.activeTab}})
              }}
              markedDates={selectedDate}
              theme={{
                  backgroundColor: '#ffffff',
                  calendarBackground: '#ffffff',
                  textSectionTitleColor: color.textLightGray,
                  selectedDayBackgroundColor: color.activeTab,
                  selectedDayTextColor: '#ffffff',
                  todayTextColor: color.activeTab,
                  dayTextColor: color.textDarkGray,
                  // textDisabledColor: '#d9e1e8',
                  monthTextColor: color.activeTab,
                  indicatorColor: 'blue',
                  textDayFontSize: 13,
                  textMonthFontSize: 13,
                  textDayHeaderFontSize: 13,
                  textDayFontFamily: typography.latoMedium,
                  textMonthFontFamily: typography.latoRegular,
                  textDayHeaderFontFamily: typography.latoRegular,
                  // 'stylesheet.day.basic':{
                  //   'base':{
                  //     width:scale(30),
                  //     height: scale(30),
                  //     marginLeft: scale(25),
                  //     borderRadius: scale(30)/2
                  //   }
                  // }
                }}
            />
        </View>
        <SectionList
                sections={arrOfData}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item,index }) => <SectionListItem info={item}/>}
                renderSectionHeader={({ section: { title } }) => (
                    <View style={{height: 50,backgroundColor: color.headerColor, justifyContent: 'center'}}>
                        <Text style={styles.sectionHeaderStyle}>{title}</Text>
                    </View>
                )}
                />
    </View>
  )
})

const styles = StyleSheet.create({
  calendarContainer: {
      height: screenWidth*0.75,
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
    marginLeft: 20,
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
  },
  navigationBar: {
    flexDirection: 'row',
    height: 44,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: color.seperatorColor,
    borderBottomWidth: 0.5,
  },
  navigationRightButton: {
    right: 10,
  },
  navigationLeftButton: {
    left: 10
  },
  navigationHeaderTitle: {
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 22,
    fontFamily: typography.CooperMdBTMedium,
    color: color.textDarkGray,
  },
  timeTextStyle: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 20,
    fontFamily: typography.latoBold,
  }, 
  name: {
    textAlign: 'left',
    fontSize: 14,
    lineHeight: 22,
    fontFamily: typography.latoSemoBold,
    color: color.textDarkgray
  },
  designation: {
    textAlign: 'left',
    fontSize: 12,
    lineHeight: 22,
    fontFamily: typography.latoMedium,
    color: color.textLightGray
  },
  sectionHeaderStyle: {
    marginLeft: 20,
    textAlign: 'left',
    fontSize: 14,
    lineHeight: 22,
    fontFamily: typography.latoMedium,
    color: color.textDarkgray
  }

})