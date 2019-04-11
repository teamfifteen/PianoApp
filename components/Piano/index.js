import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, StatusBar } from 'react-native';
import { Audio, Video } from 'expo';

import Keyboard from './Keyboard';

export default class Piano extends Component {
    constructor(props) {
        super(props);

        StatusBar.setHidden(true);
    }

    render() {
        return (
            <View style={styles.container} >
                <Keyboard>

                </Keyboard>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 610,
        height: 205
    },
});
