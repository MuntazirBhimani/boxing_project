import React, { useCallback, useEffect, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { Alert, Button, ImageBackground, StyleSheet, View, ViewStyle } from "react-native"
import {  Header, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { useIsFocused } from "@react-navigation/native"
import { useStores } from "../../models"
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"

import YoutubePlayer,{ InitialPlayerParams } from 'react-native-youtube-iframe';
import HTML from 'react-native-render-html';

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const VideoDetailsScreen = observer(function VideoDetailsScreen({route}) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const isFocused = useIsFocused();
  const { subcategoryData } = useStores();
  const player = useRef()

  useEffect(() => {
    if (isFocused) {
      console.log('In useEffect Video');
      getSubCategoryData(route.params.categoryId, route.params.subCategoryId);
    }

    // return function cleanup() {
    //   subcategoryData.clearSubCategoryMedia();
    //   console.log('Clean Data');
    // };
  }, [isFocused]);

  const getSubCategoryData = async (parentId: number, subCategoryId: number) => {
    await subcategoryData.getSubCategoryData(parentId);
    await subcategoryData.getCurrentSubCategories(parentId);
    await subcategoryData.getSubCategoryMedia(subCategoryId);
    await subcategoryData.setSubCategoryVisited(parentId, subCategoryId);
  }

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const initialParams: InitialPlayerParams = {
    loop: false,
    controls: true,
    modestbranding: false,
    rel: false
  }

  const regExp = /^(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i;

  const renderVideos = ({ item, index }) => {
    console.log('Item:', item);
    let videoId = item.url.match(regExp)[7];
    console.log("Id:", videoId);
    return (
      <View key={index} style={{marginTop:spacing[4]}}>

        <Text style={{fontSize:17.3,color:'white',marginBottom:spacing[4]}}>{item.caption}</Text>
        <YoutubePlayer
          height={200}
          initialPlayerParams={initialParams}
          play={playing}
          videoId={videoId}
          onChangeState={onStateChange}
        />
        
        <HTML tagsStyles={{ ul: { color: 'white', fontSize: 16 }, p: { color: 'white', fontSize: 16 }, h2: { color: 'white' } }}
          listsPrefixesRenderers={{
            ul: (htmlAttribs, children, convertedCSSStyles, passProps) => {
              return (
                <Text style={{ color: 'white', fontSize: 16, marginRight: 5 }}>•</Text>
              );
            }
          }}
          html={item.description}
        />

      </View>
    )
  }

  return (
    <Screen style={{backgroundColor:'black'}}>
                <Header headerText={route.params.subCategoryName} leftIcon="back"  rightIcon="menu"/>
                <ImageBackground source={require('../../components/icon/icons/background/layer2.png')}style={styles.backImageContainer}>
                    <View style={styles.container2}>
                    <FlatList
                      data={subcategoryData.subCategoryMedia}
                      style={{ paddingBottom: 25, marginBottom: 15, paddingHorizontal: spacing[6], }}
                      keyExtractor={(index) => index.toString()}
                      renderItem={renderVideos}
                    />
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
      justifyContent:'center'
  },
  container2:{
      // marginLeft:36,
      justifyContent:'center',
      flex:1,
      // marginBottom:300
  },
  prepareImageComponent:{
      width:66.7,
      height:66.7
  },
  prepareTextComponent:{
      color:'white',
      fontSize:20,
      textAlign:'center',
      padding:20
  },
  prepareViewContent:{
      flexDirection:'row',
      marginBottom:20
  }
})
