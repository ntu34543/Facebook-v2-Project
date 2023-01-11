import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';
import {FlatList} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import useFirestoreCollection from '../../hooks/useFirestoreCollection';
import React, {useEffect} from 'react';

const Profile = ({navigation}) => {
  const collection = firestore().collection('posts');
  const pageSize = 6;
  const page = 2;
  const {data, loading, error, refresh} = useFirestoreCollection(
    collection,
    pageSize,
    page,
  );

  console.log(data);
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
  const renderEmpty = () => {
    return (
      <View style={HomeStyle.emptyContainer}>
        <Text style={HomeStyle.emptyMessageStyle}>Empty</Text>
      </View>
    );
  };

  const [image, setImage] = useState([
    {
      img: require('../../assets/images/img1.jpg'),
    },
    {
      img: require('../../assets/images/img1.jpg'),
    },
    {
      img: require('../../assets/images/img1.jpg'),
    },
    {
      img: require('../../assets/images/img1.jpg'),
    },
    {
      img: require('../../assets/images/img1.jpg'),
    },
    {
      img: require('../../assets/images/img1.jpg'),
    },
    {
      img: require('../../assets/images/img1.jpg'),
    },
    {
      img: require('../../assets/images/img1.jpg'),
    },
    {
      img: require('../../assets/images/img1.jpg'),
    },
  ]);
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
            onPress={() => navigation.push('Detail Profile')}>
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

  function FeedPostBody() {
    return (
      <View>
        <TouchableOpacity style={ProfileBodyStyle.store}>
          <Image source={require('../../assets/Icons/store.jpg')} />
        </TouchableOpacity>
        <View style={ProfileBodyStyle.body}>
          <FlatList
            ListEmptyComponent={renderEmpty}
            keyExtractor={item => item.id}
            numColumns={3}
            data={data}
            renderItem={({item}) => {
              return (
                <View>
                  <Image style={ProfileBodyStyle.image} source={item.img} />
                </View>
              );
            }}
            onRefresh={refresh}
            refreshing={loading}
          />
        </View>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={ProfileStyle.container}>
        <FeedPostHeader />
        <FeedPostBody />
      </View>
    </ScrollView>
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
