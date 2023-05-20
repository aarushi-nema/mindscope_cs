import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONT, SHADOWS } from '../../constants/theme'

//Images
import user_image from '../../assets/images/user_image.jpg'

//components
import OrangeButton from '../../components/OrangeButton'

const UserProfile = () => {
  const user_name="Julie Adams";
  const occupation = "Product Manager, ABC Corporation";
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.Heading1}>Profile</Text>

      <View style={styles.userInfoContainer}>
        <Image 
        source={user_image}
        style={styles.userImg}/>
        <Text style={styles.userName}>{user_name}</Text>
        <Text style={styles.occupation}>{occupation}</Text>
        <View style={styles.buttonContainer}> 
        <OrangeButton text="Edit Profile"/>
      </View>
      </View>      
    </ScrollView>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 28,
    paddingTop: 10,
  },
  Heading1: {
    fontFamily: FONT.CrimsonPro,
    fontSize: 27
  },
  Heading2: {
    fontFamily: FONT.CrimsonPro,
    fontSize: 22,
    marginTop: 10
  },
  userImg: {
    width: 80,
    height: 80,
    borderRadius: 75,
  },
  userName: {
    fontFamily: FONT.CrimsonPro_SemiBold,
    fontSize: 20,
    marginTop: 10
  },
  occupation: {
    fontFamily: FONT.Oxygen,
    fontSize: 15,
    opacity: 0.55,
    marginTop: 5
  },
  userInfoContainer: {
    alignItems: 'center',
    marginTop: 25
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '35%',
    ...SHADOWS.medium,
  },
})