import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions, FlatList  } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONT, SHADOWS } from '../../constants/theme'
import { BarChart } from 'react-native-chart-kit'
import { ChartConfig } from 'react-native-chart-kit/dist/HelperTypes'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis, VictoryTheme, VictoryLine } from 'victory-native'
import axios from "axios";

//Images
import user_image from '../../assets/images/user_image.jpg'

//components
import OrangeButton from '../../components/OrangeButton'

const {width} = Dimensions.get('screen')

const lineData = [
  [
    { x: 'Jan', y: 6 },
    { x: 'Feb', y: 6 },
    { x: 'Mar', y: 5 },
    { x: 'Apr', y: 4 },
    { x: 'May', y: 4},
    { x: 'Jun', y: 4 },
    { x: 'Jul', y: 4 },
  ],
  [
    { x: 'Jan', y: 9 },
    { x: 'Feb', y: 9 },
    { x: 'Mar', y: 5 },
    { x: 'Apr', y: 2 },
    { x: 'May', y: 6},
    { x: 'Jun', y: 1 },
    { x: 'Jul', y: 0 },
  ],
  [
    { x: 'Jan', y: 0 },
    { x: 'Feb', y: 0 },
    { x: 'Mar', y: 5 },
    { x: 'Apr', y: 5 },
    { x: 'May', y: 7},
    { x: 'Jun', y: 9 },
    { x: 'Jul', y: 10 },
  ],
  [
    { x: 'Jan', y: 6 },
    { x: 'Feb', y: 6 },
    { x: 'Mar', y: 5 },
    { x: 'Apr', y: 4 },
    { x: 'May', y: 4},
    { x: 'Jun', y: 4 },
    { x: 'Jul', y: 4 },
  ],
  [
    { x: 'Jan', y: 6 },
    { x: 'Feb', y: 6 },
    { x: 'Mar', y: 5 },
    { x: 'Apr', y: 4 },
    { x: 'May', y: 4},
    { x: 'Jun', y: 4 },
    { x: 'Jul', y: 4 },
  ],
  [
    { x: 'Jan', y: 6 },
    { x: 'Feb', y: 6 },
    { x: 'Mar', y: 5 },
    { x: 'Apr', y: 4 },
    { x: 'May', y: 4},
    { x: 'Jun', y: 4 },
    { x: 'Jul', y: 4 },
  ],
  [
    { x: 'Jan', y: 6 },
    { x: 'Feb', y: 6 },
    { x: 'Mar', y: 5 },
    { x: 'Apr', y: 4 },
    { x: 'May', y: 4},
    { x: 'Jun', y: 4 },
    { x: 'Jul', y: 4 },
  ],
  [
    { x: 'Jan', y: 6 },
    { x: 'Feb', y: 6 },
    { x: 'Mar', y: 5 },
    { x: 'Apr', y: 4 },
    { x: 'May', y: 4},
    { x: 'Jun', y: 4 },
    { x: 'Jul', y: 4 },
  ],
  [
    { x: 'Jan', y: 6 },
    { x: 'Feb', y: 6 },
    { x: 'Mar', y: 5 },
    { x: 'Apr', y: 4 },
    { x: 'May', y: 4},
    { x: 'Jun', y: 4 },
    { x: 'Jul', y: 4 },
  ],
  [
    { x: 'Jan', y: 6 },
    { x: 'Feb', y: 6 },
    { x: 'Mar', y: 5 },
    { x: 'Apr', y: 4 },
    { x: 'May', y: 4},
    { x: 'Jun', y: 4 },
    { x: 'Jul', y: 4 },
  ],
];

biasList = ['ImplicitBias', 'ConfirmationBias', 'HaloEffect', 'Stereotyping', 'AvailabilityHeuristic', 'IngroupBias', 'AnchoringBias', 'BeautyBias', 'AuthorityBias', 'AuthorityBias'];

const LineGraph = ({ data }) => (
  <VictoryChart>
    <VictoryAxis label="Month" />
    <VictoryAxis dependentAxis label="Bias Score" domain={[0, 10]} />
    <VictoryLine data={data} />
  </VictoryChart>
);

const CustomTickLabel = (props) => {
  return (
    <Text {...props} style={[props.style, { transform: [{ rotate: '-45deg' }] }]} />
  );
};


const RenderStrengthWeakness = ({data}) => {
  let index = 1;
  return(
    <View style={styles.sw}>
      {data.map((item) => (
        <View style={styles.item}>
        <Text style={styles.bias}>{index++}. {item.biasName}</Text>
      </View>
      ))}
    </View>
  )
}

