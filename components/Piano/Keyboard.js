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

        const soundObject = new Audio.Sound();
        try {
            await soundObject.loadAsync(require('../../assets/audio/piano-A.wav'));
            await soundObject.playAsync();
            // Your sound is playing!
        } catch (error) {
            console.log(error);
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
