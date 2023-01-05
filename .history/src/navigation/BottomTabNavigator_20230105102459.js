import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import { HomeStackNavigator, ProfileStackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

const screenOptionStyle = ({route}) => {
  tabBarIcon: ({focused, color, size}) => {
    let iconName;
    if (route.name === 'Home') {
      iconName = focused
        ? 'home'
        : 'home';
    } else if (route.name === 'Profile') {
      iconName = focused ? 'profile' : 'profile';
    }
    return <Icons name={iconName} size={size} color={color} />;
  }
  // headerStyle: {
  //   backgroundColor: 'black',
  // },
  // headerTintColor: 'white',
  // headerBackTitle: 'Black',
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptionStyle}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
