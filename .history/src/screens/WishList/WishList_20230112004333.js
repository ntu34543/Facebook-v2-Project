import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import firestore from '@react-native-firebase/firestore';
import useFirestoreCollection from '../../hooks/useFirestoreCollection';

const WishList = ({navigation}) => {
  const collection = firestore().collection('wishlist');
  const pageSize = 100;
  const page = 2;
  const {data, loading, error, refresh} = useFirestoreCollection(
    collection,
    pageSize,
    page,
  );

  if (loading) {
    return (
      <View style={ProfileStyle.emptyContainer}>
        <Text style={ProfileStyle.emptyMessageStyle}>Loading...</Text>
      </View>
    );
  }
  return (
    <View>
      {loading ? (
            <ActivityIndicator color="#000000" size="large" />
          ) : (
            <SafeAreaView>
              <FlatList
                keyExtractor={item => item.id}
                numColumns={3}
                data={data.reverse()}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Detail Post', {
                          id: item.id,
                          img: item.img,
                          content: item.content,
                        });
                      }}>
                      <Image
                        style={ProfileBodyStyle.image}
                        source={{uri: item.img}}
                      />
                    </TouchableOpacity>
                  );
                }}
                onRefresh={refresh}
                refreshing={loading}
              />
            </SafeAreaView>
          )}
    </View>
  );
};

export default WishList;

const styles = StyleSheet.create({});
