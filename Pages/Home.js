import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default ({ history }) => (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Login Successful!</Text>
        <TouchableOpacity style={styles.submit} onPress={() => history.push("/")}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Logout</Text>
        </TouchableOpacity>
      </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  textStyle: {
      color: 'black',
      fontSize: 20
  },

  submit: {
    margin: 15,
    padding: 10,
    height: 40,
    backgroundColor: 'blue',
  },
});
