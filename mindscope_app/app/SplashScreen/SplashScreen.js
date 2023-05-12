import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS, FONT, SHADOWS } from '../../constants/theme';
import images from '../../constants/images'
import OrangeButton from '../../components/OrangeButton'

const SplashScreen = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.logo_title}>
                <Image style={styles.logo} source={images.logo}></Image>
                <Text style={styles.title}>MindScope</Text>
            </View>
            <Text style={styles.tagline}>Discover your biases, broaden your perspective.</Text>
            <View style={styles.buttonHolder}></View>
                <View style={styles.buttonContainer}> 
                    <OrangeButton text="Login" handlePress={() => props.navigation.navigate("Login")}/>
                </View>
                <View style={styles.buttonContainer}> 
                    <OrangeButton text="Sign Up" handlePress={() => props.navigation.navigate("Signup")}/>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo_title: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        justifyContent: 'center',
        marginTop: '40%',
        // borderColor: 'red', 
        // borderWidth: 1,
    },
    logo: {
        width: 90,
        height: 90,
        marginRight: 10,
    },
    title: {
        fontSize: 40,
        fontFamily: FONT.CrimsonPro,
    },
    tagline: {
        justifyContent: 'center',
        fontFamily: FONT.CrimsonPro,
        alignItems: 'center',
        fontSize: 17
    },
    buttonHolder: {
        marginTop: 250,
        marginBottom: 50
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        width: '80%',
        ...SHADOWS.medium,
      },
})

export default SplashScreen;