import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { NativeRouter, Route, Link } from 'react-router-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <TextInput style={styles.input} placeholder="Username"/>
        <TextInput style={styles.input} placeholder="Password"/>
        <TouchableOpacity style={styles.submit}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },

  input: {
    borderWidth: 1,
    borderRadius: 12,
    width: 300,
    margin: 8,
    padding: 4
  },

  submit: {
    margin: 15,
    padding: 10,
    height: 40,
    backgroundColor: '#DDDDDD',
  },
  
});
