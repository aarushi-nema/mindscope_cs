import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React from 'react';
import { COLORS, FONT, SHADOWS, SIZES } from '../../constants/theme';
import { ScrollView } from 'react-native-gesture-handler';

//Icons
import search from "../../assets/icons/search.png";

//Images
import article from "../../assets/images/article.jpg";
import video from "../../assets/images/video.jpg";
import casestudy from "../../assets/images/case_study.png";

const CategoryCard = ({img, title, handlePress}) => {
  return(
    <View style={styles.collectionContainer}>
      <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <ImageBackground
        source={img}
        style={styles.btnImg}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
    </View>
    
)}

const LearningCollection = ({ props, navigation }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
    {/* Search */}
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          value=""
          onChange={() => {}}
          placeholder="Search for Content"
        ></TextInput>
      </View>
      <TouchableOpacity style={styles.searchBtn}>
        <Image
          source={search}
          resizeMode="contain"
          style={styles.searchBtnImage}
        ></Image>
      </TouchableOpacity>
    </View>

    <Text style={styles.Heading2}>Start Learning</Text>
    <CategoryCard img={article} title="Articles" handlePress={() => navigation.navigate("Article Explore")}></CategoryCard>
    <CategoryCard img={video} title="Videos" handlePress={() => navigation.navigate("Video Explore")}></CategoryCard>
    <CategoryCard img={casestudy} title="Case Studies"></CategoryCard>
    </ScrollView>
  )
}

export default LearningCollection

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 28,
    paddingTop: 10,
  },
  Heading1: {
    fontFamily: FONT.CrimsonPro,
    fontSize: 27,
    marginTop: 25,
  },
  Heading2: {
    fontFamily: FONT.CrimsonPro,
    fontSize: 22,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
    marginBottom: 20
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.grey,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: "100%"
  },
  searchInput: {
    fontFamily: FONT.Oxygen,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.crayola,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  btnContainer: {
    width: '100%',
    height: 40,
    backgroundColor: COLORS.white,
    marginTop: 20,
    borderRadius: 10,
    marginBottom: 10
  },
  btnImg: {
    width: '100%',
    height: 70,
    borderRadius: SIZES.small / 1.5,
    //opacity: 0.4
    
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
  marginBottom: 'auto',
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: FONT.CrimsonPro_Bold,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: '100%',
    paddingTop: 20,
    height: '100%'
  },
  collectionContainer: {
    marginBottom: 20,
  }
})