import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle,StyleSheet,ImageBackground,Image,View } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import Swiper from 'react-native-swiper';
import { Header } from '../../components';
import { useIsFocused, useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { FlatList } from "react-native-gesture-handler"


const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const ImageDetailsScreen = observer(function ImageDetailsScreen({route}) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const navigation = useNavigation();
  const { subcategoryData } = useStores();
  const isFocused = useIsFocused()
  console.log(route.params)

  // useEffect(() => {
  //   if (isFocused) {
  //     LoadDataFromApi();
  //   }
  // }, [isFocused]);

  useEffect(() => {
    if (isFocused) {
      getSubCategoryData(route.params.categoryId, route.params.subCategoryId);
    }

    return function cleanup() {
      subcategoryData.clearSubCategoryMedia();
      console.tron.log('Clean Data');
    };
  }, [isFocused]);


  const getSubCategoryData = async (parentId: number, subCategoryId: number) => {
    await subcategoryData.getSubCategoryData(parentId);
    await subcategoryData.getSubCategoryMedia(subCategoryId);
    await subcategoryData.setSubCategoryVisited(parentId, subCategoryId);

  }
  // const LoadDataFromApi = async () => {
  //   await subcategoryData.getMediaData(route.params.parentId);
  //   console.log(subcategoryData.mediaData)
  // }

// const RenderImage = ({item,index}) =>{
//   return(
//    <View>
//      <Image source={{uri:item.url}}
//             style={styles.headingImage}/>
//      <Text style={styles.headingText}>{item.caption}</Text>
//      <Text style={styles.paragraphText}>
//             Sed ut perspiciatis unde ommis iste natus error sit voluptatem accusanitum dolomque 
//             laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
//      </Text>
//    </View> 
//   )
// }


const renderItem = ({ item, index }) => {
  return (
    <View key={index}  >
      <View >
        <Image source={{ uri: item.url }} style={styles.headingImage}/>

      </View>
      <View  >
        <Text text={item.caption} style={styles.headingText}/>
        {/* <HTML tagsStyles={{ ul: { color: 'white', fontSize: 16 }, p: { color: 'white', fontSize: 16 }, h2: { color: 'white' } }}
          listsPrefixesRenderers={{
            ul: (htmlAttribs, children, convertedCSSStyles, passProps) => {
              return (
                <Text style={{ color: 'white', fontSize: 16, marginRight: 5 }}>•</Text>
              );
            }
          }}
          html={'<div style="color: white">' + item.description + "</div>"}
        /> */}
      </View>
    </View>
  )
}

  return (
    <Screen style={{backgroundColor:'black'}}>
                <Header headerText={route.params.subCategoryName} leftIcon="back"  rightIcon="menu"/>                

                <ImageBackground source={require('../../components/icon/icons/background/layer2.png')}style={styles.backImageContainer}>
                    <View style={styles.container2}>

                    <Swiper style={styles.wrapper} 
                    dot={<Image style={styles.paginationStyle}
                    source={require('../../components/images/pagination/pagination.png')}/>}
                    activeDot={<Image style={styles.paginationStyle}
                    source={require('../../components/images/paginationActive/paginationActive.png')}/>}>

                    {
                      subcategoryData.subCategoryMedia.map((item,index)=>{
                        console.log(item)
                          return(
                            <View key={index}>
                            <Image source={{uri:item.url}}
                                   style={styles.headingImage}/>
                            <Text style={styles.headingText}>{item.caption}</Text>
                            <Text style={styles.paragraphText}>
                                   {item.description}
                            </Text>
                          </View> 
                          )
                          
                      })
                    }
                   
                        {/* <FlatList 
                        data={subcategoryData.subCategoryMedia}
                        renderItem={({ item, index }: any) => {
                          return (
                            <View key={index}  >
                            <View >
                              <Image source={{ uri: item.url }} style={styles.headingImage}/>

                            </View>
                            <View  >
                              <Text text={item.caption} style={styles.headingText}/>
                              <HTML tagsStyles={{ ul: { color: 'white', fontSize: 16 }, p: { color: 'white', fontSize: 16 }, h2: { color: 'white' } }}
                                listsPrefixesRenderers={{
                                  ul: (htmlAttribs, children, convertedCSSStyles, passProps) => {
                                    return (
                                      <Text style={{ color: 'white', fontSize: 16, marginRight: 5 }}>•</Text>
                                    );
                                  }
                                }}
                                html={'<div style="color: white">' + item.description + "</div>"}
                              />
                            </View>
                          </View>
                          )
                        }}
                        keyExtractor={(item, index) => index.toString()}
                        />              */}

                    </Swiper> 
                    </View>
                </ImageBackground>

    </Screen>
  )
})


const styles = StyleSheet.create({
  wrapper: {
        
  },    
  paginationStyle:{        
      marginLeft: 3, 
      marginRight: 3, 
      marginTop: 3, 
      marginBottom: 3
  },
  backImageContainer:{
      width:375,
      height:812,
      opacity:10,
      backgroundColor:'black',
      justifyContent:'center'
  },
  container2:{
      alignItems:'center',
      marginLeft:35.3,
      marginRight:35.7,
      marginBottom:300
  },
  headingImage:{
      // width:158.3,
      // height:250.7
  },
  headingText:{
      color:'white',
      fontSize:20,
      fontWeight:'bold',
      marginTop:'8%'
  },
  paragraphText:{
      color:'white',
      fontSize:16,
      fontWeight:'normal',
      textAlign:'center',
      marginTop:'5%'
  }
})
