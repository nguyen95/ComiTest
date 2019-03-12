import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import ItemType2 from "../components/item_type_2";
import HeaderNav from "../components/HeaderNav";
export default class Tab2 extends Component {
  render() {
    return (
      <View>
        <HeaderNav title="Theo lịch" />
        <FlatList
          style={{ marginBottom: 54 }}
          data={[1, 2, 3, 4, 5]}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ItemType2 />}
        />
      </View>
    );
  }
}
