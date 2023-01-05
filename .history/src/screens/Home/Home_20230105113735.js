import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';

const HomePage = ({navigation}) => {
  navigation.setOptions(
    {
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/images/chat.jpg')} />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/images/camera.jpg')} />
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
    tabBarLabel
  });
  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
