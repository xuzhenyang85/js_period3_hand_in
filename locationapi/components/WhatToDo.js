import React from 'react';
import { Text, View, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';


export default class WhatToDo extends React.Component {
    static navigationOptions = { title: "What I have to do" }
    render() {
      return (
        <View style={{ flex: 1 }}>
          <Text style={{ marginBottom: 3 }}>Complete all steps in Facebooks "The Basics" tutorial (see below)</Text>
          <Text style={{ marginBottom: 3 }}>For each of the 11 steps, add a corresponding Component in this project + the necessecary changes to navigate into it.
          (inspired of how you navigated into this)
        </Text>
          <WebView
            source={{ uri: "https://facebook.github.io/react-native/docs/tutorial.html" }}
            style={{ marginTop: 20, flex: 1 }}
          />
        </View>
      );
    }
  }