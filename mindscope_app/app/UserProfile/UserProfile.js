import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions, FlatList  } from 'react-native'
import React from 'react'
import { COLORS, FONT, SHADOWS } from '../../constants/theme'
import { BarChart } from 'react-native-chart-kit'
import { ChartConfig } from 'react-native-chart-kit/dist/HelperTypes'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis, VictoryTheme, VictoryLine } from 'victory-native'

//Images
import user_image from '../../assets/images/user_image.jpg'

//components
import OrangeButton from '../../components/OrangeButton'

const {width} = Dimensions.get('screen')

const userBiasData = [
  {bias: 'ImplicitBias', biasScore: 8},
  {bias: 'ConfirmationBias', biasScore: 2},
  {bias: 'HaloEffect', biasScore: 1},
  {bias: 'Stereotyping', biasScore: 0},
  {bias: 'AvailabilityHeuristic', biasScore: 7},
  {bias: 'IngroupBias', biasScore: 4},
  {bias: 'AnchoringBias', biasScore: 1},
  {bias: 'BeautyBias', biasScore: 6},
  {bias: 'AuthorityBias', biasScore: 9},
  {bias: 'AuthorityBias', biasScore: 0},
]

const userStrengthData = [
  { id: '1', bias: 'Gender Bias' },
  { id: '2', bias: 'Confirmation Bias' },
];

const userWeaknessData = [
  { id: '1', bias: 'Beauty Bias' },
  { id: '2', bias: 'Halo Effect' },
];

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
    <Text {...props} style={[props.style, { transform: [{ rotate: '-45deg' }] }]} /> // Apply rotation style
  );
};

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.bias}>{item.id}. {item.bias}</Text>
  </View>
);

const UserProfile = () => {
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

      <View style={styles.cumulativeBiasScoreContainer}>
          <Text style={styles.Heading2}>Bias Score</Text>
          <Text style={styles.description}>The following graph shows the biases detected from your assessments and are out of a total scale of 1-10</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* <BarChart
            style={styles.graphStyle}
            data={barData}
            width={Dimensions.get('window').width} // Adjust the width as needed
            height={250}
            chartConfig={chartConfig}
            verticalLabelRotation={-45}
          /> */}
          <VictoryChart>
          <VictoryAxis label="Bias"></VictoryAxis>
          <VictoryAxis dependentAxis label="Bias Score" style={styles.axis}></VictoryAxis>
          <VictoryBar 
            theme={VictoryTheme.material}  
            data={userBiasData} 
            x="bias" 
            y="biasScore" 
            style={styles.barChart}
            barWidth={30}
            animate
            alignment="start"
            tickLabelComponent={<CustomTickLabel />}
          />
          </VictoryChart>
        </ScrollView>
      </View>     

      <View style={styles.swContainer}>
        <Text style={styles.Heading2}>Strengths</Text>
        <Text style={styles.description}>Based on your assessments, you have demonstrated strength in identifying the following types of biases:</Text>
        <FlatList
          data={userStrengthData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.strengthsList}
        />
      </View>

      <View style={styles.swContainer}>
        <Text style={styles.Heading2}>Weakness</Text>
        <Text style={styles.description}>Based on your assessments, you have demonstrated weakness in identifying the following types of biases:</Text>
        <FlatList
          data={userWeaknessData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.strengthsList}
        />
      </View>

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
  },
})