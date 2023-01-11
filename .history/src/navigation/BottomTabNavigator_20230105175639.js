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
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            <Image source={require('../assets/Icons/home.jpg')}/>
          } else if (route.name === 'Post') {
            <Image source={require('../assets/Icons/home.jpg')}/>
          } else if (route.name === 'Profile') {
            <Image source={require('../assets/Icons/home.jpg')}/>
          } else if (route.name === 'Search') {
            <Image source={require('../assets/Icons/home.jpg')}/>
          } else if (route.name === 'Notify') {
            <Image source={require('../assets/Icons/home.jpg')}/>
          }
          // return <Image source={require('../assets/Icons/home.jpg')}/>;
          // <Icons name={iconName} size={size} color={color} /> 
        },
        headerShown: false,
        tabBarLabel: () => {return null},
      })}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Search" component={SearchStackNavigator} />
      <Tab.Screen name="Post" component={PostStackNavigator} />
      <Tab.Screen name="Notify" component={NotifyStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
