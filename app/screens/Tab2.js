import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";

import ScrollableTabView from "react-native-scrollable-tab-view";
import TabBar from "react-native-underline-tabbar";

import HeaderNav from "../components/HeaderNav";

import Tab1 from "../screens/tab2/Tab1";
import { themes } from "../styles/themes";

const Page = ({ label }) => <Tab1 />;

export default class Tab2 extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: themes.colorGrayLighter }}>
        <HeaderNav title="Theo lịch" />
        <ScrollableTabView
          style={{ flex: 1, marginTop: -10 }}
          tabBarTextStyle={{
            textAlign: "center",
            fontSize: 14,
            fontWeight: "600"
          }}
          tabBarTextStyle={{ textAlign: "center", fontSize: 14, margin: 4 }}
          tabBarActiveTextColor="black"
          tabBarInactiveTextColor="gray"
          tabBarBackgroundColor={themes.colorGrayLighter}
          renderTabBar={() => <TabBar underlineColor={themes.colorApp} />}
        >
          <Page tabLabel={{ label: "Thứ hai" }} />
          <Page tabLabel={{ label: "Thứ ba" }} />
          <Page tabLabel={{ label: "Thứ tư" }} />
          <Page tabLabel={{ label: "Thứ năm" }} />
          <Page tabLabel={{ label: "Thứ sáu" }} />
          <Page tabLabel={{ label: "Thứ bảy" }} />
          <Page tabLabel={{ label: "Chủ nhật" }} />
        </ScrollableTabView>
      </View>
    );
  }
}
