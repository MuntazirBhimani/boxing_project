import React from "react"
import { View, StyleSheet,TouchableOpacity } from "react-native"
import { Icon, Screen, Text, BulletItem } from "../../components"
import { color, typography } from "../../theme"
import { screenHeight } from "../../theme/size"

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


export interface LatestVitalsProps {
  item: Any,
  index: int,
  length: int
}

export function LatestVitals(props: BulletItemProps) {
    let tempStyle = OUTER_SHADOW_VIEW
    let viewStyle = {}
    if (props.index === 0 && (props.index === (props.length - 1))) {
        tempStyle = OUTER_SHADOW_VIEW
        viewStyle = {flex: 1}
      }
      else if (props.index === 0) {
        tempStyle = FIRST_ROW_SHADOW
        viewStyle = {}
      } else if (props.index === (props.length - 1)){
        tempStyle = LAST_ROW_SHADOW
        viewStyle = {overflow: 'hidden', marginTop: -10, paddingVertical: -10}
      } else {
        tempStyle = MIDDLE_ROW_SHADOW
        viewStyle = {overflow: 'hidden',marginTop: -10, paddingVertical: -10}
      }
  return (
    <View style={viewStyle}>
    <View style={tempStyle}>

          {
            props.index === 0 ? (
              <View style={{...styles.ItemHeader,marginBottom: 10 }}>
                <Text text="Latest Vitals" style={styles.header_text} />
                <Text text="6/28/2020 8:57am" style={styles.date_text} />
              </View>
            ) : (<View/>)
          }
          <TouchableOpacity onPress={() => {
            console.log("item clicked");
          }} style={{ flex: 1, marginTop: props.index !== 0 ?  10 : 0 }}>
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.imageContainer}>
                      <Icon icon='heart' containerStyle={{justifyContent: 'center',flex: 1}} style={{alignSelf: 'center', alignItems: 'center'}} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 20, marginBottom: 15}}>
                        <View style={{flexDirection: 'row'}}>
                          <BulletItem text="BP" icon="bp"/>
                          <Text style={styles.text_detail} text={props.item.BP} />
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <BulletItem text="Resp" icon="resp"/>
                          <Text style={styles.text_detail} text={props.item.Resp} />
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <BulletItem text="Pulse" icon="pulse"/>
                          <Text style={styles.text_detail} text={props.item.pulse} />
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <BulletItem text="Temp" icon="tempe"/>
                          <Text style={styles.text_detail} text={props.item.temp} />
                        </View>
                    </View>
                    <View style={{ marginHorizontal: -2,marginTop: 40}}>
                      <Icon style={{ height: 15, aspectRatio: 1 }} icon={"next"} />
                    </View>
                </View>
            </View>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card_shadow: {
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
  },
  text_detail: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: "left",
    marginStart: 10,
    color: color.textDarkGray,
    fontFamily: typography.latoMedium,
  },
  imageContainer:{
    marginLeft: 10,
    height: 70,
    aspectRatio: 1,
    backgroundColor: color.white,
    borderRadius: 15,
    alignSelf: 'flex-start',
    marginTop: 7,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  header_text : {
    fontSize: 16,
    lineHeight: 22,
    textAlign: "left",
    color: color.textDarkGray,
    fontFamily: typography.CooperMdBTMedium,
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  date_text: {
    fontFamily: typography.latoMedium,
    fontSize: 12,
    lineHeight: 20,
    textAlign: "right",
    marginRight: 16,
    color: color.textLightGray,
  },
  ItemHeader: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: 'center', 
    marginBottom: 5
  }
})