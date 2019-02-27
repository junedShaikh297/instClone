import React, { Component } from 'react';
import { Image, StyleSheet, Text, Animated, Dimensions, TouchableOpacity, FlatList, View, CameraRoll, ImageEditor } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import WithStore from "../../comonStore/withStore"
import TodoContainer from "../../comonStore"
const { width } = Dimensions.get("window");
const imageWidth = width / 4;
const numberOfCol = 4;
class Gallery extends Component {
    constructor() {
        super()
        this.state = {
            assets: [],
            selectedImage: ""
        }
    }
    state = {
        activeImage: null
    }
    componentDidMount() {
        console.log("gallery", this.props);

        this.image = {};
    }
    _onPress = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'DashBoard' })],
        });
        this.props.navigation.dispatch(resetAction);
    }
    _onSelectImage = (image, index) => {
        // await ImageEditor.cropImage(image.node.image.uri, {
        //     offset: { x: 0, y: 0 }, size: { height: 100, width: 100 }, displaySize: { width: 100, height: 100 },
        //     resizeMode: 'contain',
        // }, (success) => {
        //     console.log("success", success);
        let { selectedImage } = this.props.todoContainer
        selectedImage(image.node.image.uri)
        // }, (error) => {
        //     alert(error);
        // })
    }
    render() {

        const { selectedImage } = this.props.todoContainer.state;
        return (
            <View style={styles.container}>
                <View style={{ flex: 0.6 }}>
                    <Image style={{ height: "100%" }} source={{ uri: selectedImage }} resizeMode="contain" />
                </View>
                <View style={{ flex: 0.4, width: "100%" }}>
                    <FlatList
                        data={this.props.data}
                        numColumns={numberOfCol}
                        renderItem={({ item, index }) => {
                            return <TouchableOpacity key={index} onPress={() => { this._onSelectImage(item, index) }} style={{ height: 80, maxWidth: imageWidth, marginTop: 1, marginRight: (index + 1) % 4 === 0 ? 0 : 1, borderColor: "#fff", flex: 1 }}>
                                <Image
                                    ref={ref => this.image = ref}
                                    style={{ height: 80, maxWidth: imageWidth }}
                                    resizeMode={"stretch"}
                                    source={{ uri: item.node.image.uri }}
                                />
                            </TouchableOpacity>
                        }}
                    />
                </View>
            </View>
        );
    }
}
export default WithStore([TodoContainer])(Gallery);

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    imageContent: {
        flex: 1,
    },
    viewImage: {
        height: null,
        width: null,
        position: "absolute",
        top: 0,
        left: 0
    }
});
