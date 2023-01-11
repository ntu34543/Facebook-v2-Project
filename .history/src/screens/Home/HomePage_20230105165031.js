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
          <Image source={require('../../assets/images/chat.jpg')} />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/images/camera.jpg')} />
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
          <Avatar style={FeedPostHeaderStyle.userAvatar} url={props.avatar} />
          <Text style={FeedPostHeaderStyle.userName}>{props.username}</Text>
        </View>
      </View>
    );
  }

  function FeedPostBody() {
    return (
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
    marginBottom: 20,
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
  },
  userName: {
    fontWeight: 'bold',
  },
});

const FeedPostBodyStyle = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
  },
});
