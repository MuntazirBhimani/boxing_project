import React from "react"
import { View, StyleSheet,TouchableOpacity } from "react-native"
import { Icon, Screen, Text, BulletItem } from "../../components"
import { color, typography } from "../../theme"
import { screenHeight } from "../../theme/size"

export interface LatestVitalsProps {
  arrayItems: Any[],
}

export function LatestVitals(props: LatestVitalsProps) {
  return (
    <View style={styles.card_shadow}>
          <View style={{...styles.ItemHeader,marginBottom: 10 }}>
            <Text text="Latest Vitals" style={styles.header_text} />
            <Text text="6/28/2020 8:57am" style={styles.date_text} />
          </View>
          {props.arrayItems.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => {
                console.log("item clicked");
              }} style={{ flex: 1 }}>
                <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.imageContainer}>
                          <Icon icon='heart' containerStyle={{justifyContent: 'center',flex: 1}} style={{alignSelf: 'center', alignItems: 'center'}} />
                        </View>
                        <View style={{ flex: 1, marginLeft: 20, marginBottom: 15}}>
                            <View style={{flexDirection: 'row'}}>
                              <BulletItem text="BP" icon="bp"/>
                              <Text style={styles.text_detail} text={item.BP} />
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <BulletItem text="Resp" icon="resp"/>
                              <Text style={styles.text_detail} text={item.Resp} />
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <BulletItem text="Pulse" icon="pulse"/>
                              <Text style={styles.text_detail} text={item.pulse} />
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <BulletItem text="Temp" icon="tempe"/>
                              <Text style={styles.text_detail} text={item.temp} />
                            </View>
                        </View>
                        <View style={{ marginHorizontal: -2,marginTop: 25}}>
                          <Icon style={{ height: 15, aspectRatio: 1 }} icon={"next"} />
                        </View>
                    </View>
                </View>
              </TouchableOpacity>
            )
          })}
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