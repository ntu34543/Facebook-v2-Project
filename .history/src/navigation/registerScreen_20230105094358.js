import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const RegisterScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
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
                  tabBarLabel: ({color, sized, focused}) => (
                    <Text
                      style={{
                        color: focused ? 'rgb(18, 136, 58)' : 'grey',
                        fontSize: 10,
                        fontWeight: focused ? 'bold' : 'normal',
                      }}>
                      {title}
                    </Text>
                  ),
                  tabBarIcon: ({color, sized, focused}) => (
                    <Image
                      source={focused ? iconActive : iconUnActive}
                      style={{
                        width: '100%',
                        height: '100%',
                        tintColor: '#0d8af0',
                      }}
                    />
                  ),
                }}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
