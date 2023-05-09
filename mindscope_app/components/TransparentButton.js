import { Text, TouchableOpacity } from "react-native";

import styles from "../styles/search";

const TransparentButton = ({ text, handlePress }) => {
  return (
    <TouchableOpacity
          onPress={handlePress}
          style={styles.button}>
          <Text style={[styles.transparentButton, styles.buttonOutline]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TransparentButton;