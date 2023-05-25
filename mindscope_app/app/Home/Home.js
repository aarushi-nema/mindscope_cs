import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, FlatList} from 'react-native'
import React from 'react';
import { COLORS, FONT, SHADOWS } from '../../constants/theme';

//Components
import ExploreButton from '../../components/ExploreButton';
import NotificationButton from '../../components/NotificationButton';
import HomeLearningCard from '../../components/HomeLearningCard';
import HomeToolkitCard from '../../components/HomeToolkitCard';

//Images
import biasImg1 from '../../assets/images/bias_image1.jpg';
import biasImg2 from '../../assets/images/bias_image2.jpg';
import biasImg3 from '../../assets/images/bias_image3.png';
import biasImg4 from '../../assets/images/bias_image4.jpg';
import biasImg6 from '../../assets/images/bias_image6.jpg';
import biasImg7 from '../../assets/images/bias_image7.jpeg';
import biasImg8 from '../../assets/images/bias_image8.png';
import biasImg9 from '../../assets/images/bias_image9.jpg';

const CardSet = ({ data }) => {
  return (
    <ScrollView horizontal>
      {data.map((item, index) => (
        <HomeToolkitCard title={item.title} description={item.description} imageUrl={item.image} />
      ))}
    </ScrollView>
  );
};
 
const learningData = [
  { id: '1', img: biasImg1, type: 'Article', title: 'Unconscious Bias: A Barrier to Diversity and Inclusion in the Workplace' },
  { id: '2', img: biasImg6, type: 'Case Study', title: 'Understanding Unconscious Bias: Strategies for Overcoming Prejudice' },
  { id: '3', img: biasImg7, type: 'Article', title: 'The Hidden Consequences of Unconscious Bias in Hiring' },
  { id: '4', img: biasImg8, type: 'Article', title: 'How to Address Unconscious Bias in Performance Reviews' },
  { id: '5', img: biasImg9, type: 'Case Study', title: 'Breaking the Cycle of Unconscious Bias: Lessons from Neuroscience' },
  
  // Add more items as needed
];

const Home = (props) => {
  // const learningType= ['Article', 'Case Study', 'Article', 'Article', 'Case Study']
  // const learningTitle= ["",
  //                       "",
  //                       "",
  //                       "",
  //                       ""]
  // const learningImages= [biasImg1, biasImg6, biasImg7, biasImg8, biasImg9]
  const toolkitTitles= ['Bias Bash', 'Pink or Blue?', 'Follow the flock']
  const toolkitDescriptions= ['Challenge your biases by identifying and questioning your assumptions about...','Think beyond traditional gender stereotypes and biases, and explore the...','Question your tendency to conform to social norms and encourages...']
  const toolkitImages= [biasImg2, biasImg3, biasImg4]
  const toolkitCards = toolkitTitles.map((title, index) => ({
    title,
    description: toolkitDescriptions[index],
    image: toolkitImages[index],
  }));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.Heading1}>Home</Text>
      <View>
        <Text style={styles.Heading2}>Daily Notifications</Text>
        <View style={styles.buttonContainer}>
          <NotificationButton text="Complete your daily journal" handlePress={() =>props.navigation.navigate("Journal")}></NotificationButton>
        </View>
        <View style={styles.buttonContainer}>
          <NotificationButton text="Complete your daily questionnaire"></NotificationButton>
        </View>
      </View>

      <View style={styles.learningContentContainer}>
        <View style={styles.learningHeader}>
          <Text style={styles.Heading2}>Learning Content</Text>
          <View style={styles.exploreButtonConatiner}>
            <ExploreButton text="Explore"></ExploreButton>
          </View>
        </View>
        <View style={styles.learningContainer}>
          <FlatList
            data={learningData}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <HomeLearningCard image={item.img} title={item.title} type={item.type}></HomeLearningCard>
              </View>
            )}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* <HomeLearningCard image={biasImg1} title="Unconscious Bias: When Good Intentions Aren't Enough"></HomeLearningCard> */}
      </View>
     
     <View style={styles.toolkitsContainer}>
        <View style={styles.learningHeader}>
          <Text style={styles.Heading2}>ToolKits</Text>
          <View style={styles.exploreButtonConatiner}>
            <ExploreButton text="Explore" handlePress={() => props.navigation.navigate("ToolKitExplore")}></ExploreButton>
          </View>
        </View>

        {/* <HomeToolkitCard imageUrl={biasImg2} title="Bias Bash" description="Challenge your biases by identifying and questioning your assumptions about..."></HomeToolkitCard> */}
        <CardSet data={toolkitCards} />
     </View>
      {/* <Text>This is the home screen</Text>
      <TouchableOpacity style={styles.logOutButton} onPress={()=>{props.navigation.navigate('Login')}}><Text>Logout</Text></TouchableOpacity> */}
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 28,
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
  buttonContainer: {
    marginTop: 15,
    width: '100%',
    ...SHADOWS.small,
  },
  exploreButtonConatiner: {
    width: '20%',
    ...SHADOWS.small,
    justifyContent: 'flex-end'
  },
  learningContentContainer: {
    marginTop: 20
  },
  learningHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  toolkitsContainer: {
    marginBottom: 60,
  },
  learningContainer: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    width: 400, // Adjust the item width as per your requirements
    height: 300, // Adjust the item height as per your requirements
    marginRight: 10, // Add some horizontal margin between items
  },

})