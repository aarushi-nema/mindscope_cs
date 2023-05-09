import { KeyboardAvoidingView, TextInput, Text, View, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import OrangeButton from '../../components/OrangeButton'
import TransparentButton from '../../components/TransparentButton'
import images from '../../constants/images'
import { COLORS, FONT, SHADOWS } from '../../constants/theme'

const Login = (props) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  // const handleSignUp = () => {
  //   auth.createUserWithEmail
  // }
  return (
    <View style={styles.container}>
      <TransparentButton text="Back" handlePress={() => props.navigation.navigate("SplashScreen")}></TransparentButton>
      <View style={styles.login_header}>
        <Image style={styles.logo_login} source={images.logo}></Image>
        <Text style={styles.title}>MindScope</Text>
      </View>
      <KeyboardAvoidingView  style={styles.formContainer} behaviour="padding">
      <Text style={styles.form_header}>Login</Text>
      <View
       style={styles.inputContainer}
       >
        <TextInput 
          placeholder='Email' 
          value={email} 
          onChangeText={text => setEmail(text)} 
          style={styles.input}
          />
        <TextInput 
          placeholder='Password'
          value={password}  
          onChangeText={text=>setPassword(text)} 
          style={styles.input}
          secureTextEntry/>
      </View>

      <View style={styles.buttonContainer}> 
        <OrangeButton text="Login"/>
      </View>

      <View style={styles.signupConatiner}>
          <Text style={styles.signup_prompt}>New Here?</Text>
          <TransparentButton text="Sign Up" handlePress={() => props.navigation.navigate("Signup")}></TransparentButton>
        </View>
    </KeyboardAvoidingView>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: COLORS.white,
  },
  login_header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'center',
    marginTop: '30%',
    // borderColor: 'red', 
    // borderWidth: 1,
  },
  logo_login: {
    width: 50,
    height: 50,
    marginRight: 10,
    // borderColor: 'red', borderWidth: 1
  },
  title:{
    fontSize: 25,
    fontFamily: FONT.CrimsonPro,
    // borderColor: 'red', borderWidth: 1
  },
  form_header:{
    alignSelf: 'flex-start', 
    marginLeft: 45, 
    fontSize: 16, 
    marginBottom: '2%', 
    fontFamily: FONT.Oxygen
  },
  formContainer: {
    flex:1,
    alignItems:'center',
    backgroundColor: COLORS.white,
    marginTop: '18%',
    //borderColor: 'red', borderWidth: 1
  },
  inputContainer: {
    width: '80%',
  },
  input:{
    backgroundColor: "#e6e6e6",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    width: '80%',
    ...SHADOWS.medium,
  },
  buttonOutline: {

  },
  signupConatiner: {
    flexDirection: 'row',
    marginTop: '5%',
    //borderColor: 'red', borderWidth: 1
  },
  signup_prompt: {
    marginRight:5,
    fontFamily: FONT.Oxygen
  }
})

export default Login

