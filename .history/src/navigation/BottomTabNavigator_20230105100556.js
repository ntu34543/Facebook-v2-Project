import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import { HomeStackNavigator, ProfileStackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  headerShown: false,
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptionStyle}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
