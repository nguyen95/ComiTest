import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import ItemType3 from "../components/item_type_3";
import HeaderNav from "../components/HeaderNav";
import { themes } from "../styles/themes";

export default class Tab1 extends Component {
  render() {
    return (
      <View style={{backgroundColor: themes.colorGrayLighter}}>
        <HeaderNav title="Webtoon của tôi" />
        <FlatList
          overScrollMode="never"
          style={{ marginBottom: 54 }}
          data={[1, 2, 3, 4, 5]}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ItemType3 />}
        />
      </View>
    );
  }
}
