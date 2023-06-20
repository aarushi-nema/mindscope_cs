import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from "react-native";
import { COLORS, FONT } from "../../constants/theme";
import { Video, ResizeMode } from 'expo-av';

//icons
import back from "../../assets/icons/back.png";
import React, { useEffect, useState } from "react";

const VideoPage = ({ route, navigation }) => {
  const { data } = route.params;
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({})

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Video Explore")}>
        <Image source={back} style={styles.backIcon}></Image>
      </TouchableOpacity>
      <View style={styles.dateheader}>
        <Text style={styles.date}>{data.datePublished}</Text>
        <Text style={styles.date}>|</Text>
        <Text style={styles.date}>{data.category}</Text>
      </View>
      <Text style={styles.Heading1}>{data.title}</Text>
      <Text style={styles.author}>Created by {data.author}</Text>

      <View style={styles.videoView}>
      <Video
        ref={video}
        style={styles.video}
        source={{uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      </View>
    </View>
  );
};

export default VideoPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 28,
    paddingTop: 10,
  },
  Heading1: {
    fontFamily: FONT.CrimsonPro_SemiBold,
    fontSize: 23,
    marginTop: 7,
  },
  Heading2: {
    fontFamily: FONT.CrimsonPro,
    fontSize: 22,
    marginTop: 10,
  },
  backIcon: {
    height: 30,
    width: 30,
  },
  dateheader: {
    flexDirection: "row",
  },
  date: {
    fontFamily: FONT.Oxygen,
    marginTop: 20,
    fontSize: 12,
    opacity: 0.5,
    marginRight: 10,
  },
  author: {
    fontFamily: FONT.Oxygen,
    fontSize: 14,
    marginVertical: 6,
  },
  videoView: {
    width: "100%",
    height: 270,
    marginTop: 10,
    borderRadius: 10,
  },
  video: {
    flex: 1,
    alignSelf: 'stretch',
  },
  buttons: {
    margin: 16
  }
});
