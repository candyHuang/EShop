import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    TouchableHighlight,
    TouchableNativeFeedback,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import Product from '../../components/Product';
import LocalImg from '../../images';
const { width, height } = Dimensions.get('window');
const isIOS = Platform.OS === "ios";


class LinksGrid extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={[styles.linkGrid, {backgroundColor: this.props.backgroundColor}]}>
                <Text style={styles.linkGridTitle}>{this.props.title}</Text>
                <Text style={styles.linkGridarchor}>{this.props.desc} <Icon name="ios-arrow-dropright" size={10} /></Text>
            </View>
        )
    }
}

/**
 * 
 * 分类产品页面
 * 
 * @export
 * @class CategoryView
 * @extends {Component}
 */
export default class CategoryView extends Component {
    constructor(props) {
        super(props)
    }
    static TYPE = {
        ALL: 'ALL',
        NORMAL: 'NORMAL'
    }
    // banner图
    _renderSwiper() {
        const w = width;
        const h = w * 200 / 640;
        return (
            <Swiper
                autoplay
                paginationStyle={{ bottom: 10 }}
                dotStyle={{ backgroundColor: '#000', width: 4, height: 4 }}
                activeDotStyle={{ backgroundColor: '#fff', width: 6, height: 6 }}
                height={h} >
                {
                    [1, 2, 3, 4].map((item, i) => {
                        return (
                            <Image key={i} source={LocalImg[`b${item}`]} style={{height: h, width,}} />
                        )
                    })
                }
            </Swiper>
        )
    }
    // 教程链接
    _renderLesson() {
        const arr = [
            {
                title: '淘宝返利教程',
                desc: '秒变淘宝达人',
                backgroundColor: '#ff9e91',
            },
            {
                title: '签到',
                desc: '每天都能领现金',
                backgroundColor: '#73b8fb',
            },
            {
                title: '商城返利教程',
                desc: '京东唯评会也能返',
                backgroundColor: '#add75a',
            },
            {
                title: '9.9包邮',
                desc: '精选白菜价',
                backgroundColor: '#f4d56d',
            },
        ];
        const render = () => {
            return  (
                <View style={styles.linkGridContainer}>
                {
                    arr.map((item, i) => {
                        return (
                            <LinksGrid key={item.title} title={item.title} desc={item.desc} backgroundColor={item.backgroundColor}></LinksGrid>
                        )
                    })
                }
                </View>
            );
        };
        return isIOS 
        ? (<TouchableHighlight>{render()}</TouchableHighlight> ) 
        : (<TouchableNativeFeedback>{render()}</TouchableNativeFeedback>);
    }
    // 产品列表
    _renderProductList() {
        const arr = [
            {
                name: '零九T恤',
                img: 'https://gw.alicdn.com/bao/uploaded/i2/269401102/TB2L04vebtlpuFjSspoXXbcDpXa_!!269401102.jpg_450x10000Q75.jpg',
                coupon: '40',
                salenum: 1232,
                price: 100
            },
            {
                name: '零九T恤',
                img: 'https://img.alicdn.com/bao/uploaded/i3/TB1MSWFLpXXXXacapXXSutbFXXX.jpg_468x468Q50s50.jpg',
                coupon: '40',
                salenum: 1232,
                price: 100
            },
            {
                name: '零九T恤',
                img: 'https://gw.alicdn.com/bao/uploaded/i2/269401102/TB2L04vebtlpuFjSspoXXbcDpXa_!!269401102.jpg_450x10000Q75.jpg',
                coupon: '40',
                salenum: 1232,
                price: 100
            },
            {
                name: '零九T恤',
                img: 'https://gw.alicdn.com/bao/uploaded/i2/269401102/TB2L04vebtlpuFjSspoXXbcDpXa_!!269401102.jpg_450x10000Q75.jpg',
                coupon: '40',
                salenum: 1232,
                price: 100
            },
        ];
        return (
            <View style={styles.productList}>
                {
                    arr.map((item, i) => {
                        return (
                            <Product key={i} {...item}></Product>
                        )
                    })
                }
            </View>
        )
    }
    /**
     * 渲染所有种类
     */ 
    _renderAll(props) {
        return (
            <ScrollView style={styles.homeWrap}>
                {this._renderSwiper()}
                {this._renderLesson()}
                {this._renderProductList()}
            </ScrollView>
        )
    }

    _renderNormal(props) {
        return (
            <View>
                <Text>种类-----{this.props.name}</Text>
                <Text>种类-----{this.props.name}</Text>
                <Text>种类-----{this.props.name}</Text>
                <Text>种类-----{this.props.name}</Text>
            </View>
        )
    }

    render() {
        if (this.props.type === 'ALL') {
            return this._renderAll()
        } else {
            return this._renderNormal();
        }
    }
}

const styles = StyleSheet.create({
    homeWrap: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        marginBottom: 46,
    },
    linkGridContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#e5e5e5",
        paddingTop: 4,
        paddingBottom: 10,
        // paddingHorizontal: 20,
        // backgroundColor: 'skyblue'
    },
    linkGrid: {
        flex: 1,
        justifyContent: 'center',
        flexBasis: width / 2 - 8,
        height: width / 2 * 0.5,
        borderRadius: 8,
        paddingLeft: 20,
        marginTop: 6,
        marginHorizontal: 4,
        overflow: "hidden",
        // opacity: 0.9,
        // backgroundColor: "#ff9e91",
        // textAlign: 'center',
        // paddingVertical
        // justifyContent: 'center',
        
    },
    linkGridTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: "bold",
    },
    linkGridarchor: {
        color: '#fff',
        fontSize: 10,
        marginTop: 6,
    },
    lineBg: {
        height: 20,
        width: 2,
        backgroundColor: "#f4d56d",
        transform: [
            {rotate: '30deg'},
        ],
    },
    lessonIcon: {
        // right: 0,
        position: "absolute",
        bottom: 2,
        right: 2,
        color: "#feb6af",

    },

    productList: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: width + 4,
        // marginLeft: -2,
    }
    
})