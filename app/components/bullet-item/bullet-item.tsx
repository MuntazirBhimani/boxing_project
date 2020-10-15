import * as React from "react"
import { View, ViewStyle, ImageStyle, TextStyle } from "react-native"
import { Text } from "../text/text"
import { Icon } from "../icon/icon"
import { spacing, typography, color } from "../../theme"

const BULLET_ITEM: ViewStyle = {
  flexDirection: "row",
  marginVertical: 3,
  width: '30%'
}
const BULLET_CONTAINER: ViewStyle = {
  marginRight: 7,
  marginTop: 2,
}
const BULLET: ImageStyle = {
  width: 15,
  height: 15,
}
const BULLET_TEXT: TextStyle = {
  fontFamily: typography.latoMedium,
  color: color.textLightGray,
  fontSize: 14,
  lineHeight: 18,
}

export interface BulletItemProps {
  text: string,
  icon: string,
  textStyle: TextStyle, 
  viewStyle: ViewStyle
}

export function BulletItem(props: BulletItemProps) {
  return (
    <View style={[BULLET_ITEM, props.viewStyle]}>
      <Icon icon={props.icon} containerStyle={BULLET_CONTAINER} style={BULLET} />
      <Text style={[BULLET_TEXT,props.textStyle]} text={props.text} />
    </View>
  )
}
