import { StyleSheet } from "react-native";
import { themes } from "./themes";

export var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    marginLeft: 16,
    marginRight: 16
  },
  title: {
    fontSize: 14,
    color: "black",
    fontWeight: "500"
  },
  view_more: {
    fontSize: 12,
    color: themes.colorBlueLight
  }
});
