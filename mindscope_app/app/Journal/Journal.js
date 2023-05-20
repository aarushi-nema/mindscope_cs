import { StyleSheet, Text, View, ScrollView, FlatList, TextInput } from 'react-native'
import React from 'react'
import { COLORS, FONT, SHADOWS } from '../../constants/theme'
import OrangeButton from '../../components/OrangeButton'

const data = [
    { id: '1', prompt: 'Write about a time when you realized you had a bias and how you worked to address it.' },
    { id: '2', prompt: 'Think about a situation where you may have made a decision based on a bias' },
];

const ListItem = ({ item }) => {
    return (
      <View>
        <Text style={styles.promtItem}> {item.id}.  {item.prompt}</Text>
      </View>
    );
  };

const Journal = (props) => {
    const date = "15 January 2023"
  return (
    <ScrollView style={styles.container}>
        <View style={styles.container1}>
            <Text style={styles.Heading1}>Journal</Text>
            <Text style={styles.Heading2}>{date}</Text>
            <Text style={styles.prompt}>Some helpful prompts: </Text>
            <FlatList
            data={data}
            renderItem={({ item }) => <ListItem item={item} />}
            keyExtractor={(item) => item.id}
            style={styles.promptList}
                />
        </View>
      
      <View style={styles.container2}>
        <TextInput 
            placeholder='Enter your journal here...' 
            //value={email} 
            //   onChangeText={(text) => setFdata({...fdata, email:text})}  
            style={styles.input}
            multiline={true}
        />
      </View>

      <View style={styles.buttonContainer}> 
        <OrangeButton text="Save" handlePress={() => props.navigation.navigate("JounalCollection")}/>
      </View>
    </ScrollView>
  )
}

export default Journal

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
      prompt:{
        fontFamily: FONT.Oxygen,
        marginTop: 15,
        fontSize: 15
      },
      promptList: {
        marginTop: 10,
      },
      promtItem: {
        fontFamily: FONT.Oxygen,
        fontSize: 15,
        marginTop: 5
      },
      input: {
        marginTop: 20,
        width: '100%',
        backgroundColor: COLORS.grey,
        borderRadius: 10,
        padding: 20,
        fontFamily: FONT.Oxygen,
        height: '100%',
        textAlignVertical: 'top',
        paddingTop: 20
      },
      container1 :{
        // borderColor: 'red',
        // borderWidth: 2
      },
      container2 :{
        // borderColor: 'red',
        // borderWidth: 2, 
        height: 450,
        marginBottom: 20
      },
      buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
        ...SHADOWS.medium,
        marginBottom: 60
      },
})