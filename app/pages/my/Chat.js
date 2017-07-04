import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class ChatScreen extends Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
    headerBackTitle: '返回',
    headerStyle: {
        elevation: 0,
        height: 40,
        paddingTop: 0,
        backgroundColor: "#fff"
    },
    headerTitleStyle: {
        // fontSize: 12,
    }
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}