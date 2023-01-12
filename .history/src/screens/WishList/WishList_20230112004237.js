import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import firestore from '@react-native-firebase/firestore';
import useFirestoreCollection from '../../hooks/useFirestoreCollection';

const WishList = ({navigation}) => {
  const collection = firestore().collection('posts');
  const pageSize = 100;
  const page = 2;
  const {data, loading, error, refresh} = useFirestoreCollection(
    collection,
    pageSize,
    page,
  );
  return (
    <View>
      <Text>Notify</Text>
    </View>
  );
};

export default WishList;

const styles = StyleSheet.create({});
