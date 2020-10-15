import React from "react"
import { View, StyleSheet,TouchableOpacity } from "react-native"
import { Icon, Screen, Text, BulletItem } from "../../components"
import { color, typography } from "../../theme"
import { screenHeight } from "../../theme/size"

export interface UpcomingItemsProps {
  items: Any,
  onPress: (any: any) => void
}

export function UpcomingItems(props: UpcomingItemsProps) {
  return (
    <View style={styles.card_shadow}>
        <TouchableOpacity onPress={() => props.onPress()} style={{ flex: 1 }}>
            <View style={styles.progressNoteContainer}>
                <View style={styles.imageContainer}>
                    <View style={{ flex: 1 }} />
                </View>
                <View style={{ flex: 1, marginLeft: 20 }}>
                <Text style={styles.progressNoteText1} text={props.items.drName} />
                <Text style={{...styles.progressNoteText2,marginTop: -3}} text={props.items.designation} />
                <BulletItem viewStyle={{width: '100%', marginTop: 10}} textStyle={{...styles.bulletItemTextStyle, marginTop: -2}} text={props.items.hospitalName} icon="navigation"/>
                <BulletItem viewStyle={{width: '100%', marginTop: -3, marginBottom: 20}} textStyle={{...styles.bulletItemTextStyle,lineHeight: 20}} text={props.items.appointmentTime} icon="clock"/>
                </View>
                <View style={{ marginHorizontal: -2, marginTop: -20}}>
                <Icon style={{ height: 15, aspectRatio: 1 }} icon={"next"} />
                </View>
            </View>
        </TouchableOpacity>
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
  progressNoteContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20
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
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    },
  progressNoteText1: {
    fontFamily: typography.latoSemiBold,
    fontSize: 14,
    lineHeight: 22,
    marginRight: 10,
    textAlign: "left",
    color: color.textDarkGray,
    },
  progressNoteText2: {
    fontFamily: typography.latoMedium,
    fontSize: 12,
    lineHeight: 22,
    textAlign: "left",
    marginRight: 10,
    color: color.textLightGray,
    },
  bulletItemTextStyle: {
  fontSize: 12,
  lineHeight: 22,
  textAlign: "left",
  color: color.textDarkGray,
  fontFamily: typography.latoMedium,
  }
})