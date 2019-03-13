import { StyleSheet } from "react-native";
import { themes } from "./themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colorGrayLighter
  },
  parent: {
    backgroundColor: "white",
    marginBottom: 10,
    borderBottomColor: themes.colorGrayLight,
    borderBottomWidth: 0.5
  },
  child_list_1: {
    flexWrap: "wrap", 
    marginLeft: 8,
    marginRight: 8
  },
  child_list_2: {
    flexWrap: "wrap", 
    marginTop: 8,
    marginLeft: 16, 
    marginRight: 16
  },
  line: {
    height: 0.5, 
    backgroundColor: themes.colorGrayLight, 
    marginBottom: 10
  },
  wrapper: {
    width: themes.fullWidth,
    height: themes.fullHeight / 3,
    backgroundColor: "gray"
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  btn_container: {
    flexWrap: 'wrap',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white',
    padding: 20,
  },
  btn: {
    height: 40,
    backgroundColor: themes.colorApp,
    paddingLeft: 50,
    paddingRight: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  btn_text: {
    color: 'white'
  }
});
