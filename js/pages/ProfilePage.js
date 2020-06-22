/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View} from 'react-native';

function ProfilePage() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
      }}>
      <Text style={{fontSize: 20, textAlign: 'center', margin: 10}}>
        Profile Page
      </Text>
    </View>
  );
}

export default ProfilePage;
