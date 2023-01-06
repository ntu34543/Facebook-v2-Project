import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

const Option = props => {
  return (
    <View style={styles.container}>
      <Icons name={props.nameIcon} size={15} color={'black'} />
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#CCCCCC',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginLeft: 20,
    height: 30,
    marginBottom: 20,
  },
  text: {
    color: 'black',
    marginLeft: 10,
  },
});
