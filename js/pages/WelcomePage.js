/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';

export default class WelcomePage extends React.Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      NavigationUtil.resetToHomePage(this.props);
    }, 200);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Welcome Page</Text>
      </View>
    );
  }
}
