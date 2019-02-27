import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, PermissionsAndroid, Dimensions, View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import HeaderLeft from "@component/header/headerLeft"
import HeaderRight from "@component/header/headerRight"
import Gallery from "@component/postTabs/gallery"
import Photo from "@component/postTabs/photo"
import Video from "@component/postTabs/video"
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import WithStore from "../../comonStore/withStore"

import TodoContainer from '../../comonStore'

const LazyPlaceholder = ({ route }) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading {route.title}…</Text>
    </View>
);

class PhotoPost extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,
            routes: [
                { key: 'first', title: 'Gallery', index: 0 },
                { key: 'second', title: 'Photo', index: 1 },
                { key: 'third', title: 'Video', index: 2 },
            ],
            loaded: ['first']
        }
    }
    static navigationOptions = ({ navigation }) => ({
        headerTitle: "Post",
        headerLeft: <HeaderLeft name="cancel" color={"#000"} />,
        headerRight: <HeaderRight text="Next" navigation={navigation} />,
        tabBarVisible: false
    });
    _onPress = () => {
        alert(12)
    }
    componentDidMount() {
        try {
            PermissionsAndroid.check("android.permission.CAMERA").then(async (res) => {
                if (!res) {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA,
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        console.log("Permission granted");

                    } else {
                        console.log('"Please enable camera permission in device settings.');
                    }
                }
            })
        } catch (error) {
            alert(error);
        }

    }
    _renderScene = ({ route }) => {
        if (
            this.state.routes.indexOf(route) !== this.state.index &&
            !this.state.loaded.includes(route.key)
        ) {
            return <LazyPlaceholder route={route} />;
        }

        switch (route.key) {
            case 'first':
                return <Gallery data={this.props.todoContainer.state.photos} />;
            case 'second':
                return <Photo onLongPressCamera={this.onLongPressCamera} />;
            case 'third':
                return <Video />;
            default:
                return null;
        }
    };

    _renderLabel = ({ route }) => {
        let { index } = this.state;
        return (
            <Text style={{ paddingBottom: 5, fontFamily: "Asap-Regular", color: route.index === index ? "#000" : "#BDBDBD", fontWeight: route.index === index ? "600" : "normal" }}>{route.title.toUpperCase()}</Text>
        )
    }

    _renderTabBar = props => {
        return (
            <TabBar
                {...props}
                indicatorStyle={{ backgroundColor: "#000" }}
                renderLabel={this._renderLabel}
                style={{ backgroundColor: "#fff", height: 40, borderWidth: 1 }}
            />
        );
    };

    _handleTabChange = (index) => {
        this.setState(state => {
            const { key } = state.routes[index];
            return {
                index,
                // If the route isn't loaded already, add it's key to the loaded list
                // This way routes will be loaded as we navigate to them
                loaded: state.loaded.includes(key)
                    ? state.loaded
                    : [...state.loaded, key],
            };
        });
    }
    onLongPressCamera = (e) => {
        // alert(e)
        this.setState({
            index: e ? 2 : 1
        })
    }
    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={this._renderScene}
                renderTabBar={this._renderTabBar}
                onIndexChange={this._handleTabChange}
                tabBarPosition="bottom"
                initialLayout={{
                    width: Dimensions.get('window').width
                }}
            />
        );
    }
}
export default WithStore([TodoContainer])(PhotoPost)
