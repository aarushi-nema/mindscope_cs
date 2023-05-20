import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONT, SIZES, SHADOWS } from '../../constants/theme'

//icons
import search from '../../assets/icons/search.png'

//Images
import biasImg2 from '../../assets/images/bias_image2.jpg';
import biasImg3 from '../../assets/images/bias_image3.png';
import biasImg4 from '../../assets/images/bias_image4.jpg';

//Components
import ExploreButton from '../../components/ExploreButton'
import HomeToolkitCard from '../../components/HomeToolkitCard'

const CardSet = ({ data }) => {
  return (
    <ScrollView horizontal>
      {data.map((item, index) => (
        <HomeToolkitCard title={item.title} description={item.description} imageUrl={item.image} />
      ))}
    </ScrollView>
  );
};

const CategoryCard = ({data}) => {
  return(
    <ScrollView horizontal>
      {data.map((item, index) => (
        <TouchableOpacity key={index} style={styles.categoryButton}>
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
};

const ToolKitsExplore = () => {
  const toolkitTitles= ['Bias Bash', 'Pink or Blue?', 'Follow the flock']
  const toolkitDescriptions= ['Challenge your biases by identifying and questioning your assumptions about...','Think beyond traditional gender stereotypes and biases, and explore the...','Question your tendency to conform to social norms and encourages...']
  const toolkitImages= [biasImg2, biasImg3, biasImg4]
  const toolkitCards = toolkitTitles.map((title, index) => ({
    title,
    description: toolkitDescriptions[index],
    image: toolkitImages[index],
  }));
  const categories = ['Gender Bias', 'Halo Effect', 'Ageism Bias', 'Beauty Bias', 'Horns Effect']
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.Heading1}>ToolKits</Text>

      {/* Search */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={()=>{}}
            placeholder='Search for ToolKits'></TextInput>
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image 
            source={search}
            resizeMode="contain"
            style={styles.searchBtnImage}></Image>
        </TouchableOpacity>
      </View>

      {/* Popular ToolKits */}
       <View style={styles.toolkitsContainer}>
        <View style={styles.learningHeader}>
          <Text style={styles.Heading2}>Popular ToolKits</Text>
          <View style={styles.exploreButtonConatiner}>
            <ExploreButton text="View More"></ExploreButton>
          </View>
        </View>

        {/* <HomeToolkitCard imageUrl={biasImg2} title="Bias Bash" description="Challenge your biases by identifying and questioning your assumptions about..."></HomeToolkitCard> */}
        <CardSet data={toolkitCards} />
     </View>

     {/* Explore Categories */}
     <View>
      <Text style={styles.Heading2}>Explore</Text>
      <View style={styles.categoryCard}>
        <CategoryCard data={categories}></CategoryCard>
      </View>
     </View>

     {/* For You ToolKits */}
       <View style={styles.toolkitsContainer}>
        <View style={styles.learningHeader}>
          <Text style={styles.Heading2}>For You</Text>
          <View style={styles.exploreButtonConatiner}>
            <ExploreButton text="View More"></ExploreButton>
          </View>
        </View>

        {/* <HomeToolkitCard imageUrl={biasImg2} title="Bias Bash" description="Challenge your biases by identifying and questioning your assumptions about..."></HomeToolkitCard> */}
        <CardSet data={toolkitCards} />
     </View>
    </ScrollView>
  )
}

export default ToolKitsExplore

const styles = StyleSheet.create({
    container: {
    flex:1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
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
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.grey,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: "100%",
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
  toolkitsContainer: {
    marginTop: 20,
  },
  learningHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  exploreButtonConatiner: {
    width: '23%',
    ...SHADOWS.small,
    justifyContent: 'flex-end'
  },
  categoryButton: {
    width: 70,
    height: 70,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: COLORS.grey,
    padding: 10, 
    marginRight: 10
  },
  categoryCard: {
    marginTop: 16
  }
})