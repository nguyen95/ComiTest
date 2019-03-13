import React, { Component } from "react";
import { View, Text, FlatList, ScrollView, StatusBar } from "react-native";
import { Button } from "native-base";
import Swiper from "react-native-swiper";
import ItemType1 from "../components/item_type_1";
import ItemLIL from "../components/Item_list_in_list";
import HeaderList from "../components/HeaderList";
import { styles } from "../styles/tab1_style";
import { themes } from "../styles/themes";

export default class Tab1 extends Component {
  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false} overScrollMode="never">
        <StatusBar backgroundColor={themes.colorApp} />
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
        <View style={styles.parent}>
          <HeaderList title="Truyện mới hôm nay" />
          <FlatList
            overScrollMode="never"
            style={styles.child_list_1}
            horizontal
            // pagingEnabled={true}
            data={[1, 2, 3, 4, 5]}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <ItemType1 />}
          />
        </View>
        <View style={styles.parent}>
          <HeaderList title="Được đánh giá cao" />
          <FlatList
            overScrollMode="never"
            style={styles.child_list_1}
            horizontal
            // pagingEnabled={true}
            data={[1, 2, 3, 4, 5]}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <ItemType1 />}
          />
        </View>
        <View style={styles.line} />
        <View style={styles.parent}>
          <HeaderList title="Top truyện Việt Nam" />
          <FlatList
            overScrollMode="never"
            style={styles.child_list_2}
            horizontal
            // pagingEnabled={true}
            data={[1, 2]}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <ItemLIL />}
          />
        </View>
        <View style={styles.parent}>
          <HeaderList title="Top truyện Nước ngoài" />
          <FlatList
            overScrollMode="never"
            style={styles.child_list_2}
            horizontal
            // pagingEnabled={true}
            data={[1, 2]}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <ItemLIL />}
          />
        </View>
        <View style={styles.btn_container}>
          <View style={styles.btn}>
            <Text style={styles.btn_text}> Đăng nhập / Đăng kí </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
