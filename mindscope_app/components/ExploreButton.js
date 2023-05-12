import { Text, TouchableOpacity } from "react-native";

import styles from "../styles/search";

const ExploreButton = ({ text, handlePress }) => {
  return (
    <TouchableOpacity
          onPress={handlePress}
          style={styles.exploreButton}>
          <Text style={[styles.exploreButton]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ExploreButton;