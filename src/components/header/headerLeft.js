import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import CustomIcon from '@component/svgicon';

export default class HeaderLeft extends Component {
    _onPress = () => {
        alert("called")
    }
    render() {
        let { name,color } = this.props
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this._onPress()}>
                    <CustomIcon name={name} height={18} width={18} color={color} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft:10,
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
