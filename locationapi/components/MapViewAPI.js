import React from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { MapView } from 'expo';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 55.771367,
                    longitude: 12.514266,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                <MapView.Marker 
                    coordinate={{
                        latitude: 55.771367,
                        longitude: 12.514266,
                    }}>
                    <View style={styles.radius}>
                        <View style={styles.marker}/>                 
                    </View>
                </MapView.Marker>
            </MapView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    radius:{
        height:50,
        width: 50,
        borderRadius: 50 / 2 ,
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 122, 255, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(0,122,255, 0.3)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    marker:{
        height: 20,
        width:20,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius : 20 /2,
        overflow: 'hidden',
        backgroundColor: '#007AFF'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
      },
      map: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute'
      }
  })