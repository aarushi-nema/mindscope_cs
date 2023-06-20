import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react';
import { COLORS, FONT, SIZES, SHADOWS } from '../../constants/theme';
import axios from "axios";

//icons
import search from '../../assets/icons/search.png'
import add from '../../assets/icons/add.png'

//components
import JournalItem from '../../components/JournalItem'

const JournalCollection = () => {
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [journal, setJournal] = useState([]);

  useEffect (() => {
    getJournals("U0002");
  }, []);

  const getJournals = async (userId) => {
    try {
      //console.log(`http://192.168.0.104:3000/userjournals?userId=${userId}`);
      const response = await axios.get(`http://192.168.0.104:3000/userjournals?userId=${userId}`);
      
      if (response.data && response.data.resources) {
        const resources = response.data.resources;
        const extractedObjects = resources.map((resource) => {
          const date = new Date(resource.timeStamp); 
          const title = `${date.getHours()}:${date.getMinutes()}`;
          return {
            journalId: resource.journalId,
            userId: resource.userId,
            journalText: resource.journalText,
            date: date.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }),
            title: title
          };
        });
        setJournal(extractedObjects);
      } else {
        console.log("No resources found in the response");
      }
    } catch (error) {
      console.error("Error fetching journals", error);
    }
  };
  

  const handleEntryPress = (entry) => {
    setSelectedEntry(entry);
  };

  const JournalSet = ({ item }) => (
    <JournalItem
    title={item.title}
    content={item.date}
    ></JournalItem>
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
      <View>
        <JournalSet item={journal}></JournalSet>
      </View>
      {/* <FlatList
        data={journal}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> */}
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