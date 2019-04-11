import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Button, Animated, TouchableOpacity } from 'react-native';
var WindowSizeX = Dimensions.get('window').width;
var WindowSizeY = Dimensions.get('window').height;
export default class HomePage extends React.Component {


  componentWillMount = () => {
      this.animatedWidth = new Animated.Value(5000)
      this.animatedHeight = new Animated.Value(5000)
      this.yeet = 420
  }

   animatedBox = () => {
      Animated.timing(this.animatedWidth, {
         toValue: 1,
         duration: 500,
      }).start()
      Animated.timing(this.animatedHeight, {
         toValue: 1,
         duration: 500,
      }).start()
   }

  render() {
    const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight}
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../img/background.png')} style={styles.backgroundImage}>
          <View style={{bottom: 200, left: 150, right: 0, width: WindowSizeX, height: WindowSizeY}}>
            <View style={styles.TextContainer}>
              <Text style={{fontWeight: 'bold', fontSize: 42, color: 'blue', fontStyle: 'italic', textShadowOffset: {width: 2,height: 2}, textShadowColor: 'red',}}>Please, Play That song again!</Text>
              <Text style={{fontWeight: 'bold', fontSize: 42, color: 'red', fontStyle: 'italic', textShadowOffset: {width: 2,height: 2}, textShadowColor: 'blue',}}>Mr.
                <Text style={{fontSize: 48, color: '#00FFFF', textShadowOffset: {width: 4,height: 4}, textShadowColor: 'purple', }}>Piano man!</Text> 
              </Text>
                <View style={styles.ButtonContainer1}>
                  <View style={styles.ButtonSize}>
                    <Button
                    onPress={()=>this.props.navigation.navigate('Piano')}
                    title="Go to Piano"
                    color='#DCE2FA'
                    />
                  </View>
                </View>
                <View style={styles.ButtonContainer2}>
                  <View style={styles.ButtonSize}>
                    <Button
                      onPress={()=>this.props.navigation.navigate('Map')}
                      title="Go to Map"
                      color='#DCE2FA'
                    />
                  </View>
                </View>
              <TouchableOpacity style = {styles.animationContainer1} onPress = {this.animatedBox}>
                <Animated.View style = {[styles.Square, animatedStyle]}>
                {/*
                  <View style={styles.TextContainer2}>
                    <Text style={{fontWeight: 'bold', fontSize: 32, color: 'yellow', fontStyle: 'italic', textShadowOffset: {width: 2,height: 2}, textShadowColor: 'blue',}}>Tap Screen!</Text>
                  </View>
                */}
                </Animated.View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WindowSizeY,
    height: WindowSizeX,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch', // use stretch to match the container windowsizing
    transform: [{ rotate: "-90deg"}],
    justifyContent: 'center',
  },
  boxContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  TextContainer: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
    TextContainer2: {
    flex: 3,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 1000,
    left: 1000,
    right: 0,
    bottom: 0,
    zIndex: 999,
  },
  ButtonContainer1: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 240,
    left: 150,
    right: 0,
    bottom: 0,
  },
  ButtonContainer2: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 240,
    left: 0,
    right: 150,
    bottom: 0,
  },
  ButtonSize: {
    width: 75,
    height: 25,
  },
  Square: {
    width: 1000,
    height: 1000,
    //borderRadius: 150,
    backgroundColor: '#DCE2FA',
  },
  animationContainer1: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -1000,
    right: -1000,
  }
});
