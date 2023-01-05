import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import { HomeStackNavigation, ProfileStackNavigation } from './stackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptionStyle}>
      <Tab.Screen name="Home" component={HomeStackNavigation} />
      <Tab.Screen name="Profile" component={Home} />
    </Tab.Navigator>
  );
};

export {BottomTabNavigator};
