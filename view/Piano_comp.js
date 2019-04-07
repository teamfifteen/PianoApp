import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Piano, KeyboardShortcuts, MidiNumbers, styles } from 'react-piano';

  const firstNote = MidiNumbers.fromNote('c3');
  const lastNote = MidiNumbers.fromNote('f5');
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

export default class Piano_comp extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = { item: ''	}
	// }
  render() {
    return (
      <View>
      <Button title="View Saved" onPress={() => this.props.navigation.navigate('List')}/>
      <Piano
        noteRange={{ first: firstNote, last: lastNote }}
        playNote={(midiNumber) => {
          // Play a given note - see notes below
        }}
        stopNote={(midiNumber) => {
          // Stop playing a given note - see notes below
        }}
        width={1000}
        keyboardShortcuts={keyboardShortcuts}
        />
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