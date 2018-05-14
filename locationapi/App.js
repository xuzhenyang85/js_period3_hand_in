import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';

import WhatToDo from './components/WhatToDo';
import Basics from './components/Basics';
import Props from './components/Props';
import State from './components/State';
import HeightWidth from './components/HeightWidth';
import FlexBox from './components/FlexBox';
import TextInput from './components/TextInput';
import Touches from './components/Touches';
import ScrollView from './components/ScrollView';
import ListViews from './components/ListViews';
import NetWorking from './components/NetWorking';
import Location from './components/Location';
import MapViewAPI from './components/MapViewAPI';
import GPS from './components/GPS';
import Login from './components/Login';

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Day1 Tutorial' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Text style={{ textAlign: "center", fontSize: 20 }}>See all Demos implemented by Xu</Text>
        <Touchable onPress={() => navigate('web')} title="What I have to do" />
        <Touchable onPress={() => navigate('basics')} title="Basics" />
        <Touchable onPress={() => navigate('props')} title="Props" />
        <Touchable onPress={() => navigate('state')} title="State" />
        <Touchable onPress={() => navigate('heightwidth')} title="HeightWidth" />
        <Touchable onPress={() => navigate('flexbox')} title="FlexBox" />
        <Touchable onPress={() => navigate('textinput')} title="TextInput" />
        <Touchable onPress={() => navigate('touches')} title="Touches" />
        <Touchable onPress={() => navigate('scrollview')} title="ScrollView" />
        <Touchable onPress={() => navigate('listviews')} title="ListViews" />
        <Touchable onPress={() => navigate('networking')} title="NetWorking" />
        <Touchable onPress={() => navigate('location')} title="Location" />
        <Touchable onPress={() => navigate('gps')} title="GPS" />
        <Touchable onPress={() => navigate('mapviewapi')} title="MapViewAPI" />
      </View>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  basics: { screen: Basics },
  props: { screen: Props },
  state: { screen: State },
  heightwidth: { screen: HeightWidth },
  flexbox: { screen: FlexBox },
  textinput: { screen: TextInput },
  touches: { screen: Touches },
  scrollview: { screen: ScrollView },
  listviews: { screen: ListViews },
  networking: { screen: NetWorking },
  location: { screen: Location },
  gps: { screen: GPS },
  mapviewapi: { screen: MapViewAPI },
  web: { screen: WhatToDo },
});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})