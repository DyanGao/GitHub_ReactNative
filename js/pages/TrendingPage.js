/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View} from 'react-native';

function TrendingPage() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
      }}>
      <Text style={{fontSize: 20, textAlign: 'center', margin: 10}}>
        Trending Page
      </Text>
    </View>
  );
}

export default TrendingPage;
