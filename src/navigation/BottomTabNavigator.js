import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';
import {
  HomeStackNavigator,
  NotifyStackNavigator,
  PostStackNavigator,
  ProfileStackNavigator,
  SearchStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Post') {
            iconName = focused ? 'plus-square-o' : 'plus-square-o';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user-circle-o' : 'user-circle-o';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
          } else if (route.name === 'Notify') {
            iconName = focused ? 'heart' : 'heart';
          }
          return <Icons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarLabel: () => {
          return null;
        },
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
