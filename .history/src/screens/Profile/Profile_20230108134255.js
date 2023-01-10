import {StyleSheet, Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const Profile = () => {
  function FeedPostHeader() {
    return (
      <View style={FeedPostHeaderStyle.container}>
        <View style={FeedPostHeaderStyle.userInfo}>
          {/* <Avatar style={FeedPostHeaderStyle.userAvatar} url={props.avatar} /> */}
          <TouchableOpacity>
            <Image
              style={FeedPostHeaderStyle.userAvatar}
              source={require('../../assets/Icons/isUserFill.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={FeedPostHeaderStyle.userName}>Nguyen Thanh Tu</Text>
          </TouchableOpacity>
          <Image
            style={FeedPostHeaderStyle.userTick}
            source={require('../../assets/Icons/tick.jpg')}
          />
        </View>
        <View>
          <TouchableOpacity>
            <Icons name="ellipsis-h" size={18} color="black" />
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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    paddingRight: 10,
    height: 40,
    width: 40,
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
