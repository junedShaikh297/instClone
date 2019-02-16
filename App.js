import React, { Component } from 'react';
import { StatusBar, StyleSheet, Image, View } from 'react-native';
// import MainContainer from "./src/navigation/mainContainer"
import MainStack from "./src/navigation/mainStack"
import NavigationService from "./src/navigation/navigationServices"
import { Provider } from "react-redux";
import store from './src/store';
import { PersistGate } from 'redux-persist/integration/react'

class App extends Component {
  render() {
    return (
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <View style={styles.container}>
            <StatusBar
              backgroundColor="rgba(255,255,255,1)"
              barStyle="dark-content"
            />
            <MainStack
              ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
            <View style={{ zIndex: 999, height: "100%", opacity: 0, position: 'absolute', width: "100%" }} pointerEvents="none">
              <Image style={{ height: '100%', width: "100%" }} source={require('./src/assets/comment.jpg')} />
            </View>
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
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
