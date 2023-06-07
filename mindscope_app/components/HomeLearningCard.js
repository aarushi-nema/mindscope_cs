import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { FONT, COLORS, SHADOWS } from '../constants/theme';

const HomeLearningCard = (props) => {
  return (
    <View style={styles.card}>
      <ImageBackground style={styles.image} source={{ uri: props.image}} opacity={0.5}>
        <Text style={styles.category}>{props.type}</Text>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Article Page")}>
                <Text style={styles.buttonText}>Read Now</Text>
            </TouchableOpacity> 
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: 230,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    padding: 20
  },
  category:{
    fontFamily: FONT.Oxygen
  },
  title: {
    fontSize: 24,
    fontFamily: FONT.CrimsonPro_SemiBold,
    marginBottom: 10,
  },
  buttonContainer: {
    width: '32%',
    ...SHADOWS.small,
  },
  button: {
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '100%'
  },
  buttonText: {
    fontFamily: FONT.Oxygen
  },
});

export default HomeLearningCard;
