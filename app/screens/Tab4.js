import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";

import ScrollableTabView from "react-native-scrollable-tab-view";
import TabBar from "react-native-underline-tabbar";

import HeaderSearch from "../components/HeaderSearch";

import Tab1 from "../screens/tab2/Tab1";
import { themes } from "../styles/themes";

const Page = ({ label }) => <Tab1 />;

export default class Tab4 extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: themes.colorGrayLighter }}>
        <HeaderSearch title="Toàn bộ chuyện" />
        <ScrollableTabView
          style={{ flex: 1, marginTop: -10 }}
          tabBarTextStyle={{
            textAlign: "center",
            fontSize: 14,
            fontWeight: "600"
          }}
          tabBarActiveTextColor="black"
          tabBarInactiveTextColor="gray"
          tabBarBackgroundColor={themes.colorGrayLighter}
          renderTabBar={() => <TabBar underlineColor={themes.colorApp} />}
        >
          <Page tabLabel={{ label: "Tình cảm" }} />
          <Page tabLabel={{ label: "Kiếm hiệp" }} />
          <Page tabLabel={{ label: "Cuộc sống" }} />
          <Page tabLabel={{ label: "Code dạo" }} />
          <Page tabLabel={{ label: "Trinh thám" }} />
          <Page tabLabel={{ label: "Người lớn" }} />
          <Page tabLabel={{ label: "Thần thoại" }} />
        </ScrollableTabView>
      </View>
    );
  }
}
