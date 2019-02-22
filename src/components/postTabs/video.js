import React, { Component } from 'react';
import { Platform, StyleSheet, FlatList, Dimensions, Text, TouchableWithoutFeedback, Image, Animated, CameraRoll, TouchableOpacity, View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import CustomIcon from "../svgicon";
const { width } = Dimensions.get("window");
const imageWidth = width / 4;
const numberOfCol = 4;
export default class Video extends Component {
    state = {
        assets: [],
        selectedImage: "",
        activeIndex: null,
        activeImage: null,
        size: new Animated.ValueXY(),
        position: new Animated.ValueXY(),
        animation: new Animated.Value(0),
    }
    componentDidMount() {
        this.image = {};
        CameraRoll.getPhotos({ first: 20, assetType: "All" }).then((data) => {
            this.setState({
                assets: data.edges
            })
        });
    }
    _onSelectImage = (item, index) => {
        this.image[index].measure((x, y, width, height, pageX, pageY) => {
            this._x = pageX;
            this._y = pageY;
            this._height = height;
            this._width = width;

            this.state.position.setValue({
                x: pageX,
                y: pageY
            })
            this.state.size.setValue({
                x: width,
                y: height
            })
            this.setState({
                activeImage: item.node.image.uri,
                activeIndex: index
            }, () => {
                this._viewImage.measure((x, y, twidth, theight, pageX, pageY) => {
                    Animated.parallel([
                        Animated.spring(this.state.position.x, {
                            toValue: pageX
                        }),
                        Animated.spring(this.state.position.y, {
                            toValue: 0
                        }),
                        Animated.spring(this.state.size.x, {
                            toValue: twidth
                        }),
                        Animated.spring(this.state.size.y, {
                            toValue: theight
                        }),
                    ]).start();
                })
            })

        })
    }
    handleClose = () => {
        Animated.parallel([
            Animated.timing(this.state.position.x, {
                toValue: this._x,
                duration: 250
            }),
            Animated.timing(this.state.position.y, {
                toValue: this._y,
                duration: 250
            }),
            Animated.timing(this.state.size.x, {
                toValue: this._width,
                duration: 250
            }),
            Animated.timing(this.state.size.y, {
                toValue: this._height,
                duration: 250
            }),
            Animated.timing(this.state.animation, {
                toValue: 0,
                duration: 250
            })
        ]).start(() => {
            this.setState({
                activeImage: null
            })
        });
    }
    render() {
        const { assets } = this.state;
        // const animationContentTranslate = this.state.animation.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: [300, 0]
        // })
        // const animationContentStyle = {
        //     opacity: this.state.animation,
        //     transform: [
        //         {
        //             translateY: animationContentTranslate
        //         }
        //     ]
        // }

        const activeImageStyle = {
            width: this.state.size.x,
            height: this.state.size.y,
            top: this.state.position.y,
            left: this.state.position.x
        }
        const activeIndexStyle = {
            opacity: this.state.activeImage ? 0 : 1
        }
        return (
            <View style={styles.container}>
                <FlatList
                    data={assets}
                    numColumns={numberOfCol}
                    keyExtractor={(item) => item.node.image}
                    renderItem={({ item, index }) => {
                        const style = index === this.state.activeIndex ? activeIndexStyle : undefined;
                        return <TouchableOpacity onPressIn={() => { this._onSelectImage(item, index) }} key={index} onPressOut={() => { this.handleClose() }} style={{ height: 80, maxWidth: imageWidth, marginTop: 1, marginRight: (index + 1) % 4 === 0 ? 0 : 1, borderColor: "#fff", flex: 1 }}>
                            <Image
                                ref={ref => this.image[index] = ref}
                                style={[{ height: 80, maxWidth: imageWidth }, style]}
                                resizeMode={"stretch"}
                                source={{ uri: item.node.image.uri }}
                            />
                        </TouchableOpacity>
                    }}
                />
                <View style={StyleSheet.absoluteFill}
                    pointerEvents={this.state.activeImage ? "auto" : "none"}
                >
                    <View style={styles.imageContent}
                        ref={image => this._viewImage = image}
                    >
                        <Animated.Image
                            key={this.state.activeImage}
                            source={{ uri: this.state.activeImage }}
                            resizeMode="contain"
                            style={[styles.viewImage, activeImageStyle]}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContent: {
        flex: 1,
        borderWidth: 0,
        borderColor: "pink"
        // backgroundColor:"#fff"
    },
    close: {
        position: "absolute", top: 20, right: 20
    },
    viewImage: {
        height: null,
        width: null,
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0, right: 0, margin: "auto"
    }
});
