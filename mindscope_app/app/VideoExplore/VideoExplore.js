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
  
  const LatestCardSet = ({ data }) => {
    return (
      <ScrollView style={styles.latestContainer}>
        {data.map((item,index) => (
          <LatestItem imageUrl={item.imageUrl} title={item.title} date={item.datePublished}></LatestItem>
        ))}
      </ScrollView>
    )
  }
  
  const CardSet = ({ data }) => {
    return (
      <ScrollView horizontal style={styles.recommendedContainer}>
        {data.map((item, index) => (
          <HomeToolkitCard title={item.title} buttonText="Watch Now" imageUrl={item.image} />
        ))}
      </ScrollView>
    );
  };
  
  
  const VideosExplore = ({props, navigation}) => {
    const [index, setIndex] = React.useState(0);
    const isCarousel = React.useRef(null);
    const [popularVideos, setPopularVideos] = useState([]);
    const [latestVideos, setLatestVideos] = useState([]);
  
    useEffect (() => {
      getPopularVideos();
      getLatestVideos();
    }, []);
  
    const getPopularVideos = async () => {
      try {
        const response = await axios.get("http://172.20.10.3:3000/popular_videos");
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
        setPopularVideos(extractedObjects);
      } catch (error) {
        console.error("Error fetching popular Videos:", error);
      }
    }
  
    const getLatestVideos = async () => {
      try {
        const response = await axios.get("http://172.20.10.3:3000/latest_videos");
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
        setLatestVideos(extractedObjects);
      } catch (error) {
        console.error("Error fetching latest videos:", error);
      }
    };
    
  
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.Heading1}>Videos</Text>
        {/* Search */}
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value=""
              onChange={() => {}}
              placeholder="Search for Videos"
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
  
        {/* Popular */}
        <View style={styles.popularContainer}>
          <Text style={styles.Heading2}>Popular</Text>
          <Carousel
            layout="default"
            data={popularVideos}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <HomeLearningCard
                  image={item.imageUrl}
                  title={item.title}
                  type={item.type}
                  navigation={navigation}
                  btnText="Watch Now"
                  contentObject={item}
                  navigateTo={"Video Page"}
                ></HomeLearningCard>
              </View>
            )}
            sliderWidth={370} // Set the width of the carousel container
            itemWidth={500} // Set the width of each item
            onSnapToItem={(index) => setIndex(index)}
            useScrollView={true}
          />
          <Pagination
            dotsLength={popularVideos.length}
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
  
        {/* Recommended */}
        <View>
          <Text style={styles.Heading2}>Articles for you</Text>
          <CardSet data={toolkitCards} />
        </View>
  
         {/* Latest */}
         <View>
          <Text style={styles.Heading2}>Latest</Text>
          <LatestCardSet data={latestVideos}></LatestCardSet>
        </View>
      </ScrollView>
    );
  };
  
  export default VideosExplore;
  
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
  