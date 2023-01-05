import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomePage = ({navigation}) => {
  return (
    <View>
      <Text>index</Text>
      <Button title='Move' onPress={() => navigation.push('')}/>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
