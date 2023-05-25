import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { COLORS, FONT } from '../../constants/theme';

//icons
import back from '../../assets/icons/back.png';

//images
import biasImg5 from '../../assets/images/bias_image5.jpg';

article_content = {
    id: '1', 
    date: '28/02/2023', 
    img: biasImg5, 
    category: 'Bias in Work Place', 
    title: 'The Impact of Unconscious Bias in Hiring Practices', 
    author: 'Tina Sawyer',
    content: 'Unconscious bias is a deeply ingrained set of attitudes or stereotypes that affect our decision-making without our conscious awareness. When it comes to hiring practices, unconscious bias can have a significant impact on the selection process, perpetuating inequality and hindering diversity in the workforce. \n\nUnconscious bias influences hiring practices by creating a preference for candidates who conform to familiar or stereotypical characteristics. This bias can manifest in various ways, such as gender, race, age, or socio-economic background. For instance, a hiring manager might unconsciously favor a candidate who shares similar educational or cultural experiences, perpetuating a homogeneous workforce. This lack of diversity can limit innovation, creativity, and fresh perspectives within an organization, ultimately impeding its growth and adaptability in an increasingly global and interconnected world.' 
};

const ArticlePage = ({props}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <TouchableOpacity>
            <Image source={back} style={styles.backIcon}></Image>
        </TouchableOpacity>
        <View style={styles.dateheader}>
            <Text style={styles.date}>{article_content.date}</Text>
            <Text style={styles.date}>|</Text>
            <Text style={styles.date}>{article_content.category}</Text>
        </View>
      <Text style={styles.Heading1}>{article_content.title}</Text>
      <Text style={styles.author}>Written by {article_content.author}</Text>
      <Image source={article_content.img} style={styles.articeImg}></Image>
      <Text style={styles.articleContent}>{article_content  .content}</Text>
    </ScrollView>
  )
}

export default ArticlePage

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 28,
        paddingTop: 10,
      },
      Heading1: {
        fontFamily: FONT.CrimsonPro_SemiBold,
        fontSize: 23,
        marginTop: 7
      },
      Heading2: {
        fontFamily: FONT.CrimsonPro,
        fontSize: 22,
        marginTop: 10
      },
      backIcon: {
        height: 30,
        width: 30
      },
      date: {
        fontFamily: FONT.Oxygen,
        marginTop: 20,
        fontSize: 12,
        opacity: 0.5,
        marginRight: 10
      },
      dateheader: {
        flexDirection: 'row'
      },
      articeImg: {
        width: '100%',
        marginTop: 10,
        height: 250
      },
      articleContent: {
        fontFamily: FONT.Oxygen,
        fontSize: 15,
        marginTop: 25,
        textAlign: 'auto',
        lineHeight: 25,
        marginBottom: 80
      },
      author: {
        fontFamily: FONT.Oxygen,
        fontSize: 14,
        marginVertical: 6
      }
})