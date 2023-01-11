import {Image, ScrollView, StyleSheet, View} from 'react-native';

const ListMyPosts = ({item}) => {
  return (
    <ScrollView>
      <View>
        <Image style={HomeStyle.image} source={item.img} />
      </View>
    </ScrollView>
  );
};

export default ListMyPosts;

const HomeStyle = StyleSheet.create({
  image: {
    width: 131,
    height: 131,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
});
