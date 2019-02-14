import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MainDrawer from "../navigation/mainDrawer"
export default class MainContainer extends Component {
    render() {
        return (
            <MainDrawer />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
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
