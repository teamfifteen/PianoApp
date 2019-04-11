import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet,TextInput,Button } from 'react-native';
import MapView from 'react-native-maps';
import {Permissions} from 'expo';

export default class MapComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            region:{
                latitude:0,
                latitudeDelta:0,
                longitude:0,
                longitudeDelta:0,
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

    fetchTodos(){
        const tempmarker =[];
        let v = 0;
        fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=piano+store&location='+this.state.region.latitude+','+this.state.region.longitude+'&radius=1500&key=AIzaSyAtQ-MeigubB1_OqzVpz-5HEvSytmjePcs')
            .then((response) => response.json())
            .then((response) => {
                while (v<20){
                    tempmarker.push({key:[v],title:response.results[v].formatted_address,coordinates: {latitude: response.results[v].geometry.location.lat,longitude: response.results[v].geometry.location.lng}});
                    v++;
                };
                this.setState({
                    markers:tempmarker
                });
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
                <View style={styles.search}>
                    <TextInput  placeholder = 'Type your Location'
                                returnKeyLabel = {"next"}
                                onChangeText={(address) => this.setState({location:address})}
                    />
                </View>
                <View style = {styles.submit}>
                    <Button title = 'Enter Your Location And Find The Piano Store Near You!' onPress={()=> this.submit()}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
        height: 500,
    },
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    search:{
        top:550,
        position:'absolute',
    },
    submit:{
        top:580,
        position:'absolute',
    }
})