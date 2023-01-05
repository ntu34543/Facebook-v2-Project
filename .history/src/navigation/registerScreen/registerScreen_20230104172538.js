import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MenuTabList } from '../menuTabList'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context'

const stack = createNativeStackNavigator();

const RegisterScreen = () => {
  return (
    <SafeAreaView style={{flex: 1,}}>
        
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})