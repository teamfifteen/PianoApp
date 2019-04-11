import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TextInput, Button, ImageBackground, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import {Permissions} from 'expo';

var WindowSizeX = Dimensions.get('window').width;
var WindowSizeY = Dimensions.get('window').height;
export default class MapPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            region:{
                latitude:37.78825,
                latitudeDelta:-122.4324,
                longitude:0.0922,
                longitudeDelta:0.0421,
            },
            locationPermission:'unknown',
            position:'unknown', 
            location:'',
            markers:[]      
        };
        this.onRegionChange = this.onRegionChange.bind(this);
    }

    async getLocationAsync() {
        const { Location, Permissions } = Expo;
          // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
        const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
          return Location.getCurrentPositionAsync({enableHighAccuracy: true});
        } else {
          throw new Error('Location permission not granted');
        }
    }

    componentDidMount(){
        this.getLocationAsync();
        navigator.geolocation.getCurrentPosition((position)=>{
            let coordinates =  position.coords.latitude +', '+position.coords.longitude;
            this.setState({
                region:{
                    latitude:position.coords.latitude,
                    longitude:position.coords.longitude,
                    longitudeDelta:0.08,
                    latitudeDelta:0.08,
                }
            })
        },
        (error) => alert(JSON.stringify(error)));
    }

  setLocation(){
        fetch('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAtQ-MeigubB1_OqzVpz-5HEvSytmjePcs&address='+this.state.location)
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    region:{
                        latitude:response.results[0].geometry.location.lat,
                        longitude:response.results[0].geometry.location.lng,
                        longitudeDelta:0.08,
                        latitudeDelta:0.08,
                    }
                });
            })  
    }

    fetchTodos() {
        const tempmarker = [];
        let v = 0;
        fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=piano+store&location=' + this.state.region.latitude + ',' + this.state.region.longitude + '&radius=1500&key=AIzaSyAtQ-MeigubB1_OqzVpz-5HEvSytmjePcs')
            .then((response) => response.json())
            .then((response) => {
                while (v < 20) {
                    tempmarker.push({ key: [v], title: response.results[v].formatted_address, coordinates: { latitude: response.results[v].geometry.location.lat, longitude: response.results[v].geometry.location.lng } });
                    v++;
                };
       //     this.setState({
       //         markers:tempmarker
       //     });
       //     this.setState({
       //         region:{
       //             latitude:response.results[0].geometry.location.lat,
       //             longitude:response.results[0].geometry.location.lng,
       //             longitudeDelta:0.22,
       //             latitudeDelta:0.22,
       //         }
       //     });
       // })
       this.setState({ markers: tempmarker });
       console.log(this.state.markers);
     })
 }

    clear(){
        this.setState({
             region:{
                latitude:0,
                latitudeDelta:0,
                longitude:0,
                longitudeDelta:0,
            },
            markers:[]     
        });
    }

    submit(){
        this.clear();
        this.setLocation();
        this.fetchTodos();  
    }

    onRegionChange(region){
        this.setState({
            region
        }); 
    }

    render() {
        return (
            <View style={styles.container}>
            <ImageBackground source={require('../img/background.png')} style={styles.backgroundImage}>
                
                <View style={styles.container1}>
                    <View style={styles.search}>
                        <TextInput selectionColor="blue" placeholder = 'Type your Location'
                                returnKeyLabel = {"next"}
                                onChangeText={(address) => this.setState({location:address})}
                        />
                    </View>
                    <View style = {styles.submit}>
                        <Button color='#261491' title = 'Find The Piano Store Near Here!' onPress={()=> this.fetchTodos()}/>
                        <Button color='#661491' title = 'Enter A New Location!' onPress={()=> this.submit()}/>
                    </View>
                </View>

                <View style={styles.container1}>
                <MapView
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}
                    style={styles.map}
                    draggable
                >
                    {this.state.markers.map(marker => (
                        <MapView.Marker 
                            key = {marker.key}
                            coordinate={marker.coordinates}
                            title={marker.title}
                        />
                    ))}
                </MapView>
                </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
        height: 500,
    },
    container: {
        flex: 1,
        width: WindowSizeY,
        height: WindowSizeX,
    },
    container1:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    search:{
        top: 90,
        position:'absolute',
        alignItems: 'center',
        width: 165,
        height: 30,
        backgroundColor: '#B4264E',
        left: 100
    },
    submit:{
        top:125,
        position:'absolute',
        //left: 250,
        width: 250,
        padding:15,
        left: 60
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch', // use stretch to match the container windowsizing
        //transform: [{ rotate: "-90deg"}], //
        justifyContent: 'center',
    },
}) 