import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, Dimensions, View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import HeaderLeft from "@component/header/headerLeft"
import HeaderRight from "@component/header/headerRight"
import Gallery from "@component/postTabs/gallery"
import Photo from "@component/postTabs/photo"
import Video from "@component/postTabs/video"
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';


const LazyPlaceholder = ({ route }) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading {route.title}…</Text>
    </View>
);

export default class PhotoPost extends Component {
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
    _renderScene = ({ route }) => {
        if (
            this.state.routes.indexOf(route) !== this.state.index &&
            !this.state.loaded.includes(route.key)
        ) {
            return <LazyPlaceholder route={route} />;
        }

        switch (route.key) {
            case 'first':
                return <Gallery />;
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
