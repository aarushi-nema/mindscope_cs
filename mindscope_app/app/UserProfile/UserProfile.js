import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONT, SHADOWS } from '../../constants/theme'
import { BarChart } from 'react-native-chart-kit'
import { ChartConfig } from 'react-native-chart-kit/dist/HelperTypes'

//Images
import user_image from '../../assets/images/user_image.jpg'

//components
import OrangeButton from '../../components/OrangeButton'

//User Bias Profile
UserBiasScores= {
  ImplicitBias: 8,
  ConfirmationBias: 2,
  HaloEffect: 1,
  Stereotyping: 0,
  AvailabilityHeuristic: 7,
  IngroupBias: 4,
  AnchoringBias: 1,
  BeautyBias: 6,
  AuthorityBias: 9,
  AttributionBias: 0
}

const barData = {
  labels: ['ImplicitBias', 'ConfirmationBias', 'HaloEffect', 'Stereotyping', 'AvailabilityHeuristic', 'IngroupBias', 'AnchoringBias', 'BeautyBias', 'AuthorityBias', 'AttributionBias'],
  datasets: [
    {
      data: [8, 2, 1, 0, 7, 4, 1, 6, 9, 0],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const UserProfile = () => {
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
          <BarChart
            style={graphStyle}
            data={barData}
            width="100%"
            height={220}
            yAxisLabel={'$'}
            chartConfig={chartConfig}
          />
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
    borderRadius: 8,
  },
})