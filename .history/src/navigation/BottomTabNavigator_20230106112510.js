import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  HomeStackNavigator,
  ProfileStackNavigator,
  PostStackNavigator,
  SearchStackNavigator,
  NotifyStackNavigator,
} from './StackNavigator';
import Icons from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabel: () => {
          return null;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: size, height: size}}
                source={require('../assets/Icons/home.jpg')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: size, height: size}}
                source={require('../assets/Icons/search.jpg')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostStackNavigator}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: size, height: size}}
                source={require('../assets/Icons/post.jpg')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Notify"
        component={NotifyStackNavigator}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: 32, height: 32}}
                source={require('../assets/Icons/heartNone.jpg')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: size, height: size}}
                source={require('../assets/Icons/user.jpg')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
