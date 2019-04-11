import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';

import { Audio } from 'expo';

export default class Key extends Component {
    static propTypes = {
        keyType: PropTypes.string.isRequired,
        keyColor: PropTypes.string.isRequired,
        onPressKey: PropTypes.func,
    };

    constructor(props) {
        super(props);


        this.state = { playing: false };
    }

    async componentDidMount() {
    }

    render() {
        return (
            <TouchableNativeFeedback
                onPress={() => this.props.onPressKey(this.props.keyType)}
                underlayColor='#551A8B'
            >
                <View style={[styles.container, { backgroundColor: this.props.keyColor }]}>

                </View>
            </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#000",
        width: 75,
        height: 200
    },

});
