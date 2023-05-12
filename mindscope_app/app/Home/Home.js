import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, } from 'react-native'
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

const CardSet = ({ data }) => {
  return (
    <ScrollView horizontal>
      {data.map((item, index) => (
        <HomeToolkitCard title={item.title} description={item.description} imageUrl={item.image} />
      ))}
    </ScrollView>
  );
};
 

const Home = (props) => {
  const learningType= ['Article', 'Case Study', 'Article', 'Article', 'Case Study']
  const learningTitle= ["Unconscious Bias: A Barrier to Diversity and Inclusion in the Workplace",
                        "Understanding Unconscious Bias: Strategies for Overcoming Prejudice",
                        "The Hidden Consequences of Unconscious Bias in Hiring",
                        "How to Address Unconscious Bias in Performance Reviews",
                        "Breaking the Cycle of Unconscious Bias: Lessons from Neuroscience"]

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
          <NotificationButton text="Complete your daily journal"></NotificationButton>
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
        <HomeLearningCard image={biasImg1} title="Unconscious Bias: When Good Intentions Aren't Enough"></HomeLearningCard>
      </View>
     
     <View style={styles.toolkitsContainer}>
        <View style={styles.learningHeader}>
          <Text style={styles.Heading2}>ToolKits</Text>
          <View style={styles.exploreButtonConatiner}>
            <ExploreButton text="Explore"></ExploreButton>
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
    marginTop: 20,
  }
})