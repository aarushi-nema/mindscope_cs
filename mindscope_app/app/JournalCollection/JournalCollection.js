import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React, {useState} from 'react'
import { COLORS, FONT, SIZES, SHADOWS } from '../../constants/theme'

//icons
import search from '../../assets/icons/search.png'
import add from '../../assets/icons/add.png'


const journalEntries = [
  { id: '1', title: '12:00 pm', content: '20 May, 2023' },
  { id: '2', title: '07:00 pm', content: '16 May, 2023' },
  { id: '3', title: '11:00 am', content: '11 May, 2023' },
  // Add more journal entries as needed
];

const JournalCollection = () => {
  const [selectedEntry, setSelectedEntry] = useState(null);

  const handleEntryPress = (entry) => {
    setSelectedEntry(entry);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleEntryPress(item)} style={styles.item}>
      <View style={styles.entryFlexConatiner}>
        <View style={styles.colorContainer}></View>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.content}>{item.content}</Text>
        </View>
        <View style={styles.clickInto}>
          <Text>&gt;</Text>
        </View>
      </View>
      
    </TouchableOpacity>
  );

  const renderEntry = () => {
    if (selectedEntry) {
      return (
        <View style={styles.entryContainer}>
          <Text style={styles.entryTitle}>{selectedEntry.title}</Text>
          <Text style={styles.entryContent}>{selectedEntry.content}</Text>
        </View>
      );
    }
    return null;
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.Heading1}>Journal</Text>

      {/* Search */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={()=>{}}
            placeholder='Search for Journal Entries'></TextInput>
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image 
            source={search}
            resizeMode="contain"
            style={styles.searchBtnImage}></Image>
        </TouchableOpacity>
      </View>

      {/* Add New Journal */}
      <View style={styles.newJournalContainer}>
        <TouchableOpacity style={styles.newJournalBtn}>
          <View style={styles.flexContainer}>
            <Text style={styles.newJournalText}>Add New Journal</Text>
            <View style={styles.newJournalImageContainer}>
              <Image 
                source={add}
                resizeMode="contain"
                style={styles.newJournalImage}></Image>
          </View>
            </View>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.Heading2}>Entries</Text>

      {/* Entries List */}
      <FlatList
        data={journalEntries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {/* {renderEntry()} */}

    </ScrollView>
  )
}

export default JournalCollection

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
    paddingTop: 10,
  },
  Heading1: {
    fontFamily: FONT.CrimsonPro,
    fontSize: 27
  },
  Heading2: {
    fontFamily: FONT.CrimsonPro,
    fontSize: 22,
    marginTop: 30,
    marginBottom: 10
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.grey,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.Oxygen,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.crayola,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  newJournalContainer: {
    marginTop: 25,
    ...SHADOWS.small,
    // borderColor:'red', borderWidth: 2
  },
  newJournalBtn: {
    backgroundColor: COLORS.grey,
    borderRadius: 10,
    padding: 10,
    // borderColor:'red', borderWidth: 2
  },
  flexContainer:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  newJournalText:{
    fontFamily: FONT.Oxygen_Bold
  },
  newJournalImage: {

  },
  newJournalImageContainer: {
    backgroundColor: COLORS.crayola,
    padding: 10,
    borderRadius: 20
  },
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
  entryContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  entryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  entryContent: {
    fontSize: 18,
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