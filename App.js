import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LoginStack from './src/containers/route/Route';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
export default class App extends Component {
  render() {
    return (
      <LoginStack/>
    );
  }
}