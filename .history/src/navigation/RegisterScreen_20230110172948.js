import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomTabNavigator from './BottomTabNavigator';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import ForgotPassword from '../screens/Auth/ForgotPassword';

const Stack = createNativeStackNavigator();

const RegisterScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> */}
          <Stack.Screen name="Home" component={BottomTabNavigator} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});