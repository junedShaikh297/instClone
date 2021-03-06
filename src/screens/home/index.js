import React, { Component } from 'react';
import { FlatList, View, Animated, TouchableOpacity, PermissionsAndroid, CameraRoll } from 'react-native';
import { connect } from "react-redux";
import styled from "styled-components/native";

import { commonAction } from "../../Action/action"
import { bindActionCreators } from "redux";
import FeedDetails from "@component/feedDetails";
import CustomIcon from "@component/svgicon";
import NavigationService from '../../navigation/navigationServices';
import Story from "@component/story"
import WithStore from "../../comonStore/withStore"

import TodoContainer from '../../comonStore'
class Feed extends Component {
    constructor() {
        super()
        this.state = {
            imageData: [
                'https://wallpaperfx.com/uploads/wallpapers/2011/06/13/6093/preview_superb-spring-sunset.jpeg',
                'https://www.wallpapers.net/web/wallpapers/download-full-hd-colourful-lion-artwork-wallpaper/400x400.jpg',
                'http://www.lol-wallpapers.com/wp-content/uploads/2017/04/Ravenborn-Rakan-by-Sayomi96-HD-Wallpaper-Fan-Art-Artwork-League-of-Legends-lol-2.jpg',
                'https://www.wallpapers.net/web/wallpapers/download-full-hd-colourful-lion-artwork-wallpaper/400x400.jpg',
                'http://www.lol-wallpapers.com/wp-content/uploads/2017/04/Ravenborn-Rakan-by-Sayomi96-HD-Wallpaper-Fan-Art-Artwork-League-of-Legends-lol-2.jpg'
            ],
            isAllowed: false,
            top: 0,
            imageHeight: 0,
            imageWidth: 0,
            image: null,
            animation: new Animated.Value(1)
        }
        this._scaleImage = new Animated.Value(1)
    }

    async componentDidMount() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                CameraRoll.getPhotos({ first: 30, assetType: "All" }).then((data) => {
                    this.props.todoContainer.handleCameraPhotos(data.edges)
                });
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }

    }

    allowScale = (isAllowed) => {
        if (!isAllowed) {
            Animated.timing(this._scaleImage, {
                toValue: 0,
                duration: 200
            }).start(() => {
                this.setState({
                    isAllowed
                })
            })
        } else {
            this.setState({
                isAllowed
            })
        }
    }

    imageCenter = (width, height, imageCenterLocation, image) => {
        this.setState({
            top: imageCenterLocation - 65 - (height / 2),
            imageHeight: height,
            imageWidth: width,
            image
        })
    }

    scaleValue = (distance) => {
        this._scaleImage.setValue(distance)
    }



    render() {
        const { imageHeight, imageWidth, imageData } = this.state;
        const imageScaleStyle = {
            transform: [
                {
                    scale: this._scaleImage.interpolate({
                        inputRange: [-100, 0, 200],
                        outputRange: [0.5, 1, 2.5],
                        extrapolate: 'clamp'
                    }),
                }
            ],
            position: 'absolute',
            height: imageHeight,
            width: imageWidth,
            // backgroundColor: '#fff'
        }

        const backgroundOpacity = this._scaleImage.interpolate({
            inputRange: [0, 200],
            outputRange: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)'],
            extrapolate: 'clamp'
        })

        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    style={{ flex: 1 }}
                    ListHeaderComponent={() => {
                        return <Story />
                    }}
                    data={imageData}
                    renderItem={({ item }) => {
                        return <FeedDetails
                            data={item}
                            allowScale={this.allowScale}
                            scaleValue={this.scaleValue}
                            imageCenter={this.imageCenter}
                        />
                    }}
                />
                {this.state.isAllowed ?
                    <Animated.View
                        style={[{ position: 'absolute', height: '100%', width: '100%', backgroundColor: backgroundOpacity }]}>
                        <Animated.View style={[{ top: this.state.top }, imageScaleStyle]}>
                            <FeedImage
                                source={{ uri: this.state.image }}
                                resizeMode="cover"
                            />
                        </Animated.View>
                    </Animated.View> : null}
            </View>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return Object.assign(
        { dispatch: dispatch },
        bindActionCreators({
            commonAction
        }, dispatch)
    );
}

const mapStateToProps = state => {
    return {
        data: state.commonReducer.data,
        //   connection : state.userReducer.connection
    };
};

// export default connect(mapStateToProps, mapDispatchToProps)(Feed);
export default WithStore([TodoContainer])(Feed);


const FeedImage = styled.Image`
    height:350px;
    width:100%;
`;