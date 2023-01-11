import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import useFirestoreCollection from '../../hooks/useFirestoreCollection';
import React, {useEffect} from 'react';
import HomePost from '../../components/Home/HomePost';

const HomePage = ({navigation}) => {
  const collection = firestore().collection('posts');
  const pageSize = 6;
  const page = 2;
  const {data, loading, error, refresh} = useFirestoreCollection(
    collection,
    pageSize,
    page,
  );

  useEffect(() => {
    refresh();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

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
      <View style={HomeHeaderStyle.container}>
        <View style={HomeHeaderStyle.userInfo}>
          {/* <Avatar style={HomeHeaderStyle.userAvatar} url={props.avatar} /> */}
          <TouchableOpacity>
            <Image
              style={HomeHeaderStyle.userAvatar}
              source={require('../../assets/Icons/isUserFill.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={HomeHeaderStyle.userName}>Nguyen Thanh Tu</Text>
          </TouchableOpacity>
          <Image
            style={HomeHeaderStyle.userTick}
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
            style={HomeBodyStyle.image}
            source={require('../../assets/Icons/heartNone.jpg')}
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
                  style={HomeBodyStyle.iconHeart}
                  source={require('../../assets/Icons/heartNone.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={HomeBodyStyle.iconComment}
                  source={require('../../assets/Icons/comment.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={HomeBodyStyle.iconChat}
                  source={require('../../assets/Icons/chat.jpg')}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  style={HomeBodyStyle.iconSave}
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
            <Text style={HomeBodyStyle.like}>
              Liked by <Text style={{fontWeight: 'bold'}}>craig_love</Text> and{' '}
              <Text style={{fontWeight: 'bold'}}>44444 others</Text>
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              paddingTop: 10,
            }}>
            <Text style={HomeBodyStyle.comment}>
              <Text style={{fontWeight: 'bold'}}>joshua_l</Text> The game in
              Japan was amazing and I want to share some photos
            </Text>
          </View>
        </View>
        {loading ? (
          <View>
            <Text>AAAAAAAAAAAAAAAAAA</Text>
          </View>
        ) : (
          data.map((item, index) => {
            return (
              <View key={index}>
                <Text>{item.content}</Text>
                <HomePost image={item.img} like={item.total_like}/>
              </View>
            );
          })
        )}
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={HomeStyle.container}>
        <FeedPostHeader />
        <FeedPostBody />
      </View>
    </ScrollView>
  );
};

export default HomePage;

const HomeStyle = StyleSheet.create({
  container: {
    // marginBottom: 20,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },
});

const HomeHeaderStyle = StyleSheet.create({
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

const HomeBodyStyle = StyleSheet.create({
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
