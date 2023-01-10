import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomePage from '../screens/Home/HomePage';
import DetailProfile from '../screens/Profile/detailProfile';
import Profile from '../screens/Profile/Profile';
import MyPosts from '../screens/My Posts/MyPosts';
import LogoTitle from '../themes/LogoTitle';
import Search from '../screens/Search/Search';
import Notify from '../screens/Notify/Notify';

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
  headerStyle: {
    backgroundColor: 'white',
  },
  headerTintColor: 'black',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitleAlign: 'center',
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{headerTitle: props => <LogoTitle {...props} />}}
      />
    </Stack.Navigator>
  );
};
const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="Detail Profile"
        component={DetailProfile}
        options={{
          headerTitle: 'Edit Profile',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../../assets/Icons/Bar.jpg')} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
const PostStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Post" component={MyPosts} />
    </Stack.Navigator>
  );
};
const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};
const NotifyStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Notify" component={Notify} />
    </Stack.Navigator>
  );
};

// const LoginScreenStackNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={screenOptionStyle}>
//       <Stack.Screen name="Login" component={Login} options={{headerShown: false,}}/>
//       <Stack.Screen name="Register" component={Register} options={{headerShown: false,}}/>
//       <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false,}}/>
//     </Stack.Navigator>
//   );
// };

export {
  HomeStackNavigator,
  ProfileStackNavigator,
  PostStackNavigator,
  SearchStackNavigator,
  NotifyStackNavigator,
};
