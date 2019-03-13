import { StyleSheet } from "react-native";
import { themes } from "./themes";

export var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 30,
    alignItems: "center",
    justifyContent: 'space-between',
    marginLeft: 16,
    marginRight: 16
  },
  title: {
    fontSize: 16,
    color: "black",
    fontWeight: "400"
  },
  view_more: {
    fontSize: 12,
    color: themes.colorApp
  }
});
