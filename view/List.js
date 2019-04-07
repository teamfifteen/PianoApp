import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class List extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = { item: ''	}
	// }
  render() {
    return (
      <View>
        <Text>List goes here</Text>
        <Button title="Return to Piano" onPress={() => this.props.navigation.navigate('Piano_comp')}/>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });