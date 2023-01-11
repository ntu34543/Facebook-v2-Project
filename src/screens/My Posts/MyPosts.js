import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import React, {useRef, useState} from 'react';
import {
  Button,
  Image,
  Modal,
  Pressable,
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

const MyPosts = ({navigation}) => {
  const idPost = '1';
  const URLImg =
    'https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0';
  const refRBSheet = useRef();

  const [content, setContent] = useState('');
  const [image, setImage] = useState(URLImg);
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('Đăng Bài Viết');

  async function addPost() {
    firestore()
      .collection('posts')
      .add({
        id_user: 'O6f6wfLpb9WWxn6ELvfJqHuHRb62',
        img: image,
        content: content,
        total_like: 0,
        total_comment: 0,
        total_share: 0,
        time: Date.now(),
      })
      .then(() => {
        navigation.navigate('Home');
        setContent('');
        setImage(URLImg);
      })
      .catch(error => {
        alert(error.message);
      });
  }

  async function addLike() {
    firestore()
      .collection('like')
      .add({
        id_user: 'O6f6wfLpb9WWxn6ELvfJqHuHRb62',
        id_like: 1,
        id_post: 1,
        time: Date.now(),
      })
      .then(() => {
        navigation.navigate('Home');
        setContent('');
        setImage(URLImg);
      })
      .catch(error => {
        alert(error.message);
      });
  }

  const takePhotoFromCamera = async () => {
    ImageCropPicker.openCamera({
      width: 430,
      height: 500,
      cropping: true,
    }).then(image => {
      const imageName = image.path.substring(image.path.lastIndexOf('/') + 1);
      const bucketFile = `image/${imageName}`;
      const pathToFile = image.path;
      let reference = storage().ref(bucketFile); // 2
      let task = reference.putFile(pathToFile); // 3
      task
        .then(() => {
          setImage(pathToFile);
        })
        .catch(e => console.log('uploading image error => ', e));
    });
  };

  const getGalleryImage = async () => {
    ImageCropPicker.openPicker({
      width: 430,
      height: 500,
      cropping: true,
    }).then(image => {
      const imageName = image.path.substring(image.path.lastIndexOf('/') + 1);
      const bucketFile = `image/${imageName}`;
      const pathToFile = image.path;
      let reference = storage().ref(bucketFile); // 2
      let task = reference.putFile(pathToFile); // 3
      task
        .then(() => {
          setImage(pathToFile);
        })
        .catch(e => console.log('uploading image error => ', e));
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
          <Button
            title={title}
            color={'black'}
            onPress={() => {
              if (image === URLImg || content === '') {
                setModalVisible(true);
              } else {
                addPost();
                addLike();
              }
            }}
          />
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Bạn cần nhập đầy đủ ảnh và nội dung*
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Thoát</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MyPosts;

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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 200,
  },
  buttonClose: {
    backgroundColor: 'black',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'red',
    marginBottom: 30,
  },
});
