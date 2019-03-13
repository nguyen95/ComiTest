import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons"
import HeaderNav from "../components/HeaderNav";
import { themes } from "../styles/themes";
import { styles } from "../styles/tab5_style";
export default class Tab5 extends Component {
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        style={{ backgroundColor: themes.colorGrayLighter2 }}
      >
        <HeaderNav title="Thông tin thêm" />
        <View style={{height: 20}}></View>
        <Text style={styles.tv_title}>Thông tin tài khoản</Text>
        <View style={styles.label_container}>
          <Text style={styles.tv_label}>Đăng nhập / Đăng ký</Text>
          <MaterialIcons name="chevron-right" size={28}/>
        </View>
        <Text style={styles.tv_title}>Cài đặt</Text>
        <View style={styles.label_container}>
          <Text style={styles.tv_label}>Ngôn ngữ</Text>
          <MaterialIcons name="chevron-right" size={28}/>
        </View>
        <View style={styles.label_container}>
          <Text style={styles.tv_label}>Nhận thông báo</Text>
          <MaterialIcons name="toggle-switch-outline" size={32}/>
        </View>
        <Text style={styles.tv_title}>Cửa hàng xu</Text>
        <View style={styles.label_container}>
          <Text style={styles.tv_label}>0 xu</Text>
          <MaterialIcons name="chevron-right" size={28}/>
        </View>
        <View style={styles.label_container}>
          <Text style={styles.tv_label}>Xu miễn phí</Text>
          <MaterialIcons name="chevron-right" size={28}/>
        </View>
        <Text style={styles.tv_title}>Hỗ trợ kĩ thuật</Text>
        <View style={styles.label_container}>
          <Text style={styles.tv_label}>Liên hệ hỗ trợ</Text>
          <MaterialIcons name="chevron-right" size={28}/>
        </View>
        <View style={styles.label_container}>
          <Text style={styles.tv_label}>Điều khoản sử dụng</Text>
          <MaterialIcons name="chevron-right" size={28}/>
        </View>

        <View style={styles.copy_right}>
          <Text>COMI 1.3.1 © 2018 Comicola</Text>
        </View>
      </ScrollView>
    );
  }
}
