import React, {useRef, useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icons from 'react-native-vector-icons/FontAwesome';
import Option from '../../components/option';
import {addressList, musicList} from '../../untils/constants';

const UpdatePost = () => {
  const refRBSheet = useRef();

  const [content, setContent] = useState('');
  const [image, setImage] = useState(
    'https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0',
  );

  const takePhotoFromCamera = async () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  };

  const getGalleryImage = async () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  };
  const listAddress = addressList.map(address => (
    <TouchableOpacity>
      <Option text={address} />
    </TouchableOpacity>
  ));

  const listMusic = musicList.map(music => (
    <TouchableOpacity>
      <Option nameIcon={'music'} text={music} />
    </TouchableOpacity>
  ));

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.flex}>
          <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <Image source={{uri: image}} style={{width: 50, height: 50}} />
          </TouchableOpacity>
          <TextInput
            placeholder="Viết chú thích..."
            style={{marginLeft: 20}}
            value={content}
            onChangeText={newText => setContent(newText)}
          />
        </View>
        <Text style={[styles.flex, styles.text]}>Gắn thẻ người khác</Text>
        <Text style={[styles.flex, styles.text]}>Thêm vị trí</Text>
        <SafeAreaView>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {listAddress}
          </ScrollView>
        </SafeAreaView>
        <Text style={[styles.flex, styles.text]}>Thêm nhạc</Text>
        <SafeAreaView>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {listMusic}
          </ScrollView>
        </SafeAreaView>
        <Text style={styles.text}>Cùng Đăng lên</Text>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Image
            style={styles.avata}
            source={{
              uri: 'https://lh3.googleusercontent.com/p6PgOuxKD9KyYshnSn-C4Xye6jWjQrXXi82d9CfjQ07haikyFnaQlCLQM8J08R60ndXOoLvR4yB3isM-tFXPEjguwXtszA=w622',
            }}
          />
          <View style={{marginLeft: 20}}>
            <Text style={styles.text}>Facebook</Text>
            <Text>Meo CuTe</Text>
          </View>
          <Icons
            name={'toggle-on'}
            size={30}
            color={'#4f9fcf'}
            style={{marginLeft: 180, marginTop: 5}}
          />
        </View>
        <TouchableOpacity style={{marginTop: 80}}>
          <Button title="Lưu Bài Đăng" color={'black'} />
        </TouchableOpacity>
      </View>

      <RBSheet
        ref={refRBSheet}
        height={300}
        openDuration={250}
        customStyles={{
          container: {
            alignItems: 'center',
            borderRadius: 20,
          },
        }}>
        <View style={{width: 350}}>
          <Icons
            name={'times-circle-o'}
            size={30}
            color={'black'}
            style={{
              left: 320,
              marginTop: 20,
            }}
            onPress={() => refRBSheet.current.close()}
          />
          <TouchableOpacity style={{marginTop: 50}}>
            <Button
              title="Chụp Ảnh"
              color={'black'}
              onPress={takePhotoFromCamera}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 50}}>
            <Button
              title="Thư Viện"
              color={'black'}
              onPress={getGalleryImage}
            />
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
};

export default UpdatePost;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  body: {
    width: 350,
    marginTop: 30,
  },
  flex: {
    paddingBottom: 10,
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomColor: '#999999',
    borderBottomWidth: 1,
  },
  text: {
    color: 'black',
    fontSize: 15,
  },
  avata: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
