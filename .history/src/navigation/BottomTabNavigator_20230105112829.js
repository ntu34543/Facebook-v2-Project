import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeStackNavigator, ProfileStackNavigator, PostStackNavigator} from './StackNavigator';
import Icons from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Post') {
            iconName = focused ? 'plus-square-o' : 'plus-square-o';
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'user-circle-o' : 'user-circle-o';
          }
          return <Icons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Post" component={PostStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
