import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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
        {loading ? (
          <View>
            <Text>AAAAAAAAAAAAAAAAAA</Text>
          </View>
        ) : (
          data.map((item, index) => {
            return (
              <View key={index}>
                <Text>{item.content}</Text>
              </View>
            );
          })
        )}
      </View>
    );
  }
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})