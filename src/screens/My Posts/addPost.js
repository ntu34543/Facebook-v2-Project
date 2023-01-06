import React, {Component} from 'react';
import {Alert, Button, StyleSheet, TextInput, View} from 'react-native';
import {Firebase} from '../../config/Firebase';

class AddPost extends Component {
  constructor() {
    super();
    this.state = {
      postTitle: '',
      postBody: '',
    };
  }

  addPost = () => {
    const postTitle = this.state.postTitle;
    const postBody = this.state.postBody;
    const postRef = Firebase.database().ref('/posts');
    postRef.push({
      postTitle: postTitle,
      postBody: postBody,
    });
    Alert.alert('Post Added Successfully!');
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Post Title"
          onChangeText={postTitle => this.setState({postTitle})}
          value={this.state.postTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Post Body"
          onChangeText={postBody => this.setState({postBody})}
          value={this.state.postBody}
        />
        <Button title="Add Post" onPress={this.addPost} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#000',
  },
});

export default AddPost;
