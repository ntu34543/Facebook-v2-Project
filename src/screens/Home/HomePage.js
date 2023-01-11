import firestore from '@react-native-firebase/firestore';
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HomePost from '../../components/Home/HomePost';
import useFirestoreCollection from '../../hooks/useFirestoreCollection';

const HomePage = ({navigation}) => {
  // const ref = database().ref('posts');
  // const limit = 10;
  // console.log(ref);
  // const {items, loading, endReached, loadMore} = useLoadMore(ref, limit);

  const collection = firestore().collection('posts');
  const pageSize = 100;
  const page = 2;
  const {data, loading, error, refresh} = useFirestoreCollection(
    collection,
    pageSize,
    page,
  );

  useEffect(() => {
    refresh();
  }, []);

  if (loading) {
    return (
      <View style={HomeStyle.emptyContainer}>
        <Text style={HomeStyle.emptyMessageStyle}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={HomeStyle.emptyContainer}>
        <Text style={HomeStyle.emptyMessageStyle}>Error: {error.message}</Text>
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
        <ActivityIndicator color="#000000" size="large" />
      ) : (
        // <HomePost />
        <FlatList
          ListEmptyComponent={renderEmpty}
          keyExtractor={item => item.id}
          data={data.reverse()}
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
