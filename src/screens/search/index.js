import React, { Component } from "react"
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, FlatList, Animated } from "react-native"
import HeaderLeft from "@component/header/headerLeft"
import SearchTab from "@component/serchTab"
import { ScrollView } from "react-native-gesture-handler";
import WithStore from "../../comonStore/withStore"
import TodoContainer from '../../comonStore'

const { width, height } = Dimensions.get("window");
const imageWidth = width / 4;
const numberOfCol = 4;
class SearchScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: "Search",
        headerLeft: <HeaderLeft name="menu" color={"#000"} />
    });
    state = {
        activeIndex: -1,
        data: [
            {
                id: 0,
                imageUri: "https://wallpaperfx.com/uploads/wallpapers/2011/06/13/6093/preview_superb-spring-sunset.jpeg",
                title: "For you",
            },
            {
                id: 1,
                imageUri: "https://www.wallpapers.net/web/wallpapers/download-full-hd-colourful-lion-artwork-wallpaper/400x400.jpg",
                title: "Natural",
            },
            {
                id: 2,
                imageUri: "http://www.lol-wallpapers.com/wp-content/uploads/2017/04/Ravenborn-Rakan-by-Sayomi96-HD-Wallpaper-Fan-Art-Artwork-League-of-Legends-lol-2.jpg",
                title: "Fashion",
            },
            {
                id: 3,
                imageUri: "https://www.wallpapers.net/web/wallpapers/download-full-hd-colourful-lion-artwork-wallpaper/400x400.jpg",
                title: "Tv",
            },
            {
                id: 4,
                imageUri: "http://www.lol-wallpapers.com/wp-content/uploads/2017/04/Ravenborn-Rakan-by-Sayomi96-HD-Wallpaper-Fan-Art-Artwork-League-of-Legends-lol-2.jpg",
                title: "News",
            }
        ],
        size: new Animated.ValueXY(),
        position: new Animated.ValueXY(),
        animation: new Animated.Value(0),
    }
    onPress = (index) => {
        this.setState({
            activeIndex: index
        })
    }
    componentDidMount() {
        // this.imageView = {};
    }
    _onSelectImage = (item, index) => {
        console.log(item, index);
        setTimeout(() => {
            this.imageView.measure((x, y, width, height, pageX, pageY) => {
                console.log("measure", x, y, width, height, pageX, pageY);

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
        }, 100)


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
        const { activeIndex } = this.state;
        const activeImageStyle = {
            width: this.state.size.x,
            height: this.state.size.y,
            top: this.state.position.y,
            left: this.state.position.x
        }
        const activeIndexStyle = {
            opacity: this.state.activeImage ? 0 : 1
        }
        let { photos } = this.props.todoContainer.state;
        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    style={{ height: 150 ,marginBottom:20}}
                    horizontal={true}
                    style={{ marginTop: 10 }}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        this.state.data.map((item, index) => (
                            <SearchTab data={item} index={index} activeIndex={activeIndex} onPress={this.onPress} />
                        ))
                    }

                </ScrollView>
                <FlatList
                    style={{ height: height - 210, }}
                    data={photos}
                    numColumns={numberOfCol}
                    keyExtractor={(item) => item.node.image}
                    renderItem={({ item, index }) => {
                        const style = index === this.state.activeIndex ? activeIndexStyle : undefined;
                        return <TouchableOpacity onPressIn={() => { this._onSelectImage(item, index) }} key={index} onPressOut={() => { this.handleClose() }} style={{ height: 80, maxWidth: imageWidth, marginTop: 1, marginRight: (index + 1) % 4 === 0 ? 0 : 1, borderColor: "#fff", flex: 1 }}>
                            <Image
                                ref={ref => this.imageView = ref}
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

export default WithStore([TodoContainer])(SearchScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContent: {
        flex: 1,
        borderWidth: 0,
        borderColor: "pink"
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
