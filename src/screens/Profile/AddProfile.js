import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import React, {useRef, useState} from 'react';
import {
  Button,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icons from 'react-native-vector-icons/FontAwesome';
import {storeData} from '../../hooks/store';

const AddProfile = ({route, navigation}) => {
  const email = route.params.email;

  const getEmail = async () => {
    await storeData('email', email);
  };

  getEmail();

  const URLImg =
    'https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0';
  const refRBSheet = useRef();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState(URLImg);
  const [modalVisible, setModalVisible] = useState(false);

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
          setAvatar(pathToFile);
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
          setAvatar(pathToFile);
        })
        .catch(e => console.log('uploading image error => ', e));
    });
  };

  async function addProfile() {
    firestore()
      .collection('users')
      .add({
        avatar: avatar,
        name: name,
        email: email,
      })
      .then(() => {
        navigation.navigate('Home');
        setName('');
        setAvatar(URLImg);
      })
      .catch(error => {
        alert(error.message);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <Image
              source={{uri: avatar}}
              style={{width: 150, height: 150, borderRadius: 100}}
            />
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Tên người dùng..."
          style={{
            marginLeft: 20,
            marginTop: 50,
            borderBottomColor: '#999999',
            borderBottomWidth: 1,
          }}
          value={name}
          onChangeText={newText => setName(newText)}
        />
        <TouchableOpacity style={{marginTop: 80}}>
          <Button
            title={'Lưu Thông Tin'}
            color={'black'}
            onPress={() => {
              addProfile();
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

export default AddProfile;

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
