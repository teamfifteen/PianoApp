import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './view/Home';
//import Piano_comp from './view/Piano_comp';
//import List from './view/List';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Piano: {
      screen: Home,
    },
    List: {
      screen: Home,
    }
  },
  {
    initialRouteName: 'Home',
  }
);
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
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

//COLOR SCHEME:
//Title text: #353857
//button background: 
//Piano black keys: #1F1F1F 
//Piano white keys: #F6F6F6
//key spacing: #D9D9D9 