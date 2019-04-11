import React from 'react';
import { ScreenOrientation } from 'expo';

import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';

import Piano from './Piano';
var WindowSizeX = Dimensions.get('window').width;
var WindowSizeY = Dimensions.get('window').height;

export default class PianoPage extends React.Component {
  constructor(props) {
    super(props);

    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../img/background.png')} style={styles.backgroundImage}>
          <Piano>

          </Piano>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89cff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch', // use stretch to match the container windowsizing
    justifyContent: 'center',
    width: WindowSizeY,
    height: WindowSizeX,
  },
});
