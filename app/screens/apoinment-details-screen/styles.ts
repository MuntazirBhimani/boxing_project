import { screenWidth } from './../../theme/size';
import { fonts } from './../../theme/fontsizes';
import { ViewStyle, TextStyle, ImageStyle } from "react-native"
import { color, typography } from "../../theme"

export const appoinment_details_Screen = {
    FULL: {
        flex: 1,
        backgroundColor: color.palette.white,
    } as ViewStyle,
    TOP_NAVIGATION_STYLE: {
        borderBottomColor: color.palette.lighterGrey,
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        paddingBottom: 5,
        height: 44,
        alignItems: 'center',
    } as ViewStyle,
    TXT_TITLE_STYLE: {
        fontSize: 16,
        fontFamily: typography.CooperMdBTMedium,
        alignSelf: 'center',
        marginLeft: '13%',
        color: color.palette.textDarkGray,
        justifyContent: 'center'
    } as TextStyle,
    BTN_BACKBUTTON_STYLE: {
        // padding: 5,
        marginLeft: 20,
        left: 10,
        // alignSelf: 'flex-start'
    } as ViewStyle,
    IMG_BACKBUTTON: {
        height: (screenWidth * 0.06),
        width: (screenWidth * 0.05),
    } as ImageStyle,
    CONTAINERVIEW_STYLE: {
        flexDirection: 'row',
        marginLeft: (screenWidth * 0.07),
        paddingVertical: 10,
        height: 60,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: color.palette.lighterGrey,
    } as ViewStyle,
    IMG_GENRALQUESTION: {
        marginLeft: 15,
        height: (screenWidth * 0.05),
        width: (screenWidth * 0.07),
    } as ImageStyle,
    IMG_PROFILEPICTURE: {
        height: (screenWidth * 0.07),
        width: (screenWidth * 0.07),
        borderRadius: (screenWidth * 0.035),
    } as ImageStyle,
    TXT_GENRAL_QUESTION: {
        marginLeft: (screenWidth * 0.07),
        fontFamily: typography.latoMedium,
        color: color.palette.textDarkGray,
    } as TextStyle,
    TXT_DESIGNATION: {
        fontSize: 11,
    } as TextStyle,
    TXT_HOSPITAL_NAME: {
        color: color.palette.activeTab,
        marginLeft: (screenWidth * 0.07),
    } as TextStyle,
    TXT_HOSPITAL_ADD: {
        width: (screenWidth * 0.7),
    } as TextStyle,
    CONTAINERVIEW_HOSPITAL: {
        flexDirection: 'row',
        marginLeft: (screenWidth * 0.07),
        paddingVertical: 10,
        marginVertical: 10,
        height: 80,
        justifyContent: 'flex-start',
        alignItems: 'center',
    } as ViewStyle,
    MAP_VIEW: {
        alignSelf: 'center',
        height: (screenWidth * 0.4),
        marginLeft: 10,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: color.borderGray,
        width: (screenWidth * 0.85),
        backgroundColor: 'green',
    } as ViewStyle,
    TXT_CONFIRM_DES: {
        color: color.palette.textLightGray,
        textAlign: 'center',
        fontSize: 13,
        marginTop: (screenWidth * 0.08),
        fontFamily: typography.latoSemiBold,
    } as TextStyle,
    TXT_CANCEL_APPOINMENT: {
        color: color.palette.textRedColor,
        fontSize : 18,
        fontFamily: typography.CooperMdBTMedium,
        letterSpacing: 1,
    } as TextStyle,
    BTN_CANCEL_STYLE: {
        alignSelf: 'center',
        padding: 5,
    } as ViewStyle,
    TXT_CANCELVIEW_STYLE: {
        alignSelf: 'center',
        height: (screenWidth * 0.10),
        marginTop : (screenWidth * 0.08),
        justifyContent: 'center',
    } as ViewStyle,
}