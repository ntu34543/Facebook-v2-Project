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
          return <Image source={require('../assets/Icons/home.jpg')}/>;
          // <Icons name={iconName} size={size} color={color} /> 
        },
        headerShown: false,
        tabBarLabel: () => {return null},
      })}>
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{
            title: 'My profile',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={{
                    uri:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                  }}
                />
              );
            },
          }}/>
      <Tab.Screen name="Search" component={SearchStackNavigator} />
      <Tab.Screen name="Post" component={PostStackNavigator} />
      <Tab.Screen name="Notify" component={NotifyStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
