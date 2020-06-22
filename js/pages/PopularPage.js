/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

function PopularTab() {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 10,
      }}>
      <Text>Popular Page</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();
function PopularPage() {
  return (
    <Tab.Navigator style={{flex: 1, marginTop: 30}}>
      <Tab.Screen name="Tab1" component={PopularTab} />
      <Tab.Screen name="Tab2" component={PopularTab} />
    </Tab.Navigator>
  );
}

export default PopularPage;
