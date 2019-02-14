import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Details extends Component {
    constructor(){
        super();
        this.state={
            
        }
    }
    componentDidMount(){
        console.log("Details",this.props);
        
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate("DetailFeed")}>
                    <Text>Details</Text>
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
