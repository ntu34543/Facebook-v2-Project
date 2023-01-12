import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomePage from '../screens/Home/HomePage';
import {
  default as DetailPost,
  default as UpdatePost,
} from '../screens/My Posts/DetailPost';
import MyPosts from '../screens/My Posts/MyPosts';
import w
import Profile from '../screens/Profile/Profile';
import Search from '../screens/Search/Search';
import LogoTitle from '../themes/LogoTitle';

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
  headerStyle: {
    backgroundColor: 'white',
  },
  headerTintColor: 'black',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitleAlign: 'center',
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{headerTitle: props => <LogoTitle {...props} />}}
      />
      <Stack.Screen name="Posts" component={MyPosts} />
      <Stack.Screen
        name="UpdatePost"
        component={UpdatePost}
        options={{title: 'Cập Nhập Bài Viết'}}
      />
    </Stack.Navigator>
  );
};
const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="Detail Post"
        component={DetailPost}
        options={{title: 'Chi Tiết Bài Viết'}}
      />
    </Stack.Navigator>
  );
};
const PostStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Post"
        component={MyPosts}
        options={{title: 'Bài Viết Mới'}}
      />
    </Stack.Navigator>
  );
};
const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};
const NotifyStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="WishList" component={WishList} />
    </Stack.Navigator>
  );
};

// const LoginScreenStackNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={screenOptionStyle}>
//       <Stack.Screen name="Login" component={Login} options={{headerShown: false,}}/>
//       <Stack.Screen name="Register" component={Register} options={{headerShown: false,}}/>
//       <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false,}}/>
//     </Stack.Navigator>
//   );
// };
export {
  HomeStackNavigator,
  ProfileStackNavigator,
  PostStackNavigator,
  SearchStackNavigator,
  NotifyStackNavigator,
};
