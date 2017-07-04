import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../pages/home';
import My from '../pages/my';
import Color from '../utils/color';

const {width, height} = Dimensions.get('window');

export default class TabView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: '首页',
            hideTabBar: false
        }
        this.tabNames = [
            {
                name: '首页',
                icon: 'ios-home-outline',
                page:  <Home {...this.props}/>,
            },
            {
                name: '我的',
                icon: 'ios-contact-outline',
                page: <My {...this.props}/>,
            },
            // '淘宝返利',
            // '商场返利',
        ]
        TabView.hideTabBar = TabView.hideTabBar.bind(this)
        TabView.showTabBar = TabView.showTabBar.bind(this)
    }
    static showTabBar(time){
        this.setState({hideTabBar: false})
    }
    static hideTabBar(time){
        this.setState({hideTabBar: true})
    }
    render() {
        return (
            <TabNavigator
                hidesTabTouch={true}
                tabBarStyle={[
                    styles.tabbar,
                    (this.state.hideTabBar ? styles.hide : {})
                ]}
                sceneStyle={{ paddingBottom: styles.tabbar.height }}>
                {
                    this.tabNames.map((item, i) => {
                        return (
                            <TabNavigator.Item
                                key={i}
                                title={item.name}
                                selected={this.state.currentTab === item.name}
                                selectedTitleStyle={{color: Color.primaryColor}}
                                renderIcon={() => <Icon name={item.icon} size={22} />}
                                renderSelectedIcon={() => <Icon name={item.icon} size={22} color={Color.primaryColor}  />}
                                onPress={() => this.setState({ currentTab: item.name })}>
                                {item.page}
                            </TabNavigator.Item>
                        )
                    })
                }
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    tabbar: {
      height: 46,
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },
    hide: {
      transform: [
        {translateX:width}
      ]
    },
    tabStyle:{
      padding: 4
    }
})


