import * as React from "react"
import { View, ViewStyle } from "react-native"
import { spacing } from "../../theme"

const ShadowCardStyle: ViewStyle = {
  flexDirection: "row",
  marginTop: spacing[4],
  paddingBottom: spacing[4],
  height: 300,
  width: '85%',
  backgroundColor: 'black',
  borderRadius: 10,
  shadowColor: 'black',
  shadowOpacity: 0.26,
  shadowOffset: {width: 0, height: 2},
  shadowRadius: 10,
  elevation: 3,
}

export interface ShadowCardProps {
  style: ViewStyle,
  data: Array[]
}

export function ShadowCard(props: ShadowCardProps) {
  const { style: styleOverride } = props
  const style: ViewStyle = { ...ShadowCardStyle, ...styleOverride }
  return (
    <View style={ShadowCardStyle}>

    </View>
  )
}