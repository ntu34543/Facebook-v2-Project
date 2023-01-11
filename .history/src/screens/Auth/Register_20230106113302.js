import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {SCREEN_HEIGHT, SCREEN_WIDTH, STATUS_BAR_HEIGHT} from '../../constants';
import Icons from 'react-native-vector-icons/FontAwesome';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../../firebase/index';


const Register = ({navigation}) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreateAccount = () => {
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          console.log('Account created!');
          const user = userCredential.user;
          console.log(user);
          navigation.navigate('Login');
        })
        .catch(error => {
          console.log(error);
          Alert.alert(error.message);
        });
    };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerContainer}>
        <View style={styles.logoWrapper}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
        </View>
        <View style={styles.loginForm}>
          <View style={styles.textInputWrapper}>
            <TextInput
              autoCapitalize="none"
              placeholder="Email"
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.textInputWrapper}>
            <TextInput
              placeholder="Password"
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <TouchableOpacity
            onPress={handleCreateAccount}
            activeOpacity={0.6}
            style={{
              ...styles.btnLogin,
              opacity: 1,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#fff',
                fontWeight: '500',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.otherOptionsWrapper}>
          <View style={styles.divideLine}>
            <View style={styles.ORtextWrapper}>
              <Text
                style={{
                  color: '#333',
                  fontWeight: '600',
                }}>
                OR
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.btnLoginWithFacebook}>
            <Icons
              style={styles.iconFb}
              name="facebook-square"
              size={21}
              color="#318bfb"
            />
            <Text
              style={{
                color: '#318bfb',
                fontWeight: 'bold',
              }}>
              Login with Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.registerWrapper}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 12,
            fontWeight: '600',
          }}>
          <Text
            style={{
              fontWeight: '500',
              color: '#318bfb',
            }}>
            Back to Login
          </Text>{' '}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: SCREEN_HEIGHT,
  },
  centerContainer: {
    height: SCREEN_HEIGHT - STATUS_BAR_HEIGHT,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    marginBottom: 20,
  },
  logo: {
    height: 64,
    overflow: 'hidden',
  },
  loginForm: {
    width: SCREEN_WIDTH * 0.9,
  },
  textInputWrapper: {
    position: 'relative',
    width: '100%',
    height: 44,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    marginVertical: 7.5,
  },
  hidePasswordIcon: {
    position: 'absolute',
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    right: 5,
    top: (44 - 30) / 2,
  },
  input: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
  },
  btnLogin: {
    marginTop: 7.5,
    width: '100%',
    height: 44,
    borderRadius: 5,
    backgroundColor: '#318bfb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  otherOptionsWrapper: {
    width: SCREEN_WIDTH * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPassword: {
    width: SCREEN_WIDTH * 0.8,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divideLine: {
    marginVertical: 10,
    position: 'relative',
    height: 2,
    width: '100%',
    backgroundColor: '#ddd',
  },
  ORtextWrapper: {
    width: 40,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top: (2 - 20) / 2,
    left: (SCREEN_WIDTH * 0.9 - 40) / 2,
    position: 'absolute',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  btnLoginWithFacebook: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconFb: {
    marginRight: 10,
  },
  registerWrapper: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
  },
  loadingWrapper: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 99,
  },
  loading: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
