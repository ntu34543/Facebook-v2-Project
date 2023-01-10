import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';

const Profile = ({navigation}) => {
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
      <View style={FeedPostHeaderStyle.container}>
        <View style={FeedPostHeaderStyle.information}>
          <View style={FeedPostHeaderStyle.userAvatar}>
            <TouchableOpacity>
              <Image
                style={FeedPostHeaderStyle.avatarImg}
                source={require('../../assets/Icons/isUserFill.png')}
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
          <TouchableOpacity style={FeedPostHeaderStyle.button}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function FeedPostBody() {
    return (
      <View>
        <View>
          <Image
            style={FeedPostBodyStyle.image}
            source={require('../../assets/images/img1.jpg')}
          />
          <View
            style={{
              paddingHorizontal: 15,
              paddingTop: 15,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity>
                <Image
                  style={FeedPostBodyStyle.iconHeart}
                  source={require('../../assets/Icons/heartNone.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={FeedPostBodyStyle.iconComment}
                  source={require('../../assets/Icons/comment.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={FeedPostBodyStyle.iconChat}
                  source={require('../../assets/Icons/chat.jpg')}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  style={FeedPostBodyStyle.iconSave}
                  source={require('../../assets/Icons/save.jpg')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              paddingTop: 10,
            }}>
            <Text style={FeedPostBodyStyle.like}>
              Liked by <Text style={{fontWeight: 'bold'}}>craig_love</Text> and{' '}
              <Text style={{fontWeight: 'bold'}}>44,686 others</Text>
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              paddingTop: 10,
            }}>
            <Text style={FeedPostBodyStyle.comment}>
              <Text style={{fontWeight: 'bold'}}>joshua_l</Text> The game in
              Japan was amazing and I want to share some photos
            </Text>
          </View>
        </View>
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

export default Profile;

const FeedPostStyle = StyleSheet.create({
  container: {
    // marginBottom: 20,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
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
  userName: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  userTick: {
    marginLeft: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
    // display: 'flex',
    // alignItems: 'center',
    // backgroundColor: '#FFFFFF',
    // borderWidth: 1,
    // borderColor: 'gray',
    // borderRadius: 5,
    // paddingVertical: 7,
  },
  button: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingVertical: 7,
  },
});

const FeedPostBodyStyle = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
  },
  iconSave: {
    marginLeft: 15,
  },
  iconChat: {
    marginLeft: 15,
  },
  iconComment: {
    marginLeft: 15,
  },
  like: {
    color: 'black',
  },
  comment: {
    color: 'black',
  },
});
