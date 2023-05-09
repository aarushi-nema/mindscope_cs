import { Text, TouchableOpacity } from "react-native";

import styles from "../styles/search";

const OrangeButton = ({ text, handlePress }) => {
  return (
    <TouchableOpacity
          onPress={handlePress}
          style={styles.orangeButton}>
          <Text style={[styles.orangeButton, styles.buttonOutline]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default OrangeButton;