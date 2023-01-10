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

const Profile = ({navigation}) => {
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
                source={require('../../assets/Icons/isUserFill.png')}
              />
            </TouchableOpacity>
            <Text style={FeedPostStyle.text}>Friends</Text>
          </View>
          <View style={FeedPostHeaderStyle.story}>
            <TouchableOpacity>
              <Image
                style={FeedPostHeaderStyle.addNewStory}
                source={require('../../assets/Icons/isUserFill.png')}
              />
            </TouchableOpacity>
            <Text style={FeedPostStyle.text}>Sport</Text>
          </View>
          <View style={FeedPostHeaderStyle.story}>
            <TouchableOpacity>
              <Image
                style={FeedPostHeaderStyle.addNewStory}
                source={require('../../assets/Icons/isUserFill.png')}
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
        <TouchableOpacity>
          <Image
            style={FeedPostBodyStyle.store}
            source={require('../../assets/Icons/store.jpg')}
          />
        </TouchableOpacity>
        <View style={FeedPostBodyStyle.body}>
          <FlatList
            numColumns={3}
            data={image}
            renderItem={({item}) => {
              return (
                <View>
                  <Image style={FeedPostBodyStyle.image} source={item.img} />
                </View>
              );
            }}
          />
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
    width: 124,
    height: 124,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  store: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
  },
});
