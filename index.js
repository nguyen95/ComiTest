import React from 'react';
import {AppRegistry, YellowBox} from 'react-native';
import {name as appName} from './app.json';
import { Provider } from 'react-native-paper';

const App2 = require("../ComiTest/app/App").default;

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

export default function Main() {
    return (
      <Provider>
        <App2 />
      </Provider>
    );
  }

AppRegistry.registerComponent(appName, () => Main);
