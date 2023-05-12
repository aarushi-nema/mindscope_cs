import { KeyboardAvoidingView, TextInput, Text, View, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native'
//import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState } from 'react'
import OrangeButton from '../../components/OrangeButton'
import TransparentButton from '../../components/TransparentButton'
import images from '../../constants/images'
import { COLORS, FONT, SHADOWS } from '../../constants/theme'
import DatePicker from 'react-native-modern-datepicker'; 
import { getToday, getFormatedDate } from 'react-native-modern-datepicker'
import {IP} from "@env"

const Signup = (props) => {
  const [selectedItem, setSelectedItem] = useState('Gender');
  const [openDate, setOpenDate] = useState(true);
  const [date, setDate] = useState(false);
  const items = [
    {label: 'Female', value: 'Female'},
    {label: 'Male', value: 'Male'},
    {label: 'Others', value: 'Others'},
    {label: 'I Prefer Not To Say', value: 'null'},
  ];
  
  const today = new Date();
  const startDate = getFormatedDate(today.setDate(today.getDate()+1), 'YYYY/MM/DD');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleDOBButton(){
    setOpenDate(!openDate)
  }

  function handleDateChange(propDate){
    setDate(propDate)
  }

  const [fdata, setFdata] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
    dob: '',
    gender: ''
  });

  const [errormsg, setErrormsg] = useState(null);

  const sendToBackend = () => {
    //console.log(fdata)
    if (fdata.name == '' || fdata.email == '' || fdata.password == '' || fdata.cpassword == '' ) {
          setErrormsg('All fields are required');
          return;
        }
    else {
      if(fdata.password != fdata.cpassword){
        setErrormsg('Passwords do not match');
        return;
      } 
      else {
        fetch(`http://${IP}:3000/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(fdata)
        }).then(res=>res.json()).then(
          data=>{
            // console.log(data);
            if(data.error) {
              setErrormsg(data.error);
            }
            else{
              alert('Account Created Successfully')
              props.navigation.navigate("Login")
            }
          }
        )
      }
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
      <Text style={styles.form_header}>Sign Up</Text>
      {
        errormsg ? <Text style={styles.errormsg}>{errormsg}</Text> : null
      }
      <View
       style={styles.inputContainer}
       >
        <TextInput 
          placeholder='Full Name' 
          //value={} 
          onChangeText={(text)=> setFdata({...fdata, name:text})} 
          style={styles.input}
          onPressIn={()=> setErrormsg(null)}
          />
          {/* <TextInput 
          placeholder='UserName' 
          // value={} 
          // onChangeText={()=>{}} 
          style={styles.input}
          /> */}
        <TextInput 
          placeholder='Email' 
          //value={email} 
          onChangeText={(text) => setFdata({...fdata, email:text})} 
          style={styles.input}
          onPressIn={()=> setErrormsg(null)}
          />
        <TextInput 
          placeholder='Password' 
          //value={password} 
          onChangeText={(text) => setFdata({...fdata, password:text})} 
          style={styles.input}
          onPressIn={()=> setErrormsg(null)}
          secureTextEntry/>
          <TextInput 
          placeholder='Confirm Password' 
          //value={password} 
          onChangeText={(text) => setFdata({...fdata, cpassword:text})} 
          style={styles.input}
          onPressIn={()=> setErrormsg(null)}
          secureTextEntry/>
          {/* <TextInput 
          placeholder='Date of Birth YYYY/MM/DD' 
          //value={password} 
          onChangeText={(text) => setFdata({...fdata, dob:text})} 
          onPressIn={()=> setErrormsg(null)}
          style={styles.input}
          />
          <TextInput 
          placeholder='Gender (F/M/Others)' 
          onChangeText={(text)=> setFdata({...fdata, gender:text})} 
          onPressIn={()=> setErrormsg(null)}
          // value={} 
          style={styles.input}
          /> */}
          {/* 

          <TouchableOpacity style={styles.dateButton} onPress={handleDOBButton}>
              <Text>Date of Birth</Text>
          </TouchableOpacity>

          <Modal animationType='slide' transparent={true} visible={openDate}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <DatePicker
                  mode='calendar'
                  selected={date}
                  onDateChange={handleDateChange}
                  minimumDate=''
                  onSelectedChange={date => setSelectedDate(date)}
                />
                <TouchableOpacity style={styles.dateButton} onPress={handleDOBButton}>
                  <Text>Done</Text>
                </TouchableOpacity>
              </View>
              </View>
          </Modal>

          <TextInput 
            placeholder='Location'
            // onChangeText={()=>{}} 
            // value={} 
            style={styles.input}
            secureTextEntry/>

          <TextInput 
            placeholder='Occupation'
            // onChangeText={()=>{}} 
            // value={} 
            style={styles.input}
            secureTextEntry/> */}

      </View>

      <View style={styles.buttonContainer}> 
        <OrangeButton text="Sign Up" handlePress={() => {sendToBackend()}}/>
      </View>

      <View style={styles.signupConatiner}>
          <Text style={styles.signup_prompt}>Already have an account?</Text>
          <TransparentButton text="Login" handlePress={() => props.navigation.navigate("Login")}></TransparentButton>
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
    marginTop: '15%',
    // borderColor: 'red', borderWidth: 1,
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
    marginTop: '6%',
    // borderColor: 'red', borderWidth: 1
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
  signupConatiner: {
    flexDirection: 'row',
    marginTop: '5%',
    //borderColor: 'red', borderWidth: 1
  },
  signup_prompt: {
    marginRight:5,
    fontFamily: FONT.Oxygen
  },
  dateButton:{
    backgroundColor: "#e6e6e6",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20
  },
  centeredView: {
    fles:1,
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    padding: 35,
    alignItems: 'center',
    ...SHADOWS.medium
  },
  errormsg: {
    color: 'red',
    fontFamily: FONT.Oxygen
  }
})

export default Signup

