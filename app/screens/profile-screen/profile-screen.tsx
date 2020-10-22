import React,{useEffect, useRef, useState} from "react"
import { View, ViewStyle, StyleSheet,TouchableOpacity,SectionList, Image, ImageBackground, TextStyle, Dimensions, Animated} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text, Button, Screen, Header, TextField } from "../../components"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler"
import { observer } from "mobx-react-lite"
import { spacing, color } from "../../theme"
import SearchInput,{ createFilter } from 'react-native-search-filter';
import Accordion from 'react-native-collapsible/Accordion';
import { useIsFocused } from "@react-navigation/native"
import { useStores } from "../../models"

// const ProfileView: ViewStyle={
//     alignItems:'center',
//     marginTop:spacing[6],
// }

// const NameText : TextStyle={
//     color:'white',
//     fontSize:24,
//     fontWeight:'bold'
// }

// const OtherText: TextStyle={
//     color:'white',
//     fontSize:17.3,
//     fontWeight:'normal'
// }

// const SaveCategoryView:ViewStyle={
//     marginHorizontal:33.3,
//     marginTop:spacing[7],
// }

// const SaveCategory: TextStyle={
//     color:'yellow',
//     fontSize:20,
//     fontWeight:'normal'
// }

// const SearchInputView:ViewStyle={
//     borderBottomWidth:1,
//     borderBottomColor:'white',
//     marginTop:spacing[6],
//     paddingBottom:spacing[3],
       
// }

const HEADER_MAX_HEIGHT = 230;
const HEADER_MIN_HEIGHT = 130;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const DEVICE_WIDTH = Math.round(Dimensions.get('window').width);
const DEVICE_HEIGHT = Math.round(Dimensions.get('window').height);

