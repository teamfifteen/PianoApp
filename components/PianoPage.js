import React from 'react';
import { ScreenOrientation } from 'expo';

import { StyleSheet, Text, View } from 'react-native';

import Piano from './Piano';

export default class PianoPage extends React.Component {
  constructor(props) {
    super(props);

    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
  }

  render() {
    return (
      <View style={styles.container}>
        <Piano>

        </Piano>
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
});
