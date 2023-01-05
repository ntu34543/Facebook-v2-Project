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
import Icons from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

const screenOptionStyle = ({route}) => {
  (
    tabBarIcon: ({focused, color, size}) => {
      let iconName;
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Details') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              }
              return <Icons name={iconName} size={size} color={color} />;
            },
  )
  }
  // headerStyle: {
  //   backgroundColor: 'black',
  // },
  // headerTintColor: 'white',
  // headerBackTitle: 'Black',
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Posts" component={MyPosts} />
    </Stack.Navigator>
  );
};
const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export {HomeStackNavigator, ProfileStackNavigator};
