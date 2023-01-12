import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import useFirestoreCollection from '../../hooks/useFirestoreCollection';

const USERS_COLLECTION = 'users';
const POST_COLLECTTION = 'posts';
const WISHLIST_COLLECTION = 'wishList';
const HomePost = ({item}) => {
  const [love, setLove] = useState(false);

  async function Love() {
    firestore()
      .collection(WISHLIST_COLLECTION)
      .add({
        img: item.img,
        id: item.id,
      })
      .then(() => {
        setLove(true);
        // alert('Add');
      })
      .catch(error => {
        alert(error.message);
      });
  }

  async function DisLove() {
    console.log(item.id);
    firestore()
      .collection(WISHLIST_COLLECTION)
      .doc('NK5yn1QlkHZGedbTCPb6')
      .delete()
      .then(() => {
        alert('hieu');
        setLove(false);
      })
      .catch(error => {
        alert(error.message);
      });
  }

  function onLovePress() {
    setLove(pre => {
      if (!pre) Love();
      else DisLove();
      return !pre;
    });
  }

  function FeedPostHeader() {
    return <View style={HomeHeaderStyle.container}></View>;
  }

  return (
    <ScrollView>
      <View style={HomeStyle.container}>
        {/* <FeedPostHeader /> */}
        <View style={HomeHeaderStyle.container}>
          <View style={HomeHeaderStyle.userInfo}>
            {/* <Avatar style={HomeHeaderStyle.userAvatar} url={props.avatar} /> */}
            <TouchableOpacity>
              <Image
                style={HomeHeaderStyle.userAvatar}
                source={require('../../assets//images/avatar1.jpg')}
                // source={{uri: item.img,}}
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
        {/* <FeedPostHeader /> */}
        {/* <FeedPostBody /> */}
        <View>
          <View>
            <Image
              style={HomeBodyStyle.image}
              // source={require('../../assets//images/img1.jpg')}
              source={{uri: item.img}}
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
                <TouchableOpacity onPress={onLovePress}>
                  {/* <Image
                    style={HomeBodyStyle.iconHeart}
                    source={require('../../assets/Icons/heartNone.jpg')}
                  /> */}
                  <Icons
                    color={love ? 'red' : 'black'}
                    size={25}
                    name="heart"
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
                Liked by{' '}
                <Text style={{fontWeight: 'bold'}}>User {item.id_user}</Text>{' '}
                and{' '}
                <Text style={{fontWeight: 'bold'}}>
                  {item.total_like} others
                </Text>
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 15,
                paddingTop: 10,
              }}>
              <Text style={HomeBodyStyle.comment}>
                <Text style={{fontWeight: 'bold'}}>User {item.id_user}</Text>{' '}
                {item.content}
              </Text>
            </View>
          </View>
        </View>
        {/* <FeedPostBody /> */}
      </View>
    </ScrollView>
  );
};

export default HomePost;

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
    width: 430,
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
