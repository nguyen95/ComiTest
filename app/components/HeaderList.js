import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { styles } from "../styles/header_list.style";

class HeaderList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.view_more}>Xem thêm >></Text>
      </View>
    );
  }
}

export default withNavigation(HeaderList);
j