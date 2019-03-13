import { StyleSheet } from "react-native";
import { themes } from "./themes";

export const styles = StyleSheet.create({
  container: {
    width: themes.fullWidth / 3,
    height: themes.fullWidth / 3 + 65,
    flexDirection: "column",
    margin: 8,
  },
  tv_name: {
    fontSize: 14,
    color: "black",
    fontWeight: "400",
    marginTop: 4,
  },
  tv_sub: { 
    fontSize: 12, 
  },
  table: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white"
  },
  itemImage: {
    width: themes.fullWidth / 3,
    height: themes.fullWidth / 3,
  },
});
