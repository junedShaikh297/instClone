import React, { Component } from 'react';
import { StyleSheet, Text, Animated, Dimensions, TouchableOpacity, Image, View, FlatList } from 'react-native';
import CustomIcon from '@component/svgicon';
import FeedDetails from '@component/feedDetails';
import Story from "@component/story"
import NavigationService from '../../navigation/navigationServices';
const { width } = Dimensions.get("window");
const imageWidth = width / 3;
const numberOfCol = 4;
export default class Profile extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Profile",
        }
    }
    state = {
        imageData: [
            'https://wallpaperfx.com/uploads/wallpapers/2011/06/13/6093/preview_superb-spring-sunset.jpeg',
            'https://www.wallpapers.net/web/wallpapers/download-full-hd-colourful-lion-artwork-wallpaper/400x400.jpg',
            'http://www.lol-wallpapers.com/wp-content/uploads/2017/04/Ravenborn-Rakan-by-Sayomi96-HD-Wallpaper-Fan-Art-Artwork-League-of-Legends-lol-2.jpg',
            'https://www.wallpapers.net/web/wallpapers/download-full-hd-colourful-lion-artwork-wallpaper/400x400.jpg',
            'http://www.lol-wallpapers.com/wp-content/uploads/2017/04/Ravenborn-Rakan-by-Sayomi96-HD-Wallpaper-Fan-Art-Artwork-League-of-Legends-lol-2.jpg'
        ], isList: false,
        activeIndex: 0,
        activeImageIndex: null,
        activeImage: null,
        size: new Animated.ValueXY(),
        position: new Animated.ValueXY(),
        animation: new Animated.Value(0),
    }
    componentDidMount() {
        this.image = {};
    }

    onTabPress = (e) => {
        if (e === "Feed") {
            this.setState({
                isList: true,
                activeIndex: 1
            })
        } else if (e === "MyPost") {
            this.setState({
                isList: false,
                activeIndex: 0
            })
        } else {
            this.setState({
                isList: false,
                activeIndex: 2
            })
        }
    }
    _onSelectImage = (image, index) => {
        this.imageView.measure((x, y, height, width, pageX, pageY) => {
            this._x = width;
            this._y = height;
            this._width = pageX;
            this._height = pageY;
            this.state.position.setValue({
                x: pageX,
                y: pageY
            })
            this.state.size.setValue({
                x: width,
                y: height
            })
            this.setState({
                activeImage: image,
                activeImageIndex: index
            }, () => {
                this._viewImage.measure((x, y, width, height, pageX, pageY) => {
                    Animated.parallel([
                        Animated.spring(this.state.position.x, {
                            toValue: 0
                        }),
                        Animated.spring(this.state.position.y, {
                            toValue: 0
                        }),
                        Animated.spring(this.state.size.x, {
                            toValue: width
                        }),
                        Animated.spring(this.state.size.y, {
                            toValue: height
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
        let { isList, imageData, activeIndex } = this.state;
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
                    numColumns={3}
                    data={imageData}
                    ListHeaderComponent={() => {
                        return (
                            <View>
                                <View style={{ flexDirection: "row", height: 130, justifyContent: "center", alignItems: "center" }}>
                                    <View style={{ flex: 0.37, alignItems: "center" }}>
                                        <View
                                            style={{ height: 85, width: 85, marginTop: 7, alignItems: "center", justifyContent: "center" }}>
                                            <Image
                                                style={{ height: 85, width: 85, borderRadius: 85 / 2 }}
                                                resizeMode="contain"
                                                source={require("../../assets/pic.png")} />
                                            <TouchableOpacity onPress={() => { NavigationService.navigate("SnapStory") }} style={{ position: "absolute", bottom: 0, right: -5, height: 20, width: 20, padding: 5, alignItems: "center", justifyContent: "center", borderRadius: 20 / 2, borderWidth: 3, borderColor: "#fff" }}>
                                                <CustomIcon name="plus_round" height={18} width={18} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.63, paddingRight: 10 }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <View style={{ paddingHorizontal: 22, }}>
                                                <Text style={{ fontSize: 18, fontWeight: "500", color: "#000", textAlign: 'center' }}>
                                                    {imageData.length}
                                                </Text>
                                                <Text style={{ color: "#000" }}>
                                                    posts
                                                    </Text>
                                            </View>
                                            <View style={{ paddingHorizontal: 0 }}>
                                                <Text style={{ fontSize: 18, textAlign: "center", fontWeight: "500", color: "#000" }}>
                                                    373
                                                    </Text>
                                                <Text style={{ color: "#000" }}>
                                                    Followers
                                                    </Text>
                                            </View>
                                            <View style={{ paddingHorizontal: 10 }}>
                                                <Text style={{ fontSize: 18, color: "#000", textAlign: "center", fontWeight: "500" }}>
                                                    420
                                                    </Text>
                                                <Text style={{ color: "#000" }}>
                                                    Following
                                                    </Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <TouchableOpacity style={{ borderWidth: 1, borderRadius: 3, borderColor: "#000", padding: 2, alignItems: "center", marginTop: 10, width: "100%" }}>
                                                <Text style={{ fontWeight: "600", color: "#000" }}>Edit Profile</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ height: 68, paddingLeft: 20 }}>
                                    <Text style={{ fontSize: 16, fontWeight: "600" }}>Shaikh Juned</Text>
                                    <Text>New user</Text>
                                    <Text>from:-india</Text>
                                </View>
                                <View style={{ height: 80, paddingTop: 5, paddingLeft: 15, }}>
                                    <Story />
                                </View>
                                <View style={{ height: 48, borderWidth: 0, borderColor: "blue", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <TouchableOpacity onPress={() => { this.onTabPress("MyPost") }} style={{ flex: 1 / 3, alignItems: "center" }}><CustomIcon name={"gallery"} height={22} width={22} fill={activeIndex === 0 ? "#21A7F9" : "#c9c9c9"} /></TouchableOpacity>
                                    <TouchableOpacity onPress={() => { this.onTabPress("Feed") }} style={{ flex: 1 / 3, alignItems: "center" }}><CustomIcon name={"post"} height={22} width={22} fill={activeIndex === 1 ? "#21A7F9" : "#c9c9c9"} /></TouchableOpacity>
                                    <TouchableOpacity onPress={() => { this.onTabPress("TagPost") }} style={{ flex: 1 / 3, alignItems: "center" }}><CustomIcon name={"tag_post"} height={22} width={22} fill={activeIndex === 2 ? "#21A7F9" : "#c9c9c9"} /></TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                    renderItem={({ item, index }) => {
                        const style = index === this.state.activeImageIndex ? activeIndexStyle : undefined;
                        return !isList ? <TouchableOpacity key={index} style={{ height: 120, flex: 1 / 3, margin: 1 }}
                            activeOpacity={0.8}
                            onPressIn={() => {
                                this._onSelectImage(item, index)
                            }}
                            onPressOut={() => {
                                this.handleClose()
                            }}
                        >
                            <Image
                                ref={ref => this.imageView = ref}
                                source={{ uri: item }}
                                style={[{ height: 120, width: imageWidth }, style]}
                                resizeMode="cover" />
                        </TouchableOpacity>
                            : <FeedDetails data={item} />
                    }}
                />
                <View style={[StyleSheet.absoluteFill, { backgroundColor: this.state.activeImage ? "rgba(0, 0, 0,0.5)" : "transparent" }]}
                    pointerEvents={this.state.activeImage ? "auto" : "none"}
                >
                    <View style={styles.imageContent}
                        ref={ref => this._viewImage = ref}
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
    viewImage: {
        height: null,
        width: null,
        position: "absolute",
        top: 0,
        left: 0,
        // bottom: 0, right: 0, margin: "auto"
    },
    imageContent: {
        flex: 1,
        borderWidth: 0,
        borderColor: "pink"
    },
});
