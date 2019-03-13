import { StyleSheet } from "react-native";
import { themes } from "./themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  tv_label: {
    color: "black",
    fontSize: 14,
    fontWeight: "500"
  },
  tv_name: {
    fontSize: 14,
    color: "black",
    fontWeight: "400"
  },
  table: {
    // borderColor: "black",
    // borderWidth: 1,
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white"
  },
  conTextParent: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderTopWidth: 0.5,
    borderColor: themes.colorGrayLight
  },
  conText: {
    alignSelf: "stretch",
    flex: 1,
    padding: 6
  },
  itemText: {
    fontSize: 12,
    height: 30,
    marginLeft: 10,
    textAlign: "center"
  },
  itemImage: {
    height: 60,
    width: 60
  },
  itemImageSub: {
    width: 20,
    height: 20
  },
  number: {
    flexWrap: "wrap",
    padding: 4,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "700",
    color: themes.colorGray,
  }
});
