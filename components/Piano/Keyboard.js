import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

import { Audio } from 'expo';

import Key from "./Key";

export default class Keyboard extends Component {
    constructor(props) {
        super(props);
    }

    _onPressKey = async (key) => {
       console.log("Pressed key: " + key)

       switch(key) {
           case "A": {
               const soundObject = new Audio.Sound();
               await soundObject.loadAsync(require('../../assets/audio/piano-A.wav'));
               await soundObject.playAsync()
           }
           break;
           case "B": {
                   const soundObject = new Audio.Sound();
                   await soundObject.loadAsync(require('../../assets/audio/piano-B.wav'));
                   await soundObject.playAsync()
           }
           break;
           case "C": {
                   const soundObject = new Audio.Sound();
                   await soundObject.loadAsync(require('../../assets/audio/piano-C.wav'));
                   await soundObject.playAsync()
           }
           break;
           case "D": {
                   const soundObject = new Audio.Sound();
                   await soundObject.loadAsync(require('../../assets/audio/piano-D.wav'));
                   await soundObject.playAsync()
           }
           break;
           case "E": {
                   const soundObject = new Audio.Sound();
                   await soundObject.loadAsync(require('../../assets/audio/piano-E.wav'));
                   await soundObject.playAsync()            }
           break;
           case "F": {
                   const soundObject = new Audio.Sound();
                   await soundObject.loadAsync(require('../../assets/audio/piano-F.wav'));
                   await soundObject.playAsync()            }
           break;
           case "G": {
                   const soundObject = new Audio.Sound();
                   await soundObject.loadAsync(require('../../assets/audio/piano-G.wav'));
                   await soundObject.playAsync()            }
           break;
       }
   }


    render() {
        return (
            <View style={styles.container}>
                <Grid>
                    <Col>
                        <Key onPressKey={this._onPressKey} keyType='C' keyColor='#fff'></Key>
                    </Col>
                    <Col>
                        <Key onPressKey={this._onPressKey} keyType='D' keyColor='#fff'></Key>
                    </Col>
                    <Col>
                        <Key onPressKey={this._onPressKey} keyType='E' keyColor='#fff'></Key>
                    </Col>
                    <Col>
                        <Key onPressKey={this._onPressKey} keyType='F' keyColor='#fff'></Key>
                    </Col>
                    <Col>
                        <Key onPressKey={this._onPressKey} keyType='G' keyColor='#fff'></Key>
                    </Col>
                    <Col>
                        <Key onPressKey={this._onPressKey} keyType='A' keyColor='#fff'></Key>
                    </Col>
                    <Col>
                        <Key onPressKey={this._onPressKey} keyType='B' keyColor='#fff'></Key>
                    </Col>
                    <Col>
                        <Key onPressKey={this._onPressKey} keyType='C' keyColor='#fff'></Key>
                    </Col>
                </Grid>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: '#fff',
        justifyContent: 'center',
        width: 610,
        height: 150
    },

});
