import React, { Component } from 'react';
import { Image, StyleSheet, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import NavigationService from '../../navigation/navigationServices';
import CustomIcon from '@component/svgicon';
export default class Drawer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.95 }}>
          <View style={{ height: 200, justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ height: 120, width: 120 }}
              resizeMode="contain"
              source={require("../../assets/target.jpg")}
            />
          </View>
          <TouchableOpacity onPress={() => { NavigationService.navigate("Feed") }} style={{ padding: 8, borderBottomWidth: 1, borderBottomColor: "red" }}>
            <Text style={{ fontSize: 18, fontWeight: "400", }}>Feed</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { NavigationService.navigate("Profile") }} style={{ padding: 8, borderBottomWidth: 1, borderBottomColor: "red" }}>
            <Text style={{ fontSize: 18, fontWeight: "400", }}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 8, borderBottomWidth: 1, borderBottomColor: "red" }}>
            <Text style={{ fontSize: 18, fontWeight: "400", }}>Setting</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 8, borderBottomWidth: 1, borderBottomColor: "red" }}>
            <Text style={{ fontSize: 18, fontWeight: "400", }}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.01, paddingHorizontal: 8 }}>
          <Text>Version 1.0.1</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
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
