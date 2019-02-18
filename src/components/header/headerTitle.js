import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import CustomIcon from '@component/svgicon';

export default class HeaderTitle extends Component {
    _onPress = () => {
        alert("right")
    }
    render() {
        let { name } = this.props
        return (
            <View style={styles.container}>
                {/* <TouchableOpacity onPress={() => this._onPress()}> */}
                    <Text>{name}</Text>
                {/* </TouchableOpacity> */}
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
