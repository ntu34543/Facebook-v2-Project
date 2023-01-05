import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import Home from '../screens/Home/Home';

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
    <Stack.Navigator screenOptions={screenOptionStyle}>

    </Stack.Navigator>
  )
};
const ProfileStackNavigation = () => {};

export {HomeStackNavigation, ProfileStackNavigation};