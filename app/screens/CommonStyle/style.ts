import { screenWidth } from './../../theme/size';
import { fonts } from './../../theme/fontsizes';
import { ViewStyle, TextStyle, ImageStyle } from "react-native"
import { color, typography } from "../../theme"

export const common_style = {
    OUTER_SHADOW_VIEW: {
        marginHorizontal: 20,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 5,
        backgroundColor: "white",
        padding: 10,
        margin: 13,
        elevation: 5,
    }, 
    FIRST_ROW_SHADOW:{
        marginHorizontal: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 5,
        backgroundColor: "white",
        padding: 10,
        marginTop: 10,
        elevation: 5,
        }, 
    MIDDLE_ROW_SHADOW: {
        marginHorizontal: 20,
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 14 },
        shadowRadius: 5,
        backgroundColor: "white",
        padding: 10,
        // margin: 13,
        elevation: 5,
        },
    LAST_ROW_SHADOW:{
        marginHorizontal: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 5},
        shadowRadius: 5,
        backgroundColor: "white",
        padding: 10,
        marginBottom: 15,
        elevation: 5,
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
    }
}