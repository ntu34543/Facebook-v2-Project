import React from 'react';
import {View, Text, TouchableOpacity, Button, Image} from 'react-native';

function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('../assets/images/Instagram Logo.png')}
    />
  );
}

export default LogoTitle;