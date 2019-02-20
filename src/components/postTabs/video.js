import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
export default class Video extends Component {
    _onPress = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'DashBoard' })],
        });
        this.props.navigation.dispatch(resetAction);
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this._onPress()}>
                    <Text>Video</Text>
                </TouchableOpacity>
            </View>
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
