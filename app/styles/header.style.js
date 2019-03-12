import { StyleSheet, Dimensions } from "react-native";
import { themes } from "./themes";

export var styles = StyleSheet.create({
  container: {
    height: 54,
    alignItems: "center",
  },
  touch: { 
    flex: 1, 
    flexDirection: "row" 
  },
  image: {
    fontSize: 25,
    paddingRight: 8,
    paddingLeft: 8,
    color: "white"
  },
  title: {
    flex: 4,
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  left: {
    flex: 1,
    paddingRight: 8
  },
});
