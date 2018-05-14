import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';
import Favicon from 'react-favicon';

import Location from './components/Location';

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Period 3 Hand-in' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Text style={{ textAlign: "center", fontSize: 18 }}>React Native</Text>
        <Touchable onPress={() => navigate('location')} title="Location" />
      </View>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  location: { screen: Location },
});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#ffc61a'
  },
  buttonText: {
    padding: 10 ,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})