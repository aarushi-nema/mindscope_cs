import { StyleSheet } from "react-native";

import { COLORS, FONT } from "../constants/theme";

const styles = StyleSheet.create({
  notificationButton: {
    backgroundColor: COLORS.white,
    width: '100%',
    borderRadius: 10,
    padding: 7,
    fontFamily: FONT.Oxygen,

  },
  orangeButton: {
    backgroundColor: COLORS.crayola,
    width: '100%',
    padding: 6,
    textAlign: 'center',
    borderRadius: 10,
    marginTop: 5,
    fontFamily: FONT.Oxygen,
    fontSize: 15
  },
  transparentButton: {
    width: '100%',
    textAlign: 'center',
    borderRadius: 10,
    fontWeight: 'bold',
    fontFamily: FONT.Oxygen_Bold
  },
  exploreButton: {
    backgroundColor: COLORS.green,
    width: '100%',
    borderRadius: 10,
    fontSize: 14,
    fontFamily: FONT.Oxygen,
    padding: 3,
    textAlign: 'center',
  }
  })

  export default styles;