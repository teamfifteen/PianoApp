import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './components/HomePage'
import MapPage from './components/MapPage'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapPage/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
