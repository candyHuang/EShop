import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
 } from 'react-native';

const TabBar = React.createClass({
    propTypes: {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
    },
    render() {
        return(
            <View style={[styles.tabs, this.props.style, ]}>
                {this.props.tabs.map((tab, i) => {
                    return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
                        <Text style={styles.tabText}>{tab}</Text>
                        <View style={{height: 2, width: 5, backgroundColor: '#0398ff',}}></View>
                    </TouchableOpacity>;
                })}
            </View>
        )
    }
})



const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
    },
    tabText: {
        // color: '#e5e5e5',
    },
    underline: {
        width: 4,

    },
    tabs: {
        height: 45,
        flexDirection: 'row',
        paddingTop: 5,
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
})

export default TabBar;
