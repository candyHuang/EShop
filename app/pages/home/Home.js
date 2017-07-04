import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
} from 'react-native';
import ScrollableTabView ,{ DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Swiper from 'react-native-swiper';
import CategoryView from './CategoryView';
import Color from '../../utils/color';
import TabBar from './TabBar';

const { width } = Dimensions.get('window');
const CATEGORY_TYPE = CategoryView.TYPE;

const categoryList = [
    {
        name: '全部',
        type: CATEGORY_TYPE.ALL,
    },
    {
        name: '女装',
        type: CATEGORY_TYPE.ALL,
    },
    {
        name: '鞋包配饰',
        type: CATEGORY_TYPE.NORMAL,
    },
    {
        name: '美食',
        type: CATEGORY_TYPE.ALL,
    },
    {
        name: '母婴',
        type: CATEGORY_TYPE.ALL,
    },
    {
        name: '运动',
        type: CATEGORY_TYPE.ALL,
    },
    {
        name: '奇趣',
        type: CATEGORY_TYPE.ALL,
    },
    {
        name: '达人',
        type: CATEGORY_TYPE.ALL,
    },
];

/**
 * 主页面
 * 
 * @export
 * @class HomePage
 * @extends {Component}
 */
export default class Home extends Component {

    render() {
        return (
            <View style={{height: '100%'}}>
                <ScrollableTabView
                    renderTabBar={() => <ScrollableTabBar  style={styles.tabs} tabsContainerStyle={styles.tabsContainer} tabStyle={styles.tab} />}
                    tabBarActiveTextColor={Color.primaryColor}
                    tabBarTextStyle={styles.tabBarText}
                    tabBarUnderlineStyle={styles.tabBarUnderline}>
                    {
                        categoryList.map((item, index) => {
                            return (
                                <CategoryView key={item.name} type={item.type} tabLabel={item.name}></CategoryView>
                            )
                        })
                    }
                </ScrollableTabView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    tabs: {
        height: 'auto',
        // height: 40,
        // justifyContent: 'center',
        // marginBottom: 10,
    },
    tabsContainer: {
        height: 36,
        marginBottom: 2,
        
    },
    tab: {
        // backgroundColor: 'rgba(0,0,0,0.6)',
        paddingLeft: 0,
        paddingRight: 0,
        // marginLeft: 20,
        // marginRight: 20,
    },
    tabBarText: {
        fontSize: 10,
    },
    tabBarUnderline: {
        backgroundColor: Color.primaryColor,
        height: 1,
    },
})
