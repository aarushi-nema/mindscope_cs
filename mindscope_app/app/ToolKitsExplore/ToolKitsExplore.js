import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { COLORS, FONT, SIZES, SHADOWS } from '../../constants/theme'
import axios from "axios";

//icons
import search from '../../assets/icons/search.png'

//Components
import ExploreButton from '../../components/ExploreButton'
import HomeToolkitCard from '../../components/HomeToolkitCard'

const CardSet = ({ data }) => {
  return (
    <ScrollView horizontal>
      {data.map((item, index) => (
        <HomeToolkitCard
          title={item.quizName}
          description={item.description}
          imageUrl={item.img}
          buttonText="Open Quiz"
        />
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

const ToolKitsExplore = ({navigation}) => {
  const [toolkitData, setToolkitData] = useState([]);
  const [biasNames, setBiasNames] = useState([]);

  useEffect(() => {
    getPopularToolkits(); // Fetch the data when the component mounts
  }, []);

  const getPopularToolkits = async () => {
    try {
      const response = await axios.get(
        "http://192.168.0.104:3000/popular_toolkits"
      );
      const resources = response.data.resources; // Get the resources array
      const extractedObjects = resources.map((resource) => ({
        quizId: resource.quizId,
        quizName: resource.quizName,
        description: resource.description,
        category: resource.category,
        type: resource.type,
        numViews: resource.numViews,
        img: resource.img,
      }));
      setToolkitData(extractedObjects); // Update the state with the extracted objects
    } catch (error) {
      console.error("Error fetching popular toolkits:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.0.104:3000/biases');
        const data = response.data;
  
        const names = data.resources.map(resource => resource.biasName);
  
        setBiasNames(names);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    
  }, []);
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

      {/* Categories */}
      <ScrollView horizontal contentContainerStyle={styles.biasNameContainer}>
        {biasNames.map((name, index) => (
          <Text key={index} style={styles.biasNameItem}>{name}</Text>
        ))}
      </ScrollView>

      {/* Popular ToolKits */}
      <View style={styles.toolkitsContainer}>
        <View style={styles.learningHeader}>
          <Text style={styles.Heading2}>Popular ToolKits</Text>
          <View style={styles.exploreButtonConatiner}>
            <ExploreButton
              text="Explore"
              handlePress={() => navigation.navigate("ToolKitExplore")}
            ></ExploreButton>
          </View>
        </View>
        <CardSet data={toolkitData} navigation={navigation} />
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
        {/* <CardSet data={toolkitCards} /> */}
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
    marginTop: 15
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
  },
  biasNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  biasNameItem: {
    padding: 5,
    marginRight: 10, 
    fontFamily: FONT.Oxygen,
    borderRadius: 10, // Add border radius
    borderWidth: 2, // Add border width if desired
    borderColor: COLORS.grey, // Add border color if desired
  }
})