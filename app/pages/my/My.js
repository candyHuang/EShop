import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Chat from './Chat';

class My extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'init message'
        }
        this.pressHandle = this.pressHandle.bind(this)
    }

    static navigationOptions = {
        // title: 'Welcome',
        header: null,
        // headerMode: 'none',
    };

    pressHandle() {
        const { navigate } = this.props.navigation;
        this.setState({
            message: 'i am changed'
        });
        navigate('Chat')
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.pressHandle}>
                    <Text>{this.state.message}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
  Home: { screen: My },
  Chat: { screen: Chat },
});

export default SimpleApp

