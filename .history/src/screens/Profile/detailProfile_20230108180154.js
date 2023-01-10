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
          <Text
            style={{
              color: 'rgba(56, 151, 240, 1)',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Done
          </Text>
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
            Cancer
          </Text>
        </TouchableOpacity>
      ),
    },
    [navigation],
  );

  function FeedPostHeader() {
    return (
      <View style={FeedPostHeaderStyle.container}>
        <View style={FeedPostHeaderStyle.userAvatar}>
          <TouchableOpacity>
            <Image
              style={FeedPostHeaderStyle.avatarImg}
              source={require('../../assets/images/avatar1.jpg')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                color: 'rgba(56, 151, 240, 1)',
                fontWeight: 'bold',
                fontSize: 13,
                paddingVertical: 10,
              }}>
              Change Profile Photo
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function FeedPostBody() {
    return (
      <View>
        <View style={FeedPostBodyStyle.body}>
            <Text></Text>
            <Text></Text>
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
  userAvatar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImg: {
    paddingRight: 10,
    height: 96,
    width: 96,
    borderRadius: 25,
  },
  heading: {
    color: 'black',
    fontSize: 16,
  },
});

const FeedPostBodyStyle = StyleSheet.create({
  body: {
    display: 'flex',
    alignItems: 'center',
    borderWidth: 1,
    borderRightColor: 'rgba(60, 60, 67, 0.18)',
    borderLeftColor: 'rgba(60, 60, 67, 0.18)',
    borderTopColor: 'rgba(60, 60, 67, 0.18)',
    borderBottomColor: 'rgba(60, 60, 67, 0.18)',
    paddingVertical: 10,
  },
});
