import React from "react"
import { View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

const FULL: ViewStyle = { flex: 1 }
export const HomeScreen = observer(function HomeScreen() {
  return <View style={FULL}></View>
})