import React from 'react';
import {Image} from 'react-native';

function LogoTitle() {
  return (
    <Image
      style={{height: 26, width: 150, overflow: 'hidden'}}
      source={require('../assets/images/FASHIONLOGO.png')}
    />
  );
}

export default LogoTitle;
