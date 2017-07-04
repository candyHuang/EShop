/**
 * @author candy
 * @email [hlxcandy@gmail.com]
 * @create date 2017-06-14 08:32:16
 * @modify date 2017-06-14 10:33:13
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import TabView from './components/TabView';
// import ScrollableTabView , { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
// import Home from './pages/Home'
// import My from './pages/My'
import CategoryView from './pages/home/CategoryView';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TabView></TabView>
        {/*<ScrollableTabView
            renderTabBar={() => <ScrollableTabBar />}>
            <Text tabLabel="11">haha </Text>
            <Text tabLabel="22">22fdfdf </Text>
            <CategoryView name="zhonglei" tabLabel="React"></CategoryView>
            <CategoryView name="zhonglei1" tabLabel="React1"></CategoryView>
            <CategoryView name="zhonglei2" tabLabel="React2"></CategoryView>
            <CategoryView name="zhonglei3" tabLabel="React3"></CategoryView>
            <CategoryView name="zhonglei4" tabLabel="React43"></CategoryView>
            <CategoryView name="zhonglei5" tabLabel="React53"></CategoryView>
        </ScrollableTabView>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
});
