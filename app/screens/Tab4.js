import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import ItemType3 from "../components/item_type_3";
import HeaderNav from "../components/HeaderNav";

export default class Tab4 extends Component {
  render() {
    return (
      <View>
        <HeaderNav title="Toàn bộ truyện" />
        <FlatList
          style={{ marginBottom: 54 }}
          data={[1, 2, 3, 4, 5]}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ItemType3 />}
        />
      </View>
    );
  }
}
