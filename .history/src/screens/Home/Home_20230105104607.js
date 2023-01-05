import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const HomePage = ({navigation}) => {
  navigation.setOptions(
    {
      headerRight: () => (
        <Button title="count" onPress={() => setCount(count + 1)} />
      ),
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            borderWidth: 1,
            backgroundColor: '#00000099',
            paddingVertical: 10,
            paddingHorizontal: 12,
            borderRadius: 99,
          }}>
          <Icon name="chevron-left" size={15} color="white" />
        </TouchableOpacity>
      ),
    },
    [navigation],
  );
  navigation.setOptions({
    headerTitleAlign: 'center',
    presentation: 'modal',
    animationTypeForReplace: 'push',
    animation: 'slide_from_right',
  });
  return (
    <View>
      <Text>index</Text>
      <Button title="Move" onPress={() => navigation.push('Posts')} />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
