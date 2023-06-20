import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS, FONT, SHADOWS } from "../../constants/theme";
import axios from "axios";
import Carousel, { Pagination } from "react-native-snap-carousel";

//Components
import ExploreButton from "../../components/ExploreButton";
import NotificationButton from "../../components/NotificationButton";
import HomeLearningCard from "../../components/HomeLearningCard";
import HomeToolkitCard from "../../components/HomeToolkitCard";

const CardSet = ({ data }) => {
  return (
    <ScrollView horizontal>
      {data.map((item, index) => (
        <HomeToolkitCard
          title={item.quizName}
          description={item.description}
          imageUrl={item.img}
          buttonText="Read Now"
        />
      ))}
    </ScrollView>
  );
};

const Home = ({ props, navigation }) => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  const [learningData, setLearningData] = useState([]); // Store the fetched data
  useEffect(() => {
    getLatestArticles(); // Fetch the data when the component mounts
  }, []);

  const getLatestArticles = async () => {
    try {
      const response = await axios.get(
        "http://192.168.0.104:3000/latest_content"
      );
      const resources = response.data.resources; // Get the resources array
      const extractedObjects = resources.map((resource) => ({
        contentId: resource.contentId,
        title: resource.title,
        author: resource.author,
        category: resource.category,
        content: resource.content,
        datePublished: resource.datePublished,
        numViews: resource.numViews,
        type: resource.type,
        imageUrl: resource.imageUrl,
      }));
      setLearningData(extractedObjects); // Update the state with the extracted objects
    } catch (error) {
      console.error("Error fetching latest articles:", error);
    }
  };


  const [toolkitData, setToolkitData] = useState([]); // Store the fetched data
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
      console.error("Error fetching latest articles:", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/*<TouchableOpacity onPress={()=>{navigation.navigate("Login")}}><Text>Logout</Text></TouchableOpacity> */}
      <Text style={styles.Heading1}>Home</Text>
      <View>
        <Text style={styles.Heading2}>Daily Notifications</Text>
        <View style={styles.buttonContainer}>
          <NotificationButton
            text="Complete your daily journal"
            handlePress={() => navigation.navigate("Journal")}
          ></NotificationButton>
        </View>
        <View style={styles.buttonContainer}>
          <NotificationButton text="Complete your daily questionnaire"></NotificationButton>
        </View>
      </View>

      <View style={styles.learningContentContainer}>
        <View style={styles.learningHeader}>
          <Text style={styles.Heading2}>Learning Content</Text>
          <View style={styles.exploreButtonConatiner}>
            <ExploreButton
              text="Explore"
              handlePress={() =>
                navigation.navigate("Learning Collection")
              }
            ></ExploreButton>
          </View>
        </View>

        <View>
          <Carousel
            layout="default"
            data={learningData}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <HomeLearningCard
                  image={item.imageUrl}
                  title={item.title}
                  type={item.type}
                  navigation={navigation}
                  btnText="Read Now"
                ></HomeLearningCard>
              </View>
            )}
            sliderWidth={370} // Set the width of the carousel container
            itemWidth={500} // Set the width of each item
            onSnapToItem={(index) => setIndex(index)}
            useScrollView={true}
          />
          <Pagination
            dotsLength={learningData.length}
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
      </View>

      <View style={styles.toolkitsContainer}>
        <View style={styles.learningHeader}>
          <Text style={styles.Heading2}>ToolKits</Text>
          <View style={styles.exploreButtonConatiner}>
            <ExploreButton
              text="Explore"
              handlePress={() => navigation.navigate("ToolKitExplore")}
            ></ExploreButton>
          </View>
        </View>
        <CardSet data={toolkitData} navigation={navigation} />
      </View>
  
    </ScrollView>
  );
};

export default Home;

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
  },
  Heading2: {
    fontFamily: FONT.CrimsonPro,
    fontSize: 22,
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 15,
    width: "100%",
    ...SHADOWS.small,
  },
  exploreButtonConatiner: {
    width: "20%",
    ...SHADOWS.small,
    justifyContent: "flex-end",
  },
  learningContentContainer: {
    marginTop: 20,
  },
  learningHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  toolkitsContainer: {
    marginBottom: 60,
  },
  learningContainer: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    width: 370, // Adjust the item width as per your requirements
    height: 250, // Adjust the item height as per your requirements
  },
  popularContainer: {
    width: 300, // Adjust the item width as per your requirements
    height: 250, // Adjust the item height as per your requirements
  },
});
