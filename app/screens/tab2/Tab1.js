import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import ItemType3 from "../../components/item_type_3";
export default class Tab11 extends Component {
  render() {
    return (
      <View >
        <FlatList
          data={[1, 2, 3, 4, 5]}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ItemType3 />}
        />
      </View>
    );
  }
}
