import React, { Component } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import Swiper from "react-native-swiper";
import ItemType1 from "../components/item_type_1";
import { styles } from "../styles/tab1_style";

export default class Tab1 extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, marginBottom: 54 }} showsVerticalScrollIndicator={false}>
        <Swiper
          style={styles.wrapper}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          autoplay={true}
          showsPagination={true}
        >
          <View style={styles.slide1}>
            <Text style={styles.text}>Android</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Ios</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>Flutter - React</Text>
          </View>
        </Swiper>
        <FlatList
          style={{ flexWrap: "wrap" }}
          horizontal
          pagingEnabled={true}
          data={[1, 2, 3, 4, 5]}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ItemType1 />}
        />
      </ScrollView>
    );
  }
}
