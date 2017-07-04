import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');
const GAP = 4;

export default class Product extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.product}>
                <Image source={{ uri: this.props.img }} style={{ width: "100%", height: 200 }} />
                <View style={styles.info} >
                    <View style={styles.infoline}>
                        <View style={styles.coupon}>
                            <Text style={styles.couponText}>领劵减{this.props.coupon}元</Text>
                        </View>
                        <Text style={styles.salenum} >已抢{this.props.salenum}件</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>{this.props.name}</Text>
                    </View>
                    <View style={styles.priceWrap}>
                        <Text style={styles.price}>￥{this.props.price}</Text>
                        <View style={styles.finalPrice}>
                            <Text style={styles.finalPricePrefix}>券后￥</Text>
                            <Text style={styles.finalPriceText}>{this.props.price - this.props.coupon}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    product: {
        width: (width - GAP) / 2,
        overflow: 'hidden',
        backgroundColor: "#fff",
        // marginLeft: GAP / 2,
        // borderLeftWidth: GAP,
        // borderRightWidth: 18,
        borderBottomWidth: 4,
        borderColor: '#e5e5e5',
        overflow: "hidden",
        marginLeft: GAP,
        left: -GAP,
        
    },
    info: {
        padding: 4,
    },
    infoline: {
        flexDirection: "row",
        alignItems: "center",
    },
    salenum: {
        color: "#b1a9a9",
        marginLeft: "auto",
        fontSize: 10,
    },
    coupon: {
        // paddingVertical: 2,
        // paddingHorizontal: 1,
        padding: 2,
        borderWidth: 1,
        borderColor: "#d85353",
    },
    couponText: {
        color: "#d85353",
        fontSize: 10,
    },
    title: {
        fontSize: 14,
        lineHeight: 30,
        height: 30,
    },
    priceWrap: {
        flexDirection: "row",
    },
    price: {
        fontWeight: "bold",
    },
    finalPrice: {
        // flex: 1,
        // marginRight: "auto",
        marginLeft: "auto",
        flexDirection: "row",
        alignItems: "center",

    },
    finalPricePrefix: {
        fontSize: 12,
        color: "#d85353",
    },
    finalPriceText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#d85353",
    },
    
})