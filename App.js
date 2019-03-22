import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen'
import PianoScreen from './components/PianoScreen'
import SaveScreen from './components/SaveScreen'

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Piano: {
      screen: PianoScreen
    },
    Save: {
      screen: SaveScreen
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />; 
  }
}
