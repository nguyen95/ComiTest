import { StyleSheet } from "react-native";
import { themes } from "./themes";

export const styles = StyleSheet.create({
  container: {
    width: themes.fullWidth / 2.5,
    height: themes.fullWidth / 2.5 + 65,
    flexDirection: "column",
    margin: 5,
  },
  tv_name: {
    fontSize: 14,
    color: "black",
    fontWeight: "400",
  },
  tv_sub: { 
    fontSize: 12, 
    marginTop: 2,
  },
  table: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white"
  },
  itemImage: {
    flex: 1,
    width: themes.fullWidth / 2.5,
  },
});
