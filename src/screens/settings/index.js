import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View, CameraRoll } from 'react-native';
import WithStore from "../../comonStore/withStore"

import TodoContainer from '../../comonStore'
class Setting extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Setting",
            headerLeft: (
                <TouchableOpacity onPress={() => { navigation.openDrawer() }}><Text style={{ paddingLeft: 20, fontSize: 30 }}>=</Text></TouchableOpacity>
            )
        }
    }
    componentDidMount() {
        console.log("props", this.props);
        CameraRoll.getPhotos({ first: 30, assetType: "All" }).then((data) => {
            this.props.todoContainer.handleCameraPhotos(data.edges)
        });
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

export default WithStore([TodoContainer])(Setting);

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
