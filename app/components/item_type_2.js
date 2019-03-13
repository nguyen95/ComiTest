import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { styles } from "../styles/item_type_2.style";

class ItemType2 extends Component {
  render() {
    const { content } = this.props;
    return (
      <View>
        <TouchableOpacity style={styles.container}>
          <View style={styles.table}>
            <View>
              <Image
                style={styles.itemImage}
                source={require("../resources/cao2.jpg")}
                resizeMode="contain"
              />
            </View>
            <View style={styles.conTextParent}>
              <View style={{justifyContent: "center"}}>
                <Text style={styles.number}>1</Text>
              </View>
              <View style={styles.conText}>
                <Text style={styles.tv_name}>Aaaaaaaa</Text>
                <Text style={{ fontSize: 12, marginTop: 4 }}>Bbbbbbbbbbbb</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(ItemType2);
