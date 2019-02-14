import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class DashBoard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>DashBoard</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
