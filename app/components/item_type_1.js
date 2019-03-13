import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { styles } from "../styles/item_type_1.style";

class ItemType1 extends Component {
  render() {
    const { content } = this.props;
    return (
      <View>
        <TouchableOpacity style={styles.container}>
          <View style={styles.table}>
            <Image
              style={styles.itemImage}
              source={require("../resources/cao.jpg")}
              resizeMode="contain"
            />
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.tv_name}>
              Ba Con Mèo
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.tv_sub}>
              Ba bốn năm
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(ItemType1);
