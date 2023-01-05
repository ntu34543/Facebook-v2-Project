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
        <Image source={}>
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
          <Icons name="home" size={15} color="white" />
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
