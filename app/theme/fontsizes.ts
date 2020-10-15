// --------------------------------- fontSizes For Whole App -------------------------------------

import { Platform } from "react-native";
import { screenWidth } from "./size"

export const definePlatform = ({ ios, android }: { ios: any, android: any }): any => (Platform.OS === "ios" ? ios : android);

export const fonts = {
     font_8 : definePlatform({ ios: screenWidth * 0.025, android: screenWidth * 0.0225 }),
     font_9 : definePlatform({ ios: screenWidth * 0.0275, android: screenWidth * 0.025 }),
     font_10: definePlatform({ ios: screenWidth * 0.03, android: screenWidth * 0.0275 }),
     font_11: definePlatform({ ios: screenWidth * 0.0325, android: screenWidth * 0.03 }),
     font_12: definePlatform({ ios: screenWidth * 0.035, android: screenWidth * 0.0325 }),
     font_13: definePlatform({ ios: screenWidth * 0.0375, android: screenWidth * 0.035 }),
     font_14: definePlatform({ ios: screenWidth * 0.04, android: screenWidth * 0.0375 }),
     font_15: definePlatform({ ios: screenWidth * 0.0425, android: screenWidth * 0.04 }),
     font_16: definePlatform({ ios: screenWidth * 0.0475, android: screenWidth * 0.0425 }),
     font_17: definePlatform({ ios: screenWidth * 0.05, android: screenWidth * 0.045 }),
     font_18: definePlatform({ ios: screenWidth * 0.0525, android: screenWidth * 0.0475 }),
     font_19: definePlatform({ ios: screenWidth * 0.054, android: screenWidth * 0.0506 }),
     font_20: definePlatform({ ios: screenWidth * 0.056, android: screenWidth * 0.053 }),
     font_22: definePlatform({ ios: screenWidth * 0.058, android: screenWidth * 0.055 }),
     font_24: definePlatform({ ios: screenWidth * 0.064, android: screenWidth * 0.062 }),
     font_28: definePlatform({ ios: screenWidth * 0.075, android: screenWidth * 0.072 }),
     font_32: definePlatform({ ios: screenWidth * 0.085, android: screenWidth * 0.082 }),
     font_36: definePlatform({ ios: screenWidth * 0.096, android: screenWidth * 0.09 }),
     font_40: definePlatform({ ios: screenWidth * 0.106, android: screenWidth * 0.1 }),
     font_44: definePlatform({ ios: screenWidth * 0.1173, android: screenWidth * 0.1168 }),
     font_48: definePlatform({ ios: screenWidth * 0.128, android: screenWidth * 0.125 }),
}
 