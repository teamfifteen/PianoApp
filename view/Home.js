import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';

export default class Home extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = { item: ''	}
	// }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={{url:'http://www.photos-public-domain.com/wp-content/uploads/2010/12/electronic_piano_keyboard.jpg'}} style={{width: '100%', height: '100%'}}>
          <View style={styles.TitleBox}>
            <Text style={styles.upperTitle}>Play me a song:</Text>
            <Text style={styles.lowerTitle}>Piano Man!</Text>
          </View>
          <View style={styles.ButtonBox}>
            <Text>it could have a few music notes floating around</Text>
            <Button style={styles.PageButton} title="Piano" onPress={() => this.props.navigation.navigate('Piano')}/>
            <Text></Text>
            <Button style={styles.PageButton} title="View Saved" onPress={() => this.props.navigation.navigate('List')}/>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

//COLOR SCHEME:
//Title text: #353857
//button background: 
//Piano black keys: #1F1F1F 
//Piano white keys: #F6F6F6
//key spacing: #D9D9D9 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upperTitle: {
    color: "#353857",
    fontSize: 32,      
  },
  lowerTitle: {
    color: "#353857",
    fontSize: 40,      
  },
  TitleBox: {
    flex: 2,
    //backgroundColor: '#E6A373',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonBox: {
    flex: 3,
    //backgroundColor: "#E6A373",
    alignItems: 'center',
    justifyContent: 'center',
  },
  PageButton: {
    color: "#79918E",
  }
});