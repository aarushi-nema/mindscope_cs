import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, FONT, SHADOWS } from "../constants/theme";

const HomeToolkitCard = (props) => {
  return (
    <View onPress={props.onPress} style={styles.container}>
      <Image source={{ uri: props.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <Text style={styles.buttonText}>{props.buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey,
    borderRadius: 10,
    elevation: 4,
    marginVertical: 8,
    width: 210,
    marginTop: 13,
    marginRight: 12,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 150,
    resizeMode: "cover",
    width: "100%",
  },
  textContainer: {
    padding: 13,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 2,
    marginLeft: 3,
    fontFamily: FONT.CrimsonPro_SemiBold,
  },
  description: {
    fontSize: 13,
    fontFamily: FONT.Oxygen,
    marginLeft: 3
  },
  btnContainer: {
    ...SHADOWS.small,
  },
  button: {
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
    width: "50%",
  },
  buttonText: {
    fontSize: 13,
    fontFamily: FONT.Oxygen,
  },
});

export default HomeToolkitCard;
