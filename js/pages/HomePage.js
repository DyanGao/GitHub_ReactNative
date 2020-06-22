import * as React from 'react';
//import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PopularPage from '../pages/PopularPage';
import TrendingPage from '../pages/TrendingPage';
import FavoritePage from '../pages/FavoritePage';
import ProfilePage from '../pages/ProfilePage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

/*
function HomePage() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
      }}>
      <Text style={{fontSize: 20, textAlign: 'center', margin: 10}}>
        Popular Page
      </Text>
    </View>
  );
} */

const Tab = createBottomTabNavigator();

function HomePage() {
  return (
    <Tab.Navigator
      initialRouteName="Popular"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="PopularPage"
        component={PopularPage}
        options={{
          tabBarLabel: 'Popular',
          tabBarIcon: ({color, focused}) => (
            <MaterialIcons name={'whatshot'} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="TrendingPage"
        component={TrendingPage}
        options={{
          tabBarLabel: 'Trend',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={'md-trending-up'} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="FavoritePage"
        component={FavoritePage}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({color, focused}) => (
            <MaterialIcons name={'favorite'} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: ({color, focused}) => (
            <Entypo name="user" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomePage;
