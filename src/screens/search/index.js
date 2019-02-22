import React, { Component } from "react"
import { View, Text } from "react-native"
import HeaderLeft from "@component/header/headerLeft"
import SearchTab from "@component/serchTab"
import { ScrollView } from "react-native-gesture-handler";

export default class SearchScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: "Search",
        headerLeft: <HeaderLeft name="menu" color={"#000"} />
    });
    state = {
        activeIndex: -1,
        data : [
            {
                id:0,
                imageUri:"https://wallpaperfx.com/uploads/wallpapers/2011/06/13/6093/preview_superb-spring-sunset.jpeg",
                title:"For you",
            },
            {   
                id:1,
                imageUri:"https://www.wallpapers.net/web/wallpapers/download-full-hd-colourful-lion-artwork-wallpaper/400x400.jpg",
                title:"Natural",
            },
            {
                id:2,
                imageUri:"http://www.lol-wallpapers.com/wp-content/uploads/2017/04/Ravenborn-Rakan-by-Sayomi96-HD-Wallpaper-Fan-Art-Artwork-League-of-Legends-lol-2.jpg",
                title:"Fashion",
            },
            {   
                id:3,
                imageUri:"https://www.wallpapers.net/web/wallpapers/download-full-hd-colourful-lion-artwork-wallpaper/400x400.jpg",
                title:"Tv",
            },
            {   
                id:4,
                imageUri:"http://www.lol-wallpapers.com/wp-content/uploads/2017/04/Ravenborn-Rakan-by-Sayomi96-HD-Wallpaper-Fan-Art-Artwork-League-of-Legends-lol-2.jpg",
                title:"News",
            }
        ]
    }
    onPress = (index) => {
        this.setState({
            activeIndex: index
        })
    }
    render() {
        const { activeIndex } = this.state;
        return (
            <View>
                <ScrollView
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
            </View>
        );
    }
}