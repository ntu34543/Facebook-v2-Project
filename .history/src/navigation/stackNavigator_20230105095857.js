import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomePage from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import MyPosts from '../screens/My Posts/MyPosts';

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Black',
};

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator in screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Posts" component={MyPosts} />
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
