import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { COLORS, FONT, SIZES, SHADOWS } from "../../constants/theme";
import Carousel, { Pagination } from "react-native-snap-carousel";

//Icons
import search from "../../assets/icons/search.png";

//Images
import biasImg1 from "../../assets/images/bias_image1.jpg";
import biasImg2 from '../../assets/images/bias_image2.jpg';
import biasImg3 from '../../assets/images/bias_image3.png';
import biasImg4 from '../../assets/images/bias_image4.jpg';
import biasImg6 from "../../assets/images/bias_image6.jpg";
import biasImg7 from "../../assets/images/bias_image7.jpeg";
import biasImg8 from "../../assets/images/bias_image8.png";
import biasImg9 from "../../assets/images/bias_image9.jpg";

//Components
import HomeLearningCard from "../../components/HomeLearningCard";
import HomeToolkitCard from "../../components/HomeToolkitCard";
import LatestItem from "../../components/LatestItem";

const learningData = [
  {
    id: "1",
    img: biasImg1,
    type: "Article",
    title:
      "Unconscious Bias: A Barrier to Diversity and Inclusion in the Workplace",
  },
  {
    id: "2",
    img: biasImg6,
    type: "Article",
    title:
      "Understanding Unconscious Bias: Strategies for Overcoming Prejudice",
  },
  {
    id: "3",
    img: biasImg7,
    type: "Article",
    title: "The Hidden Consequences of Unconscious Bias in Hiring",
  },
  {
    id: "4",
    img: biasImg8,
    type: "Article",
    title: "How to Address Unconscious Bias in Performance Reviews",
  },
  {
    id: "5",
    img: biasImg9,
    type: "Article",
    title: "Breaking the Cycle of Unconscious Bias: Lessons from Neuroscience",
  },
];

const recommendedArticles= ['Unbiased Views in the Digital Age: Navigating the Era of Fake News', 'Navigating Unbiased Views: A Guide for Critical Thinkers', 'Unveiling Bias: How to Identify and Overcome Preconceived Notions']
const toolkitImages= [biasImg2, biasImg3, biasImg4]
const toolkitCards = recommendedArticles.map((title, index) => ({
    title,
    image: toolkitImages[index],
  }));


const latestArticles= [
  {
    id: '1',
    name: 'Seeking Truth: Embracing Unbiased Views for a Well-Rounded Perspective',
    image: biasImg1,
    date: '02 February 2023'
  },
  {
    id: '2',
    name: 'The Role of Unbiased Journalism in Fostering a Healthy Democracy',
    image: biasImg2,
    date: '16 January 2023'
  },
  {
    id: '3',
    name: 'Unbiased Views in the Digital Age: Navigating the Era of Fake News',
    image: biasImg3,
    date: '02 January 2023'
  },
  {
    id: '4',
    name: 'The Power of Unbiased Reporting: Separating Fact from Fiction',
    image: biasImg4,
    date: '28 December 2022'
  },
  {
    id: '5',
    name: 'The Importance of Unbiased Views in Today\'s Media Landscape',
    image: biasImg6,
    date: '20 December 2022'
  },
];

const LatestCardSet = ({ data }) => {
  return (
    <ScrollView style={styles.latestContainer}>
      {data.map((item,index) => (
        <LatestItem imageUrl={item.image} title={item.name} date={item.date}></LatestItem>
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

const renderItem = ({ item }) => (
  <View style={styles.popularContainer}>
    <HomeLearningCard image={item.img} title={item.title} type={item.type} />
  </View>
);

const ArticlesExplore = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
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

      {/* Popular */}
      <View>
        <Text style={styles.Heading2}>Popular</Text>
        <Carousel
          layout="default"
          data={learningData}
          renderItem={renderItem}
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

      {/* Recommended */}
      <View>
        <Text style={styles.Heading2}>Articles for you</Text>
        <CardSet data={toolkitCards} />
      </View>

       {/* Latest */}
       <View>
        <Text style={styles.Heading2}>Latest</Text>
        <LatestCardSet data={latestArticles}></LatestCardSet>
      </View>
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
    width: 370, // Adjust the item width as per your requirements
    height: 250, // Adjust the item height as per your requirements
  },
  latestContainer: {
    marginTop: 15
  },
  recommendedContainer: {
    marginBottom: 20
  }
});
