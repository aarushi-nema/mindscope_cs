import { KeyboardAvoidingView, TextInput, Text, View, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import OrangeButton from '../../components/OrangeButton'
import TransparentButton from '../../components/TransparentButton'
import images from '../../constants/images'
import { COLORS, FONT, SHADOWS } from '../../constants/theme'

const Login = (props) => {
  const [fdata, setFdata] = useState({
    email: '',
    password: ''
  })
  const [errormsg, setErrormsg] = useState(null)

  const sendToBackend = () => {
    // console.log(fdata);
    if (fdata.email == '' || fdata.password == '') {
      setErrormsg('All fields are required');
      return;
    }
    else {
      // console.log('http://' + process.env.IP + ':3000/signup')
      fetch('http://192.168.0.103:3000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fdata)
      }).then(res=>res.json()).then(
        data => {
          // console.log(data)
          if(data.error) {
            setErrormsg(data.error);
          }
          else{
            alert('Login Successfully')
            props.navigation.navigate("Home")
          }
        }
      )
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <TransparentButton text="Back" handlePress={() => props.navigation.navigate("SplashScreen")}></TransparentButton>
      </View>
  
      <View style={styles.login_header}>
        <Image style={styles.logo_login} source={images.logo}></Image>
        <Text style={styles.title}>MindScope</Text>
      </View>
      <KeyboardAvoidingView  style={styles.formContainer} behaviour="padding">
      <Text style={styles.form_header}>Login</Text>
      {
        errormsg ? <Text style={styles.errormsg}>{errormsg}</Text> : null
      }
      <View
       style={styles.inputContainer}
       >
        <TextInput 
          placeholder='Email' 
          //value={email} 
          onChangeText={(text) => setFdata({...fdata, email:text})}  
          style={styles.input}
          />
        <TextInput 
          placeholder='Password'
          //value={password}  
          onChangeText={(text) => setFdata({...fdata, password:text})} 
          style={styles.input}
          secureTextEntry/>
      </View>

      <View style={styles.buttonContainer}> 
        <OrangeButton text="Login" handlePress={() => {sendToBackend()}}/>
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
  backButton: {
    marginTop: '18%',
    alignSelf: 'flex-start',
    marginLeft: 45,
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
  },
  errormsg: {
    color: 'red',
    fontFamily: FONT.Oxygen
  }
})

export default Login

