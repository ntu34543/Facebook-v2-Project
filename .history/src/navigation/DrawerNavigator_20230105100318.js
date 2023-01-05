import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import { HomeStackNavigation, ProfileStackNavigation } from './StackNavigator';

const Drawer = createDrawerNavigator();

const screenOptionStyle = {
  headerShown: false,
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptionStyle}>
      <Tab.Screen name="Home" component={HomeStackNavigation} />
      <Tab.Screen name="Profile" component={ProfileStackNavigation} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
