import React from 'react';
import {View, Text, TouchableOpacity, Button, Image} from 'react-native';

function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50, backgroundColor: 'red'}}
      source={require('../assets/images/Instagram Logo.jpg')}
    />
  );
}

export default LogoTitle;