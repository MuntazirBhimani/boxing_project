import React,{useState} from "react"
import { View, ViewStyle, StyleSheet,TouchableOpacity,SectionList, Image, ImageBackground, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text } from "../../components"
import { TextInput, TouchableHighlight, FlatList } from "react-native-gesture-handler"
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { useStores } from "../../models"

export const isSigned = true;

export const LoginScreen = observer(function LoginScreen(){

    // const navigation = useNavigation();
    const [invalidEmail,setInvalidEmail] = useState([]);
    const [invalidPassword,setInvalidPassword]=useState([]);
    const [email,setEmail]=useState(" ");
    const [password,setPassword]=useState(" ");

    const emailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const pwdAlphanumeric = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/
    const pwdSpecialchar = /[!@#$%^&*(),.?":{}|<>]/
    let check=true;
   
    const { auth } =useStores();

    function validationCheck(){

        setInvalidEmail([]);
        setInvalidPassword([]);
        if(email.length<1){
            setInvalidEmail(invalidEmail=>invalidEmail.concat("! Email is required  "));
            check=false;
        }
        else if(!emailRegex.test(email)){
            setInvalidEmail(invalidEmail=>invalidEmail.concat("! Email is not valid "))
            check=false;
        }        

        if(password.length<1){
            setInvalidPassword(invalidPassword=>[...invalidPassword,"! Password is required  "])
            check=false;
        }
        else{
            if(password.length<=8){
                setInvalidPassword(invalidPassword=>[...invalidPassword,"! 8+ characters long "])
                check=false;
            }
            if(!pwdAlphanumeric.test(password)){
                if(!pwdSpecialchar.test(password)){
                    setInvalidPassword(invalidPassword=>[...invalidPassword,"! alphanumeric "]);
                    check=false;
                }
                
            }
            if(!pwdSpecialchar.test(password)){
                setInvalidPassword(invalidPassword=>[...invalidPassword,"! atleast one special character "])
                check=false;
            }
        }       
        
        // if(invalidEmail.length<1 && invalidPassword.length<1){
        //     console.log("Success");
        // }
        // else{
        //     console.log("Fail");
        // }

        {auth.setToken()}
    }


   

    return(
            <ImageBackground source={require('../../components/icon/icons/background/layer2.png')}style={styles.backImageContainer}>
                    <View style={styles.container2}>
                        <Image source={require('../../components/icon/icons/login/l1.png')} style={styles.mainLogo}/>
                        <Text style={styles.mainText}>Welcome Back,</Text>
                        <Text style={styles.mainSecondText}>Sign in to continue</Text>

                        <Text style={styles.inputLabel}>Email Address</Text>
                        <TextInput style={styles.inputText}
                        onChangeText={(inputText)=>{setEmail(inputText)}}/>

                        <FlatList 
                            style={{marginTop:8}}
                            data={invalidEmail}
                            renderItem={({item})=><Text style={{color:'red'}}>{item}</Text>}
                            keyExtractor={(item, index) => {
                                return item.id;
                              }}                        
                        />

                        <Text style={styles.inputLabel}>Password</Text>
                        <TextInput style={styles.inputText} secureTextEntry={true}
                        onChangeText={(inputText)=>{setPassword(inputText)}}/>

                        <FlatList 
                            style={{marginTop:8}}
                            data={invalidPassword}
                            renderItem={({item})=><Text style={{color:'red'}}>{item}</Text>}
                            keyExtractor={(item, index) => {
                                return item.id;
                              }}
                        />

                       <TouchableHighlight onPress={()=>validationCheck()}>
                            <ImageBackground style={{width:308.3,height:53.3,alignItems:'center',justifyContent:'center',marginTop:30}}
                                source={require('../../components/icon/icons/login/roundedRectangle1Copy3.png')}>
                                    <Text style={{color:'black', fontSize:15.3}}>Sign In</Text>
                            </ImageBackground>
                       </TouchableHighlight>

                        <ImageBackground style={{width:308.3,height:53.3,alignItems:'center',justifyContent:'center',marginTop:150}}
                        source={require('../../components/icon/icons/login/roundedRectangle1Copy.png')}>
                                <Text style={{color:'white', fontSize:15.3}}>Login with Facebook</Text>
                        </ImageBackground>

                        <ImageBackground style={{width:308.3,height:53.3,alignItems:'center',justifyContent:'center',marginTop:10}}
                        source={require('../../components/icon/icons/login/roundedRectangle1Copy4.png')}>
                                <Text style={{color:'white', fontSize:15.3}}>Login with Gmail</Text>
                        </ImageBackground>
                    </View>
            </ImageBackground>
    )
})

const styles = StyleSheet.create({
    backImageContainer:{
        width:375,
        height:812,
        opacity:10,
        backgroundColor:'black'
    },
    container2:{
        marginHorizontal:33.3,
        marginTop:30
    },
    mainLogo:{
        width:66.7,
        height:66.7
    },
    mainText:{
        fontSize:30,
        color:'white',
        textAlign:'left',
        marginTop:10
    },
    mainSecondText:{
        color:'white',
        fontSize:16.7
    },
    inputLabel:{
        color:'white',
        fontSize:12,
        marginTop:30
    },
    inputText:{
        borderBottomWidth:1,
        borderBottomColor:'white',
        fontSize:16,
        color:'white',
        height:'6%',
    }
})
