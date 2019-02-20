import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { RNCamera } from 'react-native-camera';
import CustomIcon from '@component/svgicon';

const { height } = Dimensions.get("window");
export default class Photo extends Component {
    constructor() {
        super();
        this.state = {
            cameraView: false,
            isDelete: false
        }
    }
    _onPress = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'DashBoard' })],
        });
        this.props.navigation.dispatch(resetAction);
    }
    takePicture = async function () {
        if (this.camera) {
            const options = { quality: 0.5, base64: true, pauseAfterCapture: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
            this.setState({
                capture: true
            })
        }
    };

    _cameraSwitch = () => {
        this.setState({
            cameraView: !this.state.cameraView
        })
    }

    onLongPress = () => {
        this.setState({
            isDelete: true
        }, () => { this.props.onLongPressCamera(true) })
    }

    onDelete = () => {
        this.setState({
            isDelete: false
        }, () => { this.props.onLongPressCamera(false) })
    }

    render() {
        const { cameraView,isDelete } = this.state
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    pauseAfterCapture={true}
                    type={!cameraView ? RNCamera.Constants.Type.back : RNCamera.Constants.Type.front}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    onGoogleVisionBarcodesDetected={({ barcodes }) => {
                        console.log(barcodes);
                    }}
                />

                <View style={{ justifyContent: 'center', alignItems: "center", backgroundColor: "#fff" }}>
                    <TouchableOpacity onLongPress={() => { this.onLongPress() }} onPress={this.takePicture.bind(this)} style={styles.capture} />
                    {isDelete ? <TouchableOpacity onPress={() => { this.onDelete }}><Text>Delete</Text></TouchableOpacity> : null}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    preview: {
        flex: 1,
        // justifyContent: 'flex-end',
        // alignItems: 'center',
        marginBottom: 20
    },
    capture: {
        backgroundColor: '#000',
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
    },
    sendPic: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: "center",
        marginBottom: 25
    }
});
