import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import React, {useEffect, useState} from 'react'
import { COLORS, FONT } from '../../constants/theme';
import axios from "axios";

//Components
import TransparentButton from '../../components/TransparentButton';
import { ProfileCreationQuestions } from './ProfileCreationQuestions';
import QuestionItem from '../../components/QuestionItem';

const QuizPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [quizObject, setQuizObject] = useState([]);

    useEffect(() => {
        getQuestions();
    }, [])

    const getQuestions = async () => {
        try {
            const response = await axios.get("http://192.168.0.102:3000/quiz?quizId=Q0001");
            console.log(response.data)
            if (response.data) {
                const resources = response.data;
                const extractedObjects = resources.map((resource) => {
                  return {
                    _id: resource._id,
                    quizId: resource.quizId,
                    quizName: resource.quizName,
                    description: resource.description,
                    category: resource.category,
                    type: resource.type,
                    numViews: resource.numViews,
                    img: resource.img,
                    questions: resource.questions,
                  }
                });
                setQuizObject(extractedObjects);
            }
        } catch (error) {
            console.error("Error fetching questions:", error)
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.topButtonFlex}>
            <TransparentButton text="< Previous"></TransparentButton>
            <TransparentButton text="Next >"></TransparentButton>
        </View>
        <View style={styles.titleQuestionCounter}>
            <Text style={styles.Heading1}>Let's create your profile!</Text>
            <Text style={styles.questionCount}>Question: {' ' + (currentIndex+1) +  '/' + ProfileCreationQuestions.length}</Text>
        </View>
        <View>
            <FlatList showsHorizontalScrollIndicator={false} horizontal data={quizObject.questions} renderItem={({item,index})=>{
                return (
                    <QuestionItem data={item}/>
                )
            }}>  </FlatList>
        </View>
    </View>
  )
}

export default QuizPage

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 28,
        paddingTop: 10,
    },
    Heading1: {
      fontFamily: FONT.CrimsonPro,
      fontSize: 23
    },
    Heading2: {
      fontFamily: FONT.CrimsonPro,
      fontSize: 22,
      marginTop: 10
    },
    topButtonFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        marginTop: 20,
    }, 
    questionCount: {
        fontFamily: FONT.Oxygen,
        marginLeft: 10
    },
    titleQuestionCounter: {
        flexDirection: 'row',
        alignItems: 'center',
        opacity: 0.5,
        justifyContent: 'space-between'
    }
})