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

const HomePage = ({navigation}) => {
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
              paddingTop: 10,
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
                  style={FeedPostBodyStyle.icon}
                  source={require('../../assets/Icons/heartNone.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  // style={FeedPostBodyStyle.icon}
                  source={require('../../assets/Icons/comment.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  // style={FeedPostBodyStyle.icon}
                  source={require('../../assets/Icons/chat.jpg')}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  // style={FeedPostBodyStyle.image}
                  source={require('../../assets/Icons/save.jpg')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              paddingTop: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text> {'>'} hahaha</Text>
            <TouchableOpacity>
              <Icons
                // color={love ? 'red' : 'black'}
                color={'red'}
                size={30}
                name={'heart'}
              />
            </TouchableOpacity>
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

export default HomePage;

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
});
