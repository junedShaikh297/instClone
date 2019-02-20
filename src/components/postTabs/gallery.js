import React, { Component } from 'react';
import { Image, StyleSheet, Text, Dimensions, TouchableOpacity, FlatList, View, CameraRoll } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
const { width } = Dimensions.get("window");
const imageWidth = width / 4;
const numberOfCol = 4;
export default class Gallery extends Component {
    constructor() {
        super()
        this.state = {
            assets: [],
            selectedImage: "s"
        }
    }
    componentDidMount() {
        CameraRoll.getPhotos({ first: 35, assetType: "All" }).then((data) => {
            console.log(data)
            this.setState({
                assets: data.edges
            })
        });
    }
    _onPress = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'DashBoard' })],
        });
        this.props.navigation.dispatch(resetAction);
    }
    _onSelectImage = (image) => {
        this.setState({
            selectedImage: image.node.image.uri
        })
    }
    render() {
        const { assets, selectedImage } = this.state;
        return (
            <View style={styles.container}>
                <View style={{ flex: 0.6 }}>
                    <Image style={{ height:"100%"}} source={{ uri: selectedImage }} resizeMode="contain" />
                </View>
                <View style={{ flex: 0.4, width: "100%" }}>
                    <FlatList
                        data={assets}
                        numColumns={numberOfCol}
                        renderItem={({ item, index }) => {
                            return <TouchableOpacity onPress={() => { this._onSelectImage(item) }} style={{ height: 80, maxWidth: imageWidth, marginTop: 1, marginRight: (index + 1) % 4 === 0 ? 0 : 1, borderColor: "#fff", flex: 1 }}>
                                <Image
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
});
