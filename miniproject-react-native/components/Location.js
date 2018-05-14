import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button, Alert, Modal, TouchableHighlight } from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';

import DataStore from './DataStore';

const dataStore = new DataStore();

export default class Gps extends Component {
    constructor(props){
        super(props);
        this.state = {
            mapRegion: { latitude: 55.771367, longitude: 12.514266, latitudeDelta: 0.0422, longitudeDelta: 0.0421 },
            locationResult: null,
            location: {coords: { latitude: 55.771367, longitude: 12.514266}},
            modalVisible: false,
            username: "",
            password: "",
            friends: [],
            isLoggedIn: false
        };
        this.store = dataStore;
        this._submit = this._submit.bind(this);
    }
    

  componentDidMount() {
    this._getLocationAsync();
  }

  // reaload position
  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  // async 
  _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
       location,
     });
   }

   let location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location), location, });
 };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _submit() {
    alert('hej '+ this.state.username+ ' jkjkjk');
    /*
    const username = state.username;
    const password = state.password;
    
    this.store.login(username,password, (data) =>{
        this.setState({ friends:data })
    });*/
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={{ alignSelf: 'stretch', height: 500 }} 
        region={{ latitude: this.state.location.coords.latitude, 
        longitude: this.state.location.coords.longitude, latitudeDelta: 0.0422, longitudeDelta: 0.0421 }}
          //onRegionChange={this._handleMapRegionChange}
>
        <MapView.Marker coordinate={this.state.location.coords} title="My Marker"
        description= {"Lat: " + this.state.location.coords.latitude + 
        " Long:" + this.state.location.coords.longitude} />
        </MapView>

        <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} 
        onRequestClose={() => {  alert('Modal has been closed.'); }}>
            <View style={{marginTop: 22}}>
                <View>

                    <Text>Username</Text>
                    <TextInput style = {styles.input}
                    autoCapitalize="none" 
                    onSubmitEditing={() => this.passwordInput.focus()} 
                    autoCorrect={false} 
                    keyboardType='email-address' 
                    returnKeyType="next" 
                    placeholder='Email or Mobile Num' 
                    placeholderTextColor='rgba(225,225,225,0.7)' />
                    
                    <Text>Password:</Text>
                    <TextInput style = {styles.input}   
                    returnKeyType="go" 
                    ref={(input)=> this.passwordInput = input} 
                    placeholder='Password' 
                    placeholderTextColor='rgba(225,225,225,0.7)' 
                    secureTextEntry />  
                    
                    <TouchableHighlight onPress={() => { this.setModalVisible(!this.state.modalVisible); }}>
                      <Button title="Submit" onPress={this._submit} color="darkviolet" style={styles.button}/>
                    </TouchableHighlight>
                </View>
          </View>
        </Modal>
        
        <TouchableHighlight onPress={() => { this.setModalVisible(true); }} style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
        </TouchableHighlight>
        <Button title="Reload position"  onPress={this._handleMapRegionChange}/>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e'
  },
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#ffc61a'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  },
  input:{
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff'
}
});
