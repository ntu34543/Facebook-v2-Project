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
import React from 'react';

const DetailProfile = ({navigation}) => {
  navigation.setOptions(
    {
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{color: 'rgba(56, 151, 240, 1)', fontWeight: 'bold', fontSize: 16}}>Done</Text>
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>Cancer</Text>
        </TouchableOpacity>
      ),
    },
    [navigation],
  );

  function FeedPostHeader() {
    return (
      <View style={FeedPostHeaderStyle.container}>
        <View style={FeedPostHeaderStyle.information}>
          <View style={FeedPostHeaderStyle.userAvatar}>
            <TouchableOpacity>
              <Image
                style={FeedPostHeaderStyle.avatarImg}
                source={require('../../assets/images/avatar1.jpg')}
              />
            </TouchableOpacity>
          </View>
          <View style={FeedPostHeaderStyle.userStatistics}>
            <Text style={FeedPostHeaderStyle.number}>54</Text>
            <Text style={FeedPostHeaderStyle.heading}>Posts</Text>
          </View>
          <View style={FeedPostHeaderStyle.userStatistics}>
            <Text style={FeedPostHeaderStyle.number}>834</Text>
            <Text style={FeedPostHeaderStyle.heading}>Followers</Text>
          </View>
          <View style={FeedPostHeaderStyle.userStatistics}>
            <Text style={FeedPostHeaderStyle.number}>162</Text>
            <Text style={FeedPostHeaderStyle.heading}>Following</Text>
          </View>
        </View>
        <View style={FeedPostHeaderStyle.userInf}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Jacob West</Text>
          <Text style={{color: 'black', width: 220}}>
            Digital goodies designer{' '}
            <Text style={{color: 'rgba(5, 56, 107, 1)'}}>@pixsellz</Text>{' '}
            Everything is designed.
          </Text>
        </View>
        <View style={FeedPostHeaderStyle.userBtn}>
          <TouchableOpacity
            style={FeedPostHeaderStyle.button}
            onPress={() => navigation.push('Detail Profile')}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
        <View style={FeedPostHeaderStyle.userStory}>
          <View style={FeedPostHeaderStyle.story}>
            <TouchableOpacity style={FeedPostHeaderStyle.addNewStory}>
              <Image source={require('../../assets/Icons/plus.jpg')} />
            </TouchableOpacity>
            <Text style={FeedPostStyle.text}>New</Text>
          </View>
          <View style={FeedPostHeaderStyle.story}>
            <TouchableOpacity>
              <Image
                style={FeedPostHeaderStyle.addNewStory}
                source={require('../../assets/images/avatar2.jpg')}
              />
            </TouchableOpacity>
            <Text style={FeedPostStyle.text}>Friends</Text>
          </View>
          <View style={FeedPostHeaderStyle.story}>
            <TouchableOpacity>
              <Image
                style={FeedPostHeaderStyle.addNewStory}
                source={require('../../assets/images/avatar3.jpg')}
              />
            </TouchableOpacity>
            <Text style={FeedPostStyle.text}>Sport</Text>
          </View>
          <View style={FeedPostHeaderStyle.story}>
            <TouchableOpacity>
              <Image
                style={FeedPostHeaderStyle.addNewStory}
                source={require('../../assets/images/avatar4.jpg')}
              />
            </TouchableOpacity>
            <Text style={FeedPostStyle.text}>Design</Text>
          </View>
        </View>
      </View>
    );
  }

  function FeedPostBody() {
    return (
      <View>
        <TouchableOpacity style={FeedPostBodyStyle.store}>
          <Image source={require('../../assets/Icons/store.jpg')} />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={FeedPostStyle.container}>
        <FeedPostHeader />
        <FeedPostBody />
      </View>
    </ScrollView>
  );
};

export default DetailProfile;

const FeedPostStyle = StyleSheet.create({
  container: {
    // marginBottom: 20,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: 'black',
  },
});

const FeedPostHeaderStyle = StyleSheet.create({
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

const FeedPostBodyStyle = StyleSheet.create({
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
