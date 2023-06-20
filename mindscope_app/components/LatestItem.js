import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONT } from '../constants/theme'

const LatestItem = (props) => {
  return (
    <View style={styles.container}>
       <TouchableOpacity style={styles.latestItemContainer} onPress={() => props.navigation.navigate("Article Page", { data: props.contentObject })}>
          <Image source={{ uri: props.imageUrl}} style={styles.latestImg}></Image>
          <View style={styles.latestText}>
            <Text style={styles.latestTitle}>{props.title}</Text>
            <Text style={styles.latestDate}>{props.date}</Text>
          </View>
        </TouchableOpacity>
    </View>
  )
}

export default LatestItem

const styles = StyleSheet.create({
    container: {
      elevation: 4,
      marginVertical: 8,
    },
    latestItemContainer: {
        backgroundColor: COLORS.grey,
        height: 75,
        width: '100%',
        borderRadius: 10,
        flexDirection: 'row'
      },
      latestImg: {
        height: 75,
        width: 75,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
      },
      latestText: {
        flexDirection: 'column',
        marginLeft: 20,
        marginTop: 10
      },
      latestTitle: {
        fontSize: 16,
        marginBottom: 2,
        fontFamily: FONT.CrimsonPro_SemiBold,
        width: '55%'
      },
      latestDate: {
        fontSize: 14,
        fontFamily: FONT.CrimsonPro,
        opacity: 0.5,
        marginTop: 2.5
      }
})