// --------------------------------- fontSizes For Whole App -------------------------------------

import { Platform } from "react-native";
import { screenWidth } from "./size"

export const definePlatform = ({ ios, android }: { ios: any, android: any }): any => (Platform.OS === "ios" ? ios : android);

export const font_8: number = definePlatform({ ios: screenWidth * 0.025, android: screenWidth * 0.0225 });
export const font_9: number = definePlatform({ ios: screenWidth * 0.0275, android: screenWidth * 0.025 });
export const font_10: number = definePlatform({ ios: screenWidth * 0.03, android: screenWidth * 0.0275 });
export const font_11: number = definePlatform({ ios: screenWidth * 0.0325, android: screenWidth * 0.03 });
export const font_12: number = definePlatform({ ios: screenWidth * 0.035, android: screenWidth * 0.0325 });
export const font_13: number = definePlatform({ ios: screenWidth * 0.0375, android: screenWidth * 0.035 });
export const font_14: number = definePlatform({ ios: screenWidth * 0.04, android: screenWidth * 0.0375 });
export const font_15: number = definePlatform({ ios: screenWidth * 0.0425, android: screenWidth * 0.04 });
export const font_16: number = definePlatform({ ios: screenWidth * 0.0475, android: screenWidth * 0.0425 });
export const font_17: number = definePlatform({ ios: screenWidth * 0.05, android: screenWidth * 0.045 });
export const font_18: number = definePlatform({ ios: screenWidth * 0.0525, android: screenWidth * 0.0475 });
export const font_19: number = definePlatform({ ios: screenWidth * 0.054, android: screenWidth * 0.0506 });
export const font_20: number = definePlatform({ ios: screenWidth * 0.056, android: screenWidth * 0.053 });
export const font_22: number = definePlatform({ ios: screenWidth * 0.058, android: screenWidth * 0.055 });
export const font_24: number = definePlatform({ ios: screenWidth * 0.064, android: screenWidth * 0.062 });
export const font_28: number = definePlatform({ ios: screenWidth * 0.075, android: screenWidth * 0.072 });
export const font_32: number = definePlatform({ ios: screenWidth * 0.085, android: screenWidth * 0.082 });
export const font_36: number = definePlatform({ ios: screenWidth * 0.096, android: screenWidth * 0.09 });
export const font_40: number = definePlatform({ ios: screenWidth * 0.106, android: screenWidth * 0.1 });
export const font_44: number = definePlatform({ ios: screenWidth * 0.1173, android: screenWidth * 0.1168 });
export const font_48: number = definePlatform({ ios: screenWidth * 0.128, android: screenWidth * 0.125 });