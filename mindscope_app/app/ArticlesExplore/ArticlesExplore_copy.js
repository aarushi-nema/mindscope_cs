import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, FONT, SIZES, SHADOWS } from "../../constants/theme";
import Carousel, { Pagination } from "react-native-snap-carousel";
import axios from "axios";

//Icons
import search from "../../assets/icons/search.png";

//Images
import biasImg2 from '../../assets/images/bias_image2.jpg';
import biasImg3 from '../../assets/images/bias_image3.png';
import biasImg4 from '../../assets/images/bias_image4.jpg';


//Components
import HomeLearningCard from "../../components/HomeLearningCard";
import HomeToolkitCard from "../../components/HomeToolkitCard";
import LatestItem from "../../components/LatestItem";

const recommendedArticles= ['Unbiased Views in the Digital Age: Navigating the Era of Fake News', 'Navigating Unbiased Views: A Guide for Critical Thinkers', 'Unveiling Bias: How to Identify and Overcome Preconceived Notions']
const toolkitImages= [biasImg2, biasImg3, biasImg4]
const toolkitCards = recommendedArticles.map((title, index) => ({
    title,
    image: toolkitImages[index],
  }));

const LatestCardSet = ({ data, navigation }) => {
  return (
    <ScrollView style={styles.latestContainer}>
      {data.map((item,index) => (
        <LatestItem imageUrl={item.imageUrl} title={item.title} date={item.datePublished} contentObject={item} navigation={navigation}></LatestItem>
      ))}
    </ScrollView>
  )
}

const CardSet = ({ data }) => {
  return (
    <ScrollView horizontal style={styles.recommendedContainer}>
      {data.map((item, index) => (
        <HomeToolkitCard title={item.title} buttonText="Read Now" imageUrl={item.image} />
      ))}
    </ScrollView>
  );
};


const ArticlesExplore = ({props, navigation}) => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  const [learningData, setLearningData] = useState([]);
  const [popularArticles, setPopularArticles] = useState([]);
  const [latestArticles, setLatestArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedArticles, setSearchedArticles] = useState([]);

  useEffect (() => {
    getPopularArticles();
    getLatestArticles();
  }, []);

  const getPopularArticles = async () => {
    try {
      const response = await axios.get("http://10.91.50.99:3000/popular_articles");
      const resources = response.data.resources;
      const extractedObjects = resources.map((resource) => {
        const datePublished = new Date(resource.datePublished);
        return {
          contentId: resource.contentId,
          title: resource.title,
          author: resource.author,
          category: resource.category,
          content: resource.content,
          datePublished: datePublished.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }),
          numViews: resource.numViews,
          type: resource.type,
          imageUrl: resource.imageUrl,
        };
      });
      setPopularArticles(extractedObjects);
    } catch (error) {
      console.error("Error fetching popular articles:", error);
    }
  }

  const getLatestArticles = async () => {
    try {
      const response = await axios.get("http://10.91.50.99:3000/latest_articles");
      const resources = response.data.resources;
      const extractedObjects = resources.map((resource) => {
        const datePublished = new Date(resource.datePublished);
        return {
          contentId: resource.contentId,
          title: resource.title,
          author: resource.author,
          category: resource.category,
          content: resource.content,
          datePublished: datePublished.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }),
          numViews: resource.numViews,
          type: resource.type,
          imageUrl: resource.imageUrl,
        };
      });
      setLatestArticles(extractedObjects);
    } catch (error) {
      console.error("Error fetching latest articles:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get("http://10.91.50.99:3000/search_article", {
        params: { searchTerm },
      });
      //const searchedArticles = response.data;
      // Process the searchedArticles data as needed
      const resources = response.data;
      const extractedObjects = resources.map((resource) => {
        const datePublished = new Date(resource.datePublished);
        return {
          contentId: resource.contentId,
          title: resource.title,
          author: resource.author,
          category: resource.category,
          content: resource.content,
          datePublished: datePublished.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }),
          numViews: resource.numViews,
          type: resource.type,
          imageUrl: resource.imageUrl,
        };
      });
      setSearchedArticles(extractedObjects)
      console.log(searchedArticles);
    } catch (error) {
      console.error("Error searching articles:", error);
    }
  };

  const searchType = async(searchedTerm) => {
    setSearchTerm(searchedTerm)
    handleSearch()
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.Heading1}>Articles</Text>
      {/* Search */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={setSearchTerm}
            placeholder="Search for Content"
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <Image
            source={search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          ></Image>
        </TouchableOpacity>
      </View>

      {searchTerm.length > 0 ? ( <View>
        <Text style={styles.Heading2}>Latest</Text>
        <LatestCardSet data={searchedArticles} navigation={navigation}></LatestCardSet>
      </View>) : (
      
      // Popular 
      <View>
      <View style={styles.popularContainer}>
      <Text style={styles.Heading2}>Popular</Text>
      <Carousel
        layout="default"
        data={popularArticles}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <HomeLearningCard
              image={item.imageUrl}
              title={item.title}
              type={item.type}
              navigation={navigation}
              btnText="Read Now"
              contentObject={item}
              navigateTo={"Article Page"}
            ></HomeLearningCard>
          </View>
        )}
        sliderWidth={370} 
        itemWidth={500}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={popularArticles.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          marginHorizontal: 0,
          marginTop: -7,
          backgroundColor: "rgba(0, 0, 0, 0.92)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>

    {/* //Recommended */}
    <View>
      <Text style={styles.Heading2}>Articles for you</Text>
      <CardSet data={toolkitCards} />
    </View>

     {/* //Latest */}
     <View>
      <Text style={styles.Heading2}>Latest</Text>
      <LatestCardSet data={latestArticles} navigation={navigation}></LatestCardSet>
    </View>
    </View>
      )}
    </ScrollView>
  );
};

export default ArticlesExplore;

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
  popularContainer: {
    marginBottom: 1
  },
  latestContainer: {
    marginTop: 15
  },
  recommendedContainer: {
    marginBottom: 20
  },
  item: {
    width: 370, // Adjust the item width as per your requirements
    height: 250, // Adjust the item height as per your requirements
  },
});
