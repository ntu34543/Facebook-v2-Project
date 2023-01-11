import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const DetailProfile = ({navigation}) => {
  navigation.setOptions(
    {
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/Icons/Bar.jpg')} />
        </TouchableOpacity>
      ),
      headerLeft: () =>
    },
    [navigation],
  );

  return (
    <View>
      <Text>detailProfile</Text>
    </View>
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
