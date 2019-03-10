import React, { Component } from "react";
import { Image } from "react-native";
import Icon from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Tab1 from "../app/screens/Tab1"
import Tab2 from "../app/screens/Tab2"
import Tab3 from "../app/screens/Tab3"
import Tab4 from "../app/screens/Tab4"
import Tab5 from "../app/screens/Tab5"
import { themes } from "./styles/themes";
import { styles } from "./styles/style.tabbar";

const Stack = createMaterialBottomTabNavigator(
  {
    Tab1: {
       screen: Tab1,
    },
    Tab2: {
       screen: Tab2,
    },
    Tab3: {
       screen: Tab3,
    },
    Tab4: { 
      screen: Tab4,
    },
    Tab5: { 
      screen: Tab5,
    },
  }, 
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch(routeName) {
          case "Tab1": iconName = "home"; break;
          case "Tab2": iconName = "calendar"; break;
          case "Tab3": iconName = "bookmark"; break;
          case "Tab4": iconName = "book"; break;
          case "Tab5": iconName = "cog"; break;
        }
        return <FontAwesome type="FontAwesome" name={iconName} color={tintColor} size={20}/>;
      },
    }),
    initialRouteName: "Tab1",
    labeled: false,
    barStyle: styles.barStyle,
    activeTintColor: themes.colorApp,
    inactiveTintColor: themes.colorGray,
    backBehavior: "none",

  }
);

  const Main = createAppContainer(Stack);

export default class App extends Component {
    render() {
      console.disableYellowBox = true;
        return(
            <Main></Main>
        );
    }
}