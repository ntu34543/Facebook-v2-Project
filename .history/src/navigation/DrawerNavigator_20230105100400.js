import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import { HomeStackNavigation, ProfileStackNavigation } from './StackNavigator';
import Re

const Drawer = createDrawerNavigator();

const screenOptionStyle = {
  headerShown: false,
}

const BottomTabNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={screenOptionStyle}>
      <Drawer.Screen name="Home" component={HomeStackNavigation} />
      <Drawer.Screen name="Profile" component={ProfileStackNavigation} />
    </Drawer.Navigator>
  );
};

export default BottomTabNavigator;