const ProfileDetailsLarge: ViewStyle = {
    position: 'absolute',
    // top: Platform.OS == 'ios' ? 80 : 55,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  }

  const ProfileImage: ImageStyle = {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: color.palette.golden,    
  }
  
  const TEXT: TextStyle = {
    color: color.palette.white,
    textAlign: 'center'
  }
  const NameText: TextStyle = {
    ...TEXT,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
  }
  const Emailaddress: TextStyle = {
    ...TEXT,
    fontSize: 18
  }
  const BirthDate: TextStyle = {
    ...TEXT,
    fontSize: 18
  }
  const CONTENTVIEWHEIGHT = DEVICE_HEIGHT - HEADER_MIN_HEIGHT - DEVICE_HEIGHT * 0.1 - 75;
  const ContentView: ViewStyle = {
    marginTop: HEADER_SCROLL_DISTANCE,
    // flexGrow: 1,
    minHeight: CONTENTVIEWHEIGHT,
    backgroundColor: color.palette.black,
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[5],
  }
  const SavedCategoryHeading: TextStyle = {
    color: color.palette.golden,
    fontSize: 20,

  }
  const TextFieldView: ViewStyle = {
    borderBottomWidth: 1,
    borderBottomColor: color.palette.white,
    paddingBottom: spacing[3],
    marginTop:spacing[4]
  }
  
  const ListOfCategory: ViewStyle = {
    marginTop: spacing[4],
  }
  const AccordionHeader: ViewStyle = {
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[3],
    marginBottom: spacing[2],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
  const HeaderActive: ViewStyle = {
    ...AccordionHeader,
    backgroundColor: color.palette.golden,
  }
  const HeaderInActive: ViewStyle = {
    ...AccordionHeader,
    backgroundColor: color.transparent,
    borderColor: color.palette.white,
    borderWidth: 1
  }
  const AccordionHeaderText: TextStyle = {
    textTransform: 'uppercase'
  }
  const ActiveHeaderText: TextStyle = {
    ...AccordionHeaderText,
    color: color.palette.black,
  }
  const InActiveHeaderText: TextStyle = {
    ...AccordionHeaderText,
    color: color.palette.white,
  }
  const HeaderIcon: ImageStyle = {
    height: 16,
  }
  const ActiveHeaderIcon: ImageStyle = {
    ...HeaderIcon,
    tintColor: color.palette.black,
    transform: [{ rotate: '90deg' }]
  }
  const InActiveHeaderIcon: ImageStyle = {
    ...HeaderIcon,
    tintColor: color.palette.white,
    transform: [{ rotate: '270deg' }]
  }
  
  const KEYS_TO_FILTERS = ['user.name', 'subject'];

export const ProfileScreen = observer(function ProfileScreen() {
    
    const [activeSections, setActiveSections] = useState([0]);
    const [sections, setSections] = useState([]);
    const { apiData, subcategoryData } = useStores();
    const isFocused = useIsFocused();
    const scrollY = useRef(new Animated.Value(0)).current;
    // const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        if (isFocused) {
          getVisitedCategories();
        }
      }, [isFocused]);
    
      const getVisitedCategories = () => {
        let SECTIONS = [];
        apiData.categoryData.forEach(element => {
          subcategoryData.subCategoryData.forEach(subData => {
            if (subData.parentId == element.id) {
              var VisitedData = subData.data.filter(function (itm) {
                return subcategoryData.visitedSubCategoryIds.indexOf(itm.id) > -1;
              });
              console.tron.log('VisitedData', VisitedData);
              SECTIONS.push({ title: element.name, content: VisitedData });
            }
          });
        });
        setSections(SECTIONS);
        console.tron.log('SECTION', SECTIONS);
      }

    const _renderHeader = (item, index, isExpanded) => {
        return (
          <View style={isExpanded ? HeaderActive : HeaderInActive}>
            <Text style={isExpanded ? ActiveHeaderText : InActiveHeaderText}>{item.title}</Text>
            {/* <Icon icon='back' style={isExpanded ? ActiveHeaderIcon : InActiveHeaderIcon} /> */}
          </View>
        );
      };
    
      const _renderContent = (item, index) => {
        // let searchArray = item.filter(createFilter(searchTerm, KEYS_TO_FILTERS))
        return (
          <View key={index}>
            {item.content.map((element, key) => {
              return (
                <View key={key} style={{ marginBottom: spacing[2] }}>
                  <Text style={{ marginBottom: spacing[2] }}>{element.name}</Text>
                  <FlatList
                    data={element.media}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    ListEmptyComponent={() => {
                      return (
                        <View style={{ marginRight: spacing[3], marginBottom: spacing[2] }}>
                          {/* <FastImage source={{ uri: null, priority: FastImage.priority.normal }} style={{ height: 60, width: 60, borderWidth: 2, borderColor: color.palette.golden, borderRadius: 300, backgroundColor: color.palette.white }} resizeMode={FastImage.resizeMode.contain} /> */}
                        </View>
                      )
                    }}
                    renderItem={({ item, index }: any) => {
                      return (
                        <View key={index} style={{ marginRight: spacing[3], marginBottom: spacing[2] }}>
                          {/* <FastImage source={{ uri: item.type == 'Image' ? item.url : item.video_cover, priority: FastImage.priority.normal }} style={{ height: 60, width: 60, borderWidth: 2, borderColor: color.palette.golden, borderRadius: 300, backgroundColor: color.palette.white }} resizeMode={FastImage.resizeMode.contain} /> */}
                        </View>
                      )
                    }}
                  />
                </View>
              )
            })}
          </View>
        );
      };

    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp',
      });
      const ImageTop = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [20, 15],
        extrapolate: 'clamp',
      })
      const ImageLeft = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [DEVICE_WIDTH / 2 - 50, 32],
        extrapolate: 'clamp',
      })
      const UserDetailsTop = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [130, 100, 20],
        extrapolate: 'clamp',
      })
      const UserDetailsLeft = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 120, 150],
        extrapolate: 'clamp',
      })
      const UserDetailsPadding = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [DEVICE_WIDTH / 6, 10],
        extrapolate: 'clamp',
      })

    return (
        <Screen preset="fixed" style={{flex:1,backgroundColor:'black'}}>      
                <ImageBackground source={require('../../components/icon/icons/background/layer2.png')}style={styles.backImageContainer}>
                <Header headerText="Profile" />
                <View>

                <Animated.View
                    style={[ProfileDetailsLarge, { maxHeight: headerHeight }]}
                    >

                    <Animated.View style={{ position: 'absolute', top: ImageTop, bottom: 0, left: ImageLeft }}>
                        <Image source={require('../../components/images/profile/profile.png')} style={ProfileImage} />
                    </Animated.View>
                    <Animated.View style={{ position: 'absolute', top: UserDetailsTop, left: UserDetailsLeft, right: 0, paddingHorizontal: UserDetailsPadding }}>
                        <Text text='Luke Johnson' style={NameText} numberOfLines={1} />
                        <Text text='LukeMJohnson@gmail.com' style={Emailaddress} numberOfLines={1} />
                        <Text text='17th March, 1996' style={BirthDate} numberOfLines={1} />
                    </Animated.View>
                    </Animated.View>

                </View>

                <View style={{ flex: 1, marginTop: HEADER_MIN_HEIGHT }} >

                <Animated.ScrollView
                    style={{ flex: 1 }}
                    // contentContainerStyle={{ paddingTop: 230 }}
                    scrollEventThrottle={16}
                    overScrollMode='never'
                    bounces={false}
                    onScrollEndDrag={event => {
                        console.tron.log(event.nativeEvent.contentOffset.y)
                    }}
                    onScroll={Animated.event([
                        { nativeEvent: { contentOffset: { y: scrollY } } }
                    ], { useNativeDriver: false })}
                    >

                    <View style={ContentView}>
                       
                        <View>
                            <Text text='Saved Category' style={SavedCategoryHeading} />

                            <SearchInput 
                                placeholder="Search Categories"
                                placeholderTextColor="white"
                                style={TextFieldView}
                            />

                        </View>
                        <View style={ListOfCategory}>

                            <Accordion
                                sections={sections}
                                activeSections={activeSections}
                                // renderSectionTitle={_renderSectionTitle}
                                renderHeader={_renderHeader}
                                renderContent={_renderContent}
                                onChange={(activeSections) => setActiveSections(activeSections)}
                            />
                            </View>

                    </View>

                </Animated.ScrollView>

                </View>


                    

            </ImageBackground>
        </Screen>
    )
  })

const styles = StyleSheet.create({
    backImageContainer:{
        width:375,
        height:812,
        opacity:10,
        backgroundColor:'black',
    }
})
