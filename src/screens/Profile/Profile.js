import firestore from '@react-native-firebase/firestore';

import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useFirestoreCollection from '../../hooks/useFirestoreCollection';

const Profile = ({navigation}) => {
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
      <View style={ProfileStyle.emptyContainer}>
        <Text style={ProfileStyle.emptyMessageStyle}>Loading...</Text>
      </View>
    );
  }

  navigation.setOptions(
    {
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/Icons/Bar.jpg')} />
        </TouchableOpacity>
      ),
    },
    [navigation],
  );

  function FeedPostHeader() {
    return (
      <View style={ProfileHeaderStyle.container}>
        <View style={ProfileHeaderStyle.information}>
          <View style={ProfileHeaderStyle.userAvatar}>
            <TouchableOpacity>
              <Image
                style={ProfileHeaderStyle.avatarImg}
                source={require('../../assets/images/avatar1.jpg')}
              />
            </TouchableOpacity>
          </View>
          <View style={ProfileHeaderStyle.userStatistics}>
            <Text style={ProfileHeaderStyle.number}>54</Text>
            <Text style={ProfileHeaderStyle.heading}>Posts</Text>
          </View>
          <View style={ProfileHeaderStyle.userStatistics}>
            <Text style={ProfileHeaderStyle.number}>834</Text>
            <Text style={ProfileHeaderStyle.heading}>Followers</Text>
          </View>
          <View style={ProfileHeaderStyle.userStatistics}>
            <Text style={ProfileHeaderStyle.number}>162</Text>
            <Text style={ProfileHeaderStyle.heading}>Following</Text>
          </View>
        </View>
        <View style={ProfileHeaderStyle.userInf}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Jacob West</Text>
          <Text style={{color: 'black', width: 220}}>
            Digital goodies designer{' '}
            <Text style={{color: 'rgba(5, 56, 107, 1)'}}>@pixsellz</Text>{' '}
            Everything is designed.
          </Text>
        </View>
        <View style={ProfileHeaderStyle.userBtn}>
          <TouchableOpacity
            style={ProfileHeaderStyle.button}
            onPress={() => navigation.push('Add profile')}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
        <View style={ProfileHeaderStyle.userStory}>
          <View style={ProfileHeaderStyle.story}>
            <TouchableOpacity style={ProfileHeaderStyle.addNewStory}>
              <Image source={require('../../assets/Icons/plus.jpg')} />
            </TouchableOpacity>
            <Text style={ProfileStyle.text}>New</Text>
          </View>
          <View style={ProfileHeaderStyle.story}>
            <TouchableOpacity>
              <Image
                style={ProfileHeaderStyle.addNewStory}
                source={require('../../assets/images/avatar2.jpg')}
              />
            </TouchableOpacity>
            <Text style={ProfileStyle.text}>Friends</Text>
          </View>
          <View style={ProfileHeaderStyle.story}>
            <TouchableOpacity>
              <Image
                style={ProfileHeaderStyle.addNewStory}
                source={require('../../assets/images/avatar3.jpg')}
              />
            </TouchableOpacity>
            <Text style={ProfileStyle.text}>Sport</Text>
          </View>
          <View style={ProfileHeaderStyle.story}>
            <TouchableOpacity>
              <Image
                style={ProfileHeaderStyle.addNewStory}
                source={require('../../assets/images/avatar4.jpg')}
              />
            </TouchableOpacity>
            <Text style={ProfileStyle.text}>Design</Text>
          </View>
        </View>
      </View>
    );
  }

  // const listMyPost = data.map(item => {
  //   return (
  //     <View>
  //       <Image style={ProfileBodyStyle.image} source={{uri: item.img}} />
  //     </View>
  //   );
  // });

  return (
    <View style={ProfileStyle.container}>
      <FeedPostHeader />
      {/* <FeedPostBody /> */}
      <View>
        <TouchableOpacity style={ProfileBodyStyle.store}>
          <Image source={require('../../assets/Icons/store.jpg')} />
        </TouchableOpacity>
        <View style={ProfileBodyStyle.body}>
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
      </View>
      {/* <FeedPostBody /> */}
    </View>
  );
};

export default Profile;

const ProfileStyle = StyleSheet.create({
  container: {
    // marginBottom: 20,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: 'black',
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

const ProfileHeaderStyle = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  information: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userAvatar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImg: {
    paddingRight: 10,
    height: 96,
    width: 96,
    borderRadius: 25,
  },
  userStatistics: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  heading: {
    color: 'black',
    fontSize: 16,
  },
  userInf: {
    paddingVertical: 15,
  },
  userBtn: {
    marginBottom: 15,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'rgba(60, 60, 67, 0.18)',
    borderRadius: 5,
    paddingVertical: 7,
  },
  userStory: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 35,
  },
  story: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addNewStory: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 64,
    width: 64,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: '#C7C7CC',
  },
});

const ProfileBodyStyle = StyleSheet.create({
  image: {
    width: 131,
    height: 131,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  store: {
    display: 'flex',
    alignItems: 'center',
    borderWidth: 1,
    borderRightColor: 'rgba(60, 60, 67, 0.18)',
    borderLeftColor: 'rgba(60, 60, 67, 0.18)',
    borderTopColor: 'rgba(60, 60, 67, 0.18)',
    borderBottomColor: '#262626',
    paddingVertical: 10,
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
  },
});
