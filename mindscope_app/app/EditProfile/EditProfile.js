import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { COLORS, FONT, SHADOWS } from "../../constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

//Images
import user_image from "../../assets/images/user_image.jpg";

//Icons
import edit from "../../assets/icons/edit.png";

//Components
import OrangeButton from "../../components/OrangeButton";

const userDetails = {
  name: "Julie Adams",
  email: "julie@gmail.com",
  location: "Singapore",
  occupation: "Software Engineer",
};

const EditProfile = () => {
  const [email, setEmail] = useState(userDetails.email);
  const [name, setName] = useState(userDetails.name);
  const [location, setLocation] = useState(userDetails.location);
  const [occupation, setOccupation] = useState(userDetails.occupation);

  return (
    <View style={styles.container}>
      <Text style={styles.Heading1}>Edit Profile</Text>

      <View style={styles.userInfoContainer}>
        <Image source={user_image} style={styles.userImg} />
        <TouchableOpacity style={styles.editContainer}>
          <Image source={edit} style={styles.editImg}></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          placeholder="Full Name"
          value={name}
          onChangeText={(text) => setFdata({ ...fdata, name: text })}
          style={styles.input}
          onPressIn={() => setErrormsg(null)}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setFdata({ ...fdata, email: text })}
          style={styles.input}
          onPressIn={() => setErrormsg(null)}
        />

        <Text style={styles.label}>Location</Text>
        <TextInput
          placeholder="Location"
          // onChangeText={()=>{}}
          value={location}
          style={styles.input}
        />

        <Text style={styles.label}>Occupation</Text>
        <TextInput
          placeholder="Occupation"
          // onChangeText={()=>{}}
          value={occupation}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <OrangeButton text="Save" />
      </View>
    </View>
  );
};

export default EditProfile;

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
  },
  Heading2: {
    fontFamily: FONT.CrimsonPro,
    fontSize: 22,
    marginTop: 10,
  },
  userInfoContainer: {
    marginTop: 25,
    flexDirection: "row",
    alignSelf: "center",
  },
  userImg: {
    width: 80,
    height: 80,
    borderRadius: 75,
  },
  editContainer: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: COLORS.grey,
  },
  editImg: {
    width: 25,
    height: 25,
    alignSelf: "center",
    verticalAlign: "middle",
  },
  inputContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
  },
  input: {
    backgroundColor: "#e6e6e6",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
    width: "90%",
    ...SHADOWS.medium,
    alignSelf: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 10,
    fontFamily: FONT.Oxygen_Bold,
  },
});
