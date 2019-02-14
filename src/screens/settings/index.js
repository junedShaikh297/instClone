import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Setting extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Setting",
            headerLeft: (
                <TouchableOpacity onPress={() => { navigation.openDrawer() }}><Text style={{ paddingLeft: 20, fontSize: 30 }}>=</Text></TouchableOpacity>
            )
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("DashBoard")}>
                    <Text>Setting</Text>
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
