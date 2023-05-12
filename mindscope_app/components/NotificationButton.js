import { Text, TouchableOpacity } from "react-native";

import styles from "../styles/search";

const NotificationButton = ({ text, handlePress }) => {
  return (
    <TouchableOpacity
          onPress={handlePress}
          style={styles.notificationButton}>
          <Text style={[styles.notificationButton]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default NotificationButton;