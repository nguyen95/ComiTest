import { StyleSheet } from "react-native";
import { themes } from "./themes";

export const styles = StyleSheet.create({
  tv_title: {
    fontSize: 12, 
    padding: 8,
    marginLeft: 16,
    marginTop: 24,
  },
  tv_label: {
    fontSize: 14, 
    color: 'black',
  },
  label_container: {
    marginTop: 1,
    flexDirection: 'row',
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: 'white',
    height: 38,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  copy_right: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center', 
    padding: 24
  }
});
