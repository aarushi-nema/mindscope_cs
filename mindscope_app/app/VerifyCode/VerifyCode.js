import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { COLORS, FONT, SHADOWS } from "../../constants/theme";

import images from "../../constants/images";
import OrangeButton from "../../components/OrangeButton";

const VerifyCode = ({route}) => {
    const {userdata} = route.params;

    console.log('From verification page ',  userdata[0])
    const email = "aarushi.nema@gmail.com"
    const [userInput, setUserInput] = useState('XXXX'); 

    const sendToBackend = async () => {
      console.log(userInput)
    }

  return (
    <View style={styles.container}>
      <View style={styles.login_header}>
        <Image style={styles.logo_login} source={images.logo}></Image>
        <Text style={styles.title}>MindScope</Text>
      </View>
      <KeyboardAvoidingView style={styles.verifyContainer}>
        <Text style={styles.form_header}>Email Verification</Text>
        <Text style={styles.form_text}>We have sent you a verification code to {email}</Text>
        <View style={styles.inputContainer}>
        <TextInput 
          placeholder='6-digit verification code' 
          //value={email} 
          onChangeText={(text) => setUserInput(text)}  
          style={styles.input}
          />

<TextInput 
          placeholder='Password' 
          //value={password} 
          onChangeText={(text) => setFdata({...fdata, password:text})} 
          style={styles.input}
          onPressIn={()=> setErrormsg(null)}
          secureTextEntry/>
        </View>

        <View style={styles.buttonContainer}> 
        <OrangeButton text="Verify" handlePress={() => {sendToBackend()}}/>
      </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default VerifyCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  login_header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "center",
    marginTop: "30%",
    // borderColor: 'red',
    // borderWidth: 1,
  },
  logo_login: {
    width: 50,
    height: 50,
    marginRight: 10,
    // borderColor: 'red', borderWidth: 1
  },
  title: {
    fontSize: 25,
    fontFamily: FONT.CrimsonPro,
    // borderColor: 'red', borderWidth: 1
  },
  input:{
    backgroundColor: "#e6e6e6",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    fontFamily: FONT.Oxygen
  },
  inputContainer: {
    width: '80%',
    alignSelf: 'center'
  },
  form_header:{
    alignSelf: 'flex-start', 
    marginLeft: 45, 
    fontSize: 16, 
    marginBottom: '2%', 
    fontFamily: FONT.Oxygen
  },
  form_text:{
    alignSelf: 'flex-start', 
    marginLeft: 45, 
    fontSize: 14, 
    marginBottom: '2%', 
    fontFamily: FONT.Oxygen,
  },
  verifyContainer: {
    marginTop: 40
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    width: '80%',
    ...SHADOWS.medium,
    alignSelf: 'center'
  }
});
