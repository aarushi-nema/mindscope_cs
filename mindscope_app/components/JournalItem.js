import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONT } from '../constants/theme'

const JournalItem = (props) => {
  return (
    <View>
     <TouchableOpacity onPress={() => {}} style={styles.item}>
      <View style={styles.entryFlexConatiner}>
        <View style={styles.colorContainer}></View>
        <View>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.content}>{props.content}</Text>
        </View>
        <View style={styles.clickInto}>
          <Text>&gt;</Text>
        </View>
      </View>
      
    </TouchableOpacity>
    </View>
  )
}

export default JournalItem

const styles = StyleSheet.create({
    item: {
        marginBottom: 5,
        backgroundColor: COLORS.grey,
        padding: 10,
        borderRadius: 8,
      },
      title: {
        fontSize: 13,
        fontFamily: FONT.Oxygen,
        marginBottom: 5,
        opacity: 0.5
      },
      content: {
        fontSize: 15,
        fontFamily: FONT.Oxygen
      },
      entryFlexConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      colorContainer: {
        backgroundColor: COLORS.green,
        height: 40,
        width: 12,
        marginRight: 10,
        borderRadius: 10
      },
      clickInto: {
        marginLeft: 'auto',
        marginRight: 10
      }
})