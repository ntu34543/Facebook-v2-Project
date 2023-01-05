import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>index</Text>
      <Button title='Move' onPress={navigation.push('Profile')}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})