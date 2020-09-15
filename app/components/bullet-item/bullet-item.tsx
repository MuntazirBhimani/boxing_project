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
  marginRight: 5,
  marginTop: 5,
}
const BULLET: ImageStyle = {
  width: 8,
  height: 8,
}
const BULLET_TEXT: TextStyle = {
  fontFamily: typography.latoMedium,
  color: color.textLightGray,
  fontSize: 14,
  lineHeight: 18,
}

export interface BulletItemProps {
  text: string
}

export function BulletItem(props: BulletItemProps) {
  return (
    <View style={BULLET_ITEM}>
      <Icon icon="bullet" containerStyle={BULLET_CONTAINER} style={BULLET} />
      <Text style={BULLET_TEXT} text={props.text} />
    </View>
  )
}
