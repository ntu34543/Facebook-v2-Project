import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  TextInput,
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
            Cancel
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
          <View style={FeedPostBodyStyle.inforation}>
            <View style={FeedPostBodyStyle.blockLeft}>
              <Text style={{paddingTop: 5}}>Name</Text>
            </View>
            <View style={FeedPostBodyStyle.blockRight}>
              <TextInput
                style={FeedPostBodyStyle.textInput}
                value="Jacob West"
              />
            </View>
          </View>
          <View style={FeedPostBodyStyle.inforation}>
            <View style={FeedPostBodyStyle.blockLeft}>
              <Text style={{paddingTop: 5}}>Username</Text>
            </View>
            <View style={FeedPostBodyStyle.blockRight}>
              <TextInput style={FeedPostBodyStyle.textInput} value="jacob_w" />
            </View>
          </View>
          <View style={FeedPostBodyStyle.inforation}>
            <View style={FeedPostBodyStyle.blockLeft}>
              <Text style={{paddingTop: 5}}>Website</Text>
            </View>
            <View style={FeedPostBodyStyle.blockRight}>
              <TextInput style={FeedPostBodyStyle.textInput} value="Website" />
            </View>
          </View>
          <View style={FeedPostBodyStyle.inforation}>
            <View style={FeedPostBodyStyle.blockLeft}>
              <Text style={{paddingTop: 5}}>Bio</Text>
            </View>
            <View style={FeedPostBodyStyle.blockRightNoLine}>
              <TextInput
                style={FeedPostBodyStyle.textInput}
                value="Digital goodies designer @pixsellz Everything is designed."
              />
            </View>
          </View>
        </View>
        <View>
          <View style={FeedPostBodyStyle.privateInf}>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'rgba(56, 151, 240, 1)',
                  paddingBottom: 15,
                }}>
                Switch to Professional Account
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
              }}>
              Private Information
            </Text>
          </View>
          <View style={FeedPostBodyStyle.inforation}>
            <View style={FeedPostBodyStyle.blockLeft}>
              <Text style={{paddingTop: 5}}>Email</Text>
            </View>
            <View style={FeedPostBodyStyle.blockRight}>
              <Text>jacob.west@gmail.com</Text>
              <TextInput style={FeedPostBodyStyle.textInput} value="jacob.west@gmail.com" />
            </View>
          </View>
          <View style={FeedPostBodyStyle.inforation}>
            <View style={FeedPostBodyStyle.blockLeft}>
              <Text style={{paddingTop: 5}}>Phone</Text>
            </View>
            <View style={FeedPostBodyStyle.blockRight}>
              <Text>+1 202 555 0147</Text>
            </View>
          </View>
          <View style={FeedPostBodyStyle.inforation}>
            <View style={FeedPostBodyStyle.blockLeft}>
              <Text style={{paddingTop: 5}}>Gender</Text>
            </View>
            <View style={FeedPostBodyStyle.blockRight}>
              <Text>Male</Text>
            </View>
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
    borderWidth: 1,
    borderRightColor: 'rgba(60, 60, 67, 0.18)',
    borderLeftColor: 'rgba(60, 60, 67, 0.18)',
    borderTopColor: 'rgba(60, 60, 67, 0.18)',
    borderBottomColor: 'rgba(60, 60, 67, 0.18)',
    // paddingBottom: 15,
  },
  inforation: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  blockLeft: {
    width: '25%',
  },
  blockRight: {
    width: '75%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(60, 60, 67, 0.18)',
    paddingBottom: 15,
  },
  blockRightNoLine: {
    width: '75%',
    paddingBottom: 15,
  },
  privateInf: {
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  textInput: {
    paddingVertical: 0,
  },
});
