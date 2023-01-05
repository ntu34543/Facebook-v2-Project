import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MenuTabList } from '../menuTabList'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const stack = createNativeStackNavigator();

const RegisterScreen = () => {
  return (
    <View>
      <Text>registerScreen</Text>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})