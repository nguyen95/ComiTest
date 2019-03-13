import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import HeaderNav from "../components/HeaderNav";

import Tab1 from "../screens/tab2/Tab1";
import { themes } from "../styles/themes";

const Stack = createMaterialTopTabNavigator(
  {
    Tab1: {
      screen: Tab1
    },
    Tab2: {
      screen: Tab1
    },
    Tab3: {
      screen: Tab1
    },
    Tab4: {
      screen: Tab1
    },
    Tab5: {
      screen: Tab1
    },
    Tab6: {
      screen: Tab1
    },
    Tab7: {
      screen: Tab1
    },
    Tab8: {
      screen: Tab1
    }
  },
  {
    tabBarOptions: {
      activeTintColor: themes.colorApp,
      inactiveTintColor: themes.colorGrayLight,
      backBehavior: "none",
      showLabel: true,
      scrollEnabled: true,
    },
    animationEnabled: true,
  }
);

export default class Tab4 extends Component {
  render() {
    return (
      <View>
        <HeaderNav title="Theo lịch" />
        <Stack style={{flex: 1, marginBottom: 54}}></Stack>
      </View>
    );
  }
}