const UserProfile = () => {
  const [currentBiasData, setCurrentBiasData] = useState([]);
  const [userStrengths, setUserStrengths] = useState([]);
  const [userWeakness, setUserWeakness] = useState([]);

  useEffect (() => {
    getCurrentBiasData("U0001");
    getUserStrength("U0001");
    getUserWeakness("U0001");
  }, [])

  const getCurrentBiasData = async (userId) => {
    try{
      const response = await axios.get(`http://192.168.0.104:3000/userbiasprofile?userId=${userId}`);
      console.log(response.data)
      if (response.data) {
        const resources = response.data;
        const extractedObjects = resources.map((resource) => {
          return {
            userId: resource.userId,
            biasName: resource.biasName,
            score: resource.score
          }
        });
        setCurrentBiasData(extractedObjects);
      } else {
        console.log("No resources found in the response");
      }
    } catch (error) {
      console.error("Error fetching Current User Bias Data", error);
    }
  }

  const getUserStrength = async (userId) => {
    try{
      const response = await axios.get(`http://192.168.0.104:3000/userStrengths?userId=${userId}`);
      if (response.data) {
        const resources = response.data.resources;
        const extractedObjects = resources.map((resource) => {
          return {
            biasName: resource.biasName,
          }
        });
        setUserStrengths(extractedObjects);
      } else {
        console.log("No resources found in the response");
      }
    } catch (error) {
      console.error("Error fetching User Strength", error);
    }
  }

  const getUserWeakness = async (userId) => {
    try{
      const response = await axios.get(`http://192.168.0.104:3000/userWeakness?userId=${userId}`);
      if (response.data) {
        const resources = response.data.resources;
        const extractedObjects = resources.map((resource) => {
          return {
            biasName: resource.biasName,
          }
        });
        setUserWeakness(extractedObjects);
      } else {
        console.log("No resources found in the response");
      } 
    } catch (error) {
      console.error("Error fetching User Weakness", error);
    }
  }

  const renderLineItem = ({ item }) => (
    <View>
      <Text style={styles.customText}>Custom Text</Text>
      <LineGraph data={item} />
    </View>
  );
  const sliderWidth = Dimensions.get('window').width;
  const user_name="Julie Adams";
  const occupation = "Product Manager, ABC Corporation";

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.Heading1}>Profile</Text>

      <View style={styles.userInfoContainer}>
        <Image 
        source={user_image}
        style={styles.userImg}/>
        <Text style={styles.userName}>{user_name}</Text>
        <Text style={styles.occupation}>{occupation}</Text>
        <View style={styles.buttonContainer}> 
          <OrangeButton text="Edit Profile"/>
        </View>
      </View> 

      {/* Bias Score Section */}
      <View style={styles.cumulativeBiasScoreContainer}>
          <Text style={styles.Heading2}>Bias Score</Text>
          <Text style={styles.description}>The following graph shows the biases detected from your assessments and are out of a total scale of 1-10</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <VictoryChart>
          <VictoryAxis label="Bias"></VictoryAxis>
          <VictoryAxis dependentAxis label="Bias Score" style={styles.axis}></VictoryAxis>
          <VictoryBar 
            theme={VictoryTheme.material}  
            data={currentBiasData} 
            x="biasName" 
            y="score" 
            style={styles.barChart}
            barWidth={30}
            animate
            alignment="start"
            tickLabelComponent={<CustomTickLabel />}
          />
          </VictoryChart>
        </ScrollView>
      </View>     

      {/* Strengths */}
      <View style={styles.swContainer}>
        <Text style={styles.Heading2}>Strengths</Text>
        <Text style={styles.description}>Based on your assessments, you have demonstrated strength in identifying the following types of biases:</Text>
        <RenderStrengthWeakness data={userStrengths}/>
      </View>

       {/* Weakness */}
      <View style={styles.swContainer}>
        <Text style={styles.Heading2}>Weakness</Text>
        <Text style={styles.description}>Based on your assessments, you have demonstrated weakness in identifying the following types of biases:</Text>
        <RenderStrengthWeakness data={userWeakness}/>
      </View>

      {/* Bias Score Progress */}
      <View style={styles.biasProgressContainer}>
        <Text style={styles.Heading2}>Bias Score Progress</Text>
        <View style={styles.lineGraphcontainer}>
            <Carousel
              data={lineData}
              renderItem={renderLineItem}
              sliderWidth={sliderWidth}
              itemWidth={sliderWidth}
            />
            {/* <Pagination
              dotsLength={lineData.length}
              activeDotIndex={0} // Set the initial active dot index
              containerStyle={styles.paginationContainer}
              dotStyle={styles.dotStyle}
              inactiveDotStyle={styles.inactiveDotStyle}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            /> */}
          </View>
      </View>
    </ScrollView>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 28,
    paddingTop: 10,
  },
  Heading1: {
    fontFamily: FONT.CrimsonPro,
    fontSize: 27,
    marginTop: 20
  },
  Heading2: {
    fontFamily: FONT.CrimsonPro,
    fontSize: 22,
    marginTop: 10
  },
  userImg: {
    width: 80,
    height: 80,
    borderRadius: 75,
  },
  userName: {
    fontFamily: FONT.CrimsonPro_SemiBold,
    fontSize: 20,
    marginTop: 10
  },
  occupation: {
    fontFamily: FONT.Oxygen,
    fontSize: 15,
    opacity: 0.55,
    marginTop: 5
  },
  userInfoContainer: {
    alignItems: 'center',
    marginTop: 25
  },
  buttonContainer: {
    marginTop: 20,
    height: 50,
    width: '27%',
    ...SHADOWS.medium,
  },
  cumulativeBiasScoreContainer: {
    
  },
  description: {
    fontFamily: FONT.Oxygen,
    fontSize: 14,
    marginTop: 5
  },
  graphStyle: {
    backgroundColor: COLORS.crayola,
    marginTop: 10,
    marginLeft: -25, // Remove the left margin
  },
  barChart: {
    data: {
      fill: COLORS.green,
    }
  },
  axis: {
    axisLabel: {
      padding: 35
    }
  },
  strengthsList: {
    marginTop: 10
  },
  swContainer: {
    marginTop: 20
  },
  paginationContainer: {
    paddingTop: 8,
    paddingBottom: 16,
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  },
  biasProgressContainer: {
    marginBottom: 60,
    marginTop: 20
  },
  sw: {
    marginTop: 15
  },
  bias: {
    fontFamily: FONT.Oxygen_Bold
  },
  item: {
    marginTop: 5
  },
  customText: {
    marginTop: 10,
    fontFamily: FONT.Oxygen
  }
})