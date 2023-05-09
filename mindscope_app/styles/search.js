import { StyleSheet } from "react-native";

import { COLORS, FONT } from "../constants/theme";

const styles = StyleSheet.create({
  
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
  })

  export default styles;