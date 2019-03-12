import { StyleSheet } from "react-native";
import { themes } from "./themes";

export const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    width: themes.fullWidth,
    // height: themes.fullHeight / 5,
    flexDirection: "row",
    padding: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: themes.colorGrayLight,
    backgroundColor: 'white'
  },
  tv_name: {
    fontSize: 15,
    color: "black",
    fontWeight: "400",
  },
  tv_sub: { 
    fontSize: 14, 
    marginTop: 4,
  },
  tv_icon: { 
    fontSize: 13, 
    marginLeft: 3,
  },
  table: {
    // borderColor: "black",
    // borderWidth: 1,
    flexWrap: 'wrap',
    alignSelf: "stretch",
    flexDirection: "row",
    backgroundColor: "white"
  },
  conTextParent: {
    flexDirection: "column",
    backgroundColor: "white",
    marginLeft: 5,
  },
  conText: {
    alignSelf: "stretch",
    padding: 8
  },
  itemText: {
    fontSize: 12,
    height: 30,
    marginLeft: 10,
    textAlign: "center"
  },
  itemImage: {
    width: themes.fullWidth / 4.5,
    height: themes.fullWidth / 4.5 / 396 * 557,
    // maxWidth: themes.fullWidth / 4,
  },
  smallImage: {
    width: 15,
    height: 15,
  },
  image_text: {
    flexDirection: "row",
    marginTop: 4,
  }
});
