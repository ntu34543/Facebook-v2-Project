import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import useLoadMore from '../../hooks/useLoadMore';
import React, {useEffect} from 'react';
import HomePost from '../../components/Home/HomePost';
import database from '@react-native-firebase/database';

const HomePage = ({navigation}) => {
  const reference = database().ref('posts');
  const ref =database().ref('items');
  const limit = 10;
  const { items, loading, endReached, loadMore } = useLoadMore(ref, limit);

  console.log(items);
  // useEffect(() => {
  //   refresh();
  // }, []);

  if (loading) {
    return (
      <View style={HomeStyle.emptyContainer}>
        <Text style={HomeStyle.emptyMessageStyle}>Loading...</Text>
      </View>
    );
  }

  navigation.setOptions(
    {
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/Icons/chat.jpg')} />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/Icons/camera.jpg')} />
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

  const renderEmpty = () => {
    return (
      <View style={HomeStyle.emptyContainer}>
        <Text style={HomeStyle.emptyMessageStyle}>Empty</Text>
      </View>
    );
  };

  return (
    <>
      {loading ? (
        <View></View>
      ) : (
        <FlatList
          style={HomeStyle.container}
          ListEmptyComponent={renderEmpty}
          keyExtractor={item => item.id}
          data={items}
          renderItem={({item}) => {
            return <HomePost item={item} />;
          }}
          onRefresh={refresh}
          refreshing={loading}
        />
      )}
    </>
  );
};

export default HomePage;

const HomeStyle = StyleSheet.create({
  container: {
    // marginBottom: 20,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  emptyMessageStyle: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
  },
  emptyContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
