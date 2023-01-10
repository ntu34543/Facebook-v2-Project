import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomTabNavigator from './BottomTabNavigator';

import { LoginScreenStackNavigator } from './StackNavigator';
const RegisterScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <LoginScreenStackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});