import React from "react"
import { View, ViewStyle, TextStyle,SafeAreaView } from "react-native"
import { HeaderProps } from "./header.props"
import { Button } from "../button/button"
import { Text } from "../text/text"
import { Icon } from "../icon/icon"
import { spacing } from "../../theme"
import { translate } from "../../i18n/"
import { NavigationContainer, useNavigation } from "@react-navigation/native"

// static styles
const ROOT: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: spacing[4],
  alignItems: "center",
  paddingTop: spacing[5],
  paddingBottom: spacing[15],
  justifyContent: "flex-start",
}
const TITLE: TextStyle = { textAlign: "center" }
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: "center" }
const LEFT: ViewStyle = { width: 32,marginLeft:5 }
const RIGHT: ViewStyle = { width: 32, marginRight:5,paddingRight:10}

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */

export function Header(props: HeaderProps) {
  const navigation = useNavigation();

  const {
    onLeftPress=()=>navigation.goBack(),
    onRightPress=()=>navigation.openDrawer(),
    rightIcon,
    leftIcon,
    headerText,
    headerTx,
    style,
    titleStyle,
  } = props
  const header = headerText || (headerTx && translate(headerTx)) || ""

  return (
   <View style={{borderBottomWidth:0.2,borderBottomColor:'white',paddingBottom:12,paddingTop:25}}>
      <SafeAreaView style={{ ...ROOT, ...style}}>
      {leftIcon ? (
        <Button preset="link" onPress={onLeftPress} style={{marginLeft:20}}>
          <Icon icon={leftIcon} />
        </Button>
      ) : (
        <View style={LEFT} />
      )}
      <View style={TITLE_MIDDLE}>
        <Text style={{ ...TITLE, ...titleStyle,color:'white',fontSize:24 }} text={header} />
      </View>
      {rightIcon ? (
        <Button preset="link" onPress={onRightPress} style={{marginRight:20}}>
          <Icon icon={rightIcon} />
        </Button>
      ) : (
        <View style={RIGHT} />
      )}
    </SafeAreaView>
   </View>
  )
}
