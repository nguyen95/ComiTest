import React, { Component } from "react";
import { Header, Left, Right, Icon, Title, View } from "native-base";
import { styles } from "../styles/header.style";
import { themes } from "../styles/themes";

export default class HeaderNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Header
          style={[styles.container, { backgroundColor: themes.colorApp }]}
          androidStatusBarColor={themes.colorApp}
        >
          {/* <Left style={{ flex: 1 }}>
            <Icon
              type="FontAwesome"
              name="bars"
              style={styles.image}
              // onPress={() => this.props.navigation.openDrawer()}
            />
          </Left> */}
          <Title style={styles.title}>{this.props.title}</Title>
          {/* <Right style={{ flex: 1 }}>
            <Icon
              type="FontAwesome"
              name="bell"
              style={styles.image}
              onPress={() =>
                this.props.navigation.navigate("Notify")
              }
            />
          </Right> */}
        </Header>
      </View>
    );
  }
}
