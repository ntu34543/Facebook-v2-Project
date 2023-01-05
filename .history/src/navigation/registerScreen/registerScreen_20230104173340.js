import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MenuTabList } from '../menuTabList'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context'

const Stack = createNativeStackNavigator();

const RegisterScreen = () => {
  return (
    <SafeAreaView style={{flex: 1,}}>
        <NavigationContainer>
            <Stack.Navigator>
                {MenuTabList.map((e, index) => {
                    const {name, component, title, iconActive, iconUnActive} = e;
                    return (
                        <Stack.Screen
                        key={index}
                        name={name}
                        component={component}
                        options={{
                            tabBarShowLabel: false,
                            tabBarLabel: 
                        }}
                        />
                    )
                })}
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})