import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { COLORS, FONT, SHADOWS } from "../../constants/theme";
import OrangeButton from "../../components/OrangeButton";

const feedBack =
  "Your response suggests that you are slightly inclined towards gender bias.";

const strategies = [
  {
    id: "1",
    strategy:
      "Take note of the behavior and reflect on why you dismissing this colleague more often than others.",
  },
  {
    id: "2",
    strategy:
      "Consider whether gender bias could be a factor, and try to adjust your behavior accordingly.",
  },
  {
    id: "3",
    strategy:
      "Be mindful of the amount of time each person in the meeting is speaking and make a conscious effort to give everyone equal opportunities to speak.",
  },
];

const renderItem = ({ item }) => (
  <View>
    <Text style={styles.strategyItem}>
      {item.id}. {item.strategy}
    </Text>
  </View>
);

const ToolKitStrategy = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Heading1}>Feedback</Text>
      <Text style={styles.text}>{feedBack}</Text>

      <Text style={styles.Heading1}>Strategies</Text>
      <View>
        <FlatList
          data={strategies}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          style={styles.strategyList}
        />
      </View>

      <View style={styles.buttonContainer}>
        <OrangeButton text="Continue" />
      </View>
    </View>
  );
};

export default ToolKitStrategy;

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
    marginTop: 10,
  },
  text: {
    fontFamily: FONT.Oxygen,
    fontSize: 14,
    marginTop: 10,
  },
  strategyList: {
    marginTop: 10,
  },
  strategyItem: {
    marginTop: 10,
    fontFamily: FONT.Oxygen,
    fontSize: 14,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    ...SHADOWS.medium,
    marginTop: 30,
  },
});
