import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { COLORS, FONT } from '../../constants/theme';

//icons
import back from '../../assets/icons/back.png';


const ArticlePage = ({ route, navigation }) => {
  const { data } = route.params;
  
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Article Explore")}>
            <Image source={back} style={styles.backIcon}></Image>
        </TouchableOpacity>
        <View style={styles.dateheader}>
            <Text style={styles.date}>{data.datePublished}</Text>
            <Text style={styles.date}>|</Text>
            <Text style={styles.date}>{data.category}</Text>
        </View>
      <Text style={styles.Heading1}>{data.title}</Text>
      <Text style={styles.author}>Written by {data.author}</Text>
      <Image source={{ uri: data.imageUrl }} style={styles.articeImg}></Image>
      <Text style={styles.articleContent}>{data.content}</Text>
    </ScrollView>
  );
};

export default ArticlePage

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 28,
        paddingTop: 10,
      },
      Heading1: {
        fontFamily: FONT.CrimsonPro_SemiBold,
        fontSize: 23,
        marginTop: 7
      },
      Heading2: {
        fontFamily: FONT.CrimsonPro,
        fontSize: 22,
        marginTop: 10
      },
      backIcon: {
        height: 30,
        width: 30
      },
      date: {
        fontFamily: FONT.Oxygen,
        marginTop: 20,
        fontSize: 12,
        opacity: 0.5,
        marginRight: 10
      },
      dateheader: {
        flexDirection: 'row'
      },
      articeImg: {
        width: '100%',
        marginTop: 10,
        height: 250
      },
      articleContent: {
        fontFamily: FONT.Oxygen,
        fontSize: 15,
        marginTop: 25,
        textAlign: 'auto',
        lineHeight: 25,
        marginBottom: 80
      },
      author: {
        fontFamily: FONT.Oxygen,
        fontSize: 14,
        marginVertical: 6
      }
})