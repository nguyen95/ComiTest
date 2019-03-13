import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import ItemType2 from "../components/item_type_2";
import { themes } from "../styles/themes";
export default class ItemLIL extends Component {
  render() {
    return (
      <View>
        <FlatList
          style={{width: themes.fullWidth * 2 / 3}}
          data={[1, 2, 3, 4, 5]}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ItemType2 />}
        />
      </View>
    );
  }
}