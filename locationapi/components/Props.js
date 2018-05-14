import React from 'react';
import { Text, View } from 'react-native';

export default class Props extends React.Component {
    static navigationOptions = { title: "Learn about Props" }
    render() {
      return (
        <View>
          <Text>Props</Text>
        </View>
      )
    }
  }