import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { RNCamera } from 'react-native-camera';
import HeaderLeft from "@component/header/headerLeft"
import HeaderRight from "@component/header/headerRight"
import CustomIcon from '@component/svgicon';

export default class SnapScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTransparent: true,
        headerLeft: <HeaderLeft name="settings" />,
        headerRight: <HeaderRight name="right_arrow" navigation={navigation} />
    });

    constructor() {
        super();
        this.state = {
            cameraView: false,
            capture: false,
            animation: new Animated.Value(1)
        }
    }

    _onPress = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'DashBoard' })],
        });
        this.props.navigation.dispatch(resetAction);
    }

    takePicture = async () => {
        Animated.timing(this.state.animation, {
            toValue: 1.5,
            duration: 150
        }).start(async () => {
            Animated.timing(this.state.animation, {
                toValue: 1,
                duration: 150
            }).start();
            if (this.camera) {
                const options = { quality: 0.5, base64: true, pauseAfterCapture: true };
                const data = await this.camera.takePictureAsync(options);
                console.log(data.uri);
                this.setState({
                    capture: true
                })
            }
        });
    };

    _cameraSwitch = () => {
        this.setState({
            cameraView: !this.state.cameraView
        })
    }

    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 1.5,
            duration: 500
        }).start(() => {
            Animated.timing(this.state.animation, {
                toValue: 1,
                duration: 500
            }).start();
        });
    }

    render() {
        const { cameraView, capture } = this.state
        const animatedStyle = {
            transform: [
                { scale: this.state.animation }
            ]
        }
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
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                    onGoogleVisionBarcodesDetected={({ barcodes }) => {
                        console.log(barcodes);
                    }}
                />
                {/* {
                    !capture ? */}
                <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: "transparent" }}>
                    <TouchableOpacity onPress={this.takePicture.bind(this)} style={[styles.capture, { backgroundColor: "transparent" }]}>
                        <CustomIcon name={"pictures"} height={22} width={22} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={this.takePicture}>
                        <Animated.View style={[styles.capture, animatedStyle]} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this._cameraSwitch() }} style={[styles.capture, { backgroundColor: "transparent" }]}>
                        <CustomIcon name={"sync"} height={25} width={25} />
                    </TouchableOpacity>
                </View>
                {/* //         : <View style={styles.sendPic}>
                //             <TouchableOpacity onPress={() => { alert(0) }} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, paddingVertical: 8, width: 90, backgroundColor: "#fff", borderRadius: 50 }}>
                //                 <Text style={{ color: "#000", fontSize: 16 }}>Send</Text>
                //                 <CustomIcon name={"right_arrow"} height={25} width={20} fill={"#000"} />
                //             </TouchableOpacity>
                //         </View>
                // } */}
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        backgroundColor: '#fff',
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