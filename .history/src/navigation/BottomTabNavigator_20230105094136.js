import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import { HomeStackNavigation } from './stackNavigator';

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Black',
};

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export {HomeStackNavigation, ProfileStackNavigation};
