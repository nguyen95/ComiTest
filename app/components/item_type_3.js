import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { withNavigation } from "react-navigation";
import { styles } from "../styles/item_type_3.style";

class ItemType3 extends Component {
  render() {
    const { content } = this.props;
    return (
      <View>
        <TouchableOpacity style={styles.container}>
          <View style={styles.table}>
            <View >
              <Image
                style={styles.itemImage}
                source={require("../resources/ghost.jpg")}
                resizeMode="contain"
              />
            </View>
            <View style={styles.conTextParent}>
              <View style={styles.conText}>
                <Text style={styles.tv_name}>Aaaaaaaa</Text>
                <Text style={styles.tv_sub}>Bbbbbbbbbbbb</Text>
                <View style={styles.image_text}>
                  <Image
                    style={styles.smallImage}
                    source={require("../resources/star.png")}
                  />
                  <Text style={styles.tv_icon}>5</Text>
                </View>
                <View style={styles.image_text}>
                  <Image
                    style={styles.smallImage}
                    source={require("../resources/new.png")}
                  />
                  <Text style={styles.tv_icon}>Chương 66</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(ItemType3);
