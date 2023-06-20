import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, FONT, SHADOWS } from '../constants/theme';
import OrangeButton from './OrangeButton';

const { height, width } = Dimensions.get('window');

const QuestionItem = ({ data }) => {
    useEffect (() => {
        console.log(data)
      }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{data.question}</Text>
      <FlatList
        pagingEnabled
        style={styles.optionsContainer}
        data={options}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={styles.option}>
              <View style={styles.optionBtn}>
                <Text style={styles.optionBtnText}>{index === 0 ? 'A' : index === 1 ? 'B' : index === 2 ? 'C' : index === 3 ? 'D' : 'E'}</Text>
              </View>
              <Text style={styles.optionText}>{item.text}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <View style={styles.btnContainer}>
        <OrangeButton text="Continue" />
      </View>
    </View>
  );
};

export default QuestionItem;

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  question: {
    fontFamily: FONT.Oxygen,
    fontSize: 15,
    marginRight: 10,
    marginTop: 20,
    width: '85%',
  },
  option: {
    width: '85%',
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    elevation: 3,
    backgroundColor: COLORS.grey,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'left',
    borderRadius: 10,
    paddingLeft: 15,
    flexDirection: 'row',
  },
  optionsContainer: {
    marginTop: 20,
  },
  optionBtn: {
    width: 20,
    height: 20,
    borderRadius: 50,
    //backgroundColor: COLORS.crayola,
    marginRight: 10,
    borderColor: COLORS.black,
    borderWidth: 2,
    alignItems: 'center',
    fontSize: 12,
  },
  optionText: {
    fontFamily: FONT.Oxygen,
  },
  optionBtnText: {
    fontFamily: FONT.Oxygen_Bold,
    fontSize: 12,
  },
  btnContainer: {
    justifyContent: 'left',
    alignItems: 'left',
    marginTop: 5,
    marginRight: 5,
    marginBottom: 5,
    marginLeft: 1,
    width: '85%',
    ...SHADOWS.medium,
  },
});
