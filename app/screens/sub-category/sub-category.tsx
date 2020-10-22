import React,{useEffect, useState} from "react"
import { View, ViewStyle, StyleSheet,TouchableOpacity,SectionList, Image, ImageBackground, Alert, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text, Button, Screen,Header } from "../../components"
import {  TextInput, TouchableHighlight } from "react-native-gesture-handler"
import { flatten } from "ramda"
import { observer } from "mobx-react-lite"
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native"
import { useStores } from "../../models"

export const SubCategoryScreen = observer(function SubCategoryScreen({route}){

    const navigation = useNavigation();
    const { subcategoryData, apiData } = useStores();
    const isFocused = useIsFocused()
    // console.log(route.params);

    useEffect(() => {
          LoadDataFromApi(route.params.parentId);
      }, [route.params.parentId]);
    
      const LoadDataFromApi = async (parentId:number) => {


        await subcategoryData.getSubCategoryData(parentId);
        await subcategoryData.getCurrentSubCategories(parentId);
        await apiData.setSubCategoryIndex(parentId);
        // await subcategoryData.getSubcategoryData(route.params.parentId);
        // await subcategoryData.getSubcategory(route.params.parentId)        
      }

    // const RenderSubcategories = ({item,index}) =>{
    //     return(
    //         <TouchableHighlight onPress={()=>item.has_child ? navigation.navigate('Subcategory',{
    //             parentId:item.id,
    //             name:item.name
    //         }) : navigation.navigate('ImageDetails',{
    //             parentId:item.id,
    //             name:item.name,
    //             media:item.media
    //         })}>
    //                 <View style={styles.prepareViewContent}>
    //                         <Image source={{uri:item.icon}}
    //                         style={styles.prepareImageComponent}/>
    //                         <Text style={styles.prepareTextComponent}>{item.name}</Text>
    //                 </View>
    //         </TouchableHighlight>
    //     )
    // }

    return(
            <Screen style={{backgroundColor:'black'}}>
                <Header headerText={route.params.name} leftIcon="back"  rightIcon="menu"/>
                <ImageBackground source={require('../../components/icon/icons/background/layer2.png')}style={styles.backImageContainer}>
                    <View style={styles.container2}>
                        <FlatList 
                        data={subcategoryData.currentSubCategories}
                        renderItem={({ item, index }: any) => {
                            return (
                              <TouchableOpacity
                                key={index}
                                onPress={() => 
                                  item.has_child == false ?
                                    navigation.navigate(item.type == 'Image' || item.type=='GIF' ? 'ImageDetails' : 'VideoDetails', {
                                    categoryId: item.parent_id,
                                    subCategoryId: item.id,
                                    subCategoryName: item.name
                                    })
                                   :
                                   navigation.navigate('Subcategory',{
                                    parentId:item.id,
                                    name:item.name
                                    })
                              }>
                                <View style={styles.prepareViewContent}>
                                  <Image source={{ uri: item.icon }} style={styles.prepareImageComponent}/>
                                  <Text  text={item.name} style={styles.prepareTextComponent}/>
                                </View>
                              </TouchableOpacity>
                            )
                          }}
                        keyExtractor={(item, index) => index.toString()}
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
        marginLeft:36,
        justifyContent:'center',
        flex:1,
        marginBottom:300
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
